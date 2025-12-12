import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

// Spring 23 Collection
const samira1 = getR2Url('clothing/1. first capsule - spring 23/1-SAMIRA-90-950/1.jpg')
const ahmar1 = getR2Url('clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/1.jpg')
const versace1 = getR2Url('clothing/1. first capsule - spring 23/3-VERSACE-70-1050/1-.jpg')
const mathilde1 = getR2Url('clothing/1. first capsule - spring 23/4-Mathilde-70-1150/1.jpg')
const azram1 = getR2Url('clothing/1. first capsule - spring 23/5-Azram-80-950/1.jpg')
const limon1 = getR2Url('clothing/1. first capsule - spring 23/6-LIMON-70-1250/1.jpg')
const rain1 = getR2Url('clothing/1. first capsule - spring 23/7-RAIN-70-1050/1.jpg')
const mrk1 = getR2Url('clothing/1. first capsule - spring 23/8-MRK-80-1050/1.jpg')
const diab1 = getR2Url('clothing/1. first capsule - spring 23/9-DIAB-80-1350/1.jpg')
const zayton1 = getR2Url('clothing/1. first capsule - spring 23/10-ZAYTON-80-950/1.jpg')
const dounia1 = getR2Url('clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/1.jpg')
const alkamar1 = getR2Url('clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/1.jpg')
const anya1 = getR2Url('clothing/1. first capsule - spring 23/13-ANYA-90-850/1.jpg')
const ahmar2_1 = getR2Url('clothing/1. first capsule - spring 23/14-AHMAR-70-1050/1.jpg')
const isa1 = getR2Url('clothing/1. first capsule - spring 23/15-ISA-70-1250/1.jpg')
const pea1 = getR2Url('clothing/1. first capsule - spring 23/16-PEA-70-1150/1.jpg')
const leila1 = getR2Url('clothing/1. first capsule - spring 23/17-LEILA-80-1050/1.jpg')
const fary1 = getR2Url('clothing/1. first capsule - spring 23/18-FARY-70-1150/1.jpg')
const blues1 = getR2Url('clothing/1. first capsule - spring 23/19-BLUES-70-1050/1.jpg')
const jasmin1 = getR2Url('clothing/1. first capsule - spring 23/20-JASMIN-80-1350/1.jpg')
const azyl1 = getR2Url('clothing/1. first capsule - spring 23/21-AZYL-80-1350/1.jpg')
const kamar1 = getR2Url('clothing/1. first capsule - spring 23/22-KAMAR-80-1500/1.jpg')
const abia1 = getR2Url('clothing/1. first capsule - spring 23/23-ABIA-90-950/1.jpg')
const omar1 = getR2Url('clothing/1. first capsule - spring 23/24-OMAR-80-1500/1.jpg')
const akhdar1 = getR2Url('clothing/1. first capsule - spring 23/25-Akhdar-70-850/1.jpg')
const jilil1 = getR2Url('clothing/1. first capsule - spring 23/26-JILIL-80-900/1.jpg')
const rosy1 = getR2Url('clothing/1. first capsule - spring 23/27-ROSY-60-1250/1.jpg')
const yaya1 = getR2Url('clothing/1. first capsule - spring 23/28-YAYA-80-950/1.jpg')
const purple1 = getR2Url('clothing/1. first capsule - spring 23/29-PURPLE-80-1050/1.jpg')
const gold1 = getR2Url('clothing/1. first capsule - spring 23/30-GOLD-80-950/1.jpg')
const houb1 = getR2Url('clothing/1. first capsule - spring 23/31-HOUB-80-1250/1.jpg')
const amira1 = getR2Url('clothing/1. first capsule - spring 23/32-Amira -80-1050/1-.jpg')
const ahram1 = getR2Url('clothing/1. first capsule - spring 23/33-Ahram-80-750/1.jpg')
const bab1 = getR2Url('clothing/1. first capsule - spring 23/34-BAB-90-799/1.jpg')
const alouan1 = getR2Url('clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/1.jpg')
const maria1 = getR2Url('clothing/1. first capsule - spring 23/36-Maria-70-1150/1.jpg')
const zin1 = getR2Url('clothing/1. first capsule - spring 23/37-ZIN-70-1250/1.jpg')
const puch1 = getR2Url('clothing/1. first capsule - spring 23/38-PUCH-80-1350/1.jpg')
const lys1 = getR2Url('clothing/1. first capsule - spring 23/39-LYS-90-850/1.jpg')
const orange1 = getR2Url('clothing/1. first capsule - spring 23/41-ORANGE-90-950/1.jpg')
const hind1 = getR2Url('clothing/1. first capsule - spring 23/42-HIND-70-1050/1.jpg')
const jasmin2_1 = getR2Url('clothing/1. first capsule - spring 23/43-JASMIN-60-1050/1.jpg')
const mar1 = getR2Url('clothing/1. first capsule - spring 23/44-Mar-70-1050/1.jpg')
const kimi1 = getR2Url('clothing/1. first capsule - spring 23/45-KIMI-70-1050/1-.jpg')
const christielle1 = getR2Url('clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/1.JPG')
const coquelicot1 = getR2Url('clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/1.jpg')
const mahia1 = getR2Url('clothing/1. first capsule - spring 23/48-MAHIA-60-1150/1.jpg')
const may1 = getR2Url('clothing/1. first capsule - spring 23/49-MAY-70-1150/1.jpg')
const cartier1 = getR2Url('clothing/1. first capsule - spring 23/50-CARTIER-70-1350/1.jpg')
const sultan1 = getR2Url('clothing/1. first capsule - spring 23/51-SULTAN-70-1150/1.jpg')
const bine1 = getR2Url('clothing/1. first capsule - spring 23/52-BINE-90-950/1.jpg')
const zahra1 = getR2Url('clothing/1. first capsule - spring 23/53-Zahra-90-950/1.jpg')
const bac1 = getR2Url('clothing/1. first capsule - spring 23/54-BAC-80-1050/1.jpg')
const angela1 = getR2Url('clothing/1. first capsule - spring 23/55-Angela-70-1150/1.jpg')
const lina1 = getR2Url('clothing/1. first capsule - spring 23/56-LINA-60-1200/1.jpg')
const stef1 = getR2Url('clothing/1. first capsule - spring 23/57-Stef-70-1100/1.jpg')

// Winter 24 Collection
const khmissa1 = getR2Url('clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/1.jpg')
const welleda1 = getR2Url('clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/1.jpg')
const yafit1 = getR2Url('clothing/2. second capsule - winter 24/3. Yafit - 80 - 499/1.jpg')
const natasha1 = getR2Url('clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/1.jpg')
const fayrouz1 = getR2Url('clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/1.jpg')
const atlas1 = getR2Url('clothing/2. second capsule - winter 24/6 -  Atlas - 750/1.jpg')
const jabel1 = getR2Url('clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/1.jpg')
const mrouzia1 = getR2Url('clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/1.jpg')
const noha1 = getR2Url('clothing/2. second capsule - winter 24/9 - Noha - 70- 699/1.jpg')
const maleek1 = getR2Url('clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/1.jpg')
const amazi1 = getR2Url('clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/1.jpg')
const oumi1 = getR2Url('clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/1.jpg')
const saha1 = getR2Url('clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/1.jpg')

// Autumn 25 Collection
const cheetah1 = getR2Url('clothing/3. third capsule - autumn 25/1. Cheetah/1.png')
const aitakal1 = getR2Url('clothing/3. third capsule - autumn 25/2. Aitakal/1.png')
const fettah1 = getR2Url('clothing/3. third capsule - autumn 25/3. Fettah/1.png')
const fire1 = getR2Url('clothing/3. third capsule - autumn 25/4. Fire/1.png')
const dior1 = getR2Url('clothing/3. third capsule - autumn 25/5. Dior/1.png')
const safari1 = getR2Url('clothing/3. third capsule - autumn 25/6. Safari/1.png')
const golden1 = getR2Url('clothing/3. third capsule - autumn 25/7. Golden/1.png')
const ariel1 = getR2Url('clothing/3. third capsule - autumn 25/8. Ariel/1.png')

type Product = {
  id: string
  name: string
  image: string
  collection: string
}

const products: Product[] = [
  // Spring 23
  { id: 'samira', name: 'SAMIRA', image: samira1, collection: 'Spring 23' },
  { id: 'ahmar', name: 'AHMAR', image: ahmar1, collection: 'Spring 23' },
  { id: 'versace', name: 'VERSACE', image: versace1, collection: 'Spring 23' },
  { id: 'mathilde', name: 'MATHILDE', image: mathilde1, collection: 'Spring 23' },
  { id: 'azram', name: 'AZRAM', image: azram1, collection: 'Spring 23' },
  { id: 'limon', name: 'LIMON', image: limon1, collection: 'Spring 23' },
  { id: 'rain', name: 'RAIN', image: rain1, collection: 'Spring 23' },
  { id: 'mrk', name: 'MRK', image: mrk1, collection: 'Spring 23' },
  { id: 'diab', name: 'DIAB', image: diab1, collection: 'Spring 23' },
  { id: 'zayton', name: 'ZAYTON', image: zayton1, collection: 'Spring 23' },
  { id: 'dounia', name: 'DOUNIA', image: dounia1, collection: 'Spring 23' },
  { id: 'alkamar', name: 'AL KAMAR', image: alkamar1, collection: 'Spring 23' },
  { id: 'anya', name: 'ANYA', image: anya1, collection: 'Spring 23' },
  { id: 'ahmar2', name: 'AHMAR II', image: ahmar2_1, collection: 'Spring 23' },
  { id: 'isa', name: 'ISA', image: isa1, collection: 'Spring 23' },
  { id: 'pea', name: 'PEA', image: pea1, collection: 'Spring 23' },
  { id: 'leila', name: 'LEILA', image: leila1, collection: 'Spring 23' },
  { id: 'fary', name: 'FARY', image: fary1, collection: 'Spring 23' },
  { id: 'blues', name: 'BLUES', image: blues1, collection: 'Spring 23' },
  { id: 'jasmin', name: 'JASMIN', image: jasmin1, collection: 'Spring 23' },
  { id: 'azyl', name: 'AZYL', image: azyl1, collection: 'Spring 23' },
  { id: 'kamar', name: 'KAMAR', image: kamar1, collection: 'Spring 23' },
  { id: 'abia', name: 'ABIA', image: abia1, collection: 'Spring 23' },
  { id: 'omar', name: 'OMAR', image: omar1, collection: 'Spring 23' },
  { id: 'akhdar', name: 'AKHDAR', image: akhdar1, collection: 'Spring 23' },
  { id: 'jilil', name: 'JILIL', image: jilil1, collection: 'Spring 23' },
  { id: 'rosy', name: 'ROSY', image: rosy1, collection: 'Spring 23' },
  { id: 'yaya', name: 'YAYA', image: yaya1, collection: 'Spring 23' },
  { id: 'purple', name: 'PURPLE', image: purple1, collection: 'Spring 23' },
  { id: 'gold', name: 'GOLD', image: gold1, collection: 'Spring 23' },
  { id: 'houb', name: 'HOUB', image: houb1, collection: 'Spring 23' },
  { id: 'amira', name: 'AMIRA', image: amira1, collection: 'Spring 23' },
  { id: 'ahram', name: 'AHRAM', image: ahram1, collection: 'Spring 23' },
  { id: 'bab', name: 'BAB', image: bab1, collection: 'Spring 23' },
  { id: 'alouan', name: 'ALOUAN', image: alouan1, collection: 'Spring 23' },
  { id: 'maria', name: 'MARIA', image: maria1, collection: 'Spring 23' },
  { id: 'zin', name: 'ZIN', image: zin1, collection: 'Spring 23' },
  { id: 'puch', name: 'PUCH', image: puch1, collection: 'Spring 23' },
  { id: 'lys', name: 'LYS', image: lys1, collection: 'Spring 23' },
  { id: 'orange', name: 'ORANGE', image: orange1, collection: 'Spring 23' },
  { id: 'hind', name: 'HIND', image: hind1, collection: 'Spring 23' },
  { id: 'jasmin2', name: 'JASMIN II', image: jasmin2_1, collection: 'Spring 23' },
  { id: 'mar', name: 'MAR', image: mar1, collection: 'Spring 23' },
  { id: 'kimi', name: 'KIMI', image: kimi1, collection: 'Spring 23' },
  { id: 'christielle', name: 'CHRISTIELLE', image: christielle1, collection: 'Spring 23' },
  { id: 'coquelicot', name: 'COQUELICOT', image: coquelicot1, collection: 'Spring 23' },
  { id: 'mahia', name: 'MAHIA', image: mahia1, collection: 'Spring 23' },
  { id: 'may', name: 'MAY', image: may1, collection: 'Spring 23' },
  { id: 'cartier', name: 'CARTIER', image: cartier1, collection: 'Spring 23' },
  { id: 'sultan', name: 'SULTAN', image: sultan1, collection: 'Spring 23' },
  { id: 'bine', name: 'BINE', image: bine1, collection: 'Spring 23' },
  { id: 'zahra', name: 'ZAHRA', image: zahra1, collection: 'Spring 23' },
  { id: 'bac', name: 'BAC', image: bac1, collection: 'Spring 23' },
  { id: 'angela', name: 'ANGELA', image: angela1, collection: 'Spring 23' },
  { id: 'lina', name: 'LINA', image: lina1, collection: 'Spring 23' },
  { id: 'stef', name: 'STEF', image: stef1, collection: 'Spring 23' },
  
  // Winter 24
  { id: 'khmissa', name: 'KHMISSA', image: khmissa1, collection: 'Winter 24' },
  { id: 'welleda', name: 'WELLEDA', image: welleda1, collection: 'Winter 24' },
  { id: 'yafit', name: 'YAFIT', image: yafit1, collection: 'Winter 24' },
  { id: 'natasha', name: 'NATASHA', image: natasha1, collection: 'Winter 24' },
  { id: 'fayrouz', name: 'FAYROUZ', image: fayrouz1, collection: 'Winter 24' },
  { id: 'atlas', name: 'ATLAS', image: atlas1, collection: 'Winter 24' },
  { id: 'jabel', name: 'JABEL', image: jabel1, collection: 'Winter 24' },
  { id: 'mrouzia', name: 'MROUZIA', image: mrouzia1, collection: 'Winter 24' },
  { id: 'noha', name: 'NOHA', image: noha1, collection: 'Winter 24' },
  { id: 'maleek', name: 'MALEEK', image: maleek1, collection: 'Winter 24' },
  { id: 'amazi', name: 'AMAZI', image: amazi1, collection: 'Winter 24' },
  { id: 'oumi', name: 'OUMI', image: oumi1, collection: 'Winter 24' },
  { id: 'saha', name: 'SAHA', image: saha1, collection: 'Winter 24' },
  
  // Autumn 25
  { id: 'cheetah', name: 'CHEETAH', image: cheetah1, collection: 'Autumn 25' },
  { id: 'aitakal', name: 'AITAKAL', image: aitakal1, collection: 'Autumn 25' },
  { id: 'fettah', name: 'FETTAH', image: fettah1, collection: 'Autumn 25' },
  { id: 'fire', name: 'FIRE', image: fire1, collection: 'Autumn 25' },
  { id: 'dior', name: 'DIOR', image: dior1, collection: 'Autumn 25' },
  { id: 'safari', name: 'SAFARI', image: safari1, collection: 'Autumn 25' },
  { id: 'golden', name: 'GOLDEN', image: golden1, collection: 'Autumn 25' },
  { id: 'ariel', name: 'ARIEL', image: ariel1, collection: 'Autumn 25' },
]

const ClothingCollectionPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const collectionParam = searchParams.get('collection')
  
  const [activeCollection, setActiveCollection] = React.useState<string>(
    collectionParam && ['SPRING 23', 'WINTER 24', 'AUTUMN 25'].includes(collectionParam) 
      ? collectionParam 
      : 'ALL'
  )
  const [gridView, setGridView] = React.useState<'2-col' | '3-col' | 'list'>('3-col')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortBy, setSortBy] = React.useState<string>('featured')
  const [showSortMenu, setShowSortMenu] = React.useState(false)
  
  const collections = ['ALL', 'SPRING 23', 'WINTER 24', 'AUTUMN 25']
  
  // Update URL when collection changes (but not on initial load)
  React.useEffect(() => {
    const currentCollection = searchParams.get('collection')
    if (activeCollection === 'ALL' && currentCollection) {
      searchParams.delete('collection')
      setSearchParams(searchParams, { replace: true })
    } else if (activeCollection !== 'ALL' && currentCollection !== activeCollection) {
      searchParams.set('collection', activeCollection)
      setSearchParams(searchParams, { replace: true })
    }
  }, [activeCollection, searchParams, setSearchParams])
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'name-asc', label: 'Alphabetically, A-Z' },
    { value: 'name-desc', label: 'Alphabetically, Z-A' },
    { value: 'date-desc', label: 'Date, new to old' },
    { value: 'date-asc', label: 'Date, old to new' },
  ]
  
  const filteredProducts = activeCollection === 'ALL' 
    ? products 
    : products.filter(product => product.collection === activeCollection.replace('SPRING', 'Spring').replace('WINTER', 'Winter').replace('AUTUMN', 'Autumn'))
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsCopy = [...filteredProducts]
    
    switch (sortBy) {
      case 'name-asc':
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return productsCopy.sort((a, b) => b.name.localeCompare(a.name))
      case 'date-desc':
        return productsCopy.reverse() // Newer first (already in order)
      case 'date-asc':
        return productsCopy // Older first (original order)
      case 'featured':
      default:
        return productsCopy // Default order
    }
  }, [filteredProducts, sortBy])

  // Calculate products per page based on grid view (8 rows)
  const productsPerPage = gridView === '3-col' ? 24 : gridView === '2-col' ? 16 : 12
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  
  // Get current page products
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)
  
  // Reset to page 1 when collection changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [activeCollection])
  
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
      <div className="max-w-[1400px] mx-auto px-10 pt-10 pb-6">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#999]">
          <Link to="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-black">CLOTHING</span>
        </div>
      </div>

      {/* Page Title & Description */}
      <div className="max-w-[900px] mx-auto px-10 py-12 text-center">
        <h1 className="text-[28px] font-normal tracking-[0.15em] uppercase text-black mb-8">
          CLOTHING
        </h1>
        <p className="text-[13px] leading-[24px] text-[#666] tracking-[0.02em]">
        Our mission goes beyond clothing; it's about reviving the soul of these traditional dresses, and by doing so, we honor the history and culture of Morocco. In each Yedder piece, you'll find the echoes of Moroccan women who once shone brightly in these dresses during their special moments. We believe that these pieces deserve a second life, and we invite you to become a part of this journey of preservation and reinvention. 
        </p>
      </div>

      {/* Collection Filter Tabs */}
      <div className="max-w-[1400px] mx-auto px-10 py-8">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {collections.map((collection) => (
            <button
              key={collection}
              onClick={() => setActiveCollection(collection)}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors border px-6 py-2.5 cursor-pointer ${
                activeCollection === collection
                  ? 'border-black bg-black text-white'
                  : 'border-[#ddd] text-[#666] bg-transparent hover:text-black hover:border-[#999]'
              }`}
            >
              {collection}
            </button>
          ))}
        </div>
      </div>

      {/* Product Count */}
      <div className="max-w-[1400px] mx-auto px-10 py-4">
        <p className="text-[11px] tracking-[0.1em] uppercase text-[#999] text-center">
          SHOWING {startIndex + 1}–{Math.min(endIndex, sortedProducts.length)} OF {sortedProducts.length} {sortedProducts.length === 1 ? 'PRODUCT' : 'PRODUCTS'}
        </p>
      </div>

      {/* View Options & Filter */}
      <div className="max-w-[1400px] mx-auto px-10 py-6 flex items-center justify-between border-t border-[#f0f0f0]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setGridView('2-col')}
            className={`p-2 transition-colors ${gridView === '2-col' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="Grid view 2 columns"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button 
            onClick={() => setGridView('3-col')}
            className={`p-2 transition-colors ${gridView === '3-col' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="Grid view 3 columns"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            className={`p-2 transition-colors ${gridView === 'list' ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`} 
            aria-label="List view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="text-[11px] tracking-[0.15em] uppercase text-[#666] hover:text-black transition-colors flex items-center gap-2"
            >
              SORT BY <span className="text-xs">⌄</span>
            </button>
            {showSortMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#e5e5e5] min-w-[220px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value)
                      setShowSortMenu(false)
                      setCurrentPage(1)
                    }}
                    className={`block w-full py-3 px-4 text-left text-[11px] tracking-[0.1em] uppercase transition-colors ${
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
          <button className="text-[11px] tracking-[0.15em] uppercase text-[#666] hover:text-black transition-colors">
            FILTER
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className={`grid gap-x-8 gap-y-16 ${
          gridView === '3-col' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
          gridView === '2-col' ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1'
        }`}>
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/clothing/${product.id}`}
              className="group flex flex-col gap-4 no-underline"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-black font-normal m-0">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-[1400px] mx-auto px-10 pb-20 flex justify-center items-center gap-4">
          {/* Previous Button */}
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(currentPage - 1)}
              className="text-[12px] tracking-[0.1em] uppercase text-[#666] hover:text-black transition-colors"
            >
              ←
            </button>
          )}
          
          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`text-[12px] tracking-[0.1em] uppercase transition-colors ${
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
              className="text-[12px] tracking-[0.1em] uppercase text-[#666] hover:text-black transition-colors"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ClothingCollectionPage

