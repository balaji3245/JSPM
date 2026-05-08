import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ZoomIn } from 'lucide-react'

const galleryItems = [
  { id: 1, title: 'Main Campus Building', category: 'Campus', color: '#6D28D9', emoji: '🏛️', tall: true },
  { id: 2, title: 'Science Laboratory', category: 'Labs', color: '#059669', emoji: '🔬', tall: false },
  { id: 3, title: 'Annual Day Celebration', category: 'Events', color: '#D97706', emoji: '🎭', tall: false },
  { id: 4, title: 'Library & Reading Room', category: 'Facilities', color: '#DC2626', emoji: '📚', tall: true },
  { id: 5, title: 'Sports Championship', category: 'Sports', color: '#7C3AED', emoji: '🏆', tall: false },
  { id: 6, title: 'Computer Lab', category: 'Labs', color: '#0891B2', emoji: '💻', tall: false },
  { id: 7, title: 'Cultural Fest', category: 'Events', color: '#8B5CF6', emoji: '🎉', tall: true },
  { id: 8, title: 'Convocation Ceremony', category: 'Events', color: '#F59E0B', emoji: '🎓', tall: false },
  { id: 9, title: 'NSS Activities', category: 'Social', color: '#10B981', emoji: '🤝', tall: false },
]

const categories = ['All', 'Campus', 'Labs', 'Events', 'Sports', 'Social', 'Facilities']

export default function GallerySection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const bg = darkMode ? '#0A0514' : 'var(--pearl)'

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-badge">Gallery</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            Campus <span className="gradient-text">Moments</span>
          </h2>
          <p style={{ color: subText, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            A glimpse into the vibrant life at Swami Vivekanand College.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 36 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px', borderRadius: 999, border: 'none', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: 700, transition: 'all 0.2s',
                background: active === cat ? 'linear-gradient(135deg,#D97706,#F59E0B)' : (darkMode ? '#2A1A4A' : '#E8E0F0'),
                color: active === cat ? '#0F0520' : subText,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="masonry-item"
              onClick={() => setLightbox(item)}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  height: item.tall ? 280 : 190,
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  borderRadius: 16, position: 'relative', overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 12,
                }}
              >
                <div style={{ fontSize: 48 }}>{item.emoji}</div>
                <div style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', padding: '0 16px' }}>
                  {item.title}
                </div>
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(10,5,20,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.3s ease', borderRadius: 16,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}
                >
                  <ZoomIn color="white" size={32} />
                </div>
                <span style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(4px)',
                  fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: 999,
                }}>
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(10,5,20,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 8, border: 'none', cursor: 'pointer', color: 'white' }}>
              <X size={28} />
            </button>
            <div style={{ width: '90%', maxWidth: 500, height: 360, background: `linear-gradient(135deg, ${lightbox.color}, ${lightbox.color}cc)`, borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, boxShadow: `0 20px 60px ${lightbox.color}40` }}>
              <div style={{ fontSize: 80 }}>{lightbox.emoji}</div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem' }}>{lightbox.title}</div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: 999, color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>{lightbox.category}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
