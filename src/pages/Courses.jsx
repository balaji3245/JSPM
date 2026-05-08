import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import CoursesSection from '../components/CoursesSection'
import { motion } from 'framer-motion'

export default function Courses({ darkMode }) {
  useEffect(() => { document.title = 'Courses & Programmes | SV College, MIDC, Latur' }, [])

  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Academic Programmes</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            Our <span className="gradient-text">Programmes</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Choose from a wide range of undergraduate and postgraduate programmes designed for your career success.
          </p>
        </motion.div>
      </div>
      <CoursesSection darkMode={darkMode} />
    </PageWrapper>
  )
}
