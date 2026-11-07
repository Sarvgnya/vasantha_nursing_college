import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export default function MobileStoryReels() {
  const { openApplyModal } = useModal();
  const [activeStory, setActiveStory] = useState('dreams'); // 'dreams', 'aid', 'oxylife', 'success'

  const stories = [
    {
      id: 'dreams',
      icon: '✨',
      label: 'Dreams',
      ringGrad: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      badge: '★ EDUCATION FOR EVERYONE',
      title: 'Your Dreams',
      titleHighlight: 'Deserve a Chance.',
      desc: (
        <>
          Financial difficulties should never stop a deserving student from pursuing higher education. <strong>Vasantha Group of Education</strong> is committed to making quality education accessible and affordable for students from <strong>SC/ST communities and tribal and rural backgrounds</strong> through low-cost education opportunities and financial assistance for eligible students.
        </>
      ),
      quote: "“We don't want financial difficulties to end a student's dreams. We want affordable education to become the beginning of their success story.”",
      ctaText: 'Enquire for Financial Assistance',
      ctaCourse: 'Financial Assistance',
      chips: ['✓ Low-Cost Seats', '✓ SC/ST Aid', '✓ 100% Transparent']
    },
    {
      id: 'aid',
      icon: '🤝',
      label: 'SC/ST Aid',
      ringGrad: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      badge: 'GOVERNMENT & TRUST SCHOLARSHIPS',
      title: 'Affordable Education',
      titleHighlight: '& Financial Aid.',
      desc: (
        <>
          Our mission is to help students overcome financial challenges and achieve their educational dreams. We provide dedicated assistance for <strong>Karnataka State Scholarship Portal (SSP)</strong>, <strong>National Scholarship Portal (NSP)</strong>, and direct institutional concessions.
        </>
      ),
      quote: '“Every student deserves an opportunity to learn, grow, and build a successful future, regardless of their financial background.”',
      ctaText: 'Check Scholarship Guidance',
      ctaCourse: 'Scholarships',
      chips: ['✓ Karnataka SSP', '✓ Central NSP', '✓ Merit Concessions']
    },
    {
      id: 'oxylife',
      icon: '🏥',
      label: 'Oxylife',
      ringGrad: 'linear-gradient(135deg, #10b981, #059669)',
      badge: 'HANDS-ON BEDSIDE CLINICAL TRAINING',
      title: 'Oxylife Hospital',
      titleHighlight: '50-Bedded Training.',
      desc: (
        <>
          Direct bedside clinical rotations at <strong>Oxylife Hospital (50-Bedded Connected Hospital)</strong>, fully automated Medical Laboratory, CT Scan Center, Cancer Diagnostic Center, and advanced simulation training.
        </>
      ),
      quote: '“Developing skilled, confident, and independent healthcare individuals through real clinical patient exposure.”',
      ctaText: 'Explore Clinical Postings',
      ctaCourse: 'B.Sc. Nursing',
      chips: ['✓ 50-Bed Hospital', '✓ CT Scan & Cancer Center', '✓ Pathology Lab']
    },
    {
      id: 'success',
      icon: '🎓',
      label: 'Success',
      ringGrad: 'linear-gradient(135deg, #ec4899, #be123c)',
      badge: 'DOMESTIC & OVERSEAS PLACEMENTS',
      title: 'Career Guidance',
      titleHighlight: '& 100% Placements.',
      desc: (
        <>
          Dedicated institutional placement cell, hospital interview grooming, and overseas placement support for countries like <strong>Germany, UAE, Australia, Canada, Belgium</strong> and more.
        </>
      ),
      quote: '“We want affordable education to become the beginning of their success story.”',
      ctaText: 'View Placement Records',
      ctaCourse: 'Placements',
      chips: ['✓ 10+ Hospital Chains', '✓ Germany & UAE Support', '✓ High Packages']
    }
  ];

  const currentStory = stories.find(s => s.id === activeStory) || stories[0];
  const activeIndex = stories.findIndex(s => s.id === activeStory);

  return (
    <div className="mobile-story-reels-container" aria-label="Interactive Mobile Story Highlights">
      {/* 4 Circular Story Highlights Bar */}
      <div className="story-reels-track-card">
        <div className="story-reels-header-row">
          <span className="story-reels-pulse-dot" aria-hidden="true"></span>
          <span className="story-reels-label">TAP TO EXPLORE OUR SOCIAL MISSION</span>
        </div>

        <div className="story-bubbles-row" role="tablist" aria-label="Mission Story Highlights">
          {stories.map((story) => {
            const isActive = story.id === activeStory;
            return (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`story-bubble-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStory(story.id)}
              >
                <div
                  className="story-bubble-ring"
                  style={{
                    background: isActive ? story.ringGrad : 'transparent',
                    border: isActive ? 'none' : '2px solid #cbd5e1'
                  }}
                >
                  <div className="story-bubble-core">
                    <span className="story-bubble-icon">{story.icon}</span>
                  </div>
                </div>
                <span className={`story-bubble-name ${isActive ? 'active' : ''}`}>
                  {story.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Story Card Display */}
      <article className="active-story-card animate-fadeIn">
        {/* Story Progress Segment Indicators */}
        <div className="story-progress-bar" aria-hidden="true">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className={`story-progress-segment ${idx <= activeIndex ? 'filled' : ''} ${idx === activeIndex ? 'current' : ''}`}
            ></div>
          ))}
        </div>

        {/* Story Badge */}
        <div className="story-badge-row">
          <span className="story-tag-pill">{currentStory.badge}</span>
        </div>

        {/* Headline */}
        <h3 className="story-title">
          {currentStory.title}{' '}
          <span className="title-red">{currentStory.titleHighlight}</span>
        </h3>

        {/* Story Description */}
        <p className="story-desc">{currentStory.desc}</p>

        {/* Warm Inspirational Quote */}
        <blockquote className="story-quote-banner">
          <p className="story-quote-text">{currentStory.quote}</p>
        </blockquote>

        {/* Feature Checkmark Chips */}
        <div className="story-chips-row">
          {currentStory.chips.map((chip, idx) => (
            <span key={idx} className="story-mini-chip">{chip}</span>
          ))}
        </div>

        {/* Actions Row */}
        <div className="story-actions-row">
          <button
            type="button"
            className="btn-story-apply"
            onClick={() => openApplyModal(currentStory.ctaCourse)}
            aria-label={`${currentStory.ctaText} - opens application modal`}
          >
            <span>{currentStory.ctaText}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <a
            href="tel:9512592211"
            className="btn-story-call"
            aria-label="Call student admission helpline"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Call Helpdesk</span>
          </a>
        </div>
      </article>
    </div>
  );
}

