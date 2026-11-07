import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 150);
      setShowBackTop(scrollY > 250);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <aside
      className={`floating-actions-bar ${hasScrolled ? 'floating-actions-visible' : ''}`}
      aria-label="Quick Contact & Actions"
    >
      {/* Call / Phone Floating Contact Button */}
      <a
        href="tel:9512592211"
        className="float-btn float-call"
        title="Call Admission Helpline (+91 9512592211)"
        aria-label="Call Admission Helpline on 9512592211"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" focusable="false">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="sr-only">Call Admission Helpline</span>
      </a>

      {/* Scroll to Top Button */}
      <button
        className={`float-btn float-back-top ${showBackTop ? 'visible' : ''}`}
        id="backToTopBtn"
        aria-label="Scroll back to top of page"
        title="Back to top"
        type="button"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" focusable="false">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="sr-only">Scroll to top</span>
      </button>
    </aside>
  );
}
