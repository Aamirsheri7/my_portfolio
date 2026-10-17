import React from 'react';
import { Smartphone, Globe, ExternalLink, MessageSquare, Download, Sparkles, Terminal, CheckCircle2, ChevronRight, MapPin, Mail, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  return (
    <section
      id="about"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Content */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#34d399',
                marginBottom: '1.5rem',
              }}
            >
              <span className="pulse-dot"></span>
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            {/* Title / Name */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.03em',
              }}
            >
              Building fluid mobile & web apps with{' '}
              <span className="gradient-text">React Native</span> &{' '}
              <span className="gradient-text-purple">React.js</span>
            </h1>

            {/* Subtitle / Bio */}
            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              Hi, I'm <strong style={{ color: '#fff' }}>Mohammad Aamir</strong> — a Software Developer with{' '}
              <strong style={{ color: 'var(--accent-cyan-light)' }}>3 Years 10 Months</strong> of experience
              shipping high-performance cross-platform mobile apps (iOS & Android) and scalable React/Next.js platforms.
              Specialized in real-time WebSockets, Zustand/RTK state architectures, and complete App Store/Play Store deployments.
            </p>

            {/* Key Skill Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                'React Native (iOS & Android)',
                'React.js & Next.js',
                'TypeScript',
                'Zustand & RTK Query',
                'WebSockets Real-Time',
                'Google Play Store (10K+ Installs)',
                'Firebase & REST APIs',
              ].map((badge) => (
                <span
                  key={badge}
                  className="badge"
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.82rem',
                  }}
                >
                  <Sparkles size={13} style={{ color: 'var(--accent-cyan)' }} />
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Production Apps</span>
                <ChevronRight size={18} />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={18} />
                <span>Quick WhatsApp Chat</span>
              </a>

              <a
                href="#simulator"
                className="btn btn-secondary"
              >
                <Smartphone size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Interactive Phone Demo</span>
              </a>
            </div>

            {/* Direct Contact Links Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.88rem',
                color: 'var(--text-dim)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Noida Sector-62, India</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                <ExternalLink size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card / Visual Terminal */}
          <div className="hero-card-col">
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(6, 182, 212, 0.15)',
              }}
            >
              {/* Card Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    engineer.profile.ts
                  </span>
                </div>
                <div
                  className="badge badge-emerald"
                  style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}
                >
                  Active Dev
                </div>
              </div>

              {/* Developer Avatar & Quick Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: '#041018',
                    flexShrink: 0,
                    boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
                  }}
                >
                  MA
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.2rem', color: '#fff' }}>Mohammad Aamir</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                    Senior Cross-Platform Engineer
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                    MetaflowX • Ex-Apponward • Ex-Mobiloitte
                  </div>
                </div>
              </div>

              {/* Terminal Code Snapshot */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.7,
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <span style={{ color: '#a78bfa' }}>const</span>{' '}
                  <span style={{ color: '#67e8f9' }}>engineer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>specialization:</span>{' '}
                  <span style={{ color: '#34d399' }}>'React Native & React.js'</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>experience:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>3.8</span>,{' '}
                  <span style={{ color: '#64748b' }}>// years</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>appsShipped:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>8</span>,{' '}
                  <span style={{ color: '#64748b' }}>// production</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>playStoreInstalls:</span>{' '}
                  <span style={{ color: '#34d399' }}>'10,000+'</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>coreTech:</span> [
                  <span style={{ color: '#67e8f9' }}>'TypeScript'</span>,{' '}
                  <span style={{ color: '#67e8f9' }}>'Zustand'</span>,{' '}
                  <span style={{ color: '#67e8f9' }}>'RTK'</span>,{' '}
                  <span style={{ color: '#67e8f9' }}>'WebSockets'</span>],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>openForHire:</span>{' '}
                  <span style={{ color: '#10b981' }}>true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Direct Play Store Live Metric Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} />
                  <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: '600' }}>
                    Live Production Verified
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--accent-cyan-light)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  iOS + Android
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Key Impact Metric Counters */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="stats-grid"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                background: 'linear-gradient(180deg, rgba(18, 24, 38, 0.75) 0%, rgba(10, 14, 23, 0.85) 100%)',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  color: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff', marginBottom: '0.25rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
