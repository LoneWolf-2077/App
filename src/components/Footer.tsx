import React from "react";
import { ArrowUp, Heart, Globe, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import WolfLogo from "./WolfLogo";

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuLinks = [
    { label: "Showcase", href: "#" },
    { label: "Archetypes", href: "#characters" },
    { label: "Case Studies", href: "#screenshots" },
    { label: "Dispatches", href: "#news" },
    { label: "Hire Me", href: "#preorder" }
  ];

  return (
    <footer
      id="main-footer"
      className={`py-16 px-6 border-t relative transition-colors duration-300 ${
        isDarkMode 
          ? "bg-[#050505] border-white/5 text-slate-500" 
          : "bg-slate-100 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        
        {/* Top footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center select-none">
              <WolfLogo className="w-10 h-10 object-contain animate-pulse" />
            </div>
            <div className="leading-tight text-left">
              <span className="font-vermin tracking-widest text-slate-800 dark:text-white uppercase text-base font-normal">
                LONEWOLF
              </span>
              <p className="text-[10px] font-mono tracking-widest text-slate-400">CREATIVE STUDIO // PORTFOLIO UNIT</p>
            </div>
          </div>

          {/* Back to top scroll link */}
          <motion.button
            id="back-to-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-display font-black tracking-widest uppercase cursor-pointer text-vice-pink bg-vice-pink/10 hover:bg-vice-pink/20 px-4 py-2.5 rounded-lg transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
          </motion.button>
        </div>

        {/* Medium content legals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Rating Badge */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-start">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-black/50 max-w-[260px]">
              {/* Performance rating badge mock */}
              <div className="w-12 h-16 bg-black text-white border-2 border-white flex flex-col items-center justify-between py-1 px-1 shrink-0 select-none">
                <div className="w-8 h-8 flex items-center justify-center">
                  <WolfLogo className="w-8 h-8 object-contain" />
                </div>
                <span className="font-sans font-semibold text-[7px] tracking-tight uppercase leading-none bg-white text-black w-full text-center py-[2px] font-bold">
                  APPROVED
                </span>
              </div>
              <div className="text-[10px] leading-relaxed font-semibold">
                <p className="text-slate-800 dark:text-slate-300 font-bold uppercase tracking-wider">PORTFOLIO EXCELLENCE SCORES:</p>
                <ul className="list-disc pl-3 text-slate-500 space-y-0.5 mt-1 text-left">
                  <li>React Custom State</li>
                  <li>Ultra Bundle Speed</li>
                  <li>Crisp Vector Elements</li>
                  <li>Zero Console Bugs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Legals statements */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4 text-xs">
            <p className="leading-relaxed">
              ©2026 Lonewolf Creative Studio. All custom layouts, code patterns, procedural synthesizers, and vector typography presets are designed and owned by Lonewolf. Standard image and icon libraries are curated from public-safe domains.
            </p>
            <p className="leading-relaxed">
              All other brands and third-party trademarks referenced are properties of their respective owners. Content displayed represents high fidelity educational front-end showcases designed with standard react-scroll and parallax motion systems.
            </p>

            {/* list inline links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              {menuLinks.map((li, idx) => (
                <a key={idx} href={li.href} className="hover:text-vice-pink transition-colors">
                  {li.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer bottom credit tagline */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]">
          <p className="font-mono">
            ESTABLISHED IN PORTFOLIO CORE ZONE // ACTIVE CLOCK ONLINE_
          </p>
          <div className="flex items-center gap-1">
            <span>Crafted with pure studio power and</span>
            <Heart className="w-3.5 h-3.5 text-vice-pink fill-vice-pink animate-pulse" />
            <span>by Lonewolf</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
