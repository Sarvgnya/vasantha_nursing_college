import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export default function EducationForEveryone() {
  const { openApplyModal } = useModal();
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  return (
    <section className="education-everyone-section" id="education-for-everyone" aria-label="Education for Everyone - Financial Assistance and Inclusive Opportunities">
      <div className="container">
        {/* Section Header */}
        <div className="education-everyone-header">
          <div className="tag-red-caps">AFFORDABLE EDUCATION &amp; SOCIAL COMMITMENT</div>
          <h2 className="section-title-styled" style={{ marginBottom: '10px' }}>
            Education for Everyone. <span className="title-red">Your Dreams Deserve a Chance.</span>
          </h2>
          <p className="education-everyone-lead-sub">
            Empowering students from SC/ST communities, rural villages, and financially challenged backgrounds to build distinguished, self-reliant careers in healthcare.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="education-everyone-grid">
          {/* Left Column: Official Manifesto & Mission */}
          <article className="education-manifesto-card">
            <div className="manifesto-badge-row">
              <span className="manifesto-pill gold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Equal Opportunity Healthcare Education
              </span>
              <span className="manifesto-pill blue">Serving Society Since 1984</span>
            </div>

            <div className="manifesto-body-text">
              <p>
                Financial difficulties should never stop a deserving student from pursuing higher education. <strong>Vasantha Group of Education</strong> is committed to making quality education accessible and affordable for students from <strong>SC/ST communities</strong> and <strong>tribal and rural backgrounds</strong> through low-cost education opportunities and financial assistance for eligible students.
              </p>

              {/* Collapsible details on mobile; always visible on desktop */}
              <div className={`manifesto-collapsible-wrapper ${isExpandedMobile ? 'is-expanded' : 'is-collapsed'}`}>
                <p>
                  Our mission is to help students overcome financial challenges and achieve their educational dreams. Through affordable professional education, practical training, clinical exposure, and career guidance, we aim to develop skilled, confident, and independent individuals.
                </p>
                <p>
                  We believe every student deserves an opportunity to learn, grow, and build a successful future, regardless of their financial background.
                </p>

                {/* Inspirational Highlight Quote */}
                <blockquote className="education-quote-banner">
                  <div className="quote-icon-bubble">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="education-quote-text">
                    “We don't want financial difficulties to end a student's dreams. We want affordable education to become the beginning of their success story.”
                  </p>
                  <cite className="education-quote-cite">— Vasantha Group of Education</cite>
                </blockquote>
              </div>

              {/* Mobile-Only Read More / Read Less Toggle Button */}
              <button
                type="button"
                className={`education-readmore-btn-mobile ${isExpandedMobile ? 'is-expanded' : ''}`}
                onClick={() => setIsExpandedMobile(!isExpandedMobile)}
                aria-expanded={isExpandedMobile}
                aria-label={isExpandedMobile ? 'Show less content' : 'Read full message'}
              >
                <span>{isExpandedMobile ? 'Read Less' : 'Read More'}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="readmore-caret-icon"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Action CTAs */}
            <div className="manifesto-actions">
              <button
                type="button"
                className="btn-apply-primary"
                onClick={openApplyModal}
                aria-label="Enquire about Financial Assistance & Admissions 2026-27"
              >
                <span>Enquire for Financial Assistance</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a
                href="tel:9512592211"
                className="btn-call-counselor"
                aria-label="Call student admission & scholarship helpdesk"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Call Admission Helpdesk</span>
              </a>
            </div>
          </article>

          {/* Right Column: 3 Structured Impact Pillars */}
          <div className="education-pillars-stack">
            {/* Pillar 1 */}
            <div className="education-pillar-card sc-st-aid">
              <div className="pillar-icon-box gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                  <path d="M12 2l10 5-10 5-10-5 10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Low-Cost Opportunities &amp; Financial Aid</h3>
                <p className="pillar-desc">
                  Dedicated fee concessions, scholarship facilitation, and financial guidance ensuring students from SC/ST communities, rural villages, and economically modest families never miss an opportunity to study.
                </p>
                <div className="pillar-badge-tag">Government &amp; Institutional Aid Support</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="education-pillar-card practical-training">
              <div className="pillar-icon-box red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Hands-On Clinical &amp; Practical Training</h3>
                <p className="pillar-desc">
                  Direct bedside training at <strong>Oxylife Hospital (50-Bedded Hospital)</strong>, advanced Medical Laboratory, CT Scan Center, Cancer Diagnostic Center, and state-of-the-art simulation labs.
                </p>
                <div className="pillar-badge-tag">Real Bedside Patient Exposure</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="education-pillar-card career-empowerment">
              <div className="pillar-icon-box green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Career Mentorship &amp; Self-Reliance</h3>
                <p className="pillar-desc">
                  Focused soft-skills coaching, interview preparation, hospital recruitment drives, and domestic and overseas career guidance developing skilled, confident, and independent professionals.
                </p>
                <div className="pillar-badge-tag">100% Placement &amp; Career Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

