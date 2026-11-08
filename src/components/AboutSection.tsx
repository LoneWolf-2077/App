import React from "react";
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Award, 
  Eye, 
  Code2, 
  Cpu, 
  Globe2, 
  Compass, 
  Flame,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { motion } from "motion/react";
import WolfLogo from "./WolfLogo";

interface AboutSectionProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const corePillars = [
    {
      icon: Terminal,
      title: "Uncompromising Aesthetics",
      description: "We eliminate generic AI templates in favor of high-contrast, atmospheric dark themes, bespoke kinetic motion, and hand-crafted typography.",
      badge: "VISUAL IDENTITY"
    },
    {
      icon: Code2,
      title: "Next-Gen Engineering",
      description: "Built on React 19, WebGL shaders, TypeScript, and high-performance serverless backends designed for speed and responsiveness.",
      badge: "ARCHITECTURE"
    },
    {
      icon: Compass,
      title: "Vice City Atmosphere",
      description: "Inspired by neon-lit coastal skylines, dark synthwave soundscapes, and high-octane digital experiences.",
      badge: "CULTURE"
    }
  ];

  const milestones = [
    { number: "5+", label: "Years of Creative Excellence" },
    { number: "100%", label: "Bespoke Codebases" },
    { number: "60 FPS", label: "Fluid Canvas Animations" },
    { number: "24/7", label: "Global Deployment Uptime" }
  ];

  const studioValues = [
    {
      title: "Creative Independence",
      desc: "Operating outside standard corporate boundaries to produce raw, memorable digital artifacts."
    },
    {
      title: "Sonic & Visual Synergy",
      desc: "Integrating procedural Web Audio synthesizers directly into visual interfaces for immersive user engagement."
    },
    {
      title: "Precision Craftsmanship",
      desc: "Every pixel, margin, and typography scale mathematically tuned for visual balance."
    }
  ];

  return (
    <section id="about-studio-section" className="pt-28 pb-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-black via-slate-950 to-slate-900 shadow-2xl mb-16">
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-vice-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-vice-pink/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vice-pink/10 border border-vice-pink/30 text-vice-pink text-[11px] font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-vice-cyan" />
                <span>ABOUT LONEWOLF</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95]">
                Just Me, <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan">Making</span> Cool stuff
              </h1>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                <p>
                  While I spend my days deep in design, production, and digital spaces, Wolf is my personal sandbox. It’s where rules take a back seat to experimentation, whether that’s diving headfirst into 3D art, brewing up community passion projects, or building tools just to see if I can. I believe the best creative work happens when you stop overthinking, embrace the fun, and just start building what you love.
                </p>
                <p>
                  When I’m not pushing pixels or tweaking code, you’ll usually find me messing around with new ideas, exploring fandoms, or taking on the next random challenge that catches my eye. LoneWolf isn't a rigid corporate entity—it's just me, doing what I love, entirely on my own terms.
                </p>
              </div>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["EST. 2025", "INDEPENDENT LAB", "FULL-STACK UI/UX", "WEBGL & AUDIO"].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-vice-cyan uppercase tracking-wider font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Emblem Graphic Card */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-cyan-500/10 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-vice-pink/20 to-vice-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <WolfLogo className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(18,189,198,0.5)] group-hover:scale-110 transition-transform" />
                <span className="font-vermin text-xl text-white mt-4 tracking-wider">LONEWOLF</span>
                <span className="text-[10px] font-mono text-vice-cyan uppercase tracking-widest mt-1">OFFICIAL EMBLEM</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Milestones Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {milestones.map((m, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border text-center transition-all ${
                isDarkMode 
                  ? "bg-slate-900/60 border-white/10 hover:border-vice-pink/40" 
                  : "bg-white border-slate-200 hover:border-vice-pink/40 shadow-sm"
              }`}
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-cyan">
                {m.number}
              </div>
              <div className={`text-xs font-mono uppercase tracking-wider mt-2 font-semibold ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Studio Pillars Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-cyan bg-vice-cyan/10 px-3.5 py-1.5 rounded-full uppercase border border-vice-cyan/20">
              ★ CORE PHILOSOPHY
            </span>
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight mt-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan">LONEWOLF</span> PILLARS
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Built on uncompromising visual standards, modern engineering, and immersive audio-visual dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl border flex flex-col justify-between group transition-all ${
                    isDarkMode 
                      ? "bg-slate-900/50 border-white/10 hover:border-vice-pink/40 hover:bg-slate-900/80" 
                      : "bg-white border-slate-200 hover:border-vice-pink/40 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vice-pink to-vice-purple text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-vice-cyan bg-vice-cyan/10 px-2.5 py-1 rounded border border-vice-cyan/20 uppercase font-bold">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className={`font-display font-black text-2xl tracking-tight ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {pillar.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed mt-3 ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-vice-pink font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-vice-cyan" />
                    <span>VERIFIED STUDIO STANDARD</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Culture & Ethos Grid */}
        <div className={`p-8 sm:p-12 rounded-3xl border mb-12 ${
          isDarkMode ? "bg-slate-950/80 border-white/10" : "bg-slate-100 border-slate-200"
        }`}>
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-vice-pink font-bold uppercase tracking-widest block mb-2">
              STUDIO MANIFESTO // CULT & CREED
            </span>
            <h3 className={`font-display font-black text-3xl sm:text-4xl tracking-tight ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              REDEFINING HOW DIGITAL EXPERIENCES FEEL
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {studioValues.map((v, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-vice-cyan font-mono text-xs font-bold">0{idx + 1} // PROTOCOL</div>
                <h4 className={`font-display font-bold text-lg ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  {v.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
