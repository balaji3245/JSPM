import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin, Share2, MessageCircle, Tv2, Camera } from 'lucide-react'

export default function Footer({ darkMode }) {
  const bg = darkMode ? '#05020A' : '#1E0A4C'
  const textColor = 'rgba(255,255,255,0.8)'
  const headColor = 'white'
  const accent = '#D97706'
  const border = darkMode ? '#1A0D36' : 'rgba(255,255,255,0.1)'

  return (
    <footer style={{ background: bg, color: textColor, paddingTop: 64, paddingBottom: 24 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: `linear-gradient(135deg, ${accent}, #EA580C)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={22} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>SV College</div>
                <div style={{ fontSize: '0.7rem', color: '#F97316', fontWeight: 600 }}>MIDC, Latur</div>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: 20 }}>
              Empowering students through quality education and innovation since our founding. A premier institution committed to academic excellence.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: Share2, label: 'Facebook' },
                { icon: Camera, label: 'Instagram' },
                { icon: MessageCircle, label: 'Twitter' },
                { icon: Tv2, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.2)'; e.currentTarget.style.color = '#F97316' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 16, color: 'white', fontSize: '0.95rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Faculty', href: '/faculty' },
                { label: 'IQAC', href: '/iqac' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Notices', href: '/notices' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.87rem', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 16, color: 'white', fontSize: '0.95rem' }}>Programmes</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['B.A.', 'B.Com', 'B.Sc', 'B.Sc (Computer Science)', 'M.A.', 'M.Com'].map(course => (
                <li key={course}>
                  <Link
                    to="/courses"
                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.87rem', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >
                    → {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 16, color: 'white', fontSize: '0.95rem' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <MapPin size={16} color="#F97316" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: '#94a3b8', fontSize: '0.87rem', lineHeight: 1.6 }}>
                  MIDC Area, Latur - 413531,<br />Maharashtra, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Phone size={16} color="#F97316" />
                <a href="tel:+912382255555" style={{ color: '#94a3b8', fontSize: '0.87rem', textDecoration: 'none' }}>
                  +91 2382 255555
                </a>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Mail size={16} color="#F97316" />
                <a href="mailto:info@svclatur.edu.in" style={{ color: '#94a3b8', fontSize: '0.87rem', textDecoration: 'none' }}>
                  info@svclatur.edu.in
                </a>
              </div>
            </div>
            <Link to="/admissions">
              <button className="btn-primary" style={{ marginTop: 20, fontSize: '0.85rem', padding: '10px 20px', width: '100%' }}>
                Apply for Admission 2025
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#475569', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Swami Vivekanand College, MIDC, Latur. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'RTI'].map(item => (
              <a key={item} href="#" style={{ color: '#475569', fontSize: '0.82rem', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
