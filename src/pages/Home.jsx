import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const stats = [
    { number: '10K+', label: 'Global Students', color: '#00d4ff' },
    { number: '500+', label: 'Annual Placements', color: '#ffd700' },
    { number: '50+', label: 'Expert Programs', color: '#ff00ff' },
    { number: 'A++', label: 'NAAC Accredited', color: '#00ff88' },
  ];

  const courses = [
    { title: 'Engineering & Tech', icon: '⚡', desc: 'Next-gen engineering programs in AI, Robotics, and Sustainable Infrastructure.' },
    { title: 'Modern Sciences', icon: '🧬', desc: 'Pioneering research in Biotechnology, Quantum Physics, and Data Science.' },
    { title: 'Global Business', icon: '🏛️', desc: 'MBA and BBA programs focused on international leadership and digital commerce.' },
    { title: 'Creative Arts', icon: '🎭', desc: 'Developing human-centric solutions through Design, Media, and Humanities.' },
    { title: 'Computer Apps', icon: '🚀', desc: 'Elite training in Full-Stack Dev, Cybersecurity, and Cloud Computing.' },
    { title: 'Law & Governance', icon: '⚖️', desc: 'Shaping future leaders in global law, ethics, and public administration.' },
  ];

  const galleryItems = [
    { img: '/library.png', title: 'Digital Library', size: 'large' },
    { img: '/lab.png', title: 'Advanced Research Lab', size: 'small' },
    { img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=600', title: 'Cultural Nexus', size: 'small' },
    { img: '/sports.png', title: 'Elite Sports Arena', size: 'small' },
    { img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600', title: 'Student Innovation Hub', size: 'small' },
    { img: '/hero.png', title: 'Main Quadrangle', size: 'large' },
  ];

  const testimonials = [
    { text: "The global exposure and research-driven curriculum at JSPM changed my perspective on engineering.", name: "Aarav Sharma", year: "Software Engineer @ Google", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
    { text: "Exceptional mentors and state-of-the-art facilities. It's more than a college; it's an ecosystem.", name: "Esha Gupta", year: "Business Analyst @ McKinsey", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    { text: "Winning the national hackathon with college support was the highlight of my academic journey.", name: "Karan Johar", year: "Data Scientist @ Amazon", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  ];

  const extraTestimonials = [
    { text: "The campus life is vibrant and the sports facilities are truly world-class.", name: "Sanya Malhotra", year: "Marketing Lead @ Zomato", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" },
    { text: "I found my true passion in research here, thanks to the interdisciplinary approach.", name: "Neil Nitin", year: "PhD Scholar @ MIT", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url("/hero.png")', backgroundSize: 'cover' }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Defining the Future of <br /> <span style={{ color: 'var(--accent)' }}>Higher Education.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience a world-class academic environment designed for the next generation of global leaders, innovators, and thinkers.
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ display: 'flex', gap: '20px' }}
            >
              <button className="btn btn-accent">Apply for Admission</button>
              <button className="btn btn-outline-white">Explore Programs</button>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item-glass" style={{ animationDelay: `${idx * 0.5}s` }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: stat.color }}>{stat.number}</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements / Trust Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="trust-grid">
            <div className="achievement-card">
              <h3 className="serif" style={{ fontSize: '2.5rem', color: 'var(--royal)' }}>#1</h3>
              <p style={{ fontWeight: '600' }}>Private University in Region</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Education World Rankings 2026</p>
            </div>
            <div className="achievement-card">
              <h3 className="serif" style={{ fontSize: '2.5rem', color: 'var(--royal)' }}>A++</h3>
              <p style={{ fontWeight: '600' }}>NAAC Grade</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Highest Accreditation Score</p>
            </div>
            <div className="achievement-card">
              <h3 className="serif" style={{ fontSize: '2.5rem', color: 'var(--royal)' }}>500+</h3>
              <p style={{ fontWeight: '600' }}>Industry Partners</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Global Placement Network</p>
            </div>
            <div className="achievement-card">
              <h3 className="serif" style={{ fontSize: '2.5rem', color: 'var(--royal)' }}>20+</h3>
              <p style={{ fontWeight: '600' }}>Global MoUs</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>International Exchange Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Collage Layout */}
      <section className="section-padding">
        <div className="container">
          <div className="about-split">
            <div className="image-collage">
              <div className="collage-item collage-1">
                <img src="/hero.png" alt="Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="collage-item collage-2">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Students" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="about-text-content">
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Establishment 1998</span>
              <h2 className="serif" style={{ fontSize: '3rem', margin: '15px 0 30px' }}>Excellence Beyond Boundaries.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '30px' }}>
                At JSPM, we believe that education is not just about degrees, but about discovering your potential. Our handcrafted curriculum merges traditional academic rigour with modern industry requirements.
              </p>
              
              <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Vision</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>To be a beacon of innovation and ethical leadership in global higher education.</p>
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Mission</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Empowering students through interdisciplinary learning and cutting-edge research.</p>
                </div>
              </div>

              <div className="principal-message" style={{ display: 'flex', gap: '20px', background: 'var(--bg-light)', padding: '30px', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--primary)' }}>
                <img src="/principal.png" alt="Principal" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-body)', marginBottom: '10px' }}>"We don't just teach subjects; we build characters and inspire change-makers."</p>
                  <h5 className="serif" style={{ margin: 0 }}>Dr. S. K. Joshi</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Vice Chancellor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Premium Cards */}
      <section className="section-padding" style={{ background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="serif" style={{ color: 'white', fontSize: '3.5rem' }}>Elite Programs</h2>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '20px auto 0' }}>Curated academic paths designed to prepare you for the careers of 2030 and beyond.</p>
          </div>
          <div className="modern-grid">
            {courses.map((course, idx) => (
              <div key={idx} className="modern-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{course.icon}</div>
                <h3 className="serif" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>{course.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>{course.desc}</p>
                <button className="btn" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '8px 20px' }}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Layout */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <h2 className="serif" style={{ fontSize: '3rem' }}>Campus Life in Focus</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Experience the energy and vibrancy of our world-class campus.</p>
            </div>
            <button className="btn btn-outline">View Full Gallery</button>
          </div>
          <div className="masonry">
            {galleryItems.map((item, idx) => (
              <div key={idx} className={`masonry-item ${item.size === 'large' ? 'large' : ''}`} style={{ gridColumn: item.size === 'large' ? 'span 2' : 'span 1', height: '350px' }}>
                <img src={item.img} alt={item.title} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                  <h4 className="serif" style={{ margin: 0, fontSize: '1.4rem' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board - Modern Official */}
      <section className="section-padding dark-section">
        <div className="container">
          <div className="about-split">
            <div>
              <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '30px' }}>Official <br />Announcements</h2>
              <p style={{ opacity: 0.7, marginBottom: '40px' }}>Stay updated with the latest institutional notices, examination schedules, and academic circulars.</p>
              <button className="btn btn-accent">Visit Student Portal</button>
            </div>
            <div className="notice-glass">
              {[1, 2, 3].map((n) => (
                <div key={n} style={{ padding: '25px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '25px', alignItems: 'center' }}>
                  <div style={{ background: 'var(--accent)', color: 'var(--primary)', padding: '10px', borderRadius: '8px', textAlign: 'center', minWidth: '60px' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>2{n}</div>
                    <div style={{ fontSize: '0.6rem', fontWeight: '700' }}>MAY</div>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>{n === 1 ? 'Admissions Open for PhD 2026' : n === 2 ? 'Semester Exam Results Declared' : 'International Seminar on Tech'}</h4>
                    <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Updated on 10th May 2026 • Circular No. 421</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Glassmorphism */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="serif" style={{ fontSize: '3.5rem' }}>Our Alumni Network</h2>
            <p style={{ color: 'var(--text-muted)' }}>Stories of success from across the globe.</p>
          </div>
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))' }}>
            <AnimatePresence>
              {(showAllReviews ? [...testimonials, ...extraTestimonials] : testimonials).map((t, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="achievement-card" 
                  style={{ textAlign: 'left', background: 'white' }}
                >
                  <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-body)', marginBottom: '30px' }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={t.img} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h5 className="serif" style={{ margin: 0, fontSize: '1.1rem' }}>{t.name}</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{t.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {!showAllReviews && (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button className="btn btn-primary" onClick={() => setShowAllReviews(true)}>View More Reviews</button>
            </div>
          )}
        </div>
      </section>

      {/* Placement Section - Modern Infographic */}
      <section className="section-padding dark-section" style={{ background: '#000814' }}>
        <div className="container">
          <div className="infographic">
            <div className="info-item">
              <h3>18 LPA</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Highest Package Offered</p>
            </div>
            <div className="info-item">
              <h3>98%</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Placement Record 2025</p>
            </div>
            <div className="info-item">
              <h3>200+</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fortune 500 Recruiters</p>
            </div>
            <div className="info-item">
              <h3>$1M</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Startup Funding</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center', filter: 'brightness(0) invert(1)', opacity: 0.3 }}>
            <h2 className="serif">GOOGLE</h2>
            <h2 className="serif">MICROSOFT</h2>
            <h2 className="serif">TATA</h2>
            <h2 className="serif">INFOSYS</h2>
            <h2 className="serif">AMAZON</h2>
            <h2 className="serif">APPLE</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
