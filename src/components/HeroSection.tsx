import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Calendar, Users, Award, Play } from "lucide-react";
import heroImg from "../assets/images/gtavi_hero_banner_1779890370674.png";
import WolfLogo from "./WolfLogo";
import mainFontImg from "../assets/images/Main font.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple, high-performance parallax calculations
  const skyOffset = scrollY * 0.45;
  const logoOffset = scrollY * 0.2;
  const contentOffset = scrollY * 0.1;
  const opacityFade = Math.max(1 - scrollY / 700, 0);

  return (
    <section
      id="hero-section"
      className="relative w-full h-[105vh] bg-[#050505] overflow-hidden flex items-center justify-center select-none"
    >
      {/* 1. Base Sky and Ocean Layer */}
      <div
        className="absolute inset-0 w-full h-full transition-transform will-change-transform bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.45), rgba(5, 5, 5, 0.95)), url(${heroImg})`,
          transform: `translateY(${skyOffset}px) scale(${1 + scrollY * 0.0004})`,
        }}
        referrerPolicy="no-referrer"
      />

      {/* Cyberpunk Pink/Gold Gradient Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-vice-pink/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[25vw] h-[25vw] bg-vice-cyan/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Dynamic Grid Overlay (Intersects with sunset atmosphere) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(244,63,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Floating VI & Title Parallax Midground Layer */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl will-change-transform transition-transform"
        style={{
          transform: `translateY(${logoOffset}px)`,
          opacity: opacityFade,
        }}
      >
        {/* Vice-style Script Subscript */}
        <motion.p
          id="hero-script-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-script text-4xl sm:text-6xl md:text-7xl text-vice-pink tracking-wide drop-shadow-[0_4px_10px_rgba(244,63,94,0.6)] select-none transform rotate-[-4deg]"
        >
          The Portfolio of
        </motion.p>

        {/* Cinematic LW Monolith & Wolf Logo */}
        <div className="relative mt-2 select-none flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 drop-shadow-[0_0_40px_rgba(6,182,212,0.45)] z-20"
          >
            <WolfLogo className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[280px] sm:w-[450px] md:w-[680px] -mt-4 pt-2 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] z-20 select-none pointer-events-none flex justify-center"
          >
            <img 
              src={mainFontImg} 
              alt="LONEWOLF" 
              className="w-full h-auto object-contain select-none pointer-events-none" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Dynamic Tagline */}
        <motion.div
          id="hero-info-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-5 text-xs sm:text-sm text-slate-300 font-display font-semibold tracking-[0.25em]"
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-vice-pink" /> ESTABLISHED 2025
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-vice-cyan" /> MULTIMEDIA DESIGN
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4 text-rockstar-yellow" /> BY JAY
          </span>
        </motion.div>

        {/* Quick scroll CTA */}
        <motion.div
          id="hero-cta-btn"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="mt-14"
        >
          <a
            href="#trailer"
            className="flex flex-col items-center text-[10px] text-slate-400 font-display tracking-[0.3em] hover:text-white transition-colors"
          >
            ENTER THE STUDIO
            <ChevronDown className="w-4 h-4 mt-2 text-vice-pink" />
          </a>
        </motion.div>
      </div>

      {/* 3. Bottom Transition Mask Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
