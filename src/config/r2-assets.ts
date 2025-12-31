/**
 * R2 Assets Configuration
 * 
 * This module provides a function to get R2 URLs for assets.
 * When VITE_USE_R2 is true, it returns R2 URLs.
 * When false, it returns local asset paths for development.
 * 
 * For production (Vercel), ensure these environment variables are set:
 * - VITE_USE_R2=true
 * - VITE_R2_PUBLIC_URL=your-cloudflare-r2-public-url
 * - VITE_WEBSITE_ID=website-2 (or your website ID)
 */

// In production, default to using R2 if URL is provided
const isProduction = import.meta.env.PROD
const USE_R2 = import.meta.env.VITE_USE_R2 === 'true' || (isProduction && !!import.meta.env.VITE_R2_PUBLIC_URL)
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
    // Ensure R2_PUBLIC_URL doesn't end with a slash
    const baseUrl = R2_PUBLIC_URL.endsWith('/') ? R2_PUBLIC_URL.slice(0, -1) : R2_PUBLIC_URL
    // Construct R2 URL: {R2_PUBLIC_URL}/{WEBSITE_ID}/{assetPath}
    return `${baseUrl}/${WEBSITE_ID}/${cleanPath}`
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

