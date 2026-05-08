import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, GraduationCap, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'IQAC', href: '/iqac' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Notices', href: '/notices' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const isHome = location.pathname === '/'

  const navBg = scrolled
    ? darkMode
      ? 'rgba(10,5,20,0.96)'
      : 'rgba(255,255,255,0.96)'
    : isHome
      ? 'transparent'
      : darkMode ? 'rgba(10,5,20,0.95)' : 'rgba(255,255,255,0.95)'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          background: navBg,
          backdropFilter: scrolled || !isHome ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 32px rgba(30,10,76,0.12)' : 'none',
          borderBottom: scrolled ? `1px solid ${darkMode ? 'rgba(109,40,217,0.15)' : 'rgba(109,40,217,0.08)'}` : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        {/* Top gold accent line */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #1E0A4C, #6D28D9, #D97706, #F59E0B, #6D28D9, #1E0A4C)', backgroundSize: '200%', animation: 'marquee 6s linear infinite' }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 11,
              background: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(109,40,217,0.4)',
            }}>
              <GraduationCap size={22} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.15, color: isHome && !scrolled ? 'white' : (darkMode ? '#EDE9F8' : '#1E0A4C') }}>
                SV College
              </div>
              <div style={{ fontSize: '0.62rem', color: '#D97706', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                MIDC · Latur
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
            {navLinks.map(link => {
              const active = location.pathname === link.href
              const textCol = isHome && !scrolled ? 'rgba(255,255,255,0.85)' : (darkMode ? '#C4B5E8' : '#3B2A5A')
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '7px 13px', borderRadius: 8,
                    fontSize: '0.85rem', fontWeight: active ? 700 : 500,
                    color: active ? '#D97706' : textCol,
                    textDecoration: 'none', position: 'relative',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="active-pill"
                      style={{ position: 'absolute', inset: 0, borderRadius: 8, background: 'rgba(217,119,6,0.1)', zIndex: -1 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              aria-label="Toggle dark mode"
              style={{
                width: 38, height: 38, borderRadius: '50%', border: 'none',
                background: darkMode ? 'rgba(217,119,6,0.15)' : 'rgba(109,40,217,0.08)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: darkMode ? '#F59E0B' : '#6D28D9',
              }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <Link to="/admissions" className="nav-desktop">
              <motion.button
                className="btn-gold"
                style={{ padding: '9px 22px', fontSize: '0.84rem' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              >
                Apply Now
              </motion.button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-mobile"
              aria-label="Open menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: isHome && !scrolled ? 'white' : (darkMode ? '#EDE9F8' : '#1E0A4C') }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <button onClick={() => setMobileOpen(false)}
              style={{ position: 'absolute', top: 24, right: 28, background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', color: 'white', borderRadius: 10, padding: 8 }}>
              <X size={24} />
            </button>
            {/* Logo in menu */}
            <div style={{ marginBottom: 16, textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#6D28D9,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <GraduationCap size={26} color="white" />
              </div>
              <div style={{ color: '#D97706', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>SV COLLEGE · MIDC · LATUR</div>
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  to={link.href}
                  style={{
                    fontSize: '1.4rem', fontWeight: 700,
                    color: location.pathname === link.href ? '#F59E0B' : 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link to="/admissions">
              <button className="btn-gold" style={{ marginTop: 8, padding: '12px 36px' }}>Apply Now 2025</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 940px) { .nav-desktop { display: none !important; } .nav-mobile { display: flex !important; } }
        @media (min-width: 941px) { .nav-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
