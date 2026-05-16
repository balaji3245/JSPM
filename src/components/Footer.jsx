import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--primary-dark)', color: 'white', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
              <div style={{ width: '35px', height: '35px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: '800' }}>J</div>
              <h3 style={{ color: 'white', margin: 0, fontSize: '1.4rem' }}>JSPM University</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              JSPM is a premier institution dedicated to academic excellence and professional growth. Founded in 1998, we have nurtured over 50,000 graduates across diverse disciplines.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About University</Link></li>
              <li><Link to="/courses" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Programs & Courses</Link></li>
              <li><Link to="/admissions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Admissions 2026</Link></li>
              <li><Link to="/faculty" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Faculty Directory</Link></li>
              <li><Link to="/notices" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Official Notices</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Student Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Student Portal</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Digital Library</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Examination Portal</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Anti-Ragging Policy</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Career Services</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Contact Us</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '15px' }}>
              JSPM Campus, Wagholi, Pune - 412207<br />
              Maharashtra, India
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '10px' }}>Email: info@jspm.edu.in</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Helpline: +91 20 2233 4455</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
          <p>&copy; {new Date().getFullYear()} JSPM University. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
