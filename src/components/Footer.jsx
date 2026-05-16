import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '80px', paddingBottom: '80px' }}>
          <div className="footer-col">
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'var(--primary)' }}>J</div>
              <h2 className="serif" style={{ fontSize: '1.6rem', color: 'white', margin: 0 }}>JSPM</h2>
            </div>
            <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
              A global hub for academic excellence and innovation. Empowering the next generation of leaders with a future-ready curriculum and world-class infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {/* Premium Social Icons Placeholder */}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'var(--transition)' }} onMouseEnter={(e) => e.target.style.background = 'var(--accent)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>In</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'var(--transition)' }} onMouseEnter={(e) => e.target.style.background = 'var(--accent)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Tw</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'var(--transition)' }} onMouseEnter={(e) => e.target.style.background = 'var(--accent)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Li</div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="serif" style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px' }}>Exploration</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><Link to="/about" style={{ opacity: 0.7 }}>About University</Link></li>
              <li><Link to="/courses" style={{ opacity: 0.7 }}>Academic Programs</Link></li>
              <li><Link to="/admissions" style={{ opacity: 0.7 }}>Admissions 2026</Link></li>
              <li><Link to="/research" style={{ opacity: 0.7 }}>Research Centers</Link></li>
              <li><Link to="/campus" style={{ opacity: 0.7 }}>Campus Life</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="serif" style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px' }}>Resources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><a href="#" style={{ opacity: 0.7 }}>Student Portal</a></li>
              <li><a href="#" style={{ opacity: 0.7 }}>Digital Library</a></li>
              <li><a href="#" style={{ opacity: 0.7 }}>Career Services</a></li>
              <li><a href="#" style={{ opacity: 0.7 }}>Scholarships</a></li>
              <li><a href="#" style={{ opacity: 0.7 }}>Alumni Association</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="serif" style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px' }}>Newsletter</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>Subscribe to get the latest academic updates and event notices.</p>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '10px' }}>
              <input type="text" placeholder="Email Address" style={{ background: 'transparent', border: 'none', padding: '12px', color: 'white', flex: 1, outline: 'none' }} />
              <button className="btn btn-accent" style={{ padding: '8px 20px', borderRadius: '8px' }}>Join</button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} JSPM University. Excellence in Global Education.</p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#" style={{ opacity: 0.5 }}>Privacy Policy</a>
            <a href="#" style={{ opacity: 0.5 }}>Terms of Service</a>
            <a href="#" style={{ opacity: 0.5 }}>Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
