/**
 * R2 Assets Configuration
 * 
 * This module provides a function to get R2 URLs for assets.
 * When VITE_USE_R2 is true, it returns R2 URLs.
 * When false, it returns local asset paths for development.
 */

const USE_R2 = import.meta.env.VITE_USE_R2 === 'true'
const R2_PUBLIC_URL = import.meta.env.VITE_R2_PUBLIC_URL || ''
const WEBSITE_ID = import.meta.env.VITE_WEBSITE_ID || 'website-2'

/**
 * Get the R2 URL for an asset
 * 
 * @param assetPath - The path to the asset relative to src/assets/
 *                    Example: 'logo/logo.png' or 'clothing/landing/herosection.jpg'
 * @returns The full R2 URL when VITE_USE_R2 is true, or local asset path when false
 */
export function getR2Url(assetPath: string): string {
  if (USE_R2 && R2_PUBLIC_URL) {
    // Remove leading slash if present
    const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
    // Construct R2 URL: {R2_PUBLIC_URL}/{WEBSITE_ID}/{assetPath}
    return `${R2_PUBLIC_URL}/${WEBSITE_ID}/${cleanPath}`
  }
  
  // For development: return path that will be resolved by Vite
  // Note: In development mode, assets should be imported directly or served from public folder
  // This is a fallback that may not work without proper Vite configuration
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  return `/src/assets/${cleanPath}`
}

/**
 * Get the R2 URL for an asset (alias for getR2Url)
 */
export const getAssetUrl = getR2Url

