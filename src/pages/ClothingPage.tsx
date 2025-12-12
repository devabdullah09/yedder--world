import React from 'react'
import { Link } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

const heroImage = getR2Url('clothing/landing/herosection.jpg')
const springImage = getR2Url('clothing/landing/spring.jpg')
const winterImage = getR2Url('clothing/landing/winter.jpg')
const autumnImage = getR2Url('clothing/landing/autumn.png')
const storyImageOne = getR2Url('clothing/landing/1.jpg')
const storyImageTwo = getR2Url('clothing/landing/2.jpg')
const storyImageThree = getR2Url('clothing/landing/3.png')

const introText = `Yedder, our clothing brand, is a symbol of immortality, representing an unbroken spirit and a sense of timeless elegance. What sets us apart is the journey we embark upon across Morocco to rediscover and revive the Kaftan, which has been forgotten from the '60s to the '90s.`

const secondaryHeading = 'Cashmere Ink'

const secondaryCopy = `Timeless wool-cashmere herringbone. Woven in Japan for Toogood in a bespoke charcoal and ink colourway. Available in an elegant new winter coat The Groundsman and Toogood staple Photographer Jacket.`

const ClothingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white mt-0">
      <div className="relative w-full h-[80vh] min-h-[700px] flex items-end justify-center overflow-hidden pb-20">
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <img src={heroImage} alt="Clothing Collection" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-[2] text-center">
          <h1 className="text-xl font-normal tracking-[4px] uppercase text-white m-0 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">DISCOVER COLLECTION 023</h1>
        </div>
      </div>

      <section className="w-full bg-white py-24">
        <div className="max-w-[1240px] mx-auto flex gap-14 px-16">
          <Link to="/clothing?collection=SPRING 23" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={springImage} alt="Spring 23" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">SPRING 23</span>
          </Link>

          <Link to="/clothing?collection=WINTER 24" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={winterImage} alt="Winter 24" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">WINTER 24</span>
          </Link>

          <Link to="/clothing?collection=AUTUMN 25" className="flex-1 flex flex-col items-center gap-6 no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            <div className="w-full h-[620px] overflow-hidden bg-white">
              <img src={autumnImage} alt="Autumn 25" className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-in-out hover:scale-105" />
            </div>
            <span className="text-[12px] tracking-[0.35em] uppercase text-[#070707]">AUTUMN 25</span>
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
          <Link to="/clothing/cashmere-ink" className="flex-[3] block overflow-hidden bg-white">
            <img src={storyImageOne} alt="Cashmere Ink Look" className="w-full h-full object-cover" />
          </Link>

          <div className="flex-[2] flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[14px] tracking-[0.2em] uppercase text-[#070707]">{secondaryHeading}</h2>
              <p className="font-light text-[12px] leading-[22px] tracking-[0.1em] uppercase text-[#070707] px-6">
                {secondaryCopy}
              </p>
              <Link to="/clothing/cashmere-ink" className="font-normal text-[11px] tracking-[0.5em] uppercase text-[#070707] underline underline-offset-4">
                Clean Silhouette
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <Link to="/clothing/shirts" className="flex flex-col items-center gap-3 no-underline">
                <div className="w-[220px] h-[260px] bg-white shadow-sm shadow-[#e8e8e8]/60 overflow-hidden">
                  <img src={storyImageTwo} alt="Shirts" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#070707]">Shirts</span>
              </Link>

              <Link to="/clothing/outerwear" className="flex flex-col items-center gap-3 no-underline">
                <div className="w-[220px] h-[260px] bg-white shadow-sm shadow-[#e8e8e8]/60 overflow-hidden">
                  <img src={storyImageThree} alt="Outerwear" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#070707]">Outerwear</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClothingPage

