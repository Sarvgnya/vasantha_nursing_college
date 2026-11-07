import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const leadershipData = [
  {
    id: 'chairman',
    roleKicker: 'Founder & Chairman',
    roleChipClass: 'navy-gold',
    name: 'Shri Chandrakant Gadaggi',
    degrees: 'Founder & Chairman, Vasantha Group of Education',
    designation: 'Vasantha Group of Education',
    milestonePill: '🌱 43 Years Serving Society (1984)',
    milestoneClass: 'gold',
    photo: '/images/chairman_dr_chandrakant_gaddagi_master.jpg?v=20261104_crisp',
    alt: 'Shri Chandrakant Gadaggi - Founder & Chairman',
    photoClass: 'chairman-photo',
    cardClass: 'chairman-card',
    quoteBoxBorder: '#f59e0b',
    quoteBoxBg: '#fffbeb',
    quoteIconColor: '#d97706',
    quoteTextColor: '#78350f',
    quote:
      '“Shri Chandrakant Gadaggi reflects with deep fulfillment on the four-decade journey of Vasantha Group of Education. The visionary foundation established in 1984 has grown into a sturdy institution nurturing thousands of accomplished healthcare leaders across the nation.”',
    pillars: ['Incubation Center & Research', 'Industrial & Academic Tie-ups'],
    actionLink: '/about#chairman-message',
    actionClass: 'chairman',
    actionText: "Read Chairman's Vision",
    actionAria: "Read Chairman Shri Chandrakant Gadaggi's profile and message"
  },
  {
    id: 'principal',
    roleKicker: 'College Principal',
    roleChipClass: 'red-crimson',
    name: 'Dr. Chinamma C. Gadggi',
    degrees: 'Principal, Smt. M. C. Vasantha College of Nursing',
    designation: 'Vasantha Group of Education',
    milestonePill: '❤️ Motto: “Services with a Smile”',
    milestoneClass: 'crimson',
    photo: '/images/principal_dr_chinamma_gadggi_master.jpg?v=20261104_crisp',
    alt: 'Dr. Chinamma C. Gadggi - Principal',
    photoClass: 'principal-photo',
    cardClass: 'principal-card grouphead-card',
    quoteBoxBorder: '#c01823',
    quoteBoxBg: '#fff1f2',
    quoteIconColor: '#be123c',
    quoteTextColor: '#881337',
    quote:
      '“Dr. Chinamma C. Gadggi emphasizes that nursing excellence defines the heart of Vasantha educational institutions through empathetic patient care. Guided by the motto ‘Services with a Smile,’ nursing candidates are instilled with clinical precision and devotion to healing.”',
    pillars: ['Theory Blended with Hands-on Clinical', 'Global Licensure & Career Mentorship'],
    actionLink: '/about#principal-message',
    actionClass: 'principal',
    actionText: "Read Principal's Message",
    actionAria: "Read Principal Dr. Chinamma Gadggi's profile and message"
  },
  {
    id: 'vice-principal',
    roleKicker: 'Vice Principal',
    roleChipClass: 'teal-emerald',
    name: 'Dr. Dinesh Joy',
    degrees: 'Vice Principal, Smt. M. C. Vasantha College of Nursing',
    designation: 'Vasantha Group of Education',
    milestonePill: '🌟 Legacy of Care & Academic Leadership',
    milestoneClass: 'emerald',
    photo: '/images/principal_dr_dinesh_joy_master.jpg?v=20261105_awards',
    alt: 'Dr. Dinesh Joy - Vice Principal, Smt. M. C. Vasantha College of Nursing',
    photoClass: 'principal-dinesh-photo',
    cardClass: 'vice-principal-card principal-spotlight-card',
    quoteBoxBorder: '#10b981',
    quoteBoxBg: '#ecfdf5',
    quoteIconColor: '#059669',
    quoteTextColor: '#064e3b',
    quote:
      '“Dr. Dinesh Joy highlights that students at Vasantha Group of Education participate in an inspiring legacy of compassionate healthcare, supported by structured faculty mentorship throughout each student’s academic path and clinical progression.”',
    pillars: ['Domestic & International Opportunities', 'Dynamic Atmosphere & Mentorship'],
    actionLink: '/about#vice-principal-message',
    actionClass: 'vice-principal',
    actionText: "Read Vice Principal's Message",
    actionAria: "Read Vice Principal Dr. Dinesh Joy's profile and message"
  },
  {
    id: 'provost',
    roleKicker: 'Provost',
    roleChipClass: 'royal-blue',
    name: 'Dr. Manisha Patel',
    degrees: 'Provost, Vasantha Group of Education',
    designation: 'Vasantha Group of Education',
    milestonePill: '🎓 Academic Excellence & Governance',
    milestoneClass: 'blue',
    photo: '/images/provost_dr_manisha_patel_master.jpg?v=20261104_crisp',
    alt: 'Dr. Manisha Patel - Provost, Vasantha Group of Education',
    photoClass: 'provost-photo',
    cardClass: 'provost-card',
    quoteBoxBorder: '#2563eb',
    quoteBoxBg: '#eff6ff',
    quoteIconColor: '#1d4ed8',
    quoteTextColor: '#1e3a8a',
    quote:
      '“Dr. Manisha Patel champions progressive pedagogy and modern academic governance across Vasantha Group of Education, ensuring that degree programs in Nursing, Pharmacy, and Allied Health maintain rigorous standards in research and clinical proficiency.”',
    pillars: ['Academic Governance & Research', 'Global Healthcare Pedagogy'],
    actionLink: '/about#provost-message',
    actionClass: 'provost',
    actionText: "Read Provost's Message",
    actionAria: "Read Provost Dr. Manisha Patel's profile and message"
  }
];

export default function LeadershipSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMode, setMobileMode] = useState('swipe'); // 'swipe' or 'stack'
  const [activeSwipeIdx, setActiveSwipeIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const firstSlide = track.children[0];
    if (firstSlide) {
      const gap = 12;
      const slideDistance = firstSlide.offsetWidth + gap;
      if (slideDistance > 0) {
        const newIdx = Math.round(track.scrollLeft / slideDistance);
        const clamped = Math.max(0, Math.min(newIdx, leadershipData.length - 1));
        if (clamped !== activeSwipeIdx) {
          setActiveSwipeIdx(clamped);
        }
      }
    }
  };

  const scrollToSlide = (idx) => {
    if (!trackRef.current) return;
    const targetIdx = Math.max(0, Math.min(idx, leadershipData.length - 1));
    const targetEl = trackRef.current.children[targetIdx];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    setActiveSwipeIdx(targetIdx);
  };

  const renderCard = (leader, isSlide = false) => {
    return (
      <article
        key={leader.id}
        className={`leadership-card-item ${leader.cardClass} ${isSlide ? 'leadership-card-swipe-slide' : ''}`}
      >
        {/* Header Row: 3:4 portrait on left, credentials on right */}
        <div className="leadership-card-header-row">
          <div className="leadership-portrait-wrap">
            <img
              src={leader.photo}
              alt={leader.alt}
              className={`leadership-photo ${leader.photoClass}`}
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="leadership-meta-top">
            <span className={`leader-role-chip ${leader.roleChipClass}`}>{leader.roleKicker}</span>
            <h3 className="leadership-name">{leader.name}</h3>
            <div className="leadership-degrees">{leader.degrees}</div>
            <div className="leadership-designation">{leader.designation}</div>
            <span className={`leader-col-milestone-pill ${leader.milestoneClass}`} style={{ marginTop: '2px' }}>
              {leader.milestonePill}
            </span>
          </div>
        </div>

        {/* Quote Box */}
        <div
          className="leadership-quote-box"
          style={{ borderLeftColor: leader.quoteBoxBorder, background: leader.quoteBoxBg }}
        >
          <svg
            className="quote-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            style={{ color: leader.quoteIconColor }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="leadership-quote-text" style={{ color: leader.quoteTextColor }}>
            {leader.quote}
          </p>
        </div>

        {/* Pillars / Key Focus */}
        <div className="leadership-pillars-row">
          {leader.pillars.map((p, idx) => (
            <span key={idx} className="leadership-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {p}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="leadership-action-row">
          <Link
            to={leader.actionLink}
            className={`btn-leadership-action ${leader.actionClass}`}
            aria-label={leader.actionAria}
          >
            <span>{leader.actionText}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </article>
    );
  };

  return (
    <section className="section-leadership-spotlight" id="leadership" aria-label="Visionary Leadership and Governance">
      <div className="container">
        {/* Section Header */}
        <div className="leadership-header-center">
          <div className="tag-red-caps">PRESIDENT DESK &amp; LEADERSHIP</div>
          <h2 className="section-title-styled" style={{ margin: '8px 0 12px' }}>
            Guiding Our Institution with <span>43+ Years of Excellence</span>
          </h2>
          <p className="leadership-sub-p">
            Under the visionary stewardship of the Founder &amp; Chairman, the dedicated clinical leadership of the Principal, strategic mentorship by the Vice Principal, and the academic administration of the Provost, Vasantha Group Educational Campus has grown as a sturdy banyan tree shaping ethical leaders for healthcare globally.
          </p>
        </div>

        {/* Mobile View Toggle Bar: Swipe Mode vs List Mode */}
        {isMobile && (
          <div className="mobile-carousel-control-bar">
            <div className="carousel-mode-toggle" role="group" aria-label="Leadership display mode">
              <button
                type="button"
                className={`mode-toggle-btn ${mobileMode === 'swipe' ? 'active' : ''}`}
                onClick={() => setMobileMode('swipe')}
                aria-pressed={mobileMode === 'swipe'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M17 11l4-4-4-4M21 7H9M7 13l-4 4 4 4M3 17h12" />
                </svg>
                <span>Swipe View</span>
              </button>
              <button
                type="button"
                className={`mode-toggle-btn ${mobileMode === 'stack' ? 'active' : ''}`}
                onClick={() => setMobileMode('stack')}
                aria-pressed={mobileMode === 'stack'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <circle cx="4" cy="6" r="1.5" fill="currentColor"></circle>
                  <circle cx="4" cy="12" r="1.5" fill="currentColor"></circle>
                  <circle cx="4" cy="18" r="1.5" fill="currentColor"></circle>
                </svg>
                <span>List View</span>
              </button>
            </div>

            {mobileMode === 'swipe' && (
              <div className="carousel-counter-group" aria-live="polite">
                <span className="carousel-helper-text">Swipe to explore</span>
                <span className="carousel-counter-badge">
                  {activeSwipeIdx + 1} of {leadershipData.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card Presentation: Swipe Track on Mobile (when swipe mode) OR Grid View */}
        {isMobile && mobileMode === 'swipe' ? (
          <div className="leadership-swipe-container">
            <div
              className="leadership-mobile-swipe-track"
              ref={trackRef}
              onScroll={handleTrackScroll}
            >
              {leadershipData.map((leader) => renderCard(leader, true))}
            </div>

            {/* Swipe Navigation Dots & Arrows */}
            <div className="carousel-swipe-nav-row">
              <button
                type="button"
                className="carousel-nav-btn prev"
                disabled={activeSwipeIdx === 0}
                onClick={() => scrollToSlide(activeSwipeIdx - 1)}
                aria-label="Previous Leader"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="carousel-nav-dots" role="tablist" aria-label="Leadership slides">
                {leadershipData.map((l, i) => (
                  <button
                    key={l.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSwipeIdx === i}
                    className={`carousel-nav-dot ${activeSwipeIdx === i ? 'active' : ''}`}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Go to leader ${i + 1}: ${l.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-nav-btn next"
                disabled={activeSwipeIdx === leadershipData.length - 1}
                onClick={() => scrollToSlide(activeSwipeIdx + 1)}
                aria-label="Next Leader"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="leadership-cards-grid">
            {leadershipData.map((leader) => renderCard(leader, false))}
          </div>
        )}
      </div>
    </section>
  );
}
