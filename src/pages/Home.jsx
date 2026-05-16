import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const stats = [
    { number: '5000+', label: 'Students' },
    { number: '250+', label: 'Faculty' },
    { number: '95%', label: 'Placements' },
    { number: '40+', label: 'Courses Offered' },
  ];

  const courses = [
    { title: 'Engineering', icon: '⚙️', desc: 'Cutting-edge engineering programs in various disciplines including CS, ME, and Civil.' },
    { title: 'Science', icon: '🔬', desc: 'In-depth scientific research and education in Physics, Chemistry, and Biology.' },
    { title: 'Commerce', icon: '📈', desc: 'Comprehensive business and accounting studies for the modern corporate world.' },
    { title: 'Arts', icon: '🎨', desc: 'Developing creative thinking through Humanities, Literature, and Social Sciences.' },
    { title: 'Management', icon: '💼', desc: 'Preparing future leaders with specialized MBA and BBA programs.' },
    { title: 'Computer Applications', icon: '💻', desc: 'Focused training in software development, data science, and IT management.' },
  ];

  const features = [
    { title: 'Experienced Faculty', icon: '👨‍🏫', desc: 'Learn from industry veterans and PhD scholars.' },
    { title: 'Modern Labs', icon: '🧪', desc: 'State-of-the-art facilities for practical learning.' },
    { title: 'Rich Library', icon: '📚', desc: 'Access to thousands of physical and digital resources.' },
    { title: 'Placements', icon: '🏢', desc: 'Strong industry ties for excellent career starts.' },
    { title: 'Scholarships', icon: '🎓', desc: 'Financial support for meritorious and needy students.' },
    { title: 'Sports Facilities', icon: '⚽', desc: 'World-class infrastructure for physical excellence.' },
  ];

  const notices = [
    { date: '20', month: 'May', title: 'Admissions Open 2026-27', desc: 'Applications are invited for UG and PG courses.' },
    { date: '15', month: 'May', title: 'Final Semester Examination Schedule', desc: 'The timetable for all departments has been released.' },
    { date: '10', month: 'May', title: 'International Conference on AI', desc: 'Join us for a two-day workshop on emerging tech.' },
    { date: '05', month: 'May', title: 'Placement Drive: Tech Mahindra', desc: 'Registration starts for final year students.' },
  ];

  const faculty = [
    { name: 'Dr. Rajesh Kumar', dept: 'Computer Science', qual: 'Ph.D in Machine Learning', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dr. Anita Sharma', dept: 'Management', qual: 'Ph.D in Organizational Behavior', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Prof. Vikram Singh', dept: 'Engineering', qual: 'M.Tech in Structural Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dr. Sunita Patel', dept: 'Science', qual: 'Ph.D in Molecular Biology', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
  ];

  const testimonials = [
    { text: "JSPM provided me with the perfect platform to grow both academically and personally. The faculty is incredibly supportive.", name: "Rahul Deshmukh", year: "Batch 2024", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
    { text: "The state-of-the-art labs and industry-aligned curriculum helped me secure a placement at a top MNC.", name: "Priya Chavan", year: "Batch 2023", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    { text: "Campus life here is vibrant. The balanced focus on academics and extra-curriculars is truly unique.", name: "Siddharth Malhotra", year: "Batch 2025", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url("/hero.png")' }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content animate-up">
            <h1>Empowering Students Through Quality Education</h1>
            <p>A premier institution dedicated to academic excellence, innovation, and holistic student development. Shaping the leaders of tomorrow with value-based education.</p>
            <div className="hero-btns">
              <button className="btn btn-secondary">Apply Now</button>
              <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Explore Courses</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card animate-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate-up">
              <img src="/hero.png" alt="College Campus" />
            </div>
            <div className="about-content animate-up">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <h2 className="serif">Welcome to JSPM College</h2>
                <div className="title-underline" style={{ margin: '10px 0' }}></div>
              </div>
              <p>Founded in 1998, JSPM College has been at the forefront of providing quality education in India. We believe in fostering an environment where curiosity is encouraged and excellence is celebrated.</p>
              
              <div className="about-tabs">
                <span className={`tab ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>Our Vision</span>
                <span className={`tab ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>Our Mission</span>
              </div>
              
              <div className="tab-content">
                {activeTab === 'vision' ? (
                  <p>To be a global leader in academic excellence, creating a knowledge-based society through innovation and ethical leadership.</p>
                ) : (
                  <p>To provide accessible, high-quality education that empowers students to reach their full potential and contribute meaningfully to society.</p>
                )}
              </div>

              <div className="principal-message">
                <img src="/principal.png" alt="Principal" className="principal-avatar" />
                <div>
                  <h4 className="serif">Dr. S. K. Joshi</h4>
                  <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>"Education is the most powerful weapon which you can use to change the world. We welcome you to our community."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding" style={{ background: '#fcfcfc' }}>
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Our Academic Departments</h2>
            <p>Explore our diverse range of undergraduate and postgraduate programs designed to meet industry standards.</p>
            <div className="title-underline"></div>
          </div>
          <div className="course-grid">
            {courses.map((course, idx) => (
              <div key={idx} className="course-card animate-up">
                <div className="course-icon">{course.icon}</div>
                <h3 className="serif">{course.title}</h3>
                <p>{course.desc}</p>
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Why Choose Our College?</h2>
            <p>We provide a comprehensive ecosystem for growth, combining tradition with modern technology.</p>
            <div className="title-underline"></div>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item animate-up">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4 className="serif">{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="section-padding notice-section">
        <div className="container">
          <div className="notice-container">
            <div className="notice-board animate-up">
              <h3 className="serif">Notice Board</h3>
              <div className="notice-list">
                {notices.map((notice, idx) => (
                  <div key={idx} className="notice-item">
                    <div className="notice-date">
                      {notice.date}
                      <span>{notice.month}</span>
                    </div>
                    <div className="notice-content">
                      <h4>{notice.title}</h4>
                      <p>{notice.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{ marginTop: '20px' }}>View All Notices</button>
            </div>
            
            <div className="event-sidebar animate-up">
              <h3 className="serif">Upcoming Events</h3>
              <div className="sidebar-event">
                <span className="event-tag">Academic</span>
                <h4 style={{ color: 'white' }}>Annual Convocation 2026</h4>
                <p style={{ fontSize: '0.85rem', opacity: '0.8' }}>June 15, 2026 • Main Auditorium</p>
              </div>
              <div className="sidebar-event">
                <span className="event-tag" style={{ background: '#A51C30' }}>Cultural</span>
                <h4 style={{ color: 'white' }}>Spring Fest: Utsav 2026</h4>
                <p style={{ fontSize: '0.85rem', opacity: '0.8' }}>June 28, 2026 • Campus Grounds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Distinguished Faculty</h2>
            <p>Our mentors bring years of academic and industrial expertise to the classroom.</p>
            <div className="title-underline"></div>
          </div>
          <div className="faculty-grid">
            {faculty.map((member, idx) => (
              <div key={idx} className="faculty-card animate-up">
                <img src={idx === 0 ? "/faculty1.png" : member.img} alt={member.name} className="faculty-img" />
                <div className="faculty-info">
                  <h4 className="serif">{member.name}</h4>
                  <p className="faculty-dept">{member.dept}</p>
                  <p className="faculty-qual">{member.qual}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <button className="btn btn-outline">View All Faculty</button>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="section-padding" style={{ background: '#fcfcfc' }}>
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Campus Life</h2>
            <p>A glimpse into the vibrant student life and infrastructure at JSPM.</p>
            <div className="title-underline"></div>
          </div>
          <div className="campus-gallery">
            <div className="gallery-item large animate-up">
              <img src="/library.png" alt="Library" />
              <div className="gallery-overlay">
                <h4 className="serif">Modern Library</h4>
                <p>24/7 access to physical and digital books.</p>
              </div>
            </div>
            <div className="gallery-item animate-up">
              <img src="/lab.png" alt="Lab" />
              <div className="gallery-overlay">
                <h4 className="serif">Science Labs</h4>
                <p>Equipped with latest research tools.</p>
              </div>
            </div>
            <div className="gallery-item animate-up">
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=400" alt="Cultural" />
              <div className="gallery-overlay">
                <h4 className="serif">Cultural Events</h4>
                <p>Celebrating diversity and talent.</p>
              </div>
            </div>
            <div className="gallery-item animate-up">
              <img src="/sports.png" alt="Sports" />
              <div className="gallery-overlay">
                <h4 className="serif">Sports Ground</h4>
                <p>Promoting health and teamwork.</p>
              </div>
            </div>
            <div className="gallery-item animate-up">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" alt="Cafeteria" />
              <div className="gallery-overlay">
                <h4 className="serif">Student Lounge</h4>
                <p>Spaces for collaboration and relaxation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">What Our Students Say</h2>
            <div className="title-underline"></div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card animate-up">
                <span className="quote-icon">"</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="author-img" />
                  <div className="author-info">
                    <h5 className="serif">{t.name}</h5>
                    <p>{t.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <button className="btn btn-outline">View More Reviews</button>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="placement-banner">
        <div className="container">
          <div className="placement-flex animate-up">
            <div>
              <h2 className="serif" style={{ color: 'white', marginBottom: '10px' }}>Global Career Opportunities</h2>
              <p style={{ opacity: '0.8' }}>We ensure our students are industry-ready with continuous training and placement support.</p>
            </div>
            <div className="placement-stats">
              <div className="placement-stat">
                <h3>12 LPA</h3>
                <p style={{ fontSize: '0.8rem' }}>Highest Package</p>
              </div>
              <div className="placement-stat">
                <h3>500+</h3>
                <p style={{ fontSize: '0.8rem' }}>Recruiters</p>
              </div>
            </div>
          </div>
          
          <div className="recruiter-logos animate-up">
            {/* Using text labels as placeholders for recruiter logos */}
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>GOOGLE</span>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>MICROSOFT</span>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>TATA</span>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>INFOSYS</span>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>WIPRO</span>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '800' }}>AMAZON</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
