import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Award, BookOpen, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const docs = [
  { icon: Award, title: 'NAAC Accreditation', desc: 'Official NAAC accreditation certificate and grade report', tag: 'Accredited', color: '#D97706' },
  { icon: FileText, title: 'IQAC Annual Report', desc: 'Annual Quality Assurance Report for the current year 2024-25', tag: '2024-25', color: '#6D28D9' },
  { icon: FileText, title: 'AQAR 2023-24', desc: 'Annual Quality Assurance Report submitted to NAAC', tag: 'Submitted', color: '#059669' },
  { icon: BookOpen, title: 'Academic Calendar', desc: 'Complete academic schedule and important dates 2024-25', tag: '2024-25', color: '#7C3AED' },
  { icon: Star, title: 'Best Practices', desc: 'Institutional best practices recognised by NAAC body', tag: 'Featured', color: '#DC2626' },
  { icon: FileText, title: 'SSR Report', desc: 'Self Study Report submitted to NAAC for accreditation', tag: 'Latest', color: '#0891B2' },
]

export default function IQACSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg, #1E0A4C 0%, #2D1270 50%, #1E0A4C 100%)', padding: '88px 28px', position: 'relative', overflow: 'hidden' }}>
      <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      {/* Glow accents */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Quality Assurance</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: 'white', marginBottom: 12 }}>
            IQAC & <span className="gradient-text">NAAC</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', fontSize: '0.96rem', lineHeight: 1.75 }}>
            Our Internal Quality Assurance Cell ensures continuous quality enhancement through systematic processes.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
          {docs.map((doc, i) => {
            const Icon = doc.icon
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, background: 'rgba(255,255,255,0.1)' }}
                style={{
                  background: 'rgba(255,255,255,0.06)', borderRadius: 18,
                  padding: 26, border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(14px)', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${doc.color}25`, border: `1px solid ${doc.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color={doc.color} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, background: `${doc.color}22`, color: doc.color, padding: '4px 12px', borderRadius: 999, border: `1px solid ${doc.color}33` }}>
                    {doc.tag}
                  </span>
                </div>
                <h3 style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{doc.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 20 }}>{doc.desc}</p>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: doc.color, fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', transition: 'gap 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '12px'} onMouseLeave={e => e.currentTarget.style.gap = '8px'}>
                  <Download size={14} /> Download PDF
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <Link to="/iqac">
            <button className="btn-glass" style={{ padding: '13px 34px', fontSize: '0.95rem' }}>
              View All IQAC Documents →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
