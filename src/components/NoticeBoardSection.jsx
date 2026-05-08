import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bell, Calendar, BookOpen, Award, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const notices = [
  { type: 'Admission', icon: BookOpen, color: '#D97706', date: 'May 5, 2025', title: 'Admissions Open 2025-26 — All UG & PG Programmes', isNew: true },
  { type: 'Exam', icon: Calendar, color: '#6D28D9', date: 'May 2, 2025', title: 'Summer 2025 Examination Schedule Published — Download Now', isNew: true },
  { type: 'Scholarship', icon: Award, color: '#059669', date: 'Apr 28, 2025', title: 'EBC Scholarship Applications Open — Last Date: May 20, 2025', isNew: true },
  { type: 'Event', icon: Bell, color: '#7C3AED', date: 'Apr 25, 2025', title: 'Annual Cultural Fest "UTSAV 2025" Registration Now Open', isNew: false },
  { type: 'Admission', icon: BookOpen, color: '#D97706', date: 'Apr 20, 2025', title: 'First Merit List for B.Sc CS Admissions Published', isNew: false },
  { type: 'Result', icon: Calendar, color: '#DC2626', date: 'Apr 15, 2025', title: 'Odd Semester 2024-25 Results Declared — Check Online', isNew: false },
]

export default function NoticeBoardSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const bg = darkMode ? '#120926' : 'white'
  const cardBg = darkMode ? '#170B38' : '#FAFAF9'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="section-badge">Announcements</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            Notice <span className="gradient-text">Board</span>
          </h2>
          <p style={{ color: subText, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Stay updated with the latest announcements, exam schedules, and events.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="notice-grid">
          {notices.map((n, i) => {
            const Icon = n.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 5 }}
                style={{
                  background: cardBg, borderRadius: 14, padding: '20px 22px',
                  border: `1px solid ${border}`, display: 'flex', gap: 14, alignItems: 'flex-start',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  borderLeft: `4px solid ${n.color}`,
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${n.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={17} color={n.color} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: n.color, background: `${n.color}12`, padding: '2px 9px', borderRadius: 999 }}>{n.type}</span>
                    {n.isNew && <span className="new-badge" style={{ fontSize: '0.64rem', fontWeight: 800, color: 'white', background: '#DC2626', padding: '2px 8px', borderRadius: 999 }}>NEW</span>}
                    <span style={{ fontSize: '0.72rem', color: subText, marginLeft: 'auto' }}>{n.date}</span>
                  </div>
                  <p style={{ color: textColor, fontSize: '0.87rem', fontWeight: 600, lineHeight: 1.5 }}>{n.title}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 36 }}
        >
          <Link to="/notices">
            <button className="btn-purple" style={{ padding: '13px 34px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View All Notices <ChevronRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
      <style>{`@media(max-width:640px){.notice-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
