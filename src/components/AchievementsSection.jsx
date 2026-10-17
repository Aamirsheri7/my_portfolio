import React from 'react';
import { Award, TrendingUp, Zap, ShieldCheck, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { achievementsData, educationData } from '../data/portfolioData';

export default function AchievementsSection() {
  const iconMap = {
    TrendingUp: TrendingUp,
    Award: Award,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="achievements" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Proven Impact</span>
          <h2 className="section-title">
            Key Achievements <span className="gradient-text">& Education</span>
          </h2>
          <p className="section-desc">
            Quantifiable results delivered across app scalability, user adoption, and engineering execution.
          </p>
        </div>

        {/* 4 Impact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.8) 0%, rgba(13, 18, 31, 0.9) 100%)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={24} />
                </div>

                <div
                  style={{
                    fontSize: '1.45rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '800',
                    color: 'var(--accent-cyan-light)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.metric}
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education Highlight Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={32} />
              </div>

              <div>
                <span className="badge badge-purple" style={{ marginBottom: '0.35rem' }}>
                  Academic Foundation
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.25rem' }}>
                  {educationData.degree} — {educationData.field}
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  {educationData.institution} • {educationData.affiliation}
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-purple)',
                background: 'rgba(139, 92, 246, 0.12)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Calendar size={14} />
              <span>{educationData.period}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
