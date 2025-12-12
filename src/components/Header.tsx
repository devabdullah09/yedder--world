import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

const logo = getR2Url('logo/logo.png')

type MenuLink = {
  label: string
  href: string
}

type MenuSection = {
  title: string
  links: MenuLink[]
}

type NavItem = {
  label: string
  path?: string
  menu?: MenuSection[]
}

const megaMenuData: NavItem[] = [
  {
    label: 'ARCHITECTURE',
    path: '/architecture',
    menu: [
      {
        title: 'PROJECTS',
        links: [
          { label: 'MOON GARDEN', href: '/architecture/moon-garden' },
          { label: 'CASA AMARAS', href: '/architecture/casa-amaras' },
          { label: '33', href: '/architecture/33' },
          { label: 'ATLAS ZEYTUN', href: '/architecture/atlas-zeytun' },
          { label: 'WABI SABI', href: '/architecture/wabi-sabi' },
          { label: 'BLACK BOXE', href: '/architecture/black-boxe' },
          { label: 'KASAH', href: '/architecture/kasah' },
          { label: 'VILLA ALI', href: '/architecture/villa-ali' },
          { label: 'AZULIK UH MAY', href: '/architecture/azulik-uh-may' }
        ]
      }
    ]
  },
  {
    label: 'FURNITURE',
    path: '/furniture',
    menu: [
      {
        title: 'SEATING',
        links: [
          { label: 'All Seating', href: '/furniture/seating/all' },
          { label: 'Dining Chairs', href: '/furniture/seating/dining-chairs' },
          { label: 'Lounge Chairs', href: '/furniture/seating/lounge-chairs' },
          { label: 'Sofa', href: '/furniture/seating/sofa' },
          { label: 'Benches', href: '/furniture/seating/benches' },
          { label: 'Stools', href: '/furniture/seating/stools' }
        ]
      },
      {
        title: 'TABLES',
        links: [
          { label: 'All Tables', href: '/furniture/tables/all' },
          { label: 'Side Tables', href: '/furniture/tables/side-tables' },
          { label: 'Coffee Tables', href: '/furniture/tables/coffee-tables' },
          { label: 'Dining Tables', href: '/furniture/tables/dining-tables' },
          { label: 'Desks', href: '/furniture/tables/desks' },
          { label: 'Nightstands', href: '/furniture/tables/nightstands' },
          { label: 'Consoles', href: '/furniture/tables/consoles' }
        ]
      },
      {
        title: 'COLLABORATIONS',
        links: [
          { label: 'All Collaborations', href: '/furniture/collaborations' },
          { label: 'Yedder x Hem', href: '/furniture/collaborations/hem' },
          { label: 'Yedder x Vaarnii', href: '/furniture/collaborations/vaarnii' }
        ]
      }
    ]
  },
  {
    label: 'CLOTHING',
    path: '/clothing',
    menu: [
      {
        title: 'Spring 23',
        links: [
          { label: 'All Clothing', href: '/clothing/spring-23/all-clothing' },
          { label: 'Samira', href: '/clothing/spring-23/samira' },
          { label: 'Ahmar', href: '/clothing/spring-23/ahmar' },
          { label: 'Versace', href: '/clothing/spring-23/versace' },
          { label: 'Mathilde', href: '/clothing/spring-23/mathilde' },
          { label: 'Azram', href: '/clothing/spring-23/azram' },
          { label: 'Limon', href: '/clothing/spring-23/limon' },
          { label: 'Rain', href: '/clothing/spring-23/rain' },
          { label: 'MRK', href: '/clothing/spring-23/mrk' },
          { label: 'Diab', href: '/clothing/spring-23/diab' },
          { label: 'Zayton', href: '/clothing/spring-23/zayton' },
          { label: 'Dounia', href: '/clothing/spring-23/dounia' },
          { label: 'Al Kamar', href: '/clothing/spring-23/al-kamar' },
          { label: 'Anya', href: '/clothing/spring-23/anya' },
          { label: 'Ahmar (Edition II)', href: '/clothing/spring-23/ahmar-ii' },
          { label: 'ISA', href: '/clothing/spring-23/isa' }
        ]
      },
      {
        title: 'Autumn 24',
        links: [
          { label: 'Khmissa', href: '/clothing/autumn-24/khmissa' },
          { label: 'Welleda', href: '/clothing/autumn-24/welleda' },
          { label: 'Yafit', href: '/clothing/autumn-24/yafit' },
          { label: 'Natasha', href: '/clothing/autumn-24/natasha' },
          { label: 'Fayrouz', href: '/clothing/autumn-24/fayrouz' },
          { label: 'Atlas', href: '/clothing/autumn-24/atlas' },
          { label: 'Jabel', href: '/clothing/autumn-24/jabel' },
          { label: 'Mrouzia', href: '/clothing/autumn-24/mrouzia' },
          { label: 'Noha', href: '/clothing/autumn-24/noha' },
          { label: 'Maleek', href: '/clothing/autumn-24/maleek' },
          { label: 'Amazi', href: '/clothing/autumn-24/amazi' },
          { label: 'Oumi', href: '/clothing/autumn-24/oumi' },
          { label: 'Saha', href: '/clothing/autumn-24/saha' }
        ]
      },
      {
        title: 'Winter 25',
        links: [
          { label: 'Cheetah', href: '/clothing/winter-25/cheetah' },
          { label: 'Aitakal', href: '/clothing/winter-25/aitakal' },
          { label: 'Fettah', href: '/clothing/winter-25/fettah' },
          { label: 'Fire', href: '/clothing/winter-25/fire' },
          { label: 'Dior', href: '/clothing/winter-25/dior' },
          { label: 'Safari', href: '/clothing/winter-25/safari' },
          { label: 'Golden', href: '/clothing/winter-25/golden' },
          { label: 'Ariel', href: '/clothing/winter-25/ariel' }
        ]
      }
    ]
  },
  {
    label: 'ABOUT',
    path: '/about'
  },
  {
    label: 'JOURNAL',
    path: '/journal',
    menu: [
      {
        title: 'FEATURES',
        links: [
          { label: "The Magpie's Nest", href: '/journal/magpies-nest' },
          { label: 'Yedder Tapes 07', href: '/journal/tapes-07' },
          { label: 'Walnut & Pears', href: '/journal/walnut-and-pears' }
        ]
      },
      {
        title: 'EDITORIAL',
        links: [
          { label: 'Studio Notes', href: '/journal/studio-notes' },
          { label: 'Meet the Makers', href: '/journal/meet-the-makers' },
          { label: 'Behind the Scenes', href: '/journal/behind-the-scenes' }
        ]
      }
    ]
  }
]

const Header: React.FC = () => {
  
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const isLandingPage = location.pathname === '/'
  const isHeroPage = location.pathname === '/'
  const [isVisible, setIsVisible] = useState(isHeroPage)
  const [isHovered, setIsHovered] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)


  const activeNavItem = useMemo(() => megaMenuData.find((item) => item.label === activeMenu), [activeMenu])

  useEffect(() => {
    if (isHeroPage) {
      setIsVisible(true)
      
      // Track scroll on landing page for transparent/white background
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setHasScrolled(true)
        } else {
          setHasScrolled(false)
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setIsVisible(true)
      } else if (window.scrollY < 50 && !isHovered && !activeMenu) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered, isHeroPage, activeMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const isTransparent = isLandingPage && !isHovered && !activeMenu && !hasScrolled
  const isHeaderVisible = isVisible || isHovered || !!activeMenu

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[1000] border-b-0 transition-all duration-500 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center justify-between py-[25px] px-10 transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-black'}`}>
        <div className="flex items-center gap-5">
          <Link to="/" className="no-underline">
            <img
              src={logo}
              alt="Yedder"
              className={`h-[30px] w-auto object-contain transition-all duration-500 ease-in-out ${
                isTransparent ? 'brightness-0 invert' : 'brightness-100'
              }`}
            />
          </Link>
          <button
            className={`bg-transparent border-none cursor-pointer p-0 text-[28px] font-light leading-none transition-all duration-500 ease-in-out w-[30px] h-[30px] flex items-center justify-center hover:rotate-90 ${
              isTransparent ? 'text-white' : 'text-black'
            }`}
            aria-label="Open menu"
          >
            
          </button>
        </div>

        {!isLandingPage && (
          <nav className="relative flex items-center gap-10">
            {megaMenuData.map((item) => (
              item.menu ? (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.path || '#'}
                    className={`text-[13px] font-normal tracking-[1.5px] uppercase no-underline transition-opacity duration-200 ease-in-out ${
                      activeMenu === item.label ? 'opacity-100 underline decoration-[1px]' : 'hover:opacity-70'
                    } ${isTransparent ? 'text-white' : 'text-black'}`}
                    onClick={() => {
                      setActiveMenu(null)
                     
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <div
                  key={item.label}
                  className="relative flex items-center"
                >
                  <Link
                    to={item.path || '#'}
                    className={`text-[13px] font-normal tracking-[1.5px] uppercase no-underline transition-opacity duration-200 ease-in-out hover:opacity-70 ${
                      isTransparent ? 'text-white' : 'text-black'
                    }`}
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            ))}
          </nav>
        )}

        <div className="flex items-center gap-[30px]">
          
          {['Account', 'Search', 'Shopping cart'].map((label, index) => (
            <button
              key={label}
              className={`bg-transparent border-none cursor-pointer p-[5px] flex items-center justify-center transition-all duration-500 ease-in-out hover:opacity-70 ${
                isTransparent ? 'text-white' : 'text-black'
              }`}
              aria-label={label}
            >
              {index === 0 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="block">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )}
              {index === 1 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="block">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              )}
              {index === 2 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="block">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {activeNavItem?.menu && (
        <div 
          className="absolute left-0 right-0 top-full bg-white border-t border-[#f0f0f0] shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          onMouseEnter={() => setActiveMenu(activeNavItem.label)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-[1180px] mx-auto px-16 py-12 grid gap-12" style={{ gridTemplateColumns: `repeat(${activeNavItem.menu.length}, minmax(0, 1fr))` }}>
            {activeNavItem.menu.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold tracking-[1.5px] uppercase text-[#555] font-['Arial','Helvetica',sans-serif]">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#666] hover:text-black transition-colors duration-200 ease-in-out no-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

