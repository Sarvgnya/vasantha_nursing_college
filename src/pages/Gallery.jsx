import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GallerySection from '../components/sections/GallerySection';

export default function Gallery() {
  useEffect(() => {
    document.title = 'Event Gallery & Campus Camps | VASANTHA GROUP OF EDUCATION';
  }, []);

  return (
    <main id="mainContent" className="gallery-page-container">
      {/* PAGE BANNER - Standard institutional header matching About, Courses, Placements, Contact */}
      <section className="page-banner-strip" aria-label="Campus Gallery Header">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Gallery</span>
              </div>
              <h1 className="banner-main-title">
                Campus Events &amp; <span className="gold-text">Gallery</span>
              </h1>
              <p className="banner-sub-p">
                Authentic glimpses of life at VASANTHA GROUP OF EDUCATION — community health awareness rallies in Bidar, 77th Independence Day parade formations, national flag hoisting, and student academic honors.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/gallery/gallery_independence_day_parade.jpg"
                alt="Vasantha College of Nursing students in 77th Independence Day parade formation"
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

      {/* Main Interactive Gallery Section */}
      <GallerySection isFullPage={true} />
    </main>
  );
}
