import React, { useState } from 'react';
import { Smartphone, Globe, ExternalLink, Play, CheckCircle2, X, Sparkles, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'mobile', label: 'React Native (Mobile)', count: projectsData.filter((p) => p.category === 'mobile').length },
    { id: 'web', label: 'React.js & Next.js (Web)', count: projectsData.filter((p) => p.category === 'web').length },
    { id: 'fintech', label: 'Fintech & Blockchain', count: projectsData.filter((p) => p.secondaryCategory === 'fintech').length },
    { id: 'ecommerce', label: 'E-Commerce', count: projectsData.filter((p) => p.secondaryCategory === 'ecommerce').length },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'mobile' || filter === 'web') return proj.category === filter;
    return proj.secondaryCategory === filter;
  });

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Engineering Portfolio</span>
          <h2 className="section-title">
            Production Apps <span className="gradient-text">& Platforms</span>
          </h2>
          <p className="section-desc">
            Explore 8+ production-tested systems shipped across mobile (iOS/Android) and web.
            Featuring verified live Google Play Store applications and high-frequency real-time architectures.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.6rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '99px',
                    background: isActive ? '#041018' : 'rgba(255, 255, 255, 0.1)',
                    color: isActive ? '#fff' : 'var(--text-dim)',
                    fontWeight: '800',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '1.75rem',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => {
            const isMobile = project.category === 'mobile';
            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.85rem',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
                }}
              >
                {/* Header Strip */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {isMobile ? (
                      <span className="badge">
                        <Smartphone size={13} />
                        React Native
                      </span>
                    ) : (
                      <span className="badge badge-purple">
                        <Globe size={13} />
                        React.js / Next.js
                      </span>
                    )}

                    {project.playStoreUrl && (
                      <span className="badge badge-emerald">
                        <Play size={10} style={{ fill: 'currentColor' }} />
                        Play Store
                      </span>
                    )}
                  </div>

                  {project.featured && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--accent-amber)',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}
                    >
                      <Sparkles size={13} />
                      Flagship
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: '#fff' }}>
                  {project.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--accent-cyan-light)',
                    fontWeight: '600',
                    marginBottom: '1rem',
                  }}
                >
                  {project.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Metrics Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Technology Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-dim)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: 'auto',
                  }}
                >
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-emerald btn-sm"
                      style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: '#fff',
                        fontWeight: '700',
                        flex: 1,
                      }}
                    >
                      <Play size={13} style={{ fill: 'currentColor' }} />
                      <span>Google Play</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: project.playStoreUrl ? 1 : 'unset', width: project.playStoreUrl ? 'auto' : '100%' }}
                  >
                    <span>View Architecture</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture Modal */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              zIndex: 1000,
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.5rem',
                background: '#0d1322',
                border: '1px solid var(--border-glow)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(6, 182, 212, 0.25)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <span className="badge" style={{ marginBottom: '0.5rem' }}>
                    {activeModalProject.category === 'mobile' ? 'React Native Architecture' : 'React.js / Web Architecture'}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{activeModalProject.title}</h3>
                  <div style={{ color: 'var(--accent-cyan-light)', fontSize: '0.9rem', fontWeight: '600' }}>
                    {activeModalProject.subtitle}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.4rem',
                    color: '#fff',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Description */}
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeModalProject.description}
              </p>

              {/* Key Implementation Highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.85rem' }}>
                  Engineering Deliverables & Highlights:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.65rem' }}>
                  Technology Stack:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        color: 'var(--accent-cyan-light)',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                {activeModalProject.playStoreUrl && (
                  <a
                    href={activeModalProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Play size={16} style={{ fill: 'currentColor' }} />
                    <span>View on Google Play Store</span>
                  </a>
                )}
                <button onClick={() => setActiveModalProject(null)} className="btn btn-secondary">
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
