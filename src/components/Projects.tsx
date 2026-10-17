import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [filter, setFilter] = useState("all");

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: "FinPulse - Mobile Banking & Wealth",
      category: "mobile",
      tag: "FinTech",
      description:
        "Comprehensive cross-platform fintech application featuring biometric login, instant P2P transfers, virtual card management, and real-time expense telemetry.",
      metrics: ["Sub-second transaction state", "Biometric authentication (FaceID/Fingerprint)", "Offline-ready caching"],
      tech: ["React Native", "TypeScript", "Redux Toolkit", "ChartKit", "MMKV", "Tailwind"],
      github: "https://github.com/Aamirsheri7",
      demo: "https://github.com/Aamirsheri7",
      featured: true,
    },
    {
      title: "CareSync - Telehealth Consultation App",
      category: "mobile",
      tag: "Healthcare",
      description:
        "Mobile patient portal with scheduled WebRTC video consultations, automated prescription reminders, dynamic appointment slot booking, and secure medical history records.",
      metrics: ["HIPAA-compliant workflows", "Push notifications via FCM", "Real-time chat messaging"],
      tech: ["React Native", "Expo", "WebRTC", "Firebase", "Node.js API", "React Navigation"],
      github: "https://github.com/Aamirsheri7",
      demo: "https://github.com/Aamirsheri7",
      featured: true,
    },
    {
      title: "UrbanCart - High-Conversion E-Commerce",
      category: "mobile",
      tag: "E-Commerce",
      description:
        "Fluid shopping mobile app with lightning-fast catalog search, dynamic filters, integrated Stripe checkout, persistent cart sync, and order tracking timeline.",
      metrics: ["60 FPS animated transitions", "Instant search with debounce", "Multi-currency support"],
      tech: ["React Native", "Redux", "Stripe SDK", "REST APIs", "FastImage", "Framer Motion"],
      github: "https://github.com/Aamirsheri7",
      demo: "https://github.com/Aamirsheri7",
      featured: false,
    },
    {
      title: "CryptoVault - Web3 & Token Portfolio",
      category: "web3",
      tag: "Blockchain",
      description:
        "Decentralized portfolio dashboard tracking ERC-20 tokens, market trends, gas prices, and price change alerts using CoinGecko and Ethers.js APIs.",
      metrics: ["Live WebSocket price updates", "Secure keychain key storage", "Dark/Light custom themes"],
      tech: ["React Native", "TypeScript", "CoinGecko API", "Ethers.js", "Context API"],
      github: "https://github.com/Aamirsheri7",
      demo: "https://github.com/Aamirsheri7",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-3">
            SHOWCASE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="mt-4 text-dark-400 text-base md:text-lg">
            A selection of production-grade mobile applications built for high performance, smooth UX, and enterprise reliability.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-3 mt-8">
            {[
              { label: "All Projects", key: "all" },
              { label: "Mobile Apps", key: "mobile" },
              { label: "Web3 / FinTech", key: "web3" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === tab.key
                    ? "bg-teal-500 text-dark-900 font-semibold shadow-lg shadow-teal-500/20"
                    : "bg-dark-800 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-dark-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-dark-800/60 border border-dark-700/80 hover:border-teal-500/40 rounded-2xl p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-900/60 border border-dark-700 text-dark-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                      title="View Source on GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-900/60 border border-dark-700 text-dark-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                      title="Live Preview / Details"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-dark-50 group-hover:text-teal-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-dark-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-dark-300">
                      <CheckCircle2 size={14} className="text-teal-400 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/60">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-dark-900/80 text-dark-300 border border-dark-700 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
