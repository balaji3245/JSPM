import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Target, label: 'Our Mission', text: 'To provide quality education that empowers students with knowledge, skills and values to excel in a competitive world.', color: '#6D28D9' },
  { icon: Eye, label: 'Our Vision', text: 'To become a strong center for educational excellence responding to emerging challenges in a fast-changing society.', color: '#D97706' },
  { icon: Heart, label: 'Core Values', text: 'Fairness, honesty, integrity, character building, critical thinking, science, technology and modern education.', color: '#059669' },
]

export default function AboutSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const bg = darkMode ? '#0A0514' : 'var(--pearl)'
  const cardBg = darkMode ? '#170B38' : 'white'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">About Us</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 20, lineHeight: 1.18 }}>
              Building Leaders for<br />
              <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }} className="gradient-text-purple">Tomorrow's India</span>
            </h2>
            <p style={{ color: subText, lineHeight: 1.9, marginBottom: 14, fontSize: '0.96rem' }}>
              Swami Vivekanand College, MIDC, Latur aspires to become a strong center for educational excellence capable of responding to emerging educational challenges and needs in a fast changing society.
            </p>
            <p style={{ color: subText, lineHeight: 1.9, marginBottom: 32, fontSize: '0.96rem' }}>
              The institution focuses on fairness, honesty, integrity, character building, critical thinking, science, technology and modern education while retaining traditional values.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
              {['NAAC Accredited', 'SRTM University Affiliated', 'Digital Classrooms', 'Student Support Cell', '25+ Years of Excellence', 'Research Oriented'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <CheckCircle size={15} color="#6D28D9" />
                  <span style={{ color: subText, fontSize: '0.87rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/about"><button className="btn-purple" style={{ padding: '12px 28px' }}>Learn More</button></Link>
              <Link to="/contact"><button className="btn-outline-dark" style={{ padding: '12px 28px' }}>Contact Us</button></Link>
            </div>
          </motion.div>

          {/* Right: value cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {values.map(({ icon: Icon, label, text, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 4, boxShadow: `0 8px 32px ${color}20` }}
                style={{
                  background: cardBg, borderRadius: 16, padding: 24,
                  border: `1px solid ${border}`, borderLeft: `4px solid ${color}`,
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: textColor, marginBottom: 6, fontSize: '0.97rem' }}>{label}</div>
                    <div style={{ color: subText, fontSize: '0.86rem', lineHeight: 1.7 }}>{text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
