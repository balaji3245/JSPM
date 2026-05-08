import { useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { Bell, Calendar, BookOpen, Award, Search, Filter } from 'lucide-react'

const allNotices = [
  { type: 'Admission', icon: BookOpen, color: '#F97316', date: 'May 5, 2025', title: 'Admissions Open 2025-26 — All UG & PG Programmes', desc: 'Applications are invited for all undergraduate and postgraduate programmes for the academic year 2025-26. Online registration is now available.', isNew: true },
  { type: 'Exam', icon: Calendar, color: '#3B82F6', date: 'May 2, 2025', title: 'Summer 2025 Examination Schedule Published', desc: 'The detailed timetable for Summer 2025 examinations has been published. Students are advised to check their hall tickets.', isNew: true },
  { type: 'Scholarship', icon: Award, color: '#10B981', date: 'Apr 28, 2025', title: 'EBC Scholarship Applications Open — Last Date: May 20', desc: 'Economically Backward Class scholarship applications are now open. Eligible students must submit forms before May 20, 2025.', isNew: true },
  { type: 'Event', icon: Bell, color: '#8B5CF6', date: 'Apr 25, 2025', title: 'Annual Cultural Fest "UTSAV 2025" Registration Open', desc: 'Register now for various cultural competitions including music, dance, drama, and art events at UTSAV 2025.', isNew: false },
  { type: 'Admission', icon: BookOpen, color: '#F97316', date: 'Apr 20, 2025', title: 'Merit List for B.Sc CS Admissions Published', desc: 'First merit list for B.Sc Computer Science admissions 2025-26 has been published on the notice board and website.', isNew: false },
  { type: 'Exam', icon: Calendar, color: '#EF4444', date: 'Apr 15, 2025', title: 'Results of Odd Semester 2024-25 Declared', desc: 'Results of the odd semester examination 2024-25 have been declared. Students can check their results on the university website.', isNew: false },
  { type: 'Scholarship', icon: Award, color: '#10B981', date: 'Apr 10, 2025', title: 'Government Scholarship Portal Open — OBC/SC/ST Students', desc: 'Scholarship portal for OBC, SC, and ST students is now active. Submit applications before the deadline.', isNew: false },
  { type: 'Event', icon: Bell, color: '#06B6D4', date: 'Apr 5, 2025', title: 'NSS Special Camp Registration — May 12 to 18', desc: 'NSS volunteers can register for the special camp to be held from May 12 to 18, 2025.', isNew: false },
]

const types = ['All', 'Admission', 'Exam', 'Scholarship', 'Event']

export default function Notices({ darkMode }) {
  useEffect(() => { document.title = 'Notices & Announcements | SV College, MIDC, Latur' }, [])
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const bg = darkMode ? '#060d1a' : '#f8fafc'
  const cardBg = darkMode ? '#0a1628' : 'white'
  const textColor = darkMode ? '#f8fafc' : '#0a1628'
  const subText = darkMode ? '#94a3b8' : '#475569'
  const border = darkMode ? '#1a3a6c' : '#e2e8f0'

  const filtered = allNotices.filter(n =>
    (active === 'All' || n.type === active) &&
    (n.title.toLowerCase().includes(search.toLowerCase()) || n.desc.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-badge">Announcements</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: 12, marginBottom: 16 }}>
            Notice <span className="gradient-text">Board</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            All official notices, exam updates, admissions, scholarships and event announcements in one place.
          </p>
        </motion.div>
      </div>

      <section style={{ background: bg, padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 24 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              className="form-input"
              placeholder="Search notices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 40 }}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {types.map(t => (
              <button key={t} onClick={() => setActive(t)}
                style={{ padding: '7px 18px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s', background: active === t ? 'linear-gradient(135deg,#F97316,#EA580C)' : (darkMode ? '#1a3a6c' : '#e2e8f0'), color: active === t ? 'white' : subText }}>
                {t}
              </button>
            ))}
          </div>

          {/* Notices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {filtered.map((n, i) => {
              const Icon = n.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  style={{ background: cardBg, borderRadius: 12, padding: '20px 24px', border: `1px solid ${border}`, borderLeft: `4px solid ${n.color}`, display: 'flex', gap: 16, alignItems: 'flex-start' }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${n.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={n.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: n.color, background: `${n.color}15`, padding: '2px 10px', borderRadius: 999 }}>{n.type}</span>
                      {n.isNew && <span className="new-badge" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'white', background: '#EF4444', padding: '2px 8px', borderRadius: 999 }}>NEW</span>}
                      <span style={{ fontSize: '0.75rem', color: subText, marginLeft: 'auto' }}>{n.date}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: textColor, marginBottom: 6, fontSize: '0.95rem' }}>{n.title}</h3>
                    <p style={{ color: subText, fontSize: '0.85rem', lineHeight: 1.6 }}>{n.desc}</p>
                  </div>
                </motion.div>
              )
            })}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: subText }}>No notices found matching your search.</div>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
