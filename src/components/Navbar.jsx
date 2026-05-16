import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Departments', path: '/departments' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus', path: '/campus' },
    { name: 'Notices', path: '/notices' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <div className="logo-text">
            <h2>JSPM COLLEGE</h2>
            <p>Excellence in Education</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay animate-up">
          <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>×</div>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .bar {
          width: 25px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: var(--primary);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: center;
        }
        .mobile-nav-link {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          color: white;
          font-size: 3rem;
          cursor: pointer;
        }
        @media (max-width: 992px) {
          .nav-links { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
