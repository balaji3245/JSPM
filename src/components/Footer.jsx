import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#000', padding: '120px 0 60px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '80px', marginBottom: '100px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#000' }}>J</div>
              <h2 style={{ fontSize: '1.8rem', color: 'white', margin: 0, letterSpacing: '3px' }}>JSPM</h2>
            </div>
            <p style={{ maxWidth: '350px', lineHeight: '1.8', fontSize: '1rem' }}>
              A sanctuary of elite academic pursuit and global innovation. Defining the standard for futuristic education since 1998.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
              {['IN', 'TW', 'LI', 'FB'].map((social) => (
                <div key={social} style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '800', color: 'white', cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black'; }} onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}>
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>Excellence</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li><Link to="/about" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Our Heritage</Link></li>
              <li><Link to="/faculty" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Elite Scholars</Link></li>
              <li><Link to="/research" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Research Hub</Link></li>
              <li><Link to="/campus" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Virtual Tour</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>Pathways</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li><Link to="/admissions" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Admission 2026</Link></li>
              <li><Link to="/courses" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Elite Programs</Link></li>
              <li><Link to="/scholarships" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Scholarships</Link></li>
              <li><Link to="/placements" style={{ color: 'var(--text-body)', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}>Career Office</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>Intelligence</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '25px' }}>Subscribe to our luxury academic newsletter for exclusive insights.</p>
            <div style={{ position: 'relative' }}>
              <input type="text" placeholder="Your Official Email" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px 20px', borderRadius: '100px', color: 'white', outline: 'none' }} />
              <button style={{ position: 'absolute', right: '5px', top: '5px', bottom: '5px', padding: '0 25px', background: 'var(--accent)', border: 'none', borderRadius: '100px', fontWeight: '800', fontSize: '0.7rem', color: 'black' }}>JOIN</button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>&copy; {new Date().getFullYear()} JSPM University. All Intellectual Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '40px', fontSize: '0.8rem', opacity: 0.4 }}>
            <a href="#">Privacy Protocol</a>
            <a href="#">Governance</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
