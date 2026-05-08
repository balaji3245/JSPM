import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import AboutSection from '../components/AboutSection'
import { motion } from 'framer-motion'

export default function About({ darkMode }) {
  useEffect(() => { document.title = 'About Us | SV College, MIDC, Latur' }, [])
  const bg = darkMode ? '#060d1a' : '#f8fafc'
  const textColor = darkMode ? '#f8fafc' : '#0a1628'
  const subText = darkMode ? '#94a3b8' : '#475569'

  return (
    <PageWrapper>
      {/* Page Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-badge">Our Story</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            About <span className="gradient-text">SV College</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            A legacy of excellence in education, serving the Marathwada region with dedication and vision since our inception.
          </p>
        </motion.div>
      </div>

      {/* Reuse about section */}
      <AboutSection darkMode={darkMode} />

      {/* Principal's Message */}
      <section style={{ background: bg, padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ background: darkMode ? '#0a1628' : 'white', borderRadius: 20, padding: 40, border: `1px solid ${darkMode ? '#1a3a6c' : '#e2e8f0'}`, display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}
          >
            <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, #F97316, #EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0 }}>👨‍🏫</div>
            <div style={{ flex: 1 }}>
              <span className="section-badge" style={{ marginBottom: 8 }}>Principal's Message</span>
              <h2 style={{ color: textColor, fontWeight: 800, fontSize: '1.4rem', marginBottom: 16 }}>A Word from Our Principal</h2>
              <p style={{ color: subText, lineHeight: 1.85, marginBottom: 16, fontSize: '0.95rem' }}>
                "At Swami Vivekanand College, we believe that education is not merely the acquisition of knowledge, but the transformation of character. Our dedicated faculty, modern infrastructure, and student-centric approach ensure that every student who walks through our doors emerges as a capable, confident, and compassionate individual ready to contribute to society."
              </p>
              <div style={{ fontWeight: 700, color: textColor }}>Principal</div>
              <div style={{ color: '#F97316', fontSize: '0.85rem' }}>Swami Vivekanand College, MIDC, Latur</div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
