import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus', path: '/campus' },
    { name: 'Notices', path: '/notices' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="nav-sticky">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', background: 'var(--primary)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '1.4rem' }}>J</div>
          <div style={{ lineHeight: '1' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '1px' }}>JSPM</h2>
            <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>University Portal</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{ 
                textDecoration: 'none',
                padding: '10px 14px',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-body)',
                borderBottom: location.pathname === link.path ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => { if(location.pathname !== link.path) e.target.style.color = 'var(--primary)'; }}
              onMouseLeave={(e) => { if(location.pathname !== link.path) e.target.style.color = 'var(--text-body)'; }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admissions" className="btn-academic btn-academic-primary" style={{ marginLeft: '15px' }}>Apply Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-toggle-academic" onClick={() => setMobileMenuOpen(true)} style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--primary)' }}>☰</div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'white', zIndex: 2000, display: 'flex', flexDirection: 'column', padding: '40px' }}>
          <div onClick={() => setMobileMenuOpen(false)} style={{ alignSelf: 'flex-end', fontSize: '2rem', cursor: 'pointer' }}>×</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>{link.name}</Link>
            ))}
            <Link to="/admissions" className="btn-academic btn-academic-primary" style={{ textAlign: 'center' }}>Apply Now</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-academic { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
