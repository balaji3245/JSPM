import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Priya Sharma', course: 'B.Com Graduate, 2023', text: 'SV College transformed my academic journey. The faculty\'s dedication and digital learning environment helped me secure a top placement at a renowned CA firm. I am proud to be an alumna.', rating: 5, initial: 'P', color: '#6D28D9' },
  { name: 'Rahul Patil', course: 'B.Sc CS Graduate, 2022', text: 'The computer labs and project-based learning gave me the technical foundation I needed. I\'m now working as a software developer at a leading IT company in Pune — all thanks to SVC!', rating: 5, initial: 'R', color: '#D97706' },
  { name: 'Sneha Kulkarni', course: 'M.Com Graduate, 2024', text: 'Post-graduation at SV College was exceptional. Research guidance from our professors was truly world-class and helped me clear the Maharashtra SET examination on my first attempt.', rating: 5, initial: 'S', color: '#059669' },
  { name: 'Amit Jadhav', course: 'B.A. Graduate, 2023', text: 'Cultural activities, NSS programs and the academic environment at SVC shaped my personality completely. Today I\'m a civil services aspirant and I owe it all to this institution.', rating: 5, initial: 'A', color: '#7C3AED' },
]

export default function TestimonialsSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [cur, setCur] = useState(0)
  const t = testimonials[cur]

  return (
    <section ref={ref} style={{ background: darkMode ? '#0A0514' : 'var(--pearl)', padding: '88px 28px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Student Stories</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: darkMode ? '#EDE9F8' : '#0F0520', marginBottom: 12 }}>
            What Our <span className="gradient-text">Students Say</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.42 }}
              style={{
                background: darkMode ? '#170B38' : 'white',
                borderRadius: 24, padding: '48px 52px',
                border: `1px solid ${t.color}22`,
                boxShadow: `0 8px 48px ${t.color}14`,
                textAlign: 'center',
              }}
            >
              {/* Top color bar */}
              <div style={{ width: 48, height: 4, background: `linear-gradient(90deg, ${t.color}, ${t.color}66)`, borderRadius: 2, margin: '0 auto 28px' }} />

              <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: 800, fontSize: '1.3rem', color: 'white' }}>
                {t.initial}
              </div>

              <p style={{ color: darkMode ? 'rgba(237,233,248,0.8)' : '#3B2A5A', fontSize: '1.06rem', lineHeight: 1.85, marginBottom: 28, fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              <div style={{ fontWeight: 800, color: darkMode ? '#EDE9F8' : '#0F0520', marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: '0.83rem', color: t.color, fontWeight: 600, marginBottom: 16 }}>{t.course}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                {[...Array(t.rating)].map((_, i) => <span key={i} style={{ color: '#D97706', fontSize: '1.1rem' }}>★</span>)}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, marginTop: 32 }}>
            <button onClick={() => setCur(i => (i - 1 + testimonials.length) % testimonials.length)}
              style={{ width: 44, height: 44, borderRadius: '50%', border: `2px solid ${darkMode ? '#2A1A4A' : '#E8E0F0'}`, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: darkMode ? '#9D89C4' : '#6B5E8A', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6D28D9'; e.currentTarget.style.color = '#6D28D9' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = darkMode ? '#2A1A4A' : '#E8E0F0'; e.currentTarget.style.color = darkMode ? '#9D89C4' : '#6B5E8A' }}
            ><ChevronLeft size={18} /></button>

            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((t, i) => (
                <button key={i} onClick={() => setCur(i)}
                  style={{ width: i === cur ? 28 : 8, height: 8, borderRadius: 999, border: 'none', cursor: 'pointer', background: i === cur ? '#6D28D9' : (darkMode ? '#2A1A4A' : '#E8E0F0'), transition: 'all 0.3s ease' }} />
              ))}
            </div>

            <button onClick={() => setCur(i => (i + 1) % testimonials.length)}
              style={{ width: 44, height: 44, borderRadius: '50%', border: `2px solid ${darkMode ? '#2A1A4A' : '#E8E0F0'}`, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: darkMode ? '#9D89C4' : '#6B5E8A', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6D28D9'; e.currentTarget.style.color = '#6D28D9' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = darkMode ? '#2A1A4A' : '#E8E0F0'; e.currentTarget.style.color = darkMode ? '#9D89C4' : '#6B5E8A' }}
            ><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
