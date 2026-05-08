import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  { step: '01', title: 'Fill Online Form', desc: 'Complete the online application form with your personal and academic details.' },
  { step: '02', title: 'Upload Documents', desc: 'Upload all required documents including mark sheets, certificates and photo.' },
  { step: '03', title: 'Pay Fees', desc: 'Pay the application fee online via UPI, Net Banking or Debit/Credit Card.' },
  { step: '04', title: 'Merit List', desc: 'Check merit list on the college website or notice board.' },
  { step: '05', title: 'Document Verification', desc: 'Visit college for original document verification on the scheduled date.' },
  { step: '06', title: 'Admission Confirmed', desc: 'Pay college fees and receive your admission confirmation letter.' },
]

const docs = ['10th Marksheet & Certificate', '12th Marksheet & Certificate', 'School Leaving Certificate', 'Caste Certificate (if applicable)', 'Income Certificate (for scholarship)', 'Aadhar Card', '4 Passport Size Photos', 'Migration Certificate (for PG)']

export default function Admissions({ darkMode }) {
  useEffect(() => { document.title = 'Admissions 2025-26 | SV College, MIDC, Latur' }, [])
  const bg = darkMode ? '#060d1a' : '#f8fafc'
  const cardBg = darkMode ? '#0a1628' : 'white'
  const textColor = darkMode ? '#f8fafc' : '#0a1628'
  const subText = darkMode ? '#94a3b8' : '#475569'
  const border = darkMode ? '#1a3a6c' : '#e2e8f0'

  return (
    <PageWrapper>
      <div style={{ background: 'linear-gradient(135deg, #0A1628, #0F2147)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span style={{ display: 'inline-block', background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)', color: '#FB923C', padding: '6px 16px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: 16 }}>
            🎓 ADMISSIONS OPEN 2025-26
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: 16 }}>
            Start Your Journey at <span className="gradient-text">SV College</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Applications are now open for all UG and PG programmes for the academic year 2025-26.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>Apply Online Now</button>
            <a href="#" style={{ padding: '14px 36px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: 8, color: 'white', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s', display: 'inline-block' }}>Download Prospectus</a>
          </div>
        </motion.div>
      </div>

      {/* Steps */}
      <section style={{ background: bg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-badge">How to Apply</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: textColor, marginBottom: 12 }}>Admission <span className="gradient-text">Process</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ background: cardBg, borderRadius: 16, padding: 28, border: `1px solid ${border}` }}
              >
                <div style={{ fontWeight: 900, fontSize: '2rem', color: 'rgba(249,115,22,0.2)', marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ fontWeight: 700, color: textColor, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: subText, fontSize: '0.87rem', lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section style={{ background: darkMode ? '#0a1628' : 'white', padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-badge">Documents</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: textColor }}>Required <span className="gradient-text">Documents</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {docs.map((doc, i) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, background: bg, padding: '14px 18px', borderRadius: 10, border: `1px solid ${border}` }}
              >
                <CheckCircle size={16} color="#10B981" />
                <span style={{ color: textColor, fontSize: '0.87rem', fontWeight: 500 }}>{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
