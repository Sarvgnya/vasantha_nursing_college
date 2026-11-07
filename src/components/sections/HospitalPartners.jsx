import React from 'react';
import { Link } from 'react-router-dom';
import { partnersData, laboratoriesData } from '../../data/partnersData';

export default function HospitalPartners() {
  return (
    <section id="hospital-partners" className="section-home-placements" aria-label="Hospital Training and Recruiting Hospital Partners">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">CLINICAL AFFILIATIONS &amp; IN-CAMPUS HOSPITAL</div>
            <h2 className="section-title-styled">
              Hospital Training &amp; <span>Attached Healthcare Centers</span>
            </h2>
          </div>
          <Link to="/clinical-training" className="section-explore-badge" aria-label="Explore all hospital postings and clinical facilities">
            <span>Explore Clinical Training &amp; Postings</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Connected Hospital & Advanced Diagnostics Highlight Card */}
        <div className="oxylife-facility-callout-card" role="region" aria-label="Oxylife Hospital Clinical Posting Information">
          {/* Header Row: Hospital Brand & Action Button */}
          <div className="ox-callout-header">
            <div className="ox-callout-brand">
              <div className="ox-logo-bubble">
                <img
                  src="/images/oxylife_hospital.png"
                  alt="Oxylife Hospital - Every Breath Counts"
                  className="ox-logo-img"
                  loading="lazy"
                />
              </div>
              <div className="ox-brand-titles">
                <div className="ox-badge-row">
                  <span className="ox-status-badge">
                    <span className="ox-pulse-dot" aria-hidden="true"></span>
                    Connected 50-Bedded Hospital
                  </span>
                  <span className="ox-city-tag">Bidar, Karnataka</span>
                </div>
                <h4 className="ox-card-heading">
                  Oxylife Hospital <span className="ox-heading-sub">(50-Bedded Connected Hospital)</span>
                </h4>
                <p className="ox-tagline">Every Breath Counts • Connected Bedside Clinical Training Hospital</p>
              </div>
            </div>

            <Link
              to="/clinical-training"
              className="ox-cta-btn ox-cta-desktop"
              aria-label="View complete clinical postings schedule and rotation syllabus"
            >
              <span>Clinical Postings Schedule</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Description */}
          <p className="ox-card-desc">
            All students undergo structured bedside clinical postings directly at <strong>Oxylife Hospital</strong>, our connected 50-bedded hospital equipped with an advanced Medical Laboratory, CT Scan Center, and Cancer Diagnostic Center for real-time diagnostic and inpatient care exposure.
          </p>

          {/* 3 Core Facilities Mini-Grid */}
          <div className="ox-facility-chips">
            <div className="ox-chip">
              <div className="ox-chip-icon lab">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M10 2v7.31L4.1 19.4A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.6L14 9.31V2"></path>
                  <line x1="8" y1="2" x2="16" y2="2"></line>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                </svg>
              </div>
              <div className="ox-chip-text">
                <span className="ox-chip-name">Medical Laboratory</span>
                <span className="ox-chip-sub">Pathology &amp; Biochemistry</span>
              </div>
            </div>

            <div className="ox-chip">
              <div className="ox-chip-icon scan">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="ox-chip-text">
                <span className="ox-chip-name">CT Scan Center</span>
                <span className="ox-chip-sub">High-Speed Imaging</span>
              </div>
            </div>

            <div className="ox-chip">
              <div className="ox-chip-icon cancer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
              <div className="ox-chip-text">
                <span className="ox-chip-name">Cancer Diagnostic Center</span>
                <span className="ox-chip-sub">Specialized Oncology Care</span>
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="ox-cta-mobile-wrapper">
            <Link
              to="/clinical-training"
              className="ox-cta-btn ox-cta-mobile"
              aria-label="View complete clinical postings schedule and rotation syllabus"
            >
              <span>Clinical Postings Schedule</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Section Sub-heading for Recruiting Partners */}
        <div style={{ margin: '28px 0 14px' }}>
          <div className="tag-red-caps" style={{ marginBottom: '4px' }}>PREMIER HOSPITAL NETWORKS</div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-dark)', margin: 0 }}>
            Associated Clinical &amp; Placement Partners
          </h3>
        </div>

        {/* Partner Logos Continuous Marquee - Logos Only */}
        <div className="hospital-partners-marquee-container" aria-label="Associated Clinical & Placement Partners Marquee">
          <div className="hospital-partners-marquee-track">
            {/* Primary Set */}
            <div className="hospital-partners-marquee-group">
              {partnersData.map((partner, idx) => (
                <div key={`hp1-${idx}`} className="hospital-marquee-card" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="hospital-marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Duplicated Set for Infinite Smooth Loop */}
            <div className="hospital-partners-marquee-group" aria-hidden="true">
              {partnersData.map((partner, idx) => (
                <div key={`hp2-${idx}`} className="hospital-marquee-card" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="hospital-marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Laboratory & Company Collaborations */}
        <div style={{ margin: '36px 0 14px' }}>
          <div className="tag-red-caps" style={{ marginBottom: '4px' }}>PHARMACEUTICAL &amp; INDUSTRIAL COLLABORATIONS</div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-dark)', margin: 0 }}>
            Laboratory &amp; Corporate Recruiters
          </h3>
        </div>

        <div className="laboratories-grid home-version" aria-label="Laboratory and Corporate Recruiters">
          {laboratoriesData.map((lab) => (
            <div key={lab.id} className="laboratory-card-compact" title={`${lab.name} - ${lab.type}`}>
              <div className="lab-logo-box-compact">
                <img src={lab.logo} alt={lab.name} className="lab-logo-img" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
