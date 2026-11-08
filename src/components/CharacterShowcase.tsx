import React, { useState } from "react";
import { Sparkles, Play, ShieldCheck, Zap, Target, Star, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import rumiImg from "../assets/images/Rumi pfp.png";
import monogramImg from "../assets/images/Monogram.png";

export default function CharacterShowcase({ isDarkMode }: { isDarkMode: boolean }) {
  const [selectedChar, setSelectedChar] = useState<"architect" | "creative">("architect");
  const [isPlayingQuote, setIsPlayingQuote] = useState(false);

  const characters = {
    architect: {
      name: "ARCHITECT",
      tagline: "INTERACTIVE SYSTEMS & MEDIA CODING_",
      accentClass: "text-vice-pink bg-vice-pink/10 border-vice-pink/30",
      accentHex: "#f43f5e",
      role: "Interactive Multimedia Designer",
      actor: "React // WebGL // Creative Coding",
      image: monogramImg,
      imageAlt: "LoneWolf Monogram Visual Identity",
      imageLabel: "Visual Identity // Monogram",
      bio: "The Architect engineers standard-compliant web architectures, creative code behaviors, and high-performance interactive layouts. Programmatically driven to unify design principles with real-time web technologies, custom components, and immersive user interaction systems.",
      voiceLine: '"Design is not just static graphics; it is a live, kinetic conversation. We build responsive storytelling web systems that load fast and work perfectly."_',
      stats: [
        { label: "Interactive Experience Tech", score: 95 },
        { label: "Design Systems & Layouts", score: 91 },
        { label: "Creative Front-End Web", score: 93 },
        { label: "Web Animation Performance", score: 88 }
      ]
    },
    creative: {
      name: "CREATIVE",
      tagline: "CINEMATIC MOTION & BRAND ELEVATION_",
      accentClass: "text-vice-cyan bg-vice-cyan/10 border-vice-cyan/30",
      accentHex: "#22d3ee",
      role: "Multimedia Art Director",
      actor: "Figma // After Effects // Motion",
      image: rumiImg,
      imageAlt: "Rumi Character Avatar & Creative Inspiration",
      imageLabel: "Creative Avatar // Rumi",
      bio: "The Creative shapes raw visceral atmosphere through bold typography pairings, customized video directions, fluid kinetic transitions, and tactile micro-interactions. Specializes in high-contrast dark-mode concepts, cinematic video montages, and atmospheric sound integrations.",
      voiceLine: '"A digital masterwork is a pure storyboard told with responsive audio-visual cues, sleek tracking, and radiant color accents. Emotional depth is everything."_',
      stats: [
        { label: "Visual Direction & Styling", score: 96 },
        { label: "Kinetic Motion & Video", score: 94 },
        { label: "Audio-Visual Storytelling", score: 92 },
        { label: "Brand Curation & Aesthetics", score: 89 }
      ]
    }
  };

  const currentChar = characters[selectedChar];

  const triggerVoiceSimulation = () => {
    setIsPlayingQuote(true);
    
    try {
      // Simulate real text-to-speech/audio wave using standard JavaScript SpeechSynthesis if available
      if ("speechSynthesis" in window && typeof window.speechSynthesis.speak === "function") {
        window.speechSynthesis.cancel();
        const quoteText = selectedChar === "architect" 
          ? "Design is not just static graphics; it is a live, kinetic conversation. We build responsive storytelling web systems that load fast and work perfectly." 
          : "A digital masterwork is a pure storyboard told with responsive audio-visual cues, sleek tracking, and radiant color accents. Emotional depth is everything.";
        const utterance = new SpeechSynthesisUtterance(quoteText);
        utterance.pitch = selectedChar === "architect" ? 0.85 : 1.05;
        utterance.rate = 0.95;
        utterance.onend = () => setIsPlayingQuote(false);
        utterance.onerror = () => setIsPlayingQuote(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => {
          setIsPlayingQuote(false);
        }, 3500);
      }
    } catch (e) {
      console.warn("Speech synthesis error or blocked in iframe:", e);
      setTimeout(() => {
        setIsPlayingQuote(false);
      }, 3500);
    }
  };

  return (
    <section
      id="characters"
      className={`py-24 px-6 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#050505] border-b border-white/5" : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-purple bg-vice-purple/10 px-3 py-1.5 rounded-full uppercase">
            ★ INDIVIDUAL PILLARS
          </span>
          <h2 className={`font-display font-extrabold text-4xl sm:text-5xl mt-3 tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            THE DUAL MIND OF <span className="font-vermin tracking-widest font-normal text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple inline-block align-middle text-5xl ml-2">LONEWOLF</span>
          </h2>
          <p className={`text-sm mt-3 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Discover how pure logic meets creative style. Toggle between the system architect and visual craftsman profiles below to simulation-sample the operational frequencies.
          </p>
        </div>

        {/* Character interaction container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Duo Splash Art Layer */}
          <div className="lg:col-span-11 xl:col-span-5 relative flex justify-center mx-auto w-full max-w-sm">
            <div className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border shadow-2xl p-2 ${
              isDarkMode ? "bg-slate-900/60 border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedChar}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentChar.image}
                    alt={currentChar.imageAlt}
                    className="w-full h-full object-cover rounded-xl transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay elements with neon script matching current selected character */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-xl" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <span className="font-script text-2xl text-vice-pink">
                      {selectedChar === "architect" ? "Identity & Code" : "Aesthetic & Motion"}
                    </span>
                    <p className="font-display font-bold text-[10px] tracking-widest text-slate-300 uppercase">
                      {currentChar.imageLabel}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glowing orb accent behind artwork */}
            <div 
              className="absolute -inset-4 rounded-full blur-[120px] opacity-25 pointer-events-none transition-all duration-500"
              style={{ backgroundColor: currentChar.accentHex }}
            />
          </div>

          {/* Right Column: Character Selection & Custom Info Dashboard */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-left">
            
            {/* Split selectors with beautiful layout button triggers */}
            <div className={`flex p-1 rounded-xl border ${
              isDarkMode ? "bg-slate-900/90 border-white/5" : "bg-slate-100 border-slate-200"
            } max-w-xs`}>
              <button
                id="btn-select-architect"
                onClick={() => setSelectedChar("architect")}
                className={`flex-1 py-3 text-center rounded-lg font-display font-extrabold text-sm tracking-widest uppercase transition-all cursor-pointer ${
                  selectedChar === "architect"
                    ? "bg-gradient-to-r from-vice-pink to-pink-600 text-white shadow-md shadow-rose-500/20"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                ARCHITECT
              </button>
              <button
                id="btn-select-creative"
                onClick={() => setSelectedChar("creative")}
                className={`flex-1 py-3 text-center rounded-lg font-display font-extrabold text-sm tracking-widest uppercase transition-all cursor-pointer ${
                  selectedChar === "creative"
                    ? "bg-gradient-to-r from-vice-cyan to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                CREATIVE
              </button>
            </div>

            {/* Character Meta Dashboard with Fade Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${currentChar.accentClass} font-bold`}>
                      ACTIVE CORE PILLAR
                    </span>
                    <span className={`text-[10px] font-mono opacity-60 font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      Tech: {currentChar.actor}
                    </span>
                  </div>
                  <h3 className={`font-display font-black text-6xl tracking-tight mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    {currentChar.name}
                  </h3>
                  <p className="font-display font-bold text-xs tracking-[0.2em] text-slate-400 mt-1 uppercase">
                    {currentChar.tagline}
                  </p>
                </div>

                <div className={`text-sm leading-relaxed border-l-4 pl-4 ${
                  selectedChar === "architect" ? "border-vice-pink" : "border-vice-cyan"
                } ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <h4 className="font-display font-extrabold text-xs text-slate-400 uppercase tracking-wider mb-1">STRATEGIC STATEMENT</h4>
                  {currentChar.bio}
                </div>

                {/* Simulated Radio Comm / Voice Line Player */}
                <div className={`p-5 rounded-2xl border ${
                  isDarkMode ? "bg-slate-950/80 border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" /> DECRYPTED_CORE_MISSION
                    </span>
                    <span className={selectedChar === "architect" ? "text-vice-pink" : "text-vice-cyan"}>
                      Lonewolf COM // 240.8 MHz
                    </span>
                  </div>
                  
                  <div className={`italic text-sm font-semibold mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                    {currentChar.voiceLine}
                  </div>

                  {/* Play audio button */}
                  <div className="flex items-center gap-4">
                    <button
                      id="btn-play-voice"
                      onClick={triggerVoiceSimulation}
                      className={`px-4 py-2 rounded-xl text-xs font-display font-black tracking-wider flex items-center gap-2 cursor-pointer text-white transition-all ${
                        selectedChar === "architect" 
                          ? "bg-vice-pink hover:bg-rose-600" 
                          : "bg-vice-cyan hover:bg-cyan-500"
                      }`}
                    >
                      <Play className="w-3 h-3 fill-white" />
                      {isPlayingQuote ? "PLAYING AUDIO..." : "SIMULATE SPEECH SYNTHESIS"}
                    </button>

                    {/* Animated Waveform */}
                    {isPlayingQuote && (
                      <div className="flex items-end gap-[3px] h-6">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-[3px] rounded-full animate-bounce ${
                              selectedChar === "architect" ? "bg-vice-pink" : "bg-vice-cyan"
                            }`}
                            style={{
                              height: `${Math.floor(Math.random() * 16) + 8}px`,
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: `${0.4 + Math.random() * 0.4}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Character RPG Skill Stat Gauges */}
                <div className="space-y-4">
                  <h4 className={`font-display font-bold text-xs tracking-wider uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    ★ TECHNICAL PROFICIENCY & IMPACT SCALE:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentChar.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{stat.label}</span>
                          <span className={`font-bold ${
                            selectedChar === "architect" ? "text-vice-pink" : "text-vice-cyan"
                          }`}>{stat.score}%</span>
                        </div>
                        {/* Gauge container */}
                        <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-slate-900" : "bg-slate-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.score}%` }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className={`h-full rounded-full ${
                              selectedChar === "architect" 
                                ? "bg-gradient-to-r from-vice-pink to-rose-400" 
                                : "bg-gradient-to-r from-vice-cyan to-cyan-400"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
