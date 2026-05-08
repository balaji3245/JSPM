import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import GallerySection from '../components/GallerySection'
import { motion } from 'framer-motion'

export default function Gallery({ darkMode }) {
  useEffect(() => { document.title = 'Gallery | SV College, MIDC, Latur' }, [])
  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Photo Gallery</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            Campus <span className="gradient-text">Gallery</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Browse through memorable moments captured across our vibrant campus.
          </p>
        </motion.div>
      </div>
      <GallerySection darkMode={darkMode} />
    </PageWrapper>
  )
}
