import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApprovalsSection from '../components/sections/ApprovalsSection';

const leadershipFullData = [
  {
    key: "chairman",
    id: "chairman-message",
    fallbackIds: [],
    theme: "chairman-theme",
    roleKicker: "Founder & Chairman",
    roleChipClass: "navy-gold",
    degreeClass: "amber",
    name: "Shri Chandrakant Gadaggi",
    degrees: "Founder & Chairman, Vasantha Group",
    trust: "Vasantha Group Educational Campus",
    subtrust: "SSVVES (R), Estd. 1984",
    milestonePill: "🌱 43 Years Serving Society (Rooted 1984)",
    milestoneClass: "gold",
    photo: "/images/chairman_dr_chandrakant_gaddagi_master.jpg?v=20261104_crisp",
    photoClass: "chairman-photo",
    borderClass: "gold-border",
    quoteClass: "gold",
    quote: "“Shri Chandrakant Gadaggi reflects with deep fulfillment on the four-decade journey of Vasantha Group of Education. The visionary seeds planted in 1984 have blossomed into a flourishing banyan tree, nurturing thousands of healthcare champions across Karnataka and the nation.”",
    previewText: "As the founding architect of Vasantha Group of Education, Shri Chandrakant Gadaggi extends heartfelt appreciation to the faculty, scholars, and healthcare partners who have propelled the campus toward excellence. His lifelong aspiration is realized as graduates launch distinguished medical careers and entrepreneurial healthcare initiatives.",
    paragraphs: [
      "Under the stewardship of Shri Chandrakant Gadaggi, the management is steadfast in empowering students to transform community health through rigorous inquiry, advanced research incubation facilities, and enduring industry-academic partnerships.",
      "His primary objective has consistently focused on preparing youth as ethical caregivers and principled leaders who embody compassion, empathy, and professional integrity throughout their careers across the global healthcare landscape.",
      "Through strategic affiliations with premier multi-speciality hospitals and specialized diagnostic laboratories established under his guidance, students develop exceptional clinical acumen and bedside mastery that distinguish them nationally and internationally."
    ],
    highlights: [
      {
        icon: "🌱",
        title: "43 Years Legacy",
        sub: "Rooted in 1984 in Bidar"
      },
      {
        icon: "🔬",
        title: "Research & Incubation",
        sub: "Modern labs & clinical ties"
      },
      {
        icon: "🤝",
        title: "Ethical Leadership",
        sub: "Values-driven education"
      }
    ],
    signature: {
      bless: "Institutional Vision & Guidance,",
      name: "Shri Chandrakant Gadaggi",
      title: "Founder & Chairman, Vasantha Group",
      seal: "Vasantha Group"
    }
  },
  {
    key: "principal",
    id: "principal-message",
    fallbackIds: [],
    theme: "principal-theme",
    roleKicker: "College Principal",
    roleChipClass: "red-crimson",
    degreeClass: "crimson",
    name: "Dr. Chinamma C. Gadggi",
    degrees: "Principal, Smt. M. C. Vasantha College of Nursing",
    trust: "VASANTHA GROUP OF EDUCATION",
    subtrust: "Faculty of Nursing & Health Sciences",
    milestonePill: "❤️ Motto: “Services with a Smile”",
    milestoneClass: "crimson",
    photo: "/images/principal_dr_chinamma_gadggi_master.jpg?v=20261104_crisp",
    photoClass: "principal-photo",
    borderClass: "crimson-border",
    quoteClass: "crimson",
    quote: "“Dr. Chinamma C. Gadggi emphasizes that nursing excellence defines the heart of Vasantha educational institutions through empathetic patient care. Guided by the motto ‘Services with a Smile,’ nursing candidates are instilled with clinical precision, emotional resilience, and selfless devotion to healing.”",
    previewText: "Guiding Smt. M. C. Vasantha College of Nursing with distinguished clinical experience, Dr. Chinamma C. Gadggi warmly welcomes aspiring nursing leaders. She regards the nursing profession as a noble commitment to clinical competence, patient advocacy, and sustained contribution to societal wellbeing.",
    paragraphs: [
      "Dr. Gadggi ensures students receive systematic academic instruction paired with high-fidelity simulation training, followed by supervised bedside rotations across multispeciality partner hospitals and rural community health centres.",
      "Her educational philosophy emphasizes clinical diagnostic accuracy, patient safety protocols, empathetic communication, and strict professional ethics, shaping each nursing scholar into a dependable healthcare practitioner.",
      "Through her sustained mentorship, the college maintains a supportive environment of continuous learning where practical clinical wisdom equips students to excel in national and international healthcare environments."
    ],
    highlights: [
      {
        icon: "🩺",
        title: "Clinical Mastery",
        sub: "Direct bedside hospital rotations"
      },
      {
        icon: "❤️",
        title: "Compassionate Care",
        sub: "Motto: Services with a Smile"
      },
      {
        icon: "🏆",
        title: "Excellence & Ethics",
        sub: "State-recognized nursing credentials"
      }
    ],
    signature: {
      bless: "Clinical Mentorship & Academic Direction,",
      name: "Dr. Chinamma C. Gadggi",
      title: "Principal, Smt. M. C. Vasantha College of Nursing",
      seal: "Vasantha Nursing"
    }
  },
  {
    key: "vicePrincipal",
    id: "vice-principal-message",
    fallbackIds: [],
    theme: "vice-principal-theme",
    roleKicker: "Vice Principal",
    roleChipClass: "teal-emerald",
    degreeClass: "emerald",
    name: "Dr. Dinesh Joy",
    degrees: "Vice Principal, Smt. M. C. Vasantha College of Nursing",
    trust: "VASANTHA GROUP OF EDUCATION",
    subtrust: "Faculty of Nursing & Health Sciences",
    milestonePill: "🌟 Legacy of Care & Academic Leadership",
    milestoneClass: "emerald",
    photo: "/images/principal_dr_dinesh_joy_master.jpg?v=20261105_awards",
    photoClass: "principal-dinesh-photo",
    borderClass: "emerald-border",
    quoteClass: "emerald",
    quote: "“Dr. Dinesh Joy highlights that students at Vasantha Group of Education participate in an inspiring legacy of compassionate healthcare. The administration remains committed to providing structured mentorship throughout each student's academic path and career progression in nursing.”",
    previewText: "Dr. Dinesh Joy emphasizes the pivotal role that well-trained nurses play in modern healthcare systems. He fosters a dynamic and supportive learning environment at the college, enabling nursing candidates to cultivate clinical confidence, leadership capabilities, and specialized nursing skills.",
    paragraphs: [
      "Under his administrative guidance, student support extends beyond the lecture hall through structured faculty mentorship, career guidance cells, and established recruitment channels for domestic and international hospital placements.",
      "Dr. Joy oversees individual student tracking and clinical readiness programs, ensuring that every nurse develops bedside proficiency and ethical judgment required to deliver exemplary healthcare services across diverse clinical settings."
    ],
    highlights: [
      {
        icon: "🏥",
        title: "Dynamic Atmosphere",
        sub: "Supportive clinical environment"
      },
      {
        icon: "🌐",
        title: "Job Opportunities",
        sub: "Domestic & International career ties"
      },
      {
        icon: "🤝",
        title: "Holistic Mentorship",
        sub: "Co-curricular & community outreach"
      }
    ],
    signature: {
      bless: "Academic Administration & Guidance,",
      name: "Dr. Dinesh Joy",
      title: "Vice Principal, Smt. M. C. Vasantha College of Nursing",
      seal: "Vasantha Nursing"
    }
  },
  {
    key: "provost",
    id: "provost-message",
    fallbackIds: [
      "admission-coordinator-message",
      "coordinator-message"
    ],
    theme: "provost-theme",
    roleKicker: "Provost",
    roleChipClass: "royal-blue",
    degreeClass: "blue",
    name: "Dr. Manisha Patel",
    degrees: "Provost, Vasantha Group of Education",
    trust: "VASANTHA GROUP OF EDUCATION",
    subtrust: "Academic Administration & Research",
    milestonePill: "🎓 Academic Excellence & Governance",
    milestoneClass: "blue",
    photo: "/images/provost_dr_manisha_patel_master.jpg?v=20261104_crisp",
    photoClass: "provost-photo",
    borderClass: "blue-border",
    quoteClass: "blue",
    quote: "“Dr. Manisha Patel champions progressive pedagogy and modern academic governance across Vasantha Group of Education, ensuring that degree programs in Nursing, Pharmacy, and Allied Health Sciences maintain rigorous standards in research, clinical proficiency, and global competitiveness.”",
    previewText: "Serving as the Provost of Vasantha Group of Education, Dr. Manisha Patel oversees academic administration, research development, and institutional governance. Her leadership drives curriculum modernization, interdisciplinary healthcare studies, and structured student development initiatives across all colleges.",
    paragraphs: [
      "Dr. Patel ensures that the institution possesses state-of-the-art intellectual and physical infrastructure, establishing the campus as a premier center for higher education. An inviting environment enables qualified faculty to cultivate critical thinking, scientific curiosity, and holistic personal development among aspiring healthcare scholars.",
      "The Provost promotes contemporary teaching methodologies, collaborative research projects, hospital internship amalgamations, and community outreach programs. These measures produce graduates who are thoroughly prepared for clinical practice, higher academic pursuits, and patient-centered service.",
      "Under her administrative purview, students participate in comprehensive skill-enhancement initiatives, including scientific symposia, interview preparation, competitive sports, and community health interventions designed for well-rounded professional competence."
    ],
    highlights: [
      {
        icon: "🔬",
        title: "Profound Research",
        sub: "Allied Health, Nursing & Pharmacy"
      },
      {
        icon: "🌐",
        title: "Global Pedagogy",
        sub: "International competitive ecosystem"
      },
      {
        icon: "🌱",
        title: "Empowerment & Outreach",
        sub: "Inclusive sustainable education"
      }
    ],
    signature: {
      bless: "Academic Governance & Leadership,",
      name: "Dr. Manisha Patel",
      title: "Provost, Vasantha Group of Education",
      seal: "Vasantha Group"
    }
  }
];

export default function About() {
  const [selectedModalLeader, setSelectedModalLeader] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedModalLeader(null);
    };
    if (selectedModalLeader) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModalLeader]);

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="About Header">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>About</span>
              </div>
              <h1 className="banner-main-title">
                About <span className="gold-text">Vasantha Group of Education</span>
              </h1>
              <p className="banner-sub-p">
                A legacy of compassion, clinical skill and academic excellence in healthcare and nursing education.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/community_health.jpg"
                alt="Karnataka Nursing Students conducting Free Rural Community Health Camp with Kannada signage"
                className="img-pos-top"
                loading="eager"
              />
            </div>
            <div className="banner-ribbon-swoosh">
              <div className="ribbon-script-stack">
                Service<br />
                Skill<br />
                Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 3-COLUMNS ROW */}
      <section className="section-about-content" aria-label="About College Overview">
        <div className="container">
          <div className="about-tri-columns">
            {/* Column 1: Our College Text */}
            <article className="card-about-college-text">
              <div>
                <div className="tag-red-caps">OUR INSTITUTION</div>
                <h2 className="about-heading-title">
                  VASANTHA GROUP OF EDUCATION, <span>Bidar</span>
                </h2>
                <p className="about-body-text">
                  VASANTHA GROUP OF EDUCATION, serving society for over 43 years (seeds of an idea sown in 1984), is dedicated to providing quality healthcare and nursing education with a strong focus on practical training, ethical values and community service. Our institution aims to shape skilled, empathetic and confident healthcare champions who can contribute to better healthcare and a healthier society.
                </p>
              </div>
              <Link to="/courses" className="btn-know-more-red">
                <span>Know More About College</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </article>

            {/* Column 2: Campus Building Image */}
            <div className="about-building-photo-box">
              <img src="/images/college_building.jpg" alt="VASANTHA GROUP OF EDUCATION Campus Building" />
            </div>

            {/* Column 3: VASANTHA GROUP OF EDUCATION Card */}
            <article className="card-trust-center">
              <div className="card-trust-inner-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                <img
                  src="/images/logo.png"
                  alt="VASANTHA GROUP OF EDUCATION Logo"
                  className="trust-crest-icon"
                  style={{ display: 'block', margin: '0 auto 10px auto' }}
                />
                <h3 className="trust-title-text">VASANTHA GROUP OF EDUCATION</h3>
                <p className="trust-desc-p">
                  A premier educational institution serving for 43+ years, dedicated to quality education, incubation, community development and empowerment of youth through skill and value-based learning.
                </p>
              </div>
              <div className="trust-3-pills">
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span>Quality Education</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>Community Service</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>Value-Based Learning</span>
                </div>
              </div>
            </article>
          </div>

          {/* SECTION: PRESIDENT DESK & LEADERSHIP */}
          <section className="section-leadership-messages" id="leadership-messages" aria-label="Institutional Leadership Messages">
            {/* Leadership Section Header */}
            <div className="leadership-section-header">
              <div className="tag-red-caps">PRESIDENT DESK &amp; LEADERSHIP</div>
              <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
                Guiding Voices: <span>Perspectives from Institutional Leadership</span>
              </h2>
              <p className="leadership-subtext">
                Serving 43+ years with a firm foundation sown in 1984. The campus has grown as a sturdy banyan tree nurturing thousands of healthcare champions across India and globally.
              </p>
            </div>

            {/* 4-DIV PERFECTLY ALIGNED 2x2 LEADERSHIP GRID */}
            <div className="leadership-four-grid">
              {leadershipFullData.map((leader) => (
                <article
                  key={leader.id}
                  className={`leader-col-card ${leader.theme}`}
                  id={leader.id}
                >
                  {leader.fallbackIds.map(fid => (
                    <span key={fid} id={fid} style={{ position: 'absolute', top: '-30px' }} aria-hidden="true"></span>
                  ))}

                  {/* Profile Header Row */}
                  <div className="leader-col-header">
                    <div className={`leader-col-photo-frame ${leader.borderClass}`}>
                      <img
                        src={leader.photo}
                        alt={`${leader.name} - ${leader.roleKicker}`}
                        className={`leader-img ${leader.photoClass || ''}`}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div className="leader-col-meta">
                      <span className={`leader-role-chip ${leader.roleChipClass}`}>
                        {leader.roleKicker}
                      </span>
                      <h3 className="leader-col-name">{leader.name}</h3>
                      <span className={`leader-col-degree ${leader.degreeClass || 'blue'}`}>{leader.degrees}</span>
                      <p className="leader-col-trust">
                        {leader.trust}
                        <br />
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>{leader.subtrust}</span>
                      </p>
                      <span className={`leader-col-milestone-pill ${leader.milestoneClass}`}>
                        {leader.milestonePill}
                      </span>
                    </div>
                  </div>

                  {/* Featured Quote Callout */}
                  <blockquote className={`leader-col-quote ${leader.quoteClass}`}>
                    <p>{leader.quote}</p>
                    <cite>— {leader.name}, {leader.roleKicker}</cite>
                  </blockquote>

                  {/* Body Content & Preview */}
                  <div className="leader-col-body">
                    <p>{leader.previewText}</p>
                  </div>

                  {/* Read More Modal Action Button */}
                  <button
                    type="button"
                    className="btn-readmore-toggle"
                    onClick={() => setSelectedModalLeader(leader)}
                    aria-label={`Read full message from ${leader.name}`}
                  >
                    <span>Read Full Message</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </article>
              ))}
            </div>

            {/* FULL MESSAGE POPUP MODAL (Zero inline stretching & Zero empty white space) */}
            {selectedModalLeader && (
              <div
                className="leadership-modal-backdrop animate-fade-in"
                onClick={() => setSelectedModalLeader(null)}
                role="dialog"
                aria-modal="true"
                aria-label={`Official Message from ${selectedModalLeader.name}`}
              >
                <div className="leadership-modal-dialog" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="btn-modal-close"
                    onClick={() => setSelectedModalLeader(null)}
                    aria-label="Close modal"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  {/* Modal Header */}
                  <div className="leader-col-header modal-header-row">
                    <div className={`leader-col-photo-frame ${selectedModalLeader.borderClass}`}>
                      <img
                        src={selectedModalLeader.photo}
                        alt={selectedModalLeader.name}
                        className={`leader-img ${selectedModalLeader.photoClass || ''}`}
                      />
                    </div>
                    <div className="leader-col-meta">
                      <span className={`leader-role-chip ${selectedModalLeader.roleChipClass}`}>
                        {selectedModalLeader.roleKicker}
                      </span>
                      <h3 className="leader-col-name" style={{ fontSize: '1.35rem' }}>{selectedModalLeader.name}</h3>
                      <span className={`leader-col-degree ${selectedModalLeader.degreeClass || 'blue'}`}>{selectedModalLeader.degrees}</span>
                      <p className="leader-col-trust">
                        {selectedModalLeader.trust}
                        <br />
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>{selectedModalLeader.subtrust}</span>
                      </p>
                      <span className={`leader-col-milestone-pill ${selectedModalLeader.milestoneClass}`}>
                        {selectedModalLeader.milestonePill}
                      </span>
                    </div>
                  </div>

                  {/* Modal Quote Callout */}
                  <blockquote className={`leader-col-quote ${selectedModalLeader.quoteClass}`} style={{ margin: '18px 0' }}>
                    <p>{selectedModalLeader.quote}</p>
                    <cite>— {selectedModalLeader.name}, {selectedModalLeader.roleKicker}</cite>
                  </blockquote>

                  {/* Modal Full Letter Paragraphs */}
                  <div className="modal-letter-paragraphs">
                    <p className="modal-preview-lead">{selectedModalLeader.previewText}</p>
                    {selectedModalLeader.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* 3 Core Highlights */}
                  <div className="leader-mini-highlights-grid" style={{ margin: '20px 0' }}>
                    {selectedModalLeader.highlights.map((h, idx) => (
                      <div key={idx} className="leader-mini-pill">
                        <span className="mini-icon">{h.icon}</span>
                        <div>
                          <strong>{h.title}</strong>
                          <small>{h.sub}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Signature and Seal */}
                  <div className="leader-col-signature" style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px dashed #cbd5e1' }}>
                    <div>
                      <div className="sig-bless">{selectedModalLeader.signature.bless}</div>
                      <strong className="sig-name">{selectedModalLeader.signature.name}</strong>
                      <div className="sig-title">{selectedModalLeader.signature.title}</div>
                    </div>
                    <div className="sig-seal">
                      <img src="/images/logo.svg" alt="College Crest" />
                      <span>{selectedModalLeader.signature.seal}</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '26px', textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn-modal-done"
                      onClick={() => setSelectedModalLeader(null)}
                    >
                      Close Message
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* SECTION: FACULTY TEAM OF VASANTHA GROUP OF EDUCATION: DISCOVER HEALTH */}
          <section className="section-faculty-health-sciences" id="faculty-team" aria-label="Faculty Team of VASANTHA GROUP OF EDUCATION: Discover Health">
            <div className="faculty-health-card">
              <div className="faculty-health-grid">
                
                {/* Visual Col */}
                <div className="faculty-health-visual">
                  <img
                    src="/images/simulation_training_group.jpg"
                    alt="Karnataka Nursing Faculty Team and Students of VASANTHA GROUP OF EDUCATION"
                    className="faculty-team-photo"
                  />
                  <div className="faculty-photo-badge">
                    <span className="badge-pulse-green"></span>
                    <span>DISCOVER HEALTH • 21st Century Excellence</span>
                  </div>
                  <div className="faculty-disciplines-bar">
                    <span className="discipline-tag">🩺 Nursing</span>
                    <span className="discipline-tag">💊 Pharmacy</span>
                    <span className="discipline-tag">🏃 Physiotherapy</span>
                    <span className="discipline-tag">👶 Midwifery</span>
                  </div>
                </div>

                {/* Content Col */}
                <div className="faculty-health-content">
                  <div className="tag-red-caps">FACULTY TEAM OF VASANTHA GROUP OF EDUCATION</div>
                  <h2 className="faculty-section-title">
                    Discover Health: <span>Multidisciplinary Healthcare Education</span>
                  </h2>
                  <p className="faculty-lead-p">
                    The Faculty of Health Sciences aims to provide a healthy future to the upcoming generations with the help of multidisciplinary education and research that covers both practical as well as theoretical aspects. The programmes are designed considering the revolutionary changes and needs of the 21st century. We focus on various disciplines of Pharmacy, Physiotherapy, Nursing and Midwifery, etc.
                  </p>
                  <p className="faculty-body-p">
                    The clinical practices and their adaptation through the means of clinical training, tie-ups, training, and research throws a significant impact in integrating the best practices to solve modern healthcare problems. The commitment to sheer learning and dedication to excellence hold the utmost importance and is delivered through our learned faculty members, and national as well as international experts, with hospital tie-ups that nurture the practical experiences. Such experiential educational opportunities are a stepping stone towards learning beyond classrooms.
                  </p>
                  <p className="faculty-body-p">
                    The Faculty of Health Sciences strive to make a remarkable impact in the future of healthcare of the country. With hands-on experiences and holistic syllabus can boost the mindset of the students, hereby, equipping them with the right resources and learnings to create an ecosystem of professional healthcare.
                  </p>

                  {/* Highlights Pillars Strip */}
                  <div className="faculty-pillars-strip">
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Multidisciplinary Research &amp; Holistic Programs (Nursing, Pharmacy, Physiotherapy &amp; Midwifery)</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Oxylife Hospital – 50-Bedded Hospital Connected with Vasantha College of Nursing (Medical Laboratory, CT Scan Center &amp; Cancer Diagnostic Center)</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Experiential Hospital Training, Reputed Clinical Tie-ups &amp; Beyond-the-Classroom Learning</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Learned Faculty Members, National &amp; International Healthcare Experts</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 2: VISION & MISSION */}
          <div className="vision-mission-row">
            <div className="vm-box peach">
              <div className="vm-icon-bubble-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="vm-title-h3">Our Vision</h3>
                <p className="vm-desc-p">
                  To be a leading institution in nursing education, known for academic excellence, quality clinical training and the development of compassionate healthcare professionals who serve society with dedication.
                </p>
              </div>
            </div>

            <div className="vm-box sky">
              <div className="vm-icon-bubble-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="vm-title-h3">Our Mission</h3>
                <p className="vm-desc-p">
                  To provide value-based nursing education, practical learning opportunities and a supportive environment that empowers students to become skilled, ethical and service-minded nursing professionals.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: WHY CHOOSE US */}
          <h2 className="section-title-styled">
            Why Choose <span>VASANTHA GROUP OF EDUCATION?</span>
          </h2>

          <div className="why-choose-4-grid">
            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="why-card-title">Experienced Faculty</div>
              <div className="why-card-desc">Learn from qualified and dedicated faculty members.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l8-4v18"></path>
                  <path d="M19 21V11l-6-4"></path>
                </svg>
              </div>
              <div className="why-card-title">Modern Learning Facilities</div>
              <div className="why-card-desc">Computer lab, library, laboratories and more.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"></path>
                </svg>
              </div>
              <div className="why-card-title">Practical Clinical Training</div>
              <div className="why-card-desc">Hands-on experience in well-equipped hospitals.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="why-card-title">Student Support</div>
              <div className="why-card-desc">Guidance for academic, personal and career growth.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OFFICIAL STATUTORY APPROVALS & RECOGNITIONS */}
      <ApprovalsSection />
    </main>
  );
}
