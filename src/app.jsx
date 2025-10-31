import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import WhySection from './components/WhySection.jsx'
import PopularDestinations from './components/PopularDestinations.jsx'
import PromoSection from './components/PromoSection.jsx'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix Leaflet marker icons for Vite/React
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})
import Footer from './components/Footer.jsx'
import PlanTrip from './pages/PlanTrip.jsx'
import Community from './pages/Community.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import TripNotes from './pages/TripNotes.jsx'
import TripPlanner from './pages/TripPlanner.jsx'
import ShareAdventure from './pages/ShareAdventure.jsx'
import DestinationDetail from './pages/DestinationDetail.jsx'

function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <PopularDestinations />
      <PromoSection />
    </>
  )
}

export default function App(){
  const location = useLocation()
  const hideNavAndFooter = location.pathname === '/login'

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <NavBar />}
      <main className={`flex-grow ${!hideNavAndFooter ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trip-notes" element={<TripNotes />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/share-adventure" element={<ShareAdventure />} />
          <Route path="/destination/:country" element={<DestinationDetail />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  )
}
