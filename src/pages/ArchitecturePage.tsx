import React from 'react'
import { Link } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

const heroImage = getR2Url('architecture/landing/HeroSection.JPG')
const marrakechImage = getR2Url('architecture/landing/marrakech.png')
const newyorkImage = getR2Url('architecture/landing/newyorkclub.png')
const puertoImage = getR2Url('architecture/landing/puertoEscondio.png')
const storyImageOne = getR2Url('architecture/landing/1.jpg')
const storyImageTwo = getR2Url('architecture/landing/2.png')
const storyImageThree = getR2Url('architecture/landing/3.jpg')

const introText = `Yedder Architecture Studio creates spaces that honor tradition while embracing innovation. Our work bridges the gap between Moroccan heritage and contemporary design, crafting environments that tell stories and celebrate cultural identity through thoughtful architectural expression.`

const secondaryHeading = 'Design Philosophy'

const secondaryCopy = `Our approach to architecture is rooted in respect for local context, sustainable practices, and the belief that spaces should enhance human experience. Each project is a dialogue between place, culture, and contemporary needs, resulting in architecture that feels both timeless and forward-thinking.`

const ArchitecturePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white mt-0">
      <div className="relative w-full h-[80vh] min-h-[700px] flex items-end justify-center overflow-hidden pb-20">
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <img src={heroImage} alt="Architecture Projects" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-[2] text-center">
          <h1 className="text-xl font-normal tracking-[4px] uppercase text-white m-0 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">DISCOVER OUR PROJECTS</h1>
        </div>
      </div>

      <section className="w-full bg-white py-24">
        <div className="max-w-[1240px] mx-auto flex gap-14 px-16">
          <Link to="/architecture?location=MARRAKECH" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={marrakechImage} alt="Marrakech Projects" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">MARRAKECH</span>
          </Link>

          <Link to="/architecture?location=NEW YORK CLUB" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={newyorkImage} alt="New York Projects" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">NEW YORK</span>
          </Link>

          <Link to="/architecture?location=PUERTO ESCONDIDO" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={puertoImage} alt="Puerto Escondido Projects" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">PUERTO ESCONDIDO</span>
          </Link>
        </div>
      </section>

      <section className="w-full bg-[#f6efe6] px-16 pt-24 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold text-[12px] leading-[20px] tracking-[0.1em] uppercase text-[#050505]">
            {introText}
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-16 py-28">
        <div className="max-w-[1200px] mx-auto flex items-center gap-16">
          <Link to="/architecture/philosophy" className="flex-[3] block overflow-hidden bg-white">
            <img src={storyImageOne} alt="Design Philosophy" className="w-full h-full object-cover" />
          </Link>

          <div className="flex-[2] flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[14px] tracking-[0.2em] uppercase text-[#070707]">{secondaryHeading}</h2>
              <p className="font-light text-[12px] leading-[22px] tracking-[0.1em] uppercase text-[#070707] px-6">
                {secondaryCopy}
              </p>
              <Link to="/architecture/philosophy" className="font-normal text-[11px] tracking-[0.5em] uppercase text-[#070707] underline underline-offset-4">
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <Link to="/architecture/residential" className="flex flex-col items-center gap-3 no-underline">
                <div className="w-[220px] h-[260px] bg-white shadow-sm shadow-[#e8e8e8]/60 overflow-hidden">
                  <img src={storyImageTwo} alt="Residential Design" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#070707]">Residential</span>
              </Link>

              <Link to="/architecture/commercial" className="flex flex-col items-center gap-3 no-underline">
                <div className="w-[220px] h-[260px] bg-white shadow-sm shadow-[#e8e8e8]/60 overflow-hidden">
                  <img src={storyImageThree} alt="Commercial Design" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#070707]">Commercial</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArchitecturePage

