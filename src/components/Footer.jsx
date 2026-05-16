import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h2 className="serif" style={{ color: 'white', marginBottom: '10px' }}>JSPM COLLEGE</h2>
            <p>Empowering minds and shaping futures since 1998. Dedicated to providing world-class education with a focus on moral values and technical excellence.</p>
            <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {/* Using placeholders for social icons */}
              <span style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>FB</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>TW</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>LI</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>IG</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/faculty">Our Faculty</Link></li>
              <li><Link to="/gallery">Campus Life</Link></li>
              <li><Link to="/notices">Notice Board</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Parent Portal</a></li>
              <li><a href="#">E-Learning (LMS)</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Library Catalog</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Knowledge Park, Education Hub,<br />Pune, Maharashtra - 411001</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 20 1234 5678<br />+91 98765 43210</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@jspmcollege.edu<br />admissions@jspmcollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JSPM College. All Rights Reserved. | Designed with Academic Excellence</p>
          <p>Institutional Helpline: 1800-123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
