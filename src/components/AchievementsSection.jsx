import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 5000, suffix: '+', label: 'Students Enrolled', icon: '👨‍🎓', color: '#6D28D9' },
  { value: 6, suffix: '+', label: 'Programmes Offered', icon: '📚', color: '#D97706' },
  { value: 80, suffix: '+', label: 'Qualified Faculty', icon: '👨‍🏫', color: '#059669' },
  { value: 95, suffix: '%', label: 'Placement Rate', icon: '🚀', color: '#7C3AED' },
  { value: 25, suffix: '+', label: 'Years of Excellence', icon: '🏆', color: '#D97706' },
  { value: 100, suffix: '+', label: 'Scholarships Awarded', icon: '🎖️', color: '#0891B2' },
]

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const step = target / (duration / 16)
      let cur = 0
      const timer = setInterval(() => {
        cur += step
        if (cur >= target) { setCount(target); clearInterval(timer) }
        else setCount(Math.floor(cur))
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function AchievementsSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const bg = darkMode ? '#120926' : 'white'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const cardBg = darkMode ? '#0A0514' : 'var(--pearl)'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Our Impact</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            Numbers That <span className="gradient-text">Speak for Us</span>
          </h2>
          <p style={{ color: subText, maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontSize: '0.96rem' }}>
            Decades of excellence reflected in our achievements and milestones.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 18 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.09, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -6 }}
              style={{
                background: cardBg, borderRadius: 18, padding: '32px 20px',
                textAlign: 'center', border: `1px solid ${border}`,
                transition: 'all 0.3s ease', cursor: 'default',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background circle accent */}
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `${stat.color}12` }} />

              <div style={{ fontSize: 36, marginBottom: 14 }}>{stat.icon}</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: stat.color, lineHeight: 1 }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: '0.8rem', color: subText, marginTop: 10, fontWeight: 600, lineHeight: 1.4 }}>
                {stat.label}
              </div>
              {/* Bottom accent */}
              <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 3, background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`, borderRadius: 2 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
