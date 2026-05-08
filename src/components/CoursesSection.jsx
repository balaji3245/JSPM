import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
  { name: 'B.A.', fullName: 'Bachelor of Arts', icon: '📚', intake: 120, duration: '3 Years', eligibility: '10+2 (Any Stream)', color: '#7C3AED', bg: '#7C3AED', subjects: ['History', 'Political Science', 'Sociology', 'Marathi'] },
  { name: 'B.Com', fullName: 'Bachelor of Commerce', icon: '💼', intake: 120, duration: '3 Years', eligibility: '10+2 (Commerce)', color: '#D97706', bg: '#D97706', subjects: ['Accountancy', 'Economics', 'Business Law', 'Finance'] },
  { name: 'B.Sc', fullName: 'Bachelor of Science', icon: '🔬', intake: 60, duration: '3 Years', eligibility: '10+2 (Science)', color: '#059669', bg: '#059669', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
  { name: 'B.Sc (CS)', fullName: 'B.Sc Computer Science', icon: '💻', intake: 60, duration: '3 Years', eligibility: '10+2 (Sci/Maths)', color: '#6D28D9', bg: '#6D28D9', subjects: ['C++', 'Java', 'DBMS', 'Web Dev'] },
  { name: 'M.A.', fullName: 'Master of Arts', icon: '🎓', intake: 60, duration: '2 Years', eligibility: 'B.A. Graduate', color: '#DC2626', bg: '#DC2626', subjects: ['Research Methods', 'Political Theory', 'History', 'Marathi Lit.'] },
  { name: 'M.Com', fullName: 'Master of Commerce', icon: '📊', intake: 60, duration: '2 Years', eligibility: 'B.Com Graduate', color: '#0891B2', bg: '#0891B2', subjects: ['Adv. Accountancy', 'Finance Mgmt', 'Business Research', 'Tax Laws'] },
]

export default function CoursesSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const bg = darkMode ? '#120926' : 'white'
  const cardBg = darkMode ? '#170B38' : '#FAFAF9'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px', position: 'relative' }}>
      {/* bg grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Academic Programmes</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            Choose Your <span className="gradient-text">Path to Success</span>
          </h2>
          <p style={{ color: subText, maxWidth: 540, margin: '0 auto', fontSize: '0.96rem', lineHeight: 1.75 }}>
            Discover diverse undergraduate & postgraduate programmes designed for your career growth.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 22 }}>
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 20px 56px ${course.color}22` }}
              style={{
                background: cardBg, borderRadius: 20, overflow: 'hidden',
                border: `1px solid ${border}`,
                boxShadow: darkMode ? 'none' : '0 2px 16px rgba(30,10,76,0.05)',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
            >
              {/* Gradient header */}
              <div style={{
                background: `linear-gradient(135deg, ${course.color}ee, ${course.color}99)`,
                padding: '26px 26px 20px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ position: 'absolute', bottom: -30, right: 20, width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
                <div style={{ fontSize: 34, marginBottom: 10 }}>{course.icon}</div>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', color: 'white' }}>{course.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{course.fullName}</div>
              </div>

              <div style={{ padding: '22px 26px 26px' }}>
                <div style={{ display: 'flex', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: subText }}>
                    <Clock size={13} color={course.color} /> {course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: subText }}>
                    <Users size={13} color={course.color} /> Intake: {course.intake}
                  </div>
                </div>

                <div style={{ background: `${course.color}0e`, borderRadius: 10, padding: '10px 14px', marginBottom: 16, border: `1px solid ${course.color}22` }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: course.color, marginBottom: 3, letterSpacing: '0.06em' }}>ELIGIBILITY</div>
                  <div style={{ fontSize: '0.87rem', color: textColor, fontWeight: 500 }}>{course.eligibility}</div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {course.subjects.map(s => (
                    <span key={s} style={{ fontSize: '0.72rem', background: darkMode ? '#2A1A4A' : '#F3F0EC', color: subText, padding: '3px 10px', borderRadius: 999, fontWeight: 500 }}>
                      {s}
                    </span>
                  ))}
                </div>

                <Link to="/admissions">
                  <button style={{
                    width: '100%', padding: '11px', borderRadius: 10,
                    background: 'transparent', border: `1.5px solid ${course.color}`,
                    color: course.color, fontWeight: 700, cursor: 'pointer',
                    fontSize: '0.87rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = course.color; e.currentTarget.style.color = 'white' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = course.color }}
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <Link to="/courses">
            <button className="btn-purple" style={{ padding: '14px 38px', fontSize: '1rem' }}>View All Programmes</button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
