import React, { useState } from 'react';
import { Smartphone, Globe, Layers, Cpu, Cloud, Terminal, CheckCircle2, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'mobile', label: 'Mobile (React Native)', icon: Smartphone },
    { id: 'web', label: 'Web & Frontend', icon: Globe },
    { id: 'stateAndRealtime', label: 'State & Real-Time', icon: Layers },
    { id: 'backendAndCloud', label: 'APIs & Cloud', icon: Cloud },
    { id: 'toolsAndDevOps', label: 'Tools & DevOps', icon: Terminal },
  ];

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Mastery</span> & Stack
          </h2>
          <p className="section-desc">
            A battle-tested technology arsenal refined across 3.8+ years of delivering high-concurrency mobile
            and web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.6rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                }}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {Object.entries(skillsData)
            .filter(([key]) => activeTab === 'all' || activeTab === key)
            .map(([categoryKey, category]) => (
              <div
                key={categoryKey}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.8) 0%, rgba(13, 18, 31, 0.9) 100%)',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.85rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>{category.title}</h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(6, 182, 212, 0.1)',
                    }}
                  >
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Skills List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.4rem',
                          fontSize: '0.9rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2
                            size={15}
                            style={{
                              color: skill.highlight ? 'var(--accent-cyan)' : 'var(--text-dim)',
                            }}
                          />
                          <span style={{ color: skill.highlight ? '#fff' : 'var(--text-muted)', fontWeight: skill.highlight ? '600' : '400' }}>
                            {skill.name}
                          </span>
                        </div>
                        {skill.highlight && (
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: '700',
                              color: 'var(--accent-cyan-light)',
                              background: 'rgba(6, 182, 212, 0.15)',
                              padding: '1px 6px',
                              borderRadius: '4px',
                            }}
                          >
                            Core
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div
                        style={{
                          height: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '99px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: skill.highlight
                              ? 'linear-gradient(90deg, #06b6d4, #10b981)'
                              : 'rgba(255, 255, 255, 0.25)',
                            borderRadius: '99px',
                            transition: 'width 0.8s ease',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Engineering Principles Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="principles-grid"
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Zap size={28} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.35rem' }}>
                Optimistic UI & Low Latency
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Immediate client state updates before server roundtrips, reducing perceived wait times to near 0ms.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Smartphone size={28} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.35rem' }}>
                FlatList Virtualization
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Carefully tuned window sizes, memoized cell items, and unmount off-screen patterns for fluid 60 FPS scrolling.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <ShieldCheck size={28} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.35rem' }}>
                Production Store Delivery
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                End-to-end management of iOS App Store and Google Play console releases, certs, and phased rollouts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
