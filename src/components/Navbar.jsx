import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus', path: '/campus' },
    { name: 'Notices', path: '/notices' },
  ];

  return (
    <>
      <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '35px', height: '35px', background: 'var(--accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: '#000' }}>J</div>
            <h2 style={{ fontSize: '1.2rem', color: 'white', margin: 0, letterSpacing: '2px' }}>JSPM</h2>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{ 
                  color: location.pathname === link.path ? 'var(--accent)' : 'white',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: location.pathname === link.path ? 1 : 0.7,
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = (location.pathname === link.path ? 1 : 0.7)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-lux btn-lux-primary" style={{ padding: '10px 24px' }}>Apply Admission</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} style={{ color: 'white', fontSize: '1.5rem', display: 'none' }}>☰</div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ position: 'fixed', inset: 0, background: 'var(--bg-dark)', zIndex: 3000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px' }}
        >
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '40px', right: '40px', color: 'white', fontSize: '2rem' }}>×</div>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '2rem', fontWeight: '700' }}>{link.name}</Link>
          ))}
          <button className="btn-lux btn-lux-primary">Apply Now</button>
        </motion.div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
