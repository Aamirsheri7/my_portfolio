import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "moaamir845@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link for direct sending
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's Build Something <span className="text-teal-400">Exceptional</span>
          </h2>
          <p className="mt-4 text-dark-400 text-base md:text-lg">
            Have a project in mind, an open React Native position, or just want to connect? My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-10"
        >
          {/* Left Column: Direct Info Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="bg-dark-800/60 border border-dark-700/80 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-dark-50">
                Contact Information
              </h3>
              <p className="text-sm text-dark-400 mb-6 leading-relaxed">
                Feel free to email me directly or reach out via GitHub. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 border border-dark-700/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-dark-400">Email Address</div>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-medium text-dark-100 hover:text-teal-400 transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-teal-400 hover:bg-dark-700 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-900/60 border border-dark-700/70">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-dark-400">Location</div>
                    <div className="text-sm font-medium text-dark-100">New Delhi, India</div>
                  </div>
                </div>

                {/* GitHub item */}
                <a
                  href="https://github.com/Aamirsheri7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-900/60 border border-dark-700/70 hover:border-teal-500/50 hover:bg-dark-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-dark-400">GitHub Profile</div>
                    <div className="text-sm font-medium text-dark-100 group-hover:text-teal-400 transition-colors">
                      github.com/Aamirsheri7
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Pill Card */}
            <div className="bg-gradient-to-br from-teal-500/10 via-dark-800/80 to-dark-800/80 border border-teal-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  Current Status
                </span>
              </div>
              <h4 className="text-lg font-bold text-dark-50">
                Available for New Roles &amp; Projects
              </h4>
              <p className="text-xs text-dark-400 mt-2 leading-relaxed">
                Open to full-time remote/hybrid React Native software engineer roles, mobile consulting, and contract assignments.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-dark-800/60 border border-dark-700/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={20} className="text-teal-400" />
                <h3 className="text-xl font-bold text-dark-50">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-dark-50">Email Client Opened!</h4>
                  <p className="text-sm text-dark-400 max-w-md mx-auto">
                    Thank you! Your email client has been prepared with your message. If it didn't open automatically, write directly to <span className="text-teal-400">{email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-dark-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm text-dark-100 placeholder-dark-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dark-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm text-dark-100 placeholder-dark-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm text-dark-100 placeholder-dark-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Aamir, I'd like to discuss a React Native project..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm text-dark-100 placeholder-dark-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-dark-900 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all transform active:scale-[0.99]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
