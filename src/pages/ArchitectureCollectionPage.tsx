import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'
import ImageWithFallback from '../components/ImageWithFallback'

// Puerto Escondido
const moonGarden1 = getR2Url('architecture/1. Moon Garden - Puerto Escondido/Selection Carré-Pictures/1. VUE SUD.jpg')
const casaAmaras1 = getR2Url('architecture/2. Casa Amaras - Puerto Escondido/Selection - Draws/1. Facade_.jpg')

// Tulum
// Note: 33 - Tulum folder is empty, using placeholder from landing
const tulum33_1 = getR2Url('architecture/landing/1.jpg')

// Marrakech
const atlasZeytun1 = getR2Url('architecture/4. Atlas Zeytun - Marrakech/Pictures/2.jpg')
const wabiSabi1 = getR2Url('architecture/5. Wabi Sabi - Marrakech/Image REAL/1.png')
const kasah1 = getR2Url('architecture/7. Kasah - Marrakech/Image/1.png')
const villaAli1 = getR2Url('architecture/8. Villa Ali - Marrakech/Pictures/1.png')

// New York Club
const blackBoxe1 = getR2Url('architecture/6. Black Boxe - New York club/Image/Bar-enhanced.png')

// Research Thesis
const azulik1 = getR2Url('architecture/9. Azulik Uh May - research thesis/Selection - pictures/Azulik Uh May _ New Definition of Vernacular architecture _ 20191400 english version.jpg')

type ArchitectureProject = {
  id: string
  name: string
  image: string
  location: string
}

const projects: ArchitectureProject[] = [
  // Puerto Escondido
  { id: 'moon-garden', name: 'MOON GARDEN', image: moonGarden1, location: 'Puerto Escondido' },
  { id: 'casa-amaras', name: 'CASA AMARAS', image: casaAmaras1, location: 'Puerto Escondido' },
  
  // Tulum
  { id: '33', name: '33', image: tulum33_1, location: 'Tulum' },
  
  // Marrakech
  { id: 'atlas-zeytun', name: 'ATLAS ZEYTUN', image: atlasZeytun1, location: 'Marrakech' },
  { id: 'wabi-sabi', name: 'WABI SABI', image: wabiSabi1, location: 'Marrakech' },
  { id: 'kasah', name: 'KASAH', image: kasah1, location: 'Marrakech' },
  { id: 'villa-ali', name: 'VILLA ALI', image: villaAli1, location: 'Marrakech' },
  
  // New York Club
  { id: 'black-boxe', name: 'BLACK BOXE', image: blackBoxe1, location: 'New York Club' },
  
  // Research Thesis
  { id: 'azulik-uh-may', name: 'AZULIK UH MAY', image: azulik1, location: 'Research Thesis' },
]

const ArchitectureCollectionPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const locationParam = searchParams.get('location')
  
  const [activeLocation, setActiveLocation] = React.useState<string>(
    locationParam && ['PUERTO ESCONDIDO', 'TULUM', 'MARRAKECH', 'NEW YORK CLUB', 'RESEARCH THESIS'].includes(locationParam)
      ? locationParam
      : 'ALL'
  )
  const [gridView, setGridView] = React.useState<'2-col' | '3-col' | 'list'>('3-col')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortBy, setSortBy] = React.useState<string>('featured')
  const [showSortMenu, setShowSortMenu] = React.useState(false)
  
  const locations = ['ALL', 'PUERTO ESCONDIDO', 'TULUM', 'MARRAKECH', 'NEW YORK CLUB', 'RESEARCH THESIS']
  
  // Update URL when location changes (but not on initial load)
  React.useEffect(() => {
    const currentLocation = searchParams.get('location')
    if (activeLocation === 'ALL' && currentLocation) {
      searchParams.delete('location')
      setSearchParams(searchParams, { replace: true })
    } else if (activeLocation !== 'ALL' && currentLocation !== activeLocation) {
      searchParams.set('location', activeLocation)
      setSearchParams(searchParams, { replace: true })
    }
  }, [activeLocation, searchParams, setSearchParams])
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'name-asc', label: 'Alphabetically, A-Z' },
    { value: 'name-desc', label: 'Alphabetically, Z-A' },
    { value: 'date-desc', label: 'Date, new to old' },
    { value: 'date-asc', label: 'Date, old to new' },
  ]
  
  const filteredProjects = activeLocation === 'ALL' 
    ? projects 
    : projects.filter(project => {
        const locationMap: Record<string, string> = {
          'PUERTO ESCONDIDO': 'Puerto Escondido',
          'TULUM': 'Tulum',
          'MARRAKECH': 'Marrakech',
          'NEW YORK CLUB': 'New York Club',
          'RESEARCH THESIS': 'Research Thesis'
        }
        return project.location === locationMap[activeLocation]
      })
  
  // Sort projects based on selected option
  const sortedProjects = React.useMemo(() => {
    const projectsCopy = [...filteredProjects]
    
    switch (sortBy) {
      case 'name-asc':
        return projectsCopy.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return projectsCopy.sort((a, b) => b.name.localeCompare(a.name))
      case 'date-desc':
        return projectsCopy.reverse()
      case 'date-asc':
        return projectsCopy
      case 'featured':
      default:
        return projectsCopy
    }
  }, [filteredProjects, sortBy])

  // Calculate projects per page based on grid view (8 rows)
  const projectsPerPage = gridView === '3-col' ? 24 : gridView === '2-col' ? 16 : 12
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage)
  
  // Get current page projects
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = sortedProjects.slice(startIndex, endIndex)
  
  // Reset to page 1 when location changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [activeLocation])
  
  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])
  
  // Close sort menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showSortMenu && !target.closest('.relative')) {
        setShowSortMenu(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showSortMenu])

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[#999]">
          <Link to="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-black">ARCHITECTURE</span>
        </div>
      </div>

      {/* Page Title & Description */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 text-center">
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] font-normal tracking-[0.12em] sm:tracking-[0.15em] uppercase text-black mb-6 sm:mb-8">
          ARCHITECTURE
        </h1>
        <p className="text-[12px] sm:text-[13px] leading-[20px] sm:leading-[24px] text-[#666] tracking-[0.02em]">
          Yedder Architecture Studio creates spaces that honor tradition while embracing innovation. Our work bridges the gap between Moroccan heritage and contemporary design, crafting environments that tell stories and celebrate cultural identity through thoughtful architectural expression.
        </p>
      </div>

      {/* Location Filter Tabs */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={`text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-colors border px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 cursor-pointer ${
                activeLocation === location
                  ? 'border-black bg-black text-white'
                  : 'border-[#ddd] text-[#666] bg-transparent hover:text-black hover:border-[#999]'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      {/* Project Count */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        <p className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[#999] text-center">
          SHOWING {startIndex + 1}–{Math.min(endIndex, sortedProjects.length)} OF {sortedProjects.length} {sortedProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
        </p>
      </div>

      {/* View Options & Filter */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#f0f0f0]">
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setGridView('2-col')}
            className={`p-1.5 sm:p-2 transition-colors ${gridView === '2-col' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="Grid view 2 columns"
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button 
            onClick={() => setGridView('3-col')}
            className={`p-1.5 sm:p-2 transition-colors ${gridView === '3-col' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="Grid view 3 columns"
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="4" height="4"></rect>
              <rect x="10" y="3" width="4" height="4"></rect>
              <rect x="17" y="3" width="4" height="4"></rect>
              <rect x="3" y="10" width="4" height="4"></rect>
              <rect x="10" y="10" width="4" height="4"></rect>
              <rect x="17" y="10" width="4" height="4"></rect>
            </svg>
          </button>
          <button 
            onClick={() => setGridView('list')}
            className={`p-1.5 sm:p-2 transition-colors ${gridView === 'list' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="List view"
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative">
            <button 
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#666] hover:text-black transition-colors flex items-center gap-2"
            >
              SORT BY <span className="text-xs">⌄</span>
            </button>
            {showSortMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#e5e5e5] min-w-[200px] sm:min-w-[220px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value)
                      setShowSortMenu(false)
                      setCurrentPage(1)
                    }}
                    className={`block w-full py-2.5 sm:py-3 px-3 sm:px-4 text-left text-[10px] sm:text-[11px] tracking-[0.1em] uppercase transition-colors ${
                      sortBy === option.value
                        ? 'bg-[#f5f5f5] text-black font-medium'
                        : 'text-[#666] hover:bg-[#fafafa] hover:text-black'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#666] hover:text-black transition-colors">
            FILTER
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20">
        <div className={`grid gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-12 md:gap-y-16 ${
          gridView === '3-col' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
          gridView === '2-col' ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1'
        }`}>
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              to={`/architecture/${project.id}`}
              className="group flex flex-col gap-3 sm:gap-4 no-underline"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black font-normal m-0">
                  {project.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20 flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
          {/* Previous Button */}
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(currentPage - 1)}
              className="text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-[#666] hover:text-black transition-colors"
            >
              ←
            </button>
          )}
          
          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`text-[11px] sm:text-[12px] tracking-[0.1em] uppercase transition-colors px-1 ${
                currentPage === pageNum
                  ? 'text-black font-bold underline'
                  : 'text-[#666] hover:text-black'
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          {/* Next Button */}
          {currentPage < totalPages && (
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              className="text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-[#666] hover:text-black transition-colors"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ArchitectureCollectionPage

