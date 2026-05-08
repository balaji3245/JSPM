import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import ContactSection from '../components/ContactSection'
import { motion } from 'framer-motion'

export default function Contact({ darkMode }) {
  useEffect(() => { document.title = 'Contact Us | SV College, MIDC, Latur' }, [])
  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Get In Touch</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            We'd love to hear from you. Reach out for admissions, enquiries, or any information about the college.
          </p>
        </motion.div>
      </div>
      <ContactSection darkMode={darkMode} />
    </PageWrapper>
  )
}
