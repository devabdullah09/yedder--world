import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ClothingPage from './pages/ClothingPage'
import ClothingCollectionPage from './pages/ClothingCollectionPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ArchitecturePage from './pages/ArchitecturePage'
import ArchitectureCollectionPage from './pages/ArchitectureCollectionPage'
import ArchitectureProjectDetailPage from './pages/ArchitectureProjectDetailPage'

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white relative">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/clothing" element={<ClothingCollectionPage />} />
          <Route path="/clothing/intro" element={<ClothingPage />} />
          <Route path="/clothing/list" element={<ClothingCollectionPage />} />
          <Route path="/clothing/:productId" element={<ProductDetailPage />} />
          <Route path="/architecture" element={<ArchitectureCollectionPage />} />
          <Route path="/architecture/intro" element={<ArchitecturePage />} />
          <Route path="/architecture/:projectId" element={<ArchitectureProjectDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

