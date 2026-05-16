import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const stats = [
    { label: 'Global Students', value: '15K+', size: 'large', color: 'var(--accent)' },
    { label: 'Placement Rate', value: '98%', size: 'small', color: '#fff' },
    { label: 'Expert Faculty', value: '120+', size: 'small', color: '#fff' },
    { label: 'Research Papers', value: '500+', size: 'wide', color: 'var(--accent-purple)' },
    { label: 'Campus Area', value: '100+ Acres', size: 'small', color: '#fff' },
    { label: 'Global Tie-ups', value: '50+', size: 'tall', color: '#fff' },
    { label: 'Annual Events', value: '30+', size: 'small', color: '#fff' },
  ];

  const courses = [
    { name: 'Engineering', icon: '⚛️', desc: 'Cutting-edge innovation in tech and sustainable systems.' },
    { name: 'AI & Data Science', icon: '🧠', desc: 'Shaping the digital frontier with advanced intelligence.' },
    { name: 'Business Management', icon: '📈', desc: 'Developing global leaders for the modern marketplace.' },
    { name: 'Pharmacy', icon: '💊', desc: 'Pioneering health research and clinical excellence.' },
    { name: 'Computer Apps', icon: '💻', desc: 'Elite software engineering and cybersecurity training.' },
    { name: 'Commerce', icon: '⚖️', desc: 'Mastering global finance and digital commerce.' },
  ];

  const experience = [
    { title: 'Smart Classrooms', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', size: 'large' },
    { title: 'Innovation Labs', img: '/lab.png', size: 'small' },
    { title: 'Digital Library', img: '/library.png', size: 'small' },
    { title: 'Elite Arena', img: '/sports.png', size: 'wide' },
  ];

  return (
    <main style={{ background: 'var(--bg-dark)' }}>
      {/* Cinematic Hero */}
      <section className="cinematic-hero">
        <motion.img 
          src="/hero.png" 
          className="hero-video-bg" 
          style={{ opacity: heroOpacity, scale: heroScale }}
          alt="Campus"
        />
        <div className="hero-gradient-overlay"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1, marginBottom: '30px' }}>
              Shaping the Future <br /> 
              <span className="playfair" style={{ color: 'var(--accent)', textShadow: '0 0 40px rgba(0, 212, 255, 0.4)' }}>Through Innovation.</span>
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto 50px', fontSize: '1.25rem', opacity: 0.8 }}>
              A premium institution focused on excellence, leadership, technology, and career success. Experience world-class education designed for the 2026 global landscape.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-lux btn-lux-primary">Explore Campus</button>
              <button className="btn-lux btn-lux-outline">Apply Admission</button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stat Reveal */}
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ position: 'absolute', bottom: '80px', left: 0, right: 0 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
            {['15K+ Students', '98% Placements', '120+ Faculty'].map((s, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{s.split(' ')[0]}</h4>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{s.split(' ')[1]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Premium Bento Stats */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800', fontSize: '0.8rem' }}>Excellence in Numbers</span>
            <h2 style={{ fontSize: '3.5rem', marginTop: '10px' }}>World-Class Impact.</h2>
          </div>
          
          <div className="bento-grid">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className={`bento-item ${stat.size}`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 style={{ fontSize: stat.size === 'large' ? '5rem' : '3rem', color: stat.color }}>{stat.value}</h3>
                <p style={{ color: 'white', opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial About Section */}
      <section className="section-padding" style={{ background: '#000814' }}>
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-image-container">
              <motion.img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" 
                className="editorial-img"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                viewport={{ once: true }}
                alt="Architecture"
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=600" 
                className="editorial-img editorial-img-offset"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                alt="Details"
              />
            </div>
            <div>
              <span style={{ color: 'var(--accent-purple)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>Legacy of 25 Years</span>
              <h2 style={{ fontSize: '4rem', margin: '20px 0 40px', lineHeight: 1.1 }}>Luxurious Education. <br />Global Standard.</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                At JSPM, we have redefined the academic experience. Our campus is a sanctuary of innovation, where modern architecture meets elite intellectual pursuit.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '50px' }}>
                <div>
                  <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px' }}>Global Vision</h4>
                  <p style={{ fontSize: '0.9rem' }}>Empowering the next generation of digital architects and industry pioneers.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px' }}>Elite Faculty</h4>
                  <p style={{ fontSize: '0.9rem' }}>Guided by researchers and scholars from top international universities.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src="/principal.png" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} alt="Director" />
                <div>
                  <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'white', marginBottom: '5px' }}>"Education is the most powerful weapon to change the world."</p>
                  <h5 style={{ margin: 0, color: 'var(--accent)' }}>Dr. S. K. Joshi</h5>
                  <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.5 }}>Executive Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Courses Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '4rem' }}>Elite Programs</h2>
            <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>Crafted for the leaders of tomorrow. Our curriculum merges deep theory with immersive practical application.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {courses.map((course, idx) => (
              <motion.div 
                key={idx} 
                className="bento-item"
                style={{ height: '350px', justifyContent: 'flex-start' }}
                whileHover={{ y: -10, borderColor: 'var(--accent-purple)' }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '30px' }}>{course.icon}</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>{course.name}</h3>
                <p style={{ fontSize: '1rem', opacity: 0.6 }}>{course.desc}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>
                  Explore Program <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Bento Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem' }}>Campus Experience</h2>
              <p style={{ opacity: 0.5 }}>Immerse yourself in a world-class academic environment.</p>
            </div>
            <button className="btn-lux btn-lux-outline">Virtual Tour</button>
          </div>
          
          <div className="bento-grid">
            {experience.map((ex, idx) => (
              <motion.div 
                key={idx} 
                className={`bento-item ${ex.size}`}
                style={{ padding: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={ex.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} alt={ex.title} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', display: 'flex', alignItems: 'flex-end', padding: '40px' }}>
                  <h3 style={{ margin: 0, fontSize: '2rem' }}>{ex.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Notice Board */}
      <section className="section-padding">
        <div className="container">
          <div className="notice-board-lux">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
              <div>
                <h2 style={{ fontSize: '3.5rem', lineHeight: 1 }}>Official <br />Notices</h2>
                <p style={{ marginTop: '30px' }}>Stay synchronized with the latest institutional milestones and academic updates.</p>
                <div style={{ marginTop: '50px' }}>
                  <button className="btn-lux btn-lux-primary" style={{ width: '100%' }}>Student Portal Login</button>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[1, 2, 3].map((n) => (
                  <motion.div 
                    key={n} 
                    style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '30px', alignItems: 'center' }}
                    whileHover={{ background: 'rgba(255,255,255,0.05)', x: 10 }}
                  >
                    <div style={{ width: '60px', height: '60px', background: 'var(--accent)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>2{n}</span>
                      <span style={{ fontSize: '0.6rem', fontWeight: '700' }}>MAY</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{n === 1 ? 'Global AI Summit 2026 Registration' : n === 2 ? 'Admissions Open for Engineering 2026' : 'Annual Convocation Ceremony'}</h4>
                      <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Announcement ID: #JSPM-2026-0{n}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Ultra Premium */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '4rem' }}>Student Voices</h2>
            <p>Exceptional journeys from our global alumni.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            {[1, 2, 3].map((t) => (
              <motion.div 
                key={t} 
                className="bento-item"
                style={{ height: 'auto', padding: '50px', background: 'rgba(255,255,255,0.02)' }}
                whileHover={{ y: -10 }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '30px' }}>“</div>
                <p style={{ fontSize: '1.1rem', color: 'white', opacity: 0.8, fontStyle: 'italic', marginBottom: '40px' }}>
                  The environment at JSPM is unparalleled. The integration of modern technology with deep academic rigour prepared me for the highest levels of global competition.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--accent), var(--accent-purple))' }}></div>
                  <div>
                    <h5 style={{ margin: 0 }}>Student Graduate {t}</h5>
                    <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5 }}>Software Engineer @ Microsoft</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Placements */}
      <section className="section-padding" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '4.5rem', lineHeight: 1 }}>Global Career <br />Acceleration.</h2>
              <p style={{ marginTop: '30px', fontSize: '1.2rem' }}>We don't just find jobs; we build careers in the world's most innovative organizations.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
                <div>
                  <h3 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>18 LPA</h3>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem' }}>Highest Package 2025</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '3.5rem', color: 'var(--accent-purple)' }}>500+</h3>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem' }}>Fortune 500 Recruiters</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {['GOOGLE', 'APPLE', 'META', 'AMAZON', 'TATA', 'MICROSOFT', 'TESLA', 'INTEL', 'ADOBE'].map((logo, idx) => (
                <div key={idx} style={{ height: '120px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', letterSpacing: '2px', fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Lux Gallery */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '4rem' }}>Campus Lens</h2>
          </div>
          <div className="masonry-lux">
            <div className="masonry-lux-item"><img src="/hero.png" alt="1" /></div>
            <div className="masonry-lux-item"><img src="/library.png" alt="2" /></div>
            <div className="masonry-lux-item"><img src="/lab.png" alt="3" /></div>
            <div className="masonry-lux-item"><img src="/sports.png" alt="4" /></div>
            <div className="masonry-lux-item"><img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" alt="5" /></div>
            <div className="masonry-lux-item"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" alt="6" /></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
