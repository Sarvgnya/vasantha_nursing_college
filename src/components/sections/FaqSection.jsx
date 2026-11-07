import React, { useState } from 'react';
import { faqsData } from '../../data/coursesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="faq-container">
          <div style={{ textAlign: 'center' }}>
            <div className="tag-red-caps">HAVE QUESTIONS?</div>
            <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="faq-intro-sub">
              Essential guidance regarding recognized courses, clinical hospital postings at Oxylife Hospital, and 2026–27 admissions.
            </p>
          </div>

          <div className="faq-list">
            {faqsData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.id || idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    type="button"
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-q-left">
                      <span className={`faq-q-badge ${isOpen ? 'active' : ''}`}>Q{idx + 1}</span>
                      <span className="faq-q-title">{faq.q}</span>
                    </div>

                    <div className={`faq-icon-bubble ${isOpen ? 'open' : ''}`} aria-hidden="true">
                      {isOpen ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="faq-body"
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                    >
                      <div className="faq-content">
                        {/* Compact formatted answer for Q1: Disciplines & Programs */}
                        {faq.disciplines ? (
                          <div className="faq-compact-programs">
                            {faq.disciplines.map((d, dIdx) => (
                              <div key={dIdx} className="faq-prog-row">
                                <span className={`faq-prog-tag ${d.tagClass || ''}`}>
                                  <span className="faq-prog-icon">{d.icon}</span>
                                  {d.faculty}
                                </span>
                                <span className="faq-prog-text">{d.courses}</span>
                              </div>
                            ))}
                          </div>
                        ) : faq.recognitions ? (
                          /* Rich formatted answer for Q2: Recognitions */
                          <div className="faq-rich-block">
                            <p className="faq-lead-text">{faq.intro}</p>
                            <div className="faq-recognitions-list">
                              {faq.recognitions.map((r, rIdx) => (
                                <div key={rIdx} className="faq-recog-item">
                                  <span className="faq-recog-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  </span>
                                  <div>
                                    <strong className="faq-recog-name">{r.name}:</strong>{' '}
                                    <span className="faq-recog-detail">{r.detail}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : faq.highlight ? (
                          /* Rich formatted answer for Q3: NEET policy */
                          <div className="faq-rich-block">
                            <div className="faq-highlight-pill-row">
                              <span className="faq-status-pill green">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 14 14"></polyline>
                                </svg>
                                {faq.highlight}
                              </span>
                            </div>
                            <p className="faq-detail-p">{faq.detail}</p>
                          </div>
                        ) : faq.facilities ? (
                          /* Rich formatted answer for Q4: Hospital training */
                          <div className="faq-rich-block">
                            <p className="faq-lead-text">{faq.intro}</p>
                            <div className="faq-hosp-pill-banner">
                              <span className="faq-hosp-star">★</span>
                              <strong>{faq.hospitalHighlight}</strong>
                            </div>
                            <ul className="faq-bullet-list">
                              {faq.facilities.map((fac, fIdx) => (
                                <li key={fIdx}>{fac}</li>
                              ))}
                            </ul>
                          </div>
                        ) : faq.channels ? (
                          /* Rich formatted answer for Q7: How to apply */
                          <div className="faq-rich-block">
                            <p className="faq-lead-text">{faq.intro}</p>
                            <div className="faq-channels-stack">
                              {faq.channels.map((ch, cIdx) => (
                                <div key={cIdx} className="faq-channel-card">
                                  <span className="faq-channel-index">{cIdx + 1}</span>
                                  <div>
                                    <strong className="faq-channel-title">{ch.title}:</strong>{' '}
                                    <span className="faq-channel-desc">{ch.text}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Default clean paragraph answer */
                          <p className="faq-default-p">{faq.a}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
