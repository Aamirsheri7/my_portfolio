import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppSimulator from './components/AppSimulator';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      {/* Ambient Lighting Accents */}
      <div className="glow-blob-1" />
      <div className="glow-blob-2" />
      <div className="glow-blob-3" />

      {/* Main Navigation */}
      <Navbar onOpenContact={() => {}} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero & Value Proposition */}
        <Hero onOpenContact={() => {}} />

        {/* 2. Interactive Mobile App Simulator (Test-Drive Flagship React Native Apps) */}
        <AppSimulator />

        {/* 3. Technical Skills Arsenal (Bento Grid) */}
        <SkillsSection />

        {/* 4. Complete Production Projects Showcase (Filterable + Deep Dive Modals) */}
        <ProjectsSection />

        {/* 5. Professional Work Experience Timeline */}
        <ExperienceSection />

        {/* 6. Key Achievements & Education Foundation */}
        <AchievementsSection />

        {/* 7. Direct Contact, WhatsApp, & Inquiry Form */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            style={{ marginLeft: '0.5rem', color: '#94a3b8', display: 'flex', alignItems: 'center' }}
            aria-label="Dismiss"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
