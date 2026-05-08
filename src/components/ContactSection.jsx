import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function ContactSection({ darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const bg = darkMode ? '#0A0514' : 'var(--pearl)'
  const cardBg = darkMode ? '#170B38' : 'white'
  const textColor = darkMode ? '#EDE9F8' : '#0F0520'
  const subText = darkMode ? '#9D89C4' : '#6B5E8A'
  const border = darkMode ? '#2A1A4A' : '#E8E0F0'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section ref={ref} style={{ background: bg, padding: '88px 28px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-badge">Get In Touch</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: textColor, marginBottom: 12 }}>
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p style={{ color: subText, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Reach out to us for admissions, enquiries, or any other information about the college.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 36, alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div style={{ background: 'linear-gradient(135deg, #1E0A4C, #2D1270)', borderRadius: 24, padding: 36, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'rgba(217,119,6,0.15)' }} />
              <h3 style={{ color: 'white', fontWeight: 800, marginBottom: 28, fontSize: '1.2rem' }}>Contact Information</h3>
              {[
                { icon: MapPin, label: 'Address', text: 'MIDC Area, Latur - 413531, Maharashtra, India', color: '#FCD34D' },
                { icon: Phone, label: 'Phone', text: '+91 2382 255555 / +91 2382 266666', color: '#8B5CF6' },
                { icon: Mail, label: 'Email', text: 'info@svclatur.edu.in', color: '#34D399' },
              ].map(({ icon: Icon, label, text, color }) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: 4, letterSpacing: '0.05em' }}>{label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.6 }}>{text}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 12, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontWeight: 700, letterSpacing: '0.05em' }}>OFFICE HOURS</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Mon – Fri: 10:00 AM – 5:30 PM<br />
                  Saturday: 10:00 AM – 1:00 PM
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{ borderRadius: 20, overflow: 'hidden', height: 200, background: 'linear-gradient(135deg, #2D1270, #1E0A4C)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, border: `1px solid ${border}` }}>
              <MapPin size={32} color="#D97706" />
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 700 }}>MIDC Area, Latur</span>
              <a href="https://www.google.com/maps/search/Swami+Vivekanand+College+MIDC+Latur" target="_blank" rel="noreferrer"
                style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)', color: '#FCD34D', padding: '8px 20px', borderRadius: 10, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700 }}>
                View on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ background: cardBg, borderRadius: 24, padding: 40, border: `1px solid ${border}`, boxShadow: darkMode ? 'none' : '0 8px 32px rgba(30,10,76,0.06)' }}
          >
            <h3 style={{ fontWeight: 800, color: textColor, marginBottom: 28, fontSize: '1.2rem' }}>Send us a Message</h3>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '60px 20px' }}
              >
                <CheckCircle size={56} color="#059669" style={{ margin: '0 auto 20px' }} />
                <div style={{ fontWeight: 800, color: textColor, fontSize: '1.2rem', marginBottom: 10 }}>Message Sent!</div>
                <div style={{ color: subText }}>We'll get back to you within 24 hours.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-grid">
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: subText, display: 'block', marginBottom: 8 }}>Full Name *</label>
                    <input className="form-input" type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: subText, display: 'block', marginBottom: 8 }}>Email *</label>
                    <input className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-grid">
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: subText, display: 'block', marginBottom: 8 }}>Phone</label>
                    <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: subText, display: 'block', marginBottom: 8 }}>Subject *</label>
                    <select className="form-input" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                      <option value="">Select subject</option>
                      <option>Admission Enquiry</option>
                      <option>Course Information</option>
                      <option>Scholarship</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: subText, display: 'block', marginBottom: 8 }}>Message *</label>
                  <textarea className="form-input" rows={5} placeholder="Write your message..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>
                <motion.button
                  type="submit"
                  className="btn-purple"
                  style={{ width: '100%', padding: '15px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;}}
        @media(max-width:540px){.form-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  )
}
