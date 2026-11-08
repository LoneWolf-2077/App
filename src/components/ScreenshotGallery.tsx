import React, { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, SlidersHorizontal, Image } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import beachImg from "../assets/images/gtavi_beach_vibe_1779890390575.png";
import heroImg from "../assets/images/gtavi_hero_banner_1779890370674.png";
import characterImg from "../assets/images/gtavi_character_duo_1779890408410.png";
import { Screenshot } from "../types";

export default function ScreenshotGallery({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeFilter, setActiveFilter] = useState<"all" | "neon" | "action" | "vibe">("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const screenshots: Screenshot[] = [
    {
      id: "1",
      title: "Synthesizer Sound Module",
      category: "neon",
      src: heroImg,
      description: "A browser-based procedural audio synthesis environment generating twilight bass chords in standard canvas."
    },
    {
      id: "2",
      title: "Isometric Telemetry Interface",
      category: "vibe",
      src: beachImg,
      description: "Interactive dashboard plotting real-time sand-NPC coordinate logs, ocean height, and vessel vectors."
    },
    {
      id: "3",
      title: "Syndicate Command Terminal",
      category: "action",
      src: characterImg,
      description: "High-fidelity mock gaming UI sandbox showcasing custom vector decals, performance stats, and reactive triggers."
    },
    {
      id: "4",
      title: "Dynamic Everglades Simulation",
      category: "action",
      src: "https://picsum.photos/seed/swamp_weather/1200/675?noise=2",
      description: "Volumetric storm clouds and hurricane fronts rendered strictly with custom SVG overlay shaders and motion."
    },
    {
      id: "5",
      title: "High-Society Skyline Deck",
      category: "vibe",
      src: "https://picsum.photos/seed/rooftop_glow/1200/675?noise=3",
      description: "Atmospheric dashboard templates capturing high contrast typography, tracking values, and custom colors."
    },
    {
      id: "6",
      title: "Interactive WebGL Media Canvas",
      category: "neon",
      src: "https://picsum.photos/seed/tuner_matrix/1200/675?noise=4",
      description: "Bespoke multimedia audio-visual renderer plotting interactive particle audio waves in real time."
    }
  ];

  const filteredScreensheets = screenshots.filter(
    item => activeFilter === "all" || item.category === activeFilter
  );

  const handleNext = () => {
    if (selectedIdx !== null) {
      const nextIdx = (selectedIdx + 1) % filteredScreensheets.length;
      setSelectedIdx(nextIdx);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      const prevIdx = (selectedIdx - 1 + filteredScreensheets.length) % filteredScreensheets.length;
      setSelectedIdx(prevIdx);
    }
  };

  return (
    <section
      id="screenshots"
      className={`py-24 px-6 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#050505] border-b border-white/5" : "bg-slate-50 border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-cyan bg-vice-cyan/10 px-3 py-1.5 rounded-full uppercase">
              ★ OFFICIAL WORK MANIFEST
            </span>
            <h2 className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight mt-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              MEDIA GALLERY & <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple">PROTOTYPES</span>
            </h2>
            <p className={`text-sm mt-3 max-w-xl ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Browse an elite selection of front-end prototypes, high-fidelity mock interfaces, and design layouts. Click any capture block to open the inspect HUD.
            </p>
          </div>

          {/* Filter Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "View All" },
              { id: "neon", label: "Interactive Design" },
              { id: "action", label: "Interactive Motion" },
              { id: "vibe", label: "Aesthetics" }
            ].map(tab => (
              <button
                id={`filter-btn-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-vice-pink to-vice-purple text-white shadow-md shadow-pink-500/20"
                    : isDarkMode
                    ? "bg-slate-900 text-slate-400 border border-white/5 hover:text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Grid Screen Blocks */}
        <div id="screenshots-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredScreensheets.map((pic, index) => (
              <motion.div
                id={`screenshot-card-${pic.id}`}
                key={pic.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl overflow-hidden border cursor-pointer shadow-md ${
                  isDarkMode ? "bg-slate-900/40 border-white/10" : "bg-white border-slate-200/60"
                } p-2.5`}
                onClick={() => setSelectedIdx(index)}
              >
                {/* Image Bounds */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={pic.src}
                    alt={pic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover zoom dark screen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Absolute Zoom Indicator on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl">
                      <Maximize2 className="w-5 h-5 text-vice-pink" />
                    </div>
                  </div>

                  {/* Card category tag */}
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded border border-white/10">
                    #{pic.category}
                  </span>
                </div>

                {/* Info summary */}
                <div className="mt-3.5 px-1.5 pb-1 text-left">
                  <h4 className={`font-display font-extrabold text-base tracking-wide ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {pic.title}
                  </h4>
                  <p className={`text-xs mt-1 truncate ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {pic.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LIGHTBOX OVERLAY SCREEN */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              id="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedIdx(null)}
            >
              <div
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()} // Stop closing on lightbox contents click
              >
                {/* Actions Row */}
                <div className="absolute -top-12 right-0 flex items-center gap-4 text-white text-sm">
                  <span className="font-mono text-xs text-slate-400">
                    CAP_ID {filteredScreensheets[selectedIdx].id} // {selectedIdx + 1} of {filteredScreensheets.length}
                  </span>
                  
                  <button
                    id="lightbox-close-btn"
                    onClick={() => setSelectedIdx(null)}
                    className="p-1 px-2.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer hover:text-vice-pink transition-colors flex items-center gap-1 font-display font-bold text-xs"
                  >
                    <X className="w-4 h-4" /> CLOSE
                  </button>
                </div>

                {/* Primary inspect panel */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-black/85 shadow-2xl">
                  <img
                    src={filteredScreensheets[selectedIdx].src}
                    alt={filteredScreensheets[selectedIdx].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Steppers */}
                  <button
                    id="lightbox-prev-btn"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 hover:border-vice-pink text-white hover:text-vice-pink cursor-pointer transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    id="lightbox-next-btn"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 hover:border-vice-pink text-white hover:text-vice-pink cursor-pointer transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Sub-HUD Meta block */}
                <div className="w-full mt-4 text-left px-2 text-white">
                  <span className="text-[10px] font-mono uppercase bg-vice-pink/15 text-vice-pink px-2.5 py-1 rounded border border-vice-pink/30 font-bold">
                    #{filteredScreensheets[selectedIdx].category} CATEGORY
                  </span>
                  <h3 className="font-display font-black text-2xl tracking-wide mt-2">
                    {filteredScreensheets[selectedIdx].title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 max-w-3xl">
                    {filteredScreensheets[selectedIdx].description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
