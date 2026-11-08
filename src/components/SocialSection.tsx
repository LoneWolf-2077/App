import React from "react";
import { motion } from "motion/react";
import { 
  QrCode, 
  ExternalLink, 
  Twitter, 
  Youtube, 
  Github, 
  Instagram, 
  MessageSquare,
  Globe2,
  Mail,
  Compass
} from "lucide-react";
import qrCodeImg from "../assets/images/QR Code.png";

export default function SocialSection({ isDarkMode }: { isDarkMode: boolean }) {
  const linktreeUrl = "https://linktr.ee/lonewolf_2077";

  const socialPlatforms = [
    {
      name: "Linktree Portal",
      description: "Access my full multimedia hub and projects directory",
      icon: <Compass className="w-5 h-5 text-vice-pink" />,
      href: linktreeUrl,
      accent: "from-vice-pink to-vice-purple",
      tag: "CORE HUB"
    },
    {
      name: "Twitter / X",
      description: "Follow real-time design updates and aesthetic threads",
      icon: <Twitter className="w-5 h-5 text-vice-cyan" />,
      href: "https://x.com",
      accent: "from-vice-cyan to-blue-500",
      tag: "LATEST NEWS"
    },
    {
      name: "YouTube Channel",
      description: "Cinematic design montages, motion design, & stream archives",
      icon: <Youtube className="w-5 h-5 text-red-500" />,
      href: "https://youtube.com",
      accent: "from-red-500 to-rose-600",
      tag: "VIDEO PROJECTS"
    },
    {
      name: "GitHub Repository",
      description: "Interactive WebGL, React frontend builds, and custom scripts",
      icon: <Github className="w-5 h-5 text-slate-400" />,
      href: "https://github.com",
      accent: "from-slate-600 to-slate-800",
      tag: "CREATIVE CODE"
    },
    {
      name: "Discord Collective",
      description: "Engage with other creative designers and artists globally",
      icon: <MessageSquare className="w-5 h-5 text-[#5865F2]" />,
      href: "https://discord.com",
      accent: "from-[#5865F2] to-[#7289da]",
      tag: "COMMUNITY"
    },
    {
      name: "Instagram Slate",
      description: "Visual moodboards, key art concepts, and high-fidelity captures",
      icon: <Instagram className="w-5 h-5 text-pink-500" />,
      href: "https://instagram.com",
      accent: "from-pink-500 to-orange-500",
      tag: "MOODBOARD"
    }
  ];

  return (
    <section
      id="social-media"
      className={`py-20 px-6 border-t relative overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? "bg-[#09090b] border-white/5 text-slate-300" 
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      {/* Visual Accents & Decorative Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-vice-pink/5 via-vice-purple/5 to-vice-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Cyberpunk grid lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-vice-pink/30 bg-vice-pink/10 text-vice-pink">
            <QrCode className="w-3.5 h-3.5" /> SECURE TRANSMISSION
          </div>
          
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase leading-none text-slate-900 dark:text-white">
            CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-cyan to-vice-pink">THE STUDIO</span>
          </h2>
          
          <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"} max-w-lg mx-auto`}>
            Scan the neural network link matrix below or engage directly with individual channel portals to browse social streams, code, and portfolios.
          </p>
        </div>

        {/* Dual Column Layout: Left (QR Showcase), Right (Portals Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: QR CODE SHOWCASE */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              {/* Outer Glowing Retro Border */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-vice-pink via-vice-purple to-vice-cyan opacity-25 group-hover:opacity-60 blur-xl transition-all duration-500 scale-95 group-hover:scale-105" />
              
              <a 
                href={linktreeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-black/80 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.02] shadow-2xl"
              >
                {/* Tech target corners decoration */}
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-vice-cyan" />
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-vice-cyan" />
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-vice-cyan" />
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-vice-cyan" />

                {/* Laser scanline effect */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-vice-cyan to-transparent animate-pulse group-hover:translate-y-[240px] transition-transform duration-[3000ms] ease-in-out pointer-events-none" />

                <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center overflow-hidden rounded-lg bg-white p-2 border border-slate-100">
                  <img
                    src={qrCodeImg}
                    alt="LONEWOLF Linktree QR Code"
                    className="w-full h-full object-contain pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Dynamic Banner beneath the QR Code */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
                  <span className="font-mono text-[10px] tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
                    SCAN MATRIX OR TAP CODE_
                  </span>
                  <div className="flex items-center justify-center gap-1.5 text-vice-pink font-bold text-sm tracking-wide">
                    <span>linktr.ee/lonewolf_2077</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Click assistance label */}
            <p className={`mt-5 text-xs text-center font-mono tracking-wider ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
              [ * ] Tap QR to launch consolidated Linktree directory safely
            </p>

          </div>

          {/* RIGHT: PORTALS GRID */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-vice-cyan block" />
              <h3 className="font-mono text-xs font-black tracking-[0.2em] text-vice-cyan uppercase">
                COMMUNICATION PORTALS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`p-4 rounded-xl border group flex flex-col justify-between h-32 transition-all relative overflow-hidden backdrop-blur-sm ${
                    isDarkMode 
                      ? "bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/[0.03]" 
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-100/50"
                  }`}
                >
                  {/* Subtle hover gradient slide-up style */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-all duration-300" />
                  
                  {/* Header Row of card */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 group-hover:scale-105 transition-transform">
                      {platform.icon}
                    </div>
                    <span className="text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-400 font-semibold uppercase">
                      {platform.tag}
                    </span>
                  </div>

                  {/* Text/Content row */}
                  <div className="relative z-10 text-left">
                    <div className="flex items-center gap-1">
                      <h4 className="font-sans font-bold text-sm text-slate-800 dark:text-white tracking-tight group-hover:text-vice-pink transition-colors">
                        {platform.name}
                      </h4>
                      <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className={`text-[10.5px] leading-tight mt-1 line-clamp-2 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {platform.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Direct inquiry channel */}
            <div className={`p-4 rounded-xl border border-dashed flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
              isDarkMode 
                ? "border-white/10 bg-[#0e0e12] text-slate-400" 
                : "border-slate-300 bg-slate-50 text-slate-600"
            }`}>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vice-pink" />
                <span className="font-semibold text-left">Looking for dedicated multimedia contracts?</span>
              </div>
              <a 
                href="mailto:bannjason@gmail.com"
                className="px-4 py-1.5 text-[11px] font-mono font-bold uppercase rounded-lg bg-vice-pink text-white hover:bg-vice-pink/90 transition-all shadow-sm tracking-wider"
              >
                DIRECT CALL_
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
