import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

const clothingDoodle = getR2Url('landingpage/doodle-cloth.png')
const clothingReal = getR2Url('landingpage/clothing.jpg')
const furnitureDoodle = getR2Url('landingpage/doodle-studio.png')
const furnitureReal = getR2Url('landingpage/studio.jpg')

const LandingPage: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<'clothing' | 'furniture' | null>(null)

  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Clothing Section */}
      <Link 
        to="/clothing/intro"
        className="group relative flex-1 h-1/2 md:h-full flex items-end justify-center pb-12 md:pb-24 cursor-pointer overflow-hidden no-underline"
        onMouseEnter={() => setHoveredSection('clothing')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        {/* Real Image - shown when hovering furniture (other section) */}
        <div 
          className={`absolute inset-0 bg-[#f5f0e8] transition-opacity duration-700 ease-out ${
            hoveredSection === 'furniture' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={clothingReal} 
            alt="Clothing" 
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Doodle Image - shown initially and when hovering this section */}
        <div 
          className={`absolute inset-0 bg-[#f5f0e8] transition-opacity duration-700 ease-out ${
            hoveredSection === 'furniture' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src={clothingDoodle} 
            alt="Clothing Sketch" 
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] uppercase text-white font-normal m-0 font-sans px-4">
            CLOTHING
          </h2>
        </div>
      </Link>

      {/* Architecture & Furniture Section */}
      <Link 
        to="/architecture/intro"
        className="group relative flex-1 h-1/2 md:h-full flex items-end justify-center pb-12 md:pb-24 cursor-pointer overflow-hidden no-underline"
        onMouseEnter={() => setHoveredSection('furniture')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        {/* Doodle Image - shown when hovering this section */}
        <div 
          className={`absolute inset-0 bg-[#e8e8e8] transition-opacity duration-700 ease-out ${
            hoveredSection === 'furniture' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={furnitureDoodle} 
            alt="Furniture Sketch" 
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Real Image - shown initially and when hovering clothing (other section) */}
        <div 
          className={`absolute inset-0 bg-[#e8e8e8] transition-opacity duration-700 ease-out ${
            hoveredSection === 'furniture' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src={furnitureReal} 
            alt="Furniture & Interior Design" 
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#070707] font-normal m-0 font-sans px-4">
            ARCHITECTURE & FURNITURE DESIGN
          </h2>
        </div>
      </Link>
    </div>
  )
}

export default LandingPage

