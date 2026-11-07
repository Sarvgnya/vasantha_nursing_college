import React from 'react';
import { useModal } from '../../context/ModalContext';
import MobileStoryReels from './MobileStoryReels';

export default function HeroSection() {
  const { openApplyModal, openLightbox } = useModal();

  const handleScrollToPrograms = (e) => {
    e.preventDefault();
    const el = document.getElementById('programs');
    if (el) {
      const headerOffset = 80;
      const elTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: elTop, behavior: 'smooth' });
    }
  };

  const handleScrollToEducation = (e) => {
    e.preventDefault();
    const el = document.getElementById('education-for-everyone');
    if (el) {
      const headerOffset = 80;
      const elTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: elTop, behavior: 'smooth' });
    }
  };

  const handleOpenCampusImage = () => {
    openLightbox(
      '/images/college_building.png',
      'VASANTHA GROUP OF EDUCATION - Official Campus Elevation (Naubad-bhalki Road, Naubad Karnataka 585402)',
      'Official College Building'
    );
  };

  return (
    <section className="hero-home" aria-label="Hero Overview">
      <div className="container">
        <div className="hero-home-container">
          {/* Left Column: Eyebrow, Headline, Supporting Description, 2x2 Feature Matrix, CTAs */}
          <div className="hero-left-content">
            {/* Unified Sleek Admissions & Trust Badge */}
            <div className="hero-live-admission-badge">
              <span className="live-pulse-indicator" aria-hidden="true">
                <span className="pulse-ring"></span>
                <span className="pulse-core"></span>
              </span>
              <span className="badge-admissions-title">Admissions Open 2026–27</span>
              <span className="badge-bullet">•</span>
              <span className="badge-courses-highlight">Nursing • Pharmacy • Physiotherapy • B.Ed</span>
              <span className="badge-pill-pill">Merit Admissions</span>
              <span className="badge-estd-tag">ESTD. 1984</span>
            </div>

            <h1 className="hero-title">
              Excellence in Healthcare &amp; Education.{' '}
              <span className="title-red">Build a Career That Matters.</span>
            </h1>

            <p className="hero-description">
              Pioneering educational institution offering <strong>Nursing, Pharmacy, Physiotherapy &amp; Teacher Education</strong> with bedside clinical rotations at <strong>Oxylife Hospital (50-Bedded Connected Hospital)</strong>, Medical Laboratory, CT Scan Center, Cancer Diagnostic Center, and dedicated career placement support.
            </p>

            {/* Symmetrical 2x2 Clinical Feature Matrix */}
            <div className="hero-features-grid-2x2">
              <div className="hero-feature-card">
                <div className="feature-icon-circle hospital">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1"/>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Oxylife Hospital</strong>
                  <span className="feature-sub">50-Bed Connected Hospital</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle labs">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M6 18h12M3 22h18M14 22a7 7 0 1 0-4 0M9 14h6M12 6V3M8 3h8"/>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Medical Laboratory</strong>
                  <span className="feature-sub">Automated Pathology &amp; Diagnostics</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle cancer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">CT Scan &amp; Cancer Center</strong>
                  <span className="feature-sub">Specialized Diagnostics &amp; Imaging</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle placement">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Placement Assistance</strong>
                  <span className="feature-sub">Top Hospital Networks &amp; Guidance</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-buttons-row">
              <button
                type="button"
                className="btn-pill-red hero-cta-btn"
                onClick={() => openApplyModal('B.Sc. Nursing')}
                aria-label="Enquire about Admissions 2026-27"
              >
                <span className="hero-btn-text-full">Enquire About Admissions 2026–27</span>
                <span className="hero-btn-text-compact">Enquire Admissions 2026–27</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a
                href="#programs"
                onClick={handleScrollToPrograms}
                className="btn-pill-navy"
                aria-label="Explore Nursing Programs offered"
              >
                <span className="hero-btn-text-full">Explore Academic Programs</span>
                <span className="hero-btn-text-compact">Explore Programs</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
            </div>

            <div className="hero-trust-subtext">
              <span className="shield-icon">🛡️</span>
              <span>
                Recognised by <strong>Govt. of Karnataka, KSNC &amp; INC</strong> • Affiliated to <strong>RGUHS Bangalore</strong> • Karnataka SSP Scholarship Assistance
              </span>
            </div>
          </div>

          {/* Right Column: Full Official College Campus Building Photograph */}
          <div className="hero-right-visual">
            <div
              className="hero-campus-card"
              onClick={handleOpenCampusImage}
              aria-label="View high-resolution official campus photograph"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenCampusImage();
                }
              }}
            >
              <div className="hero-campus-image-frame">
                <img
                  src="/images/college_building.png"
                  alt="VASANTHA GROUP OF EDUCATION Official Campus Building in Bidar"
                  className="hero-college-full-image"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-campus-caption-strip">
                <div className="caption-tag-left">
                  <span className="caption-live-dot" aria-hidden="true"></span>
                  <span className="caption-title">VASANTHA GROUP OF EDUCATION</span>
                  <span className="caption-badge">Bidar Campus</span>
                </div>
                <div className="caption-tag-right">
                  <span>Naubad, Karnataka • ESTD. 1984</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Landing Page Strategic Spotlight: Education for Everyone */}
        {/* Desktop / Laptop View: Structured 2-Column Banner */}
        <div className="hero-education-chance-banner desktop-chance-banner" aria-label="Education for Everyone - Financial Assistance and Inclusive Opportunities">
          <div className="chance-banner-inner">
            <div className="chance-banner-left">
              <div className="chance-banner-pill-row">
                <span className="chance-pill gold">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Education for Everyone
                </span>
                <span className="chance-pill red">SC/ST &amp; Rural Financial Assistance</span>
                <span className="chance-pill blue">Low-Cost Healthcare Education</span>
              </div>

              <h2 className="chance-banner-headline">
                Education for Everyone. <span className="title-red">Your Dreams Deserve a Chance.</span>
              </h2>

              <p className="chance-banner-lead">
                Financial difficulties should never stop a deserving student from pursuing higher education. <strong>Vasantha Group of Education</strong> is committed to making quality education accessible and affordable for students from <strong>SC/ST communities and tribal and rural backgrounds</strong> through low-cost education opportunities and financial assistance for eligible students.
              </p>

              <blockquote className="chance-banner-quote">
                “We don't want financial difficulties to end a student's dreams. We want affordable education to become the beginning of their success story.”
              </blockquote>
            </div>

            <div className="chance-banner-right">
              <div className="chance-features-list">
                <div className="chance-feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <span><strong>Low-Cost Education</strong> &amp; transparent fees</span>
                </div>
                <div className="chance-feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <span><strong>SC/ST, Tribal &amp; Rural</strong> financial aid &amp; SSP/NSP scholarships</span>
                </div>
                <div className="chance-feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <span><strong>Practical Training</strong> &amp; bedside clinical exposure at Oxylife Hospital</span>
                </div>
                <div className="chance-feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <span><strong>Career Guidance</strong> &amp; 100% placement support</span>
                </div>
              </div>

              <div className="chance-actions-box">
                <button
                  type="button"
                  className="btn-apply-primary"
                  onClick={() => openApplyModal('Financial Assistance')}
                  aria-label="Enquire about Financial Assistance &amp; Low-Cost Admissions"
                >
                  <span>Enquire for Financial Assistance</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <a
                  href="#education-for-everyone"
                  onClick={handleScrollToEducation}
                  className="chance-learn-more-link"
                  aria-label="Read full mission statement on financial assistance"
                >
                  <span>Read Full Mission Statement</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Interactive Story Highlights / Reels Bar (Design A) */}
        <div className="mobile-story-reels-wrapper" aria-label="Mobile Education for Everyone Stories">
          <MobileStoryReels />
        </div>
      </div>
    </section>
  );
}
