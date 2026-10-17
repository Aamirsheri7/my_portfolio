import { motion, type Variants } from "framer-motion";
import { Smartphone, Layout, Database, Wrench, ShieldCheck, Zap } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Building smooth, performant cross-platform iOS & Android applications",
      skills: [
        "React Native",
        "Expo & Bare Workflow",
        "React Navigation",
        "Native Device APIs",
        "Push Notifications",
        "Deep Linking",
        "Offline Storage (AsyncStorage/MMKV)",
      ],
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      description: "Crafting modular, responsive web & mobile user interfaces",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Framer Motion",
        "Responsive UI/UX",
      ],
    },
    {
      title: "State & Architecture",
      icon: Zap,
      description: "Managing predictable data flow and optimal render performance",
      skills: [
        "Redux Toolkit (RTK)",
        "Context API",
        "Zustand",
        "TanStack Query (React Query)",
        "Clean Architecture",
        "Component Reusability",
      ],
    },
    {
      title: "APIs & Integration",
      icon: Database,
      description: "Integrating secure backend services and external third parties",
      skills: [
        "RESTful APIs",
        "Axios & Fetch",
        "Firebase & Firestore",
        "Supabase",
        "Authentication (JWT/OAuth)",
        "Payment Gateways (Stripe/Razorpay)",
      ],
    },
    {
      title: "Tooling & DevOps",
      icon: Wrench,
      description: "Modern developer workflow, version control, and debugging",
      skills: [
        "Git & GitHub",
        "VS Code & Android Studio",
        "Xcode & iOS Simulator",
        "Postman & Flipper",
        "npm / yarn / pnpm",
        "Vite & Webpack",
      ],
    },
    {
      title: "Performance & Quality",
      icon: ShieldCheck,
      description: "Ensuring high reliability, 60fps animations, and quick load times",
      skills: [
        "Memory Leak Profiling",
        "Re-render Optimization",
        "Bundle Size Reduction",
        "App Store & Play Store Prep",
        "Unit Testing (Jest)",
        "Crashlytics & Error Handling",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
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
            TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Skills &amp; <span className="text-teal-400">Specializations</span>
          </h2>
          <p className="mt-4 text-dark-400 text-base md:text-lg">
            A comprehensive overview of my technical stack, mobile architecture capabilities, and tools I use daily.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-dark-800/60 border border-dark-700/80 hover:border-teal-500/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 group-hover:text-teal-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-dark-400 mt-1 mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-dark-700/50">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-dark-900/60 text-dark-300 border border-dark-700 hover:border-teal-500/50 hover:text-teal-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
