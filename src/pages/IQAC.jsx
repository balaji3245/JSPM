import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import IQACSection from '../components/IQACSection'
import { motion } from 'framer-motion'

export default function IQAC({ darkMode }) {
  useEffect(() => { document.title = 'IQAC & NAAC | SV College, MIDC, Latur' }, [])

  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Quality Assurance</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            IQAC & <span className="gradient-text">NAAC</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Download official quality assurance documents, accreditation reports, and annual quality reports.
          </p>
        </motion.div>
      </div>
      <IQACSection darkMode={darkMode} />
    </PageWrapper>
  )
}
