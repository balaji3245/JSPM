import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import IQAC from './pages/IQAC'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Faculty from './pages/Faculty'
import Notices from './pages/Notices'

function AnimatedRoutes({ darkMode }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode} />} />
        <Route path="/iqac" element={<IQAC darkMode={darkMode} />} />
        <Route path="/admissions" element={<Admissions darkMode={darkMode} />} />
        <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/faculty" element={<Faculty darkMode={darkMode} />} />
        <Route path="/notices" element={<Notices darkMode={darkMode} />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  if (loading) return <Loader />

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''} style={{ minHeight: '100vh' }}>
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatedRoutes darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <BackToTop />
      </div>
    </Router>
  )
}
