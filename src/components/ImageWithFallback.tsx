import React, { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  onError?: () => void
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  onError
}) => {
  const [imageError, setImageError] = useState(false)
  const [retries, setRetries] = useState(0)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const maxRetries = 3

  const handleError = () => {
    if (retries < maxRetries) {
      // Retry with a small delay
      setTimeout(() => {
        setRetries(prev => prev + 1)
        // Force reload by adding a cache-busting parameter
        setCurrentSrc(`${src}?retry=${retries + 1}&t=${Date.now()}`)
        setIsLoading(true)
      }, 1000 * (retries + 1)) // Exponential backoff
    } else {
      setImageError(true)
      setIsLoading(false)
      if (onError) {
        onError()
      }
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // If image has failed after all retries, show placeholder
  if (imageError) {
    return (
      <div className={`${className} bg-[#f5f5f5] flex items-center justify-center`}>
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 text-[#ccc]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-[10px] text-[#999] uppercase tracking-wider">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-[#f5f5f5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#ddd] border-t-black rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  )
}

export default ImageWithFallback

