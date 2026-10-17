import { motion } from 'framer-motion';
import { Code2, Zap, Users, BookOpen } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'React Native Expertise',
      description: 'Specialized in building cross-platform mobile applications with modern React Native patterns and best practices.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing app performance, reducing load times, and ensuring smooth animations and transitions.',
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Working effectively with cross-functional teams, code reviews, and agile development methodologies.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies, frameworks, and best practices in mobile development.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-teal-400">Me</span>
              </h2>
              <p className="text-dark-400 text-lg leading-relaxed">
                I'm a React Native developer with 3+ years of hands-on experience building mobile applications across fintech, healthcare, and e-commerce domains. My journey started with a passion for creating beautiful, user-friendly mobile experiences, and it has evolved into a comprehensive skill set covering both frontend and mobile development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-dark-400 leading-relaxed">
                Over the years, I've worked on diverse projects including e-commerce ecosystems, blockchain applications, and healthcare management systems. I specialize in integrating REST APIs, implementing complex state management, and optimizing app performance to ensure smooth user experiences.
              </p>
              <p className="text-dark-400 leading-relaxed">
                I'm committed to writing clean, maintainable code and staying updated with the latest technologies and best practices in the rapidly evolving mobile development landscape.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={itemVariants}
              href="#contact"
              whileHover={{ scale: 1.05, x: 10 }}
              className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors group"
            >
              Let's talk about your project
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
          </div>

          {/* Right - Profile Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-teal-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-dark-800 border border-dark-700 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
                {/* Profile Image Placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-teal-400/30">A</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold">Mohd Aamir</h3>
                  <p className="text-teal-400 font-semibold">React Native Developer</p>
                  <p className="text-dark-400 text-sm mt-2">📍 New Delhi, India</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 px-3 py-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/50 text-teal-400 rounded-lg text-sm font-medium transition-colors">
                    Hire Me
                  </button>
                  <button className="flex-1 px-3 py-2 bg-dark-700 hover:bg-dark-600 border border-dark-600 rounded-lg text-sm font-medium transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-800/50 border border-dark-700 hover:border-teal-500/50 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-teal-400" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;