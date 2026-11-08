import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoTeaser from "./components/VideoTeaser";
import CharacterShowcase from "./components/CharacterShowcase";
import NewsSection from "./components/NewsSection";
import AboutSection from "./components/AboutSection";
import SocialSection from "./components/SocialSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import WorkPage from "./components/WorkPage";
import BackToTop from "./components/BackToTop";
import { ambientSynth } from "./utils/audio";
import { Sparkles, ArrowRight, Layers, UserCheck, Newspaper, Package, Globe, Palette } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  // Sync document element dark class instantly with Theme state modifications
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Sync ambient procedural audio synthesizer playback with Mute togglers safely
  useEffect(() => {
    if (!isMuted) {
      ambientSynth.play();
    } else {
      ambientSynth.stop();
    }
    return () => {
      ambientSynth.stop();
    };
  }, [isMuted]);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSelectTab = (tabId: string, subCategory?: string | null) => {
    setActiveTab(tabId);
    setActiveSubCategory(subCategory || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden flex flex-col transition-colors duration-400 noise-overlay ${
      isDarkMode ? "bg-[#050505] sleek-viewport-bg text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Sleek Interface Ambient Decals */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan z-50 pointer-events-none" />
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] sleek-glow-pink opacity-40 z-0 pointer-events-none" />
      <div className="absolute bottom-[200px] right-[-100px] w-[500px] h-[500px] sleek-glow-blue opacity-30 z-0 pointer-events-none" />

      {/* Modern Fixed Navbar with Hover Dropdowns & Page Tab Selectors */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Dedicated Page Views for each Tab */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME PAGE (Contains Splash Screen & Reel) */}
          {activeTab === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Splash Screen / Parallax Hero Arena */}
              <HeroSection />

              {/* Studio Reel & Countdown Video Teaser */}
              <VideoTeaser isDarkMode={isDarkMode} />

              {/* Studio Highlights & Quick Page Navigator */}
              <section className={`py-20 px-6 border-t ${
                isDarkMode ? "bg-slate-950/80 border-white/10" : "bg-white border-slate-200"
              }`}>
                <div className="max-w-6xl mx-auto">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-pink bg-vice-pink/10 px-3.5 py-1.5 rounded-full uppercase border border-vice-pink/20">
                      ★ STUDIO NAVIGATION PORTAL
                    </span>
                    <h2 className={`font-display font-extrabold text-4xl sm:text-5xl mt-3 tracking-tight ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan font-display font-black">LONEWOLF</span> SECTIONS
                    </h2>
                    <p className={`text-sm mt-3 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      Select any specialized studio tab above or choose a department below to inspect case studies, developer bulletins, creative archetypes, or hire options.
                    </p>
                  </div>

                  {/* Navigation Hub Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      {
                        tab: "about",
                        title: "ABOUT",
                        desc: "Studio manifesto, System Architect & Creative Director profiles, FAQ & social links",
                        icon: Sparkles,
                        color: "from-vice-pink to-rose-500",
                        sub: "studio"
                      },
                      {
                        tab: "work",
                        title: "MY WORK",
                        desc: "3D animation reels, motion graphics, video FX, branding & web concepts",
                        icon: Layers,
                        color: "from-vice-purple to-indigo-500",
                        sub: "all"
                      },
                      {
                        tab: "dispatches",
                        title: "DISPATCHES",
                        desc: "Official dev bulletins, radio transmissions & media logs",
                        icon: Newspaper,
                        color: "from-vice-cyan to-teal-500",
                        sub: "bulletins"
                      }
                    ].map((card) => {
                      const IconComp = card.icon;
                      return (
                        <motion.div
                          key={card.tab}
                          whileHover={{ y: -6 }}
                          onClick={() => handleSelectTab(card.tab, card.sub)}
                          className={`p-6 rounded-2xl border cursor-pointer group flex flex-col justify-between transition-all ${
                            isDarkMode 
                              ? "bg-slate-900/60 border-white/10 hover:border-white/25" 
                              : "bg-slate-50 border-slate-200/80 hover:border-slate-300"
                          }`}
                        >
                          <div>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                              <IconComp className="w-6 h-6" />
                            </div>
                            <h3 className={`font-display font-extrabold text-xl tracking-tight ${
                              isDarkMode ? "text-white" : "text-slate-900"
                            }`}>
                              {card.title}
                            </h3>
                            <p className={`text-xs mt-2 leading-relaxed ${
                              isDarkMode ? "text-slate-400" : "text-slate-600"
                            }`}>
                              {card.desc}
                            </p>
                          </div>

                          <div className="mt-6 flex items-center justify-between text-xs font-display font-bold text-vice-cyan group-hover:text-vice-pink transition-colors">
                            <span>ENTER PAGE</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 2: MY WORK PAGE */}
          {activeTab === "work" && (
            <motion.div
              key="work-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <WorkPage
                isDarkMode={isDarkMode}
                activeSubCategory={activeSubCategory}
                onSelectSubCategory={(sub) => setActiveSubCategory(sub)}
              />
            </motion.div>
          )}

          {/* TAB 3: DISPATCHES PAGE */}
          {activeTab === "dispatches" && (
            <motion.div
              key="dispatches-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full pt-16"
            >
              <NewsSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {/* TAB 4: ABOUT PAGE (Includes Studio Story, Archetypes, FAQ & Socials) */}
          {activeTab === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full pt-16"
            >
              <AboutSection isDarkMode={isDarkMode} />
              <CharacterShowcase isDarkMode={isDarkMode} />
              <FaqSection isDarkMode={isDarkMode} />
              <SocialSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Regulatory & Studio Legal Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Floating Back to Top Button */}
      <BackToTop isDarkMode={isDarkMode} />
    </div>
  );
}

