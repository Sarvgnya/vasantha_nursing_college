import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function AdmissionAnnouncement() {
  const { openApplyModal } = useModal();

  // Desktop Continuous Announcement Text (Wide Marquee Loop)
  const announcementText = (
    <>
      <span className="ticker-badge-live">
        <span className="ticker-pulse-dot" aria-hidden="true"></span>
        ADMISSIONS 2026–27
      </span>
      <span className="ticker-item-text">
        Applications Open for <strong>M.Sc. Nursing</strong>, <strong>B.Sc. Nursing</strong>, <strong>GNM Diploma</strong>, <strong>Pharmacy (D.Pharm &amp; B.Pharm)</strong>, <strong>BPT</strong> &amp; <strong>B.Ed</strong> • Helpline: <strong>+91 9512592211</strong>
      </span>
      <span className="ticker-badge-live" style={{ background: '#f59e0b', color: '#1c1917' }}>
        🌟 EDUCATION FOR EVERYONE
      </span>
      <span className="ticker-item-text">
        Financial difficulties should never stop a deserving student • <strong>Low-cost education &amp; financial aid for SC/ST, tribal &amp; rural backgrounds</strong> • Your Dreams Deserve a Chance
      </span>
      <span className="ticker-action-chip">Apply Online ➔</span>
    </>
  );

  return (
    <div
      className="homepage-admission-marquee-bar"
      role="region"
      aria-label="Admissions 2026-27 Continuous Announcement"
    >
      {/* 1. Desktop / Laptop View: Wide Continuous Scrolling Marquee */}
      <div className="desktop-marquee-container">
        <Link to="/admissions" className="marquee-content-link" aria-label="Admissions Open 2026-27 - Click to explore courses and apply online">
          <div className="marquee-track">
            <div className="marquee-group" aria-hidden="false">
              {announcementText}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {announcementText}
            </div>
          </div>
        </Link>
      </div>

      {/* 2. Mobile View (<= 768px): Compact & Visually Attractive 2026-27 Announcement Card */}
      <div className="mobile-elaborated-announcement-banner" aria-label="Admissions 2026-27 & Education for Everyone Announcement">
        <div className="mobile-elaborated-top-row">
          <div className="mobile-announcement-badges-wrap">
            <span className="mobile-live-pulse-badge">
              <span className="mobile-pulse-dot" aria-hidden="true"></span>
              ADMISSIONS 2026–27
            </span>
            <span className="mobile-elaborated-badge">
              <span className="live-sparkle-icon" aria-hidden="true">🌟</span>
              EDUCATION FOR EVERYONE
            </span>
          </div>

          <button
            type="button"
            onClick={() => openApplyModal('Admissions 2026-27')}
            className="mobile-elaborated-btn-apply"
            aria-label="Apply Online for Admissions 2026-27"
          >
            <span>Apply Online</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <p className="mobile-elaborated-content">
          <strong>Applications Open 2026–27:</strong> Nursing, Pharmacy, Physiotherapy &amp; B.Ed. Committed to low-cost education and financial aid for students from <strong>SC/ST, tribal &amp; rural backgrounds</strong>.
        </p>

        <div className="mobile-elaborated-chips-row">
          <span className="mini-aid-chip">✓ Direct Merit Seats</span>
          <span className="mini-aid-chip">✓ SC/ST Aid</span>
          <a href="tel:9512592211" className="mini-aid-chip phone" aria-label="Call student admission helpline">
            📞 9512592211
          </a>
        </div>
      </div>
    </div>
  );
}
