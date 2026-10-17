import { motion, type Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const experiences = [
    {
      role: "React Native Developer",
      company: "Mobile App Innovations & Client Solutions",
      period: "2023 - Present",
      location: "New Delhi, India (Hybrid)",
      type: "Full-Time",
      description:
        "Lead frontend mobile architecture for fintech & healthcare client apps. Oversee app performance, state architecture, and multi-platform deployment on Google Play & Apple App Store.",
      achievements: [
        "Reduced app startup and cold-launch time by 38% through bundle-splitting and lazy-loaded modules.",
        "Engineered end-to-end payment gateway and biometric verification for 50,000+ active mobile users.",
        "Refactored legacy Redux store to Redux Toolkit & RTK Query, cutting network boilerplate code by 45%.",
      ],
      skills: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Jest", "CI/CD"],
    },
    {
      role: "Frontend & Mobile App Developer",
      company: "Digital Craft Solutions",
      period: "2021 - 2023",
      location: "New Delhi, India",
      type: "Full-Time",
      description:
        "Built responsive mobile and web interfaces with React Native and React.js. Worked closely with UI/UX designers and backend engineers to translate Figma designs into pixel-perfect apps.",
      achievements: [
        "Developed 4 full-fledged cross-platform applications from scratch to production release.",
        "Integrated dynamic REST APIs, web push notifications, and background location services.",
        "Maintained 99.8% crash-free session rate by enforcing strict TypeScript types and comprehensive testing.",
      ],
      skills: ["React Native", "React.js", "JavaScript", "Tailwind CSS", "Axios", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-3">
            CAREER PATH
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <p className="mt-4 text-dark-400 text-base md:text-lg">
            Over 3 years of building production-grade mobile applications and scalable client solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-dark-700/80 ml-4 md:ml-32 space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative pl-8 group">
              {/* Timeline marker icon */}
              <div className="absolute -left-5 top-1.5 w-10 h-10 rounded-full bg-dark-800 border-2 border-teal-500/60 flex items-center justify-center text-teal-400 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                <Briefcase size={16} />
              </div>

              {/* Card content */}
              <div className="bg-dark-800/60 border border-dark-700/80 hover:border-teal-500/40 rounded-2xl p-6 md:p-8 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-dark-50">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 w-fit">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400 mb-4">
                  <span className="font-semibold text-teal-400/90">{exp.company}</span>
                  <span className="flex items-center gap-1 text-xs text-dark-400">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-dark-700/60 text-dark-300 font-mono">
                    {exp.type}
                  </span>
                </div>

                <p className="text-dark-300 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Bullet points */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-dark-300">
                      <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech applied */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded-md bg-dark-900/60 text-dark-300 border border-dark-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
