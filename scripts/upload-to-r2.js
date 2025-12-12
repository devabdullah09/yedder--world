/**
 * Upload assets to Cloudflare R2
 * 
 * This script uploads all assets from src/assets/ to Cloudflare R2
 * with the prefix specified by WEBSITE_ID environment variable.
 * 
 * Usage: WEBSITE_ID=website-X npm run upload:assets
 */

import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { readdir, stat, readFile } from 'fs/promises'
import { join, relative, sep } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'assets'
const WEBSITE_ID = process.env.WEBSITE_ID || 'website-2'

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
  console.error('❌ Missing required R2 credentials in .env file')
  console.error('Required: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY')
  process.exit(1)
}

if (!WEBSITE_ID) {
  console.error('❌ Missing WEBSITE_ID environment variable')
  console.error('Usage: WEBSITE_ID=website-X npm run upload:assets')
  process.exit(1)
}

// Initialize S3 client for R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

// Assets directory
const ASSETS_DIR = join(__dirname, '..', 'src', 'assets')

/**
 * Get all files recursively from a directory
 */
async function getAllFiles(dir, fileList = []) {
  const files = await readdir(dir)
  
  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)
    
    if (fileStat.isDirectory()) {
      await getAllFiles(filePath, fileList)
    } else {
      fileList.push(filePath)
    }
  }
  
  return fileList
}

/**
 * Get content type based on file extension
 */
function getContentType(filePath) {
  const ext = filePath.split('.').pop().toLowerCase()
  const contentTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'mp4': 'video/mp4',
    'wmv': 'video/x-ms-wmv',
    'pdf': 'application/pdf',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  }
  return contentTypes[ext] || 'application/octet-stream'
}

/**
 * Upload a file to R2
 */
async function uploadFile(filePath) {
  try {
    const fileContent = await readFile(filePath)
    const relativePath = relative(ASSETS_DIR, filePath)
    const key = `${WEBSITE_ID}/${relativePath.replace(/\\/g, '/')}`
    const contentType = getContentType(filePath)
    
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    })
    
    await s3Client.send(command)
    return { success: true, key }
  } catch (error) {
    return { success: false, error: error.message, filePath }
  }
}

/**
 * Main upload function
 */
async function uploadAssets() {
  console.log(`🚀 Starting upload to R2...`)
  console.log(`📦 Bucket: ${R2_BUCKET_NAME}`)
  console.log(`🌐 Website ID: ${WEBSITE_ID}`)
  console.log(`📁 Assets directory: ${ASSETS_DIR}\n`)
  
  try {
    // Get all files
    const files = await getAllFiles(ASSETS_DIR)
    console.log(`📋 Found ${files.length} files to upload\n`)
    
    let successCount = 0
    let errorCount = 0
    const errors = []
    
    // Upload files in batches
    const batchSize = 10
    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize)
      const results = await Promise.all(batch.map(uploadFile))
      
      for (const result of results) {
        if (result.success) {
          successCount++
          console.log(`✅ Uploaded: ${result.key}`)
        } else {
          errorCount++
          errors.push(result)
          console.error(`❌ Failed: ${result.filePath} - ${result.error}`)
        }
      }
      
      // Progress update
      const progress = Math.round(((i + batch.length) / files.length) * 100)
      console.log(`\n📊 Progress: ${progress}% (${i + batch.length}/${files.length} files)\n`)
    }
    
    console.log('\n' + '='.repeat(50))
    console.log(`✅ Upload complete!`)
    console.log(`   Success: ${successCount} files`)
    if (errorCount > 0) {
      console.log(`   Errors: ${errorCount} files`)
    }
    console.log('='.repeat(50))
    
    if (errors.length > 0) {
      console.log('\n❌ Errors:')
      errors.forEach(err => {
        console.log(`   - ${err.filePath}: ${err.error}`)
      })
    }
    
  } catch (error) {
    console.error('❌ Upload failed:', error)
    process.exit(1)
  }
}

// Run upload
uploadAssets().catch(console.error)

