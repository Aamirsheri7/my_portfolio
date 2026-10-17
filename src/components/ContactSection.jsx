import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ExternalLink, MapPin, Copy, Check, Send, Sparkles, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  // Email Regex Validator
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
  };

  // Field validation logic
  const validateField = (field, value) => {
    let error = '';
    if (field === 'name') {
      if (!value.trim()) {
        error = 'Please enter your name';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
    } else if (field === 'email') {
      if (!value.trim()) {
        error = 'Please enter your email address';
      } else if (!isValidEmail(value)) {
        error = 'Please enter a valid email address (e.g. name@domain.com)';
      }
    } else if (field === 'message') {
      if (!value.trim()) {
        error = 'Please enter your message';
      } else if (value.trim().length < 10) {
        error = 'Message should be at least 10 characters';
      }
    }
    return error;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (nameError || emailError || messageError) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role_or_subject: formData.subject.trim() || 'Portfolio Inquiry',
      message: formData.message.trim(),
      _subject: `New Portfolio Message from ${formData.name.trim()}`,
      _replyto: formData.email.trim(),
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
        if (onShowToast) {
          onShowToast('Message sent successfully!');
        }
      } else {
        throw new Error(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Could not send message through current network. You can also send via WhatsApp or direct email client below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}: ${formData.subject || 'Connect'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nRole / Subject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hi Mohammad Aamir,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    return `https://wa.me/916395682862?text=${text}`;
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(6, 182, 212, 0.04) 50%, var(--bg-primary) 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-desc">
            Whether you are looking to hire a Senior React Native / React.js Engineer, build an MVP from scratch,
            or scale an existing mobile platform, I'm ready to bring immediate value to your team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left Column: Direct Contact Channels */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.25rem' }}>
              Reach Out Directly
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {/* WhatsApp Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(37, 211, 102, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25D366',
                    }}
                  >
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                      INSTANT MESSAGING
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>
                      WhatsApp Direct
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#25D366' }}>{personalInfo.phone}</div>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <span>Chat Now</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '600' }}>EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  className="btn btn-secondary btn-sm"
                  title="Copy email address"
                >
                  {copiedField === 'Email' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  <span>{copiedField === 'Email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.85) 0%, rgba(13, 18, 31, 0.95) 100%)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                    }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '600' }}>PHONE CALL</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  className="btn btn-secondary btn-sm"
                  title="Copy phone number"
                >
                  {copiedField === 'Phone number' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  <span>{copiedField === 'Phone number' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & LinkedIn Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
                className="contact-subgrid"
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <MapPin size={22} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>LOCATION</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>Noida Sector-62, India</div>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <ExternalLink size={22} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>LINKEDIN</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>/in/aamir-react-native</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.9) 0%, rgba(13, 18, 31, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>
                Send a Direct Message
              </h3>
              <span className="badge badge-emerald">
                <Sparkles size={12} />
                Quick Response
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill in your details below and I'll get back to you within 24 hours.
            </p>

            {/* Success View: Clean, No email exposed, Only Success Icon and Confirmation */}
            {submitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)',
                }}
              >
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <CheckCircle2 size={46} style={{ color: 'var(--accent-emerald)' }} />
                </div>

                <h4 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem', fontWeight: '800' }}>
                  Message Sent Successfully!
                </h4>

                <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
                  Thank you for reaching out. Your message has been received, and I will get back to you shortly.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setErrors({});
                      setTouched({});
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={16} />
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {errorMessage && (
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '8px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      fontSize: '0.85rem',
                      color: '#fca5a5',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <AlertCircle size={18} style={{ color: '#ef4444', flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                      <a href={getMailtoUrl()} className="btn btn-primary btn-sm" style={{ fontSize: '0.78rem' }}>
                        <Mail size={13} />
                        <span>Send via Email Client</span>
                      </a>
                      <a
                        href={getWhatsAppMessageUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                        style={{ fontSize: '0.78rem' }}
                      >
                        <MessageSquare size={13} />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: errors.name && touched.name ? '#f87171' : 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. John Doe / Tech Recruiter / Founder"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: errors.name && touched.name
                        ? '1px solid #ef4444'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                  {errors.name && touched.name && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: errors.email && touched.email ? '#f87171' : 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. recruiter@company.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: errors.email && touched.email
                        ? '1px solid #ef4444'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                  {errors.email && touched.email && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject / Role (Optional) */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Role / Project Subject <span style={{ color: 'var(--text-dim)', fontWeight: '400' }}>(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="e.g. Senior React Native Mobile Developer Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: errors.message && touched.message ? '#f87171' : 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Hi Mohammad Aamir, we checked your React Native & React.js portfolio and would like to discuss..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: errors.message && touched.message
                        ? '1px solid #ef4444'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                  {errors.message && touched.message && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    padding: '0.95rem 1.5rem',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin-animation" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    marginTop: '0.25rem',
                  }}
                >
                  <Sparkles size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Your information is kept strictly confidential.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .spin-animation {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
          .contact-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
