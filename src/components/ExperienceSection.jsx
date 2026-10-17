import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(13, 18, 31, 0.7) 50%, var(--bg-primary) 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-desc">
            A track record of engineering cross-platform mobile applications and responsive frontend architectures
            across fast-moving agile product environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            position: 'relative',
          }}
          className="timeline-container"
        >
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderLeft: '4px solid var(--accent-cyan)',
                background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontSize: '1.45rem', color: '#fff' }}>{exp.role}</h3>
                    <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                      {exp.type}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem', color: 'var(--accent-cyan)' }}>
                    <strong>{exp.company}</strong>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center' }}
                        title="Visit Company Website"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div style={{ textAlign: 'right' }} className="timeline-meta">
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan-light)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {exp.description}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                {exp.achievements.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {exp.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--accent-cyan-light)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          .timeline-meta {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
