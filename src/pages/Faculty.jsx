import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone } from 'lucide-react'

const departments = [
  { name: 'Arts Department', color: '#3B82F6', faculty: [
    { name: 'Dr. S. R. Patil', designation: 'Head of Department', subject: 'History', exp: '18 yrs', initial: 'SP' },
    { name: 'Prof. M. K. Desai', designation: 'Associate Professor', subject: 'Political Science', exp: '12 yrs', initial: 'MD' },
    { name: 'Prof. A. B. Jadhav', designation: 'Assistant Professor', subject: 'Sociology', exp: '8 yrs', initial: 'AJ' },
  ]},
  { name: 'Commerce Department', color: '#10B981', faculty: [
    { name: 'Dr. P. N. Kulkarni', designation: 'Head of Department', subject: 'Accountancy', exp: '20 yrs', initial: 'PK' },
    { name: 'Prof. V. D. Bhosale', designation: 'Associate Professor', subject: 'Economics', exp: '14 yrs', initial: 'VB' },
    { name: 'Prof. S. G. More', designation: 'Assistant Professor', subject: 'Business Studies', exp: '6 yrs', initial: 'SM' },
  ]},
  { name: 'Science Department', color: '#8B5CF6', faculty: [
    { name: 'Dr. R. T. Shinde', designation: 'Head of Department', subject: 'Physics', exp: '22 yrs', initial: 'RS' },
    { name: 'Prof. K. M. Wagh', designation: 'Associate Professor', subject: 'Chemistry', exp: '16 yrs', initial: 'KW' },
    { name: 'Prof. N. S. Kamble', designation: 'Assistant Professor', subject: 'Mathematics', exp: '9 yrs', initial: 'NK' },
  ]},
  { name: 'Computer Science Dept.', color: '#F97316', faculty: [
    { name: 'Dr. A. P. Suryawanshi', designation: 'Head of Department', subject: 'Computer Science', exp: '15 yrs', initial: 'AS' },
    { name: 'Prof. D. R. Pawar', designation: 'Assistant Professor', subject: 'Web Technology', exp: '7 yrs', initial: 'DP' },
    { name: 'Prof. S. V. Chavan', designation: 'Assistant Professor', subject: 'Database Systems', exp: '5 yrs', initial: 'SC' },
  ]},
]

function FacultyCard({ member, color, darkMode }) {
  const cardBg = darkMode ? '#0f2147' : 'white'
  const textColor = darkMode ? '#f8fafc' : '#0a1628'
  const subText = darkMode ? '#94a3b8' : '#475569'
  const border = darkMode ? '#1a3a6c' : '#e2e8f0'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      style={{ background: cardBg, borderRadius: 16, padding: 24, border: `1px solid ${border}`, textAlign: 'center', transition: 'all 0.3s ease' }}
    >
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${color}, ${color}aa)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontWeight: 800, fontSize: '1.3rem', color: 'white' }}>
        {member.initial}
      </div>
      <div style={{ fontWeight: 700, color: textColor, marginBottom: 4 }}>{member.name}</div>
      <div style={{ fontSize: '0.78rem', color, fontWeight: 600, marginBottom: 4 }}>{member.designation}</div>
      <div style={{ fontSize: '0.82rem', color: subText, marginBottom: 2 }}>Subject: {member.subject}</div>
      <div style={{ fontSize: '0.78rem', color: subText }}>Experience: {member.exp}</div>
    </motion.div>
  )
}

export default function Faculty({ darkMode }) {
  useEffect(() => { document.title = 'Faculty | SV College, MIDC, Latur' }, [])
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const bg = darkMode ? '#060d1a' : '#f8fafc'
  const textColor = darkMode ? '#f8fafc' : '#0a1628'
  const subText = darkMode ? '#94a3b8' : '#475569'

  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Our Team</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            Meet Our <span className="gradient-text">Faculty</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Our qualified and experienced faculty are dedicated to nurturing excellence in every student.
          </p>
        </motion.div>
      </div>

      <section ref={ref} style={{ background: bg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {departments.map((dept, di) => (
            <motion.div key={dept.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: di * 0.1 }} style={{ marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 4, height: 28, background: dept.color, borderRadius: 2 }} />
                <h2 style={{ fontWeight: 800, color: textColor, fontSize: '1.25rem' }}>{dept.name}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                {dept.faculty.map(m => (
                  <FacultyCard key={m.name} member={m} color={dept.color} darkMode={darkMode} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
