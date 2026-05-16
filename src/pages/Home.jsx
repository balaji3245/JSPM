import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const stats = [
    { label: 'Enrolled Students', value: '10K+', icon: '👥' },
    { label: 'Degrees Offered', value: '45+', icon: '🎓' },
    { label: 'Campus Placement', value: '95%', icon: '💼' },
    { label: 'Expert Faculty', value: '250+', icon: '🏫' },
  ];

  const courses = [
    { title: 'Engineering & Tech', desc: 'B.Tech and M.Tech programs in Computer Science, Mechanical, Civil, and more.', icon: '⚙️' },
    { title: 'Applied Sciences', desc: 'In-depth research and learning in Physics, Chemistry, and Biological Sciences.', icon: '🔬' },
    { title: 'Management Studies', desc: 'MBA and BBA programs focused on global leadership and entrepreneurship.', icon: '📊' },
    { title: 'Computer Applications', desc: 'Professional training in Software Development and Data Science.', icon: '💻' },
    { title: 'Pharmacy', desc: 'Comprehensive programs in Pharmaceutical Sciences and Research.', icon: '💊' },
    { title: 'Commerce & Arts', desc: 'Foundation and advanced courses in accounting, finance, and humanities.', icon: '🏛️' },
  ];

  const features = [
    { title: 'Experienced Faculty', desc: 'Learn from industry veterans and PhD scholars with decades of experience.', icon: '👨‍🏫' },
    { title: 'Advanced Laboratories', desc: 'State-of-the-art labs equipped with the latest technology for practical learning.', icon: '🧪' },
    { title: 'Placement Support', desc: 'Dedicated training and placement cell with 200+ global recruiters.', icon: '🚀' },
    { title: 'Digital Library', desc: 'Access to thousands of e-journals, books, and international databases.', icon: '📚' },
  ];

  return (
    <main>
      {/* Professional Hero Section */}
      <section className="academic-hero" style={{ backgroundImage: 'url("/hero.png")' }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Building Future Leaders <br /> Through Quality Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              JSPM University is dedicated to academic excellence, research-driven learning, and providing a platform for holistic student development.
            </motion.p>
            <motion.div 
              style={{ display: 'flex', gap: '20px' }}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="btn-academic btn-academic-primary">Apply Admission 2026</button>
              <button className="btn-academic btn-academic-outline" style={{ borderColor: 'white', color: 'white' }}>Explore Courses</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Stats Grid */}
      <section style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="info-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="info-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Professional Two Column */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <img src="/hero.png" alt="Campus" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
            </div>
            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Welcome to JSPM</span>
              <h2 style={{ fontSize: '2.5rem', margin: '15px 0 25px' }}>Excellence In Academic Pursuits</h2>
              <p style={{ marginBottom: '25px' }}>
                With a legacy of over two decades, JSPM has established itself as a premier institution for higher learning in India. Our campus provides a conducive environment for intellectual growth and professional development.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.9rem' }}>To be a globally recognized center of excellence in professional education and research.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Our Mission</h4>
                  <p style={{ fontSize: '0.9rem' }}>Providing affordable quality education and fostering an environment for innovation.</p>
                </div>
              </div>

              <div style={{ padding: '30px', background: 'white', borderRadius: 'var(--radius-md)', borderLeft: '6px solid var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"We believe in nurturing minds that will shape the future of our nation through ethics and innovation."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src="/principal.png" alt="Principal" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                  <div>
                    <h5 style={{ margin: 0 }}>Dr. S. K. Joshi</h5>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vice Chancellor & Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Academic Departments</h2>
            <p>Our departments are led by distinguished faculty members committed to providing a balanced academic and practical education.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {courses.map((course, idx) => (
              <div key={idx} className="academic-card">
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{course.icon}</div>
                <h3 style={{ marginBottom: '15px' }}>{course.title}</h3>
                <p style={{ marginBottom: '30px' }}>{course.desc}</p>
                <button className="btn-academic btn-academic-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <h2 style={{ color: 'white' }}>Campus Excellence</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>World-class infrastructure designed to support your academic and personal growth.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {features.map((f, idx) => (
              <div key={idx} style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{f.icon}</div>
                <h4 style={{ color: 'white', marginBottom: '15px' }}>{f.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Important Announcements</h2>
              <p style={{ marginBottom: '40px' }}>Stay updated with the latest institutional notices, examination circulars, and event registrations.</p>
              <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ marginBottom: '15px' }}>Academic Calendar 2026</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>Download the complete academic calendar for the upcoming semester including holidays and exam dates.</p>
                <button className="btn-academic btn-academic-primary">Download PDF</button>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} style={{ padding: '25px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '20px', alignItems: 'center', transition: 'var(--transition)' }}>
                    <div style={{ padding: '10px', background: 'var(--primary)', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '60px' }}>
                      <div style={{ fontWeight: '800' }}>2{n}</div>
                      <div style={{ fontSize: '0.65rem' }}>MAY</div>
                    </div>
                    <div>
                      <h5 style={{ fontSize: '1rem', marginBottom: '5px' }}>{n === 1 ? 'Admissions Open for Engineering 2026' : n === 2 ? 'Semester Examination Results Declared' : n === 3 ? 'Seminar on Quantum Computing' : 'Annual Sports Meet 2026'}</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Circular ID: #JSPM-AN-0{n}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>View All Notices →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life / Gallery */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Campus Experience</h2>
            <p>Our 100-acre campus is a vibrant community of students and scholars from across the country.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {['/hero.png', '/library.png', '/lab.png', '/sports.png', '/hero.png', '/library.png'].map((img, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', height: '250px' }}>
                <img src={img} alt="Campus" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div>
              <h2>Global Placements</h2>
              <p style={{ marginTop: '20px' }}>Our graduates are placed in leading Fortune 500 companies globally, with a consistent track record of excellence.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>18 LPA</h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Highest Package Offered</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>200+</h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Hiring Partners</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {['GOOGLE', 'APPLE', 'TATA', 'INFOSYS', 'AMAZON', 'MICROSOFT'].map((logo, idx) => (
                <div key={idx} style={{ height: '80px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)' }}>
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
