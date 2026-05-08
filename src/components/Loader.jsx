import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0A0514' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="spin-ring mb-6"
        style={{
          width: 80, height: 80, borderRadius: '50%',
          border: '4px solid rgba(109,40,217,0.2)',
          borderTopColor: '#F59E0B',
        }}
      />
      <motion.h1
        style={{ color: '#EDE9F8', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.25rem', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        SV College
      </motion.h1>
      <motion.p
        style={{ color: '#D97706', fontSize: '0.8rem', marginTop: 4, fontWeight: 600, letterSpacing: '0.1em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
        LOADING...
      </motion.p>
    </motion.div>
  )
}
