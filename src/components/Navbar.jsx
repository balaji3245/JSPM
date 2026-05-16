import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-icon" style={{ width: '45px', height: '45px', background: 'var(--accent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'var(--primary)' }}>J</div>
          <div className="logo-text">
            <h2 className="serif" style={{ fontSize: '1.4rem', color: scrolled ? 'var(--primary)' : 'white', margin: 0 }}>JSPM</h2>
            <p style={{ fontSize: '0.65rem', color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>University</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ color: scrolled ? 'var(--primary)' : 'white' }}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn btn-accent" style={{ marginLeft: '20px', padding: '10px 24px', fontSize: '0.85rem' }}>Apply Now</button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', cursor: 'pointer' }}>
          <div style={{ width: '30px', height: '2px', background: scrolled ? 'var(--primary)' : 'white', marginBottom: '6px' }}></div>
          <div style={{ width: '20px', height: '2px', background: scrolled ? 'var(--primary)' : 'white', alignSelf: 'flex-end' }}></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--primary)', zIndex: 2000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
          <div className="close-btn" onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', fontSize: '3rem', cursor: 'pointer' }}>×</div>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '1.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
              {link.name}
            </Link>
          ))}
          <button className="btn btn-accent" style={{ marginTop: '20px' }}>Apply Now</button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
