import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BackToTopProps {
  isDarkMode?: boolean;
}

export default function BackToTop({ isDarkMode = true }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="btn-back-to-top"
          aria-label="Back to Top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 group cursor-pointer flex items-center justify-center ${
            isDarkMode
              ? "bg-slate-900/80 text-white border-white/20 hover:border-vice-pink hover:bg-slate-800/90 shadow-vice-pink/20 hover:shadow-vice-pink/40"
              : "bg-white/90 text-slate-900 border-slate-300 hover:border-vice-purple hover:bg-white shadow-slate-400/30"
          }`}
        >
          {/* Subtle Ambient Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
          
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 text-vice-pink group-hover:text-white" />
          
          {/* Hidden Tooltip on Desktop */}
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
