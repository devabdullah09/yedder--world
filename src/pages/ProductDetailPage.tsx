import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductDescription } from '../data/productDescriptions'
import { getProductImages } from '../utils/productImages'
import { getProductById } from '../data/products'

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Get product data
  const basicProduct = productId ? getProductById(productId) : null
  const productDescription = productId ? getProductDescription(productId) : null
  const images = productId ? getProductImages(productId) : []
  
  // Show message if product not found or if images haven't been added yet
  if (!basicProduct) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-normal tracking-[0.15em] uppercase text-black mb-4">
            Product Not Found
          </h1>
          <Link to="/clothing" className="text-[11px] tracking-[0.2em] uppercase text-[#666] hover:text-black underline">
            Back to Collection
          </Link>
        </div>
      </div>
    )
  }
  
  // If images haven't been added yet, show placeholder message
  if (images.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-[1400px] mx-auto px-10 pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#999]">
            <Link to="/" className="hover:text-black transition-colors">HOME</Link>
            <span>/</span>
            <Link to="/clothing" className="hover:text-black transition-colors">CLOTHING</Link>
            <span>/</span>
            <span className="text-black">{basicProduct.name}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-[600px] px-10">
            <h1 className="text-2xl font-normal tracking-[0.15em] uppercase text-black mb-4">
              {basicProduct.name}
            </h1>
            <p className="text-[13px] leading-[24px] text-[#666] mb-6">
              Images for this product are being added. Please check back soon or contact us for more information about this piece.
            </p>
            <Link to="/clothing" className="text-[11px] tracking-[0.2em] uppercase text-[#666] hover:text-black underline">
              ← Back to Collection
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  const product = {
    ...basicProduct,
    ...productDescription,
    images
  }
  
  if (!product) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-normal tracking-[0.15em] uppercase text-black mb-4">
            Product Not Found
          </h1>
          <Link to="/clothing" className="text-[11px] tracking-[0.2em] uppercase text-[#666] hover:text-black underline">
            Back to Collection
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[#999] flex-wrap">
          <Link to="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/clothing" className="hover:text-black transition-colors">CLOTHING</Link>
          <span>/</span>
          <span className="text-black break-words">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Left Side - Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="w-full aspect-[3/4] bg-[#f5f5f5] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - Image ${selectedImage + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-[#f5f5f5] overflow-hidden cursor-pointer transition-opacity ${
                    selectedImage === index ? 'opacity-100 ring-2 ring-black' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6 sm:space-y-8 pt-0 sm:pt-8">
            {/* Product Name */}
            <div>
              <h1 className="text-[22px] sm:text-[24px] md:text-[28px] font-normal tracking-[0.12em] sm:tracking-[0.15em] uppercase text-black mb-2">
                {product.name}
              </h1>
              <p className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#999]">
                {product.collection}
              </p>
            </div>

            {/* Description */}
            <div className="border-t border-[#e5e5e5] pt-6 sm:pt-8">
              <p className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#666] tracking-[0.02em]">
                {product.description}
              </p>
            </div>

            {/* Details */}
            {product.details && product.details.length > 0 && (
              <div className="border-t border-[#e5e5e5] pt-6 sm:pt-8">
                <h3 className="text-[11px] sm:text-[12px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black font-medium mb-3 sm:mb-4">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-[12px] sm:text-[13px] leading-[20px] sm:leading-[24px] text-[#666] flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact/Inquiry Button */}
            <div className="border-t border-[#e5e5e5] pt-6 sm:pt-8">
              <button className="w-full bg-black text-white text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase py-3 sm:py-4 px-6 sm:px-8 hover:bg-[#333] transition-colors">
                Inquire About This Piece
              </button>
              <p className="text-[10px] sm:text-[11px] text-[#999] text-center mt-3 sm:mt-4 tracking-[0.05em]">
                Each piece is unique. Contact us for availability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Collection Link */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20">
        <Link 
          to="/clothing"
          className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#666] hover:text-black transition-colors flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetailPage

