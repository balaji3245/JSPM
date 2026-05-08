import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react'

const words = ['Excellence', 'Innovation', 'Leadership', 'Future']

const floatingStats = [
  { value: '5000+', label: 'Students', icon: '👨‍🎓' },
  { value: 'NAAC', label: 'Accredited', icon: '🏆' },
  { value: '25+', label: 'Years', icon: '⭐' },
  { value: '95%', label: 'Placement', icon: '🚀' },
]

export default function HeroSection({ darkMode }) {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero-gradient" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Grid pattern overlay */}
      <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Glowing orbs */}
      <div style={{ position: 'absolute', top: '8%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '0%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '40%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Floating gold particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          style={{
            position: 'absolute',
            width: 6, height: 6, borderRadius: '50%',
            background: '#D97706',
            top: `${15 + i * 12}%`,
            left: `${8 + i * 13}%`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '110px 28px 70px', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(217,119,6,0.15)',
            border: '1px solid rgba(217,119,6,0.3)',
            color: '#FCD34D', padding: '7px 18px', borderRadius: 999,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em',
          }}>
            <Sparkles size={13} /> NAAC Accredited Institution
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(109,40,217,0.2)', border: '1px solid rgba(139,92,246,0.3)',
            color: '#C4B5FD', padding: '7px 18px', borderRadius: 999,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em',
          }}>
            Affiliated to SRTM University
          </span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 16 }}
            >
              Swami Vivekanand<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.3)', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>College</span>
              <span style={{ color: '#F59E0B' }}>, MIDC</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ fontSize: 'clamp(1rem, 2vw, 1.22rem)', color: 'rgba(255,255,255,0.72)', marginBottom: 10, lineHeight: 1.5 }}
            >
              Empowering Students Through Quality Education &amp;{' '}
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.45 }}
                style={{ color: '#FCD34D', fontWeight: 800, display: 'inline-block' }}
              >
                {words[wordIdx]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: 480, lineHeight: 1.8, marginBottom: 36 }}
            >
              A premier institution in Latur focused on academic excellence, character building, modern technology and innovation since our inception.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link to="/admissions">
                <button className="btn-gold" style={{ fontSize: '1rem', padding: '14px 34px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Apply Now 2025 <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/courses">
                <button className="btn-glass" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                  Explore Courses
                </button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              style={{ display: 'flex', gap: 0, marginTop: 48, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, flexWrap: 'wrap' }}
            >
              {floatingStats.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, minWidth: 90, textAlign: 'center', padding: '0 16px',
                  borderRight: i < floatingStats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 2 }}>{s.icon}</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#F59E0B' }}>{s.value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 100 }}
            className="hero-right"
          >
            {/* Main card */}
            <div style={{
              background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24,
              padding: 28, marginBottom: 16,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4 }}>ADMISSIONS OPEN</div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>2025 – 26</div>
                </div>
                <span style={{ background: 'rgba(217,119,6,0.2)', border: '1px solid rgba(217,119,6,0.4)', color: '#FCD34D', fontSize: '0.72rem', fontWeight: 700, padding: '5px 12px', borderRadius: 999 }}>
                  OPEN NOW
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                {['B.A.', 'B.Com', 'B.Sc', 'B.Sc CS', 'M.A.', 'M.Com'].map((c) => (
                  <div key={c} style={{
                    background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 8px', textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', fontWeight: 700,
                  }}>{c}</div>
                ))}
              </div>
            </div>

            {/* Small cards row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { icon: '🎓', title: 'Smart Campus', desc: 'Digital Learning', color: '#6D28D9' },
                { icon: '🏆', title: 'NAAC Ranked', desc: 'Quality Assured', color: '#D97706' },
                { icon: '🤝', title: 'Placements', desc: '95% Success Rate', color: '#059669' },
                { icon: '📚', title: 'E-Library', desc: '10,000+ Resources', color: '#DC2626' },
              ].map(card => (
                <motion.div
                  key={card.title}
                  whileHover={{ scale: 1.04, y: -3 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16,
                    padding: 18, cursor: 'default', transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{card.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: 3 }}>{card.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
      >
        <div style={{ width: 24, height: 38, borderRadius: 12, border: '2px solid rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <motion.div
            animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: 4, height: 4, borderRadius: '50%', background: '#F59E0B' }}
          />
        </div>
        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.1em' }}>SCROLL</div>
      </motion.div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 40L0 60Z" fill="var(--pearl)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  )
}
