import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#FFFFFF' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="spin-ring mb-6"
        style={{
          width: 80, height: 80, borderRadius: '50%',
          border: '4px solid #F0F0F0',
          borderTopColor: '#002147',
        }}
      />
      <motion.h1
        style={{ color: '#002147', fontFamily: 'Playfair Display', fontWeight: 800, fontSize: '1.5rem', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        JSPM COLLEGE
      </motion.h1>
      <motion.p
        style={{ color: '#B8860B', fontSize: '0.8rem', marginTop: 4, fontWeight: 600, letterSpacing: '0.2em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
        EXCELLENCE IN EDUCATION
      </motion.p>
    </motion.div>
  )
}
