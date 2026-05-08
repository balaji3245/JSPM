import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const facilities = [
  { icon: '🖥️', title: 'Smart Classrooms', desc: 'Modern interactive boards and digital teaching aids for enhanced learning experiences.', color: '#7C3AED' },
  { icon: '📖', title: 'Digital Library', desc: 'Extensive collection of books, journals, and 10,000+ e-resources for research.', color: '#D97706' },
  { icon: '💻', title: 'Computer Labs', desc: 'State-of-the-art labs with latest hardware, software and high-speed internet.', color: '#6D28D9' },
  { icon: '⚽', title: 'Sports Facilities', desc: 'Outdoor and indoor sports including cricket, football, kabaddi and more.', color: '#059669' },
  { icon: '🔭', title: 'Research Center', desc: 'Dedicated research infrastructure for advanced academic and scientific studies.', color: '#DC2626' },
  { icon: '📶', title: 'WiFi Campus', desc: 'High-speed internet connectivity across the entire campus 24×7.', color: '#0891B2' },
  { icon: '🏠', title: 'Hostel Facility', desc: 'Safe, comfortable hostel accommodation for outstation students.', color: '#D97706' },
  { icon: '🚌', title: 'Transportation', desc: 'College bus service covering major routes in and around Latur city.', color: '#7C3AED' },
]

export default function FacilitiesSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const bg = darkMode ? '#0A0514' : 'var(--pearl)'
  const cardBg = darkMode ? '#170B38' : 'white'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Campus Life</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            World-Class <span className="gradient-text">Infrastructure</span>
          </h2>
          <p style={{ color: subText, maxWidth: 500, margin: '0 auto', fontSize: '0.96rem', lineHeight: 1.75 }}>
            Modern facilities that support academic, research, sports and personal development.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 18 }}>
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: `0 18px 48px ${f.color}1a` }}
              style={{
                background: cardBg, borderRadius: 18, padding: 26,
                border: `1px solid ${border}`,
                boxShadow: darkMode ? 'none' : '0 2px 16px rgba(30,10,76,0.05)',
                transition: 'all 0.3s ease', cursor: 'default',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Subtle corner gradient */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(circle at top right, ${f.color}18, transparent)`, borderRadius: '0 18px 0 80px' }} />

              <div style={{ width: 54, height: 54, borderRadius: 14, background: `${f.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 16 }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight: 700, color: textColor, marginBottom: 8, fontSize: '1rem' }}>{f.title}</h3>
              <p style={{ color: subText, fontSize: '0.85rem', lineHeight: 1.7 }}>{f.desc}</p>

              {/* Bottom accent line */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${f.color}, transparent)`, borderRadius: '0 0 18px 18px' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
