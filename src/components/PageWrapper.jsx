import { motion } from 'framer-motion'
import { useEffect } from 'react'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export default function PageWrapper({ children, title, description, headerTitle, headerSubtitle }) {
  useEffect(() => {
    if (title) document.title = `${title} | SV College, Latur`
  }, [title])

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {headerTitle && (
        <div style={{
          background: 'linear-gradient(135deg, #1E0A4C 0%, #2D1270 50%, #4C1D95 100%)',
          padding: '160px 28px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle patterns */}
          <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
          <div style={{ position: 'absolute', bottom: -50, right: -50, width: 250, height: 250, borderRadius: '50%', background: 'rgba(217,119,6,0.15)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(139,92,246,0.15)', pointerEvents: 'none' }} />

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: 12, position: 'relative', zIndex: 1 }}
          >
            {headerTitle}
          </motion.h1>
          {headerSubtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}
            >
              {headerSubtitle}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </motion.div>
  )
}
