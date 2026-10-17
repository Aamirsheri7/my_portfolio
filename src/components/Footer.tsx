import { ArrowUp, Heart } from "lucide-react";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-dark-800 bg-dark-950/80 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-dark-900 font-bold">
            A
          </div>
          <div>
            <div className="font-bold text-dark-100">Mohd Aamir</div>
            <div className="text-xs text-dark-400">React Native Developer</div>
          </div>
        </div>

        <div className="text-xs text-dark-400 flex items-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} Mohd Aamir. Built with</span>
          <Heart size={14} className="text-teal-400 fill-teal-400 inline" />
          <span>React, TypeScript &amp; Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Aamirsheri7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-dark-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-dark-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
