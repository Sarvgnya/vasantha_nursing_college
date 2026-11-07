import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories, galleryItems } from '../../data/galleryData';

export default function GallerySection({ isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter items based on active category
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section-wrapper" aria-label="Campus Life, Functions, Programs and Health Camps Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">
              {isFullPage ? 'ALL EVENTS & CELEBRATIONS' : 'CAMPUS LIFE, EVENTS & COMMUNITY SERVICE'}
            </div>
            <h2 className="section-title-styled">
              Functions, Academic Programs <span>&amp; Health Camps</span>
            </h2>
          </div>
          {!isFullPage ? (
            <Link to="/gallery" className="section-explore-badge" aria-label="Explore all event and camp photos">
              <span>View Full Gallery ({galleryItems.length} Photos)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          ) : (
            <div className="gallery-count-pill-badge">
              <span className="count-dot" aria-hidden="true"></span>
              <span>Showing {filteredItems.length} of {galleryItems.length} Authentic Photos</span>
            </div>
          )}
        </div>

        {/* Section Intro Subtitle */}
        <p className="gallery-section-lead">
          {isFullPage
            ? 'Browse authentic photographs from our community health rallies in Bidar, patriotic Independence Day ceremonies, and student felicitation honors.'
            : 'Explore life at VASANTHA GROUP OF EDUCATION — featuring community health awareness rallies in Bidar, 77th Independence Day grand student parade formations, national flag hoisting ceremonies, and academic excellence celebrations.'}
        </p>

        {/* Category Filter Pills */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery photos by category">
          {galleryCategories.map((cat) => {
            const count = cat.id === 'all'
              ? galleryItems.length
              : galleryItems.filter(item => item.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`gallery-filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="pill-icon" aria-hidden="true">{cat.icon}</span>
                <span className="pill-text">{cat.label}</span>
                <span className="pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid */}
        <div className="gallery-photo-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="gallery-photo-card">
              {/* Photo Display with Category Tag */}
              <div className="gallery-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <div className="gallery-card-badge-row">
                  <span className={`gallery-cat-badge badge-${item.badgeColor || 'blue'}`}>
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta & Description */}
              <div className="gallery-card-body">
                <div className="gallery-card-meta-line">
                  <span className="gallery-card-date">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.date}
                  </span>
                  <span className="gallery-card-location">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </span>
                </div>

                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Admissions CTA */}
        <div className="gallery-bottom-cta-banner">
          <div className="gallery-cta-content">
            <span className="gallery-cta-badge">EXPERIENCE CAMPUS IN PERSON</span>
            <h3 className="gallery-cta-title">Join Our Next Academic Batch at Vasantha</h3>
            <p className="gallery-cta-desc">
              Be a part of our vibrant campus life, extensive hospital clinical training at Oxylife Hospitals, and dedicated faculty mentorship in Bidar.
            </p>
          </div>
          <div className="gallery-cta-actions">
            <Link to="/admissions" className="btn-gallery-primary">
              <span>Apply Online for 2026–27</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/contact" className="btn-gallery-secondary">
              <span>Book Campus Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
