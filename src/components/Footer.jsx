import React from 'react';
import { ArrowUp, Heart, MessageSquare, Mail, ExternalLink, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4rem 0 2rem 0',
        background: '#05080e',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  color: '#041018',
                }}
              >
                MA
              </div>
              <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#fff' }}>Mohammad Aamir</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', maxWidth: '380px' }}>
              Senior React Native & React.js Developer with 3.8+ years of expertise delivering high-performance cross-platform mobile and web applications.
            </p>
          </div>

          {/* Quick Footer Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: 'var(--text-muted)' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)' }}>Skills</a>
            <a href="#simulator" style={{ color: 'var(--text-muted)' }}>Live App Simulator</a>
            <a href="#projects" style={{ color: 'var(--text-muted)' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-muted)' }}>Experience</a>
            <a href="#contact" style={{ color: 'var(--text-muted)' }}>Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
            gap: '1rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Mohammad Aamir. Built with React.js & Vanilla CSS.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <MessageSquare size={14} style={{ color: '#25D366' }} />
              <span>WhatsApp</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <ExternalLink size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Mail size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
