import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillBadges = ["React Native", "React.js", "TypeScript", "REST APIs"];

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 w-fit"
            >
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-teal-400">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building Beautiful{" "}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Mobile Experiences
              </span>{" "}
              with React Native.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-400 leading-relaxed max-w-lg"
            >
              React Native Developer with 3+ years of experience building mobile
              applications, integrating APIs, and creating smooth user
              experiences that users love.
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-4"
            >
              {skillBadges.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-dark-800 border border-dark-700 text-dark-300 text-xs font-medium rounded-full hover:border-teal-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-dark-900 font-semibold rounded-lg transition-colors"
              >
                View My Projects
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/[REPLACE_WITH_RESUME_ID]/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-700 hover:border-teal-500 text-dark-50 font-semibold rounded-lg transition-colors"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/[REPLACE_WITH_GITHUB]"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-teal-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github
                  size={20}
                  className="group-hover:text-teal-400 transition-colors"
                />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/[REPLACE_WITH_LINKEDIN]"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-teal-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin
                  size={20}
                  className="group-hover:text-teal-400 transition-colors"
                />
              </motion.a>

              <motion.a
                href="mailto:moaamir845@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-teal-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Mail
                  size={20}
                  className="group-hover:text-teal-400 transition-colors"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Animated Phone Mockup */}
            <motion.div
              animate={{ float: [0, 30, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full max-w-sm"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl border-8 border-dark-600 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-dark-900 rounded-b-3xl z-10"></div>

                {/* Screen content */}
                <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-dark-800 flex flex-col items-center justify-center gap-6 p-6 pt-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-teal-500/30 rounded-full mx-auto"></div>
                    <div className="h-3 w-24 bg-dark-700 rounded mx-auto"></div>
                    <div className="h-2 w-32 bg-dark-700 rounded mx-auto"></div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="h-2 w-full bg-dark-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-dark-700 rounded"></div>
                    <div className="h-2 w-4/5 bg-dark-700 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-3xl blur-2xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
