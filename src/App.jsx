import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import FoodListing from './pages/FoodListing/FoodListing.jsx'
import ListFood from './pages/ListFood/ListFood.jsx'
import SDG from './pages/SDG/SDG.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-listing" element={<FoodListing />} />
        <Route path="/list-food" element={<ListFood />} />
        <Route path="/sdg" element={<SDG />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
