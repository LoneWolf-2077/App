import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Palette, 
  Sparkles, 
  Image as ImageIcon, 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  X, 
  Zap, 
  Film,
  Play,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Video,
  Monitor
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScreenshotGallery from "./ScreenshotGallery";

interface WorkPageProps {
  isDarkMode: boolean;
  activeSubCategory?: string | null;
  onSelectSubCategory?: (sub: string) => void;
}

export interface WorkProject {
  id: string;
  title: string;
  category: "animation" | "multimedia" | "motion-graphics" | "branding" | "web-design" | "gallery";
  categoryLabel: string;
  client: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  youtubeId?: string;
  videoTitle?: string;
  metrics?: { label: string; value: string }[];
}

export default function WorkPage({ isDarkMode, activeSubCategory, onSelectSubCategory }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<WorkProject | null>(null);
  const [modalMediaTab, setModalMediaTab] = useState<"video" | "image">("video");
  
  // Fullscreen Image Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeSubCategory) {
      setSelectedCategory(activeSubCategory);
    }
  }, [activeSubCategory]);

  const projects: WorkProject[] = [
    {
      id: "p1",
      title: "Vice City Cyberpunk 3D Animation Reel",
      category: "animation",
      categoryLabel: "Animation",
      client: "Jay Studios",
      year: "2025",
      tagline: "3D character rigging, volumetric lighting, and keyframe animation showcase",
      description: "Produced a full 3D cinematic animation trailer. Features custom character rigging, frame-by-frame lip-syncing, physics-driven cloth simulation, and high-octane camera sequences rendered in Blender & Cinema 4D.",
      image: "https://picsum.photos/seed/vice_animation_reel/1200/675",
      youtubeId: "LXb3EKWsInQ",
      videoTitle: "3D Animation & Character Rigging Showreel",
      tags: ["3D Animation", "Blender", "Character Rigging", "Octane Render"],
      featured: true,
      metrics: [
        { label: "Render Quality", value: "4K UHD" },
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Scene Count", value: "14 Shots" }
      ]
    },
    {
      id: "p2",
      title: "Neon Samurai Keyframe Action Sequence",
      category: "animation",
      categoryLabel: "Animation",
      client: "LoneWolf Animation Unit",
      year: "2025",
      tagline: "High-speed keyframe motion sequence, particle swords, and dynamic camera direction",
      description: "Keyframe combat sequence with frame-by-frame secondary motion, custom bone constraints, dynamic speed ramping, and anime-inspired impact frames.",
      image: "https://picsum.photos/seed/neon_samurai_anim/1200/675",
      youtubeId: "dQw4w9WgXcQ",
      videoTitle: "Keyframe Combat Sequence Demo",
      tags: ["Keyframe Motion", "Maya", "Speed Ramping", "VFX FX"],
      featured: true,
      metrics: [
        { label: "Keyframes", value: "1,200+" },
        { label: "Motion Style", value: "Stylized Combat" }
      ]
    },
    {
      id: "p3",
      title: "Synthwave 2D/3D Cel Animation Loop",
      category: "animation",
      categoryLabel: "Animation",
      client: "Vice Club Network",
      year: "2025",
      tagline: "2D/3D hybrid animation loop with custom character keyframes and neon glow",
      description: "Created an endless seamless visualizer loop for music video streams. Blended 2D cel animation overlays with 3D retro environment camera fly-throughs and procedural lighting.",
      image: "https://picsum.photos/seed/synthwave_loop/1200/675",
      youtubeId: "L_LUpnjgPso",
      videoTitle: "2D/3D Cel Loop Visualizer",
      tags: ["2D Cel Anim", "3D Camera", "Lottie FX", "Premiere Pro"],
      featured: true,
      metrics: [
        { label: "Loop Seamlessness", value: "100%" },
        { label: "Color Palette", value: "Neon Vice" }
      ]
    },
    {
      id: "p4",
      title: "Atmospheric WebGL Shader & Audio Canvas",
      category: "multimedia",
      categoryLabel: "Multimedia Design",
      client: "Atmosphere Engine",
      year: "2025",
      tagline: "Custom WebGL storm clouds, rain particle animation, and video background loops",
      description: "Developed GPU-accelerated atmospheric particle animation overlays and video backdrop loops for immersive live stream broadcasts and interactive multimedia installations.",
      image: "https://picsum.photos/seed/everglades_shader/1200/675",
      tags: ["WebGL Shader", "Particle Canvas", "Video Loop", "Multimedia"],
      metrics: [
        { label: "Frame Time", value: "16.6ms" },
        { label: "Audio Sync", value: "FFT Reactive" }
      ]
    },
    {
      id: "p5",
      title: "Interactive Spatial Hologram Soundscape",
      category: "multimedia",
      categoryLabel: "Multimedia Design",
      client: "Soundscape Labs",
      year: "2025",
      tagline: "3D audio-reactive mesh visualization with touch interaction and ambient lighting",
      description: "Interactive multimedia installation combining real-time frequency band extraction, 3D parametric geometry deformation, and ambient reactive color fields.",
      image: "https://picsum.photos/seed/spatial_soundscape/1200/675",
      tags: ["Multimedia UI", "Three.js", "Web Audio API", "Interactive"],
      metrics: [
        { label: "Audio Channels", value: "Spatial 7.1" },
        { label: "Interaction", value: "Real-time" }
      ]
    },
    {
      id: "p6",
      title: "Neon Pulse Kinetic Title FX",
      category: "motion-graphics",
      categoryLabel: "Motion & VFX",
      client: "LoneWolf Audio Labs",
      year: "2025",
      tagline: "High-impact kinetic typography, glitch transitions, and sound-reactive video FX",
      description: "Designed a dynamic motion graphics package for digital promotional campaigns. Features procedural particle disintegration, reactive audio spectrum pulses, and custom After Effects expression rigs.",
      image: "https://picsum.photos/seed/neon_kinetic_vfx/1200/675",
      youtubeId: "9bZkp7q19f0",
      videoTitle: "Kinetic Motion FX Trailer",
      tags: ["After Effects", "Motion Graphics", "VFX Compositing", "Sound Design"],
      featured: true,
      metrics: [
        { label: "Compositing Layers", value: "240+" },
        { label: "Render Engine", value: "AE Metal" }
      ]
    },
    {
      id: "p7",
      title: "LoneWolf Brand & Monogram Suite",
      category: "branding",
      categoryLabel: "Branding & Identity",
      client: "Jay Studios",
      year: "2025",
      tagline: "Complete visual identity system, animated logo bumpers, and vector monograms",
      description: "Designed the official LoneWolf brand identity and animated logo stings. Developed custom font pairings, geometric wolf emblem assets, high-contrast cyan/pink color palettes, and motion graphics bumpers.",
      image: "https://picsum.photos/seed/lonewolf_brand_suite/1200/675",
      tags: ["Brand Identity", "Motion Logo", "Typography", "Vector Suite"],
      metrics: [
        { label: "Vector Assets", value: "120+" },
        { label: "Motion Bumpers", value: "4 Variants" }
      ]
    },
    {
      id: "p8",
      title: "Vice Commerce Web Prototype",
      category: "web-design",
      categoryLabel: "Web Design & UI",
      client: "Syndicate Luxury Group",
      year: "2025",
      tagline: "Sleek dark-mode web UI prototype supporting the main multimedia campaign",
      description: "Designed a clean, responsive single-page web UI prototype showcasing custom digital apparel and vehicle customization options to complement the overarching multimedia launch.",
      image: "https://picsum.photos/seed/vice_commerce/1200/675",
      tags: ["React 19", "Tailwind CSS", "UI Layout"],
      metrics: [
        { label: "Responsive Points", value: "Mobile + Desktop" }
      ]
    }
  ];

  const handleFilterChange = (cat: string) => {
    setSelectedCategory(cat);
    if (onSelectSubCategory) {
      onSelectSubCategory(cat);
    }
  };

  const filteredProjects = selectedCategory === "all"
    ? projects
    : selectedCategory === "gallery"
    ? []
    : projects.filter(p => p.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProjects]);

  const openModal = (proj: WorkProject) => {
    setActiveModalProject(proj);
    setModalMediaTab(proj.youtubeId ? "video" : "image");
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null && filteredProjects.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null && filteredProjects.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <div id="work-page-container" className="pt-28 pb-20 px-6 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Banner */}
        <div className="text-center md:text-left md:flex items-end justify-between mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-cyan bg-vice-cyan/10 px-3.5 py-1.5 rounded-full uppercase border border-vice-cyan/20">
              ★ OFFICIAL PORTFOLIO MANIFEST
            </span>
            <h1 className={`font-display font-extrabold text-5xl sm:text-6xl tracking-tight mt-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              MY WORK & <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan">PROJECTS</span>
            </h1>
            <p className={`text-sm md:text-base max-w-2xl mt-3 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Explore 3D animation reels, keyframe character motion, multimedia audio-visual installations, kinetic motion graphics, and visual identity systems.
            </p>
          </div>

          {/* Category Filter Pills Toolbar */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 justify-center md:justify-end">
            {[
              { id: "all", label: "All Work", icon: Layers },
              { id: "animation", label: "Animation", icon: Film },
              { id: "multimedia", label: "Multimedia Design", icon: Sparkles },
              { id: "motion-graphics", label: "Motion & VFX", icon: Zap },
              { id: "branding", label: "Branding", icon: Palette },
              { id: "web-design", label: "Web Design", icon: Globe },
              { id: "gallery", label: "4K Captures", icon: ImageIcon }
            ].map(tab => {
              const IconComp = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  id={`work-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan text-white shadow-lg shadow-pink-500/20"
                      : isDarkMode
                      ? "bg-slate-900/80 text-slate-400 border border-white/10 hover:text-white hover:border-white/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4K Captures View or Main Project Grid */}
        {selectedCategory === "gallery" ? (
          <div id="gallery-sub-view">
            <ScreenshotGallery isDarkMode={isDarkMode} />
          </div>
        ) : (
          <div>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, cardIndex) => (
                  <motion.div
                    id={`project-card-${project.id}`}
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className={`group rounded-2xl overflow-hidden border shadow-xl flex flex-col justify-between transition-all ${
                      isDarkMode ? "bg-slate-900/60 border-white/10 hover:border-vice-pink/40" : "bg-white border-slate-200/80 hover:border-vice-pink/50"
                    }`}
                  >
                    <div>
                      {/* Image Preview Container with Quick Action Overlay */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Badges */}
                        <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-vice-cyan text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-vice-cyan/30 flex items-center gap-1.5">
                          {project.category === "animation" && <Film className="w-3 h-3 text-vice-pink" />}
                          {project.category === "multimedia" && <Sparkles className="w-3 h-3 text-vice-cyan" />}
                          {project.categoryLabel}
                        </span>

                        {project.youtubeId ? (
                          <span className="absolute top-3 right-3 bg-vice-pink/90 text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded border border-pink-400/40 flex items-center gap-1 shadow-lg shadow-pink-500/30 animate-pulse">
                            <Play className="w-3 h-3 fill-white" /> VIDEO
                          </span>
                        ) : (
                          <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-slate-300 text-[10px] font-mono tracking-widest px-2 py-1 rounded border border-white/10">
                            {project.year}
                          </span>
                        )}

                        {/* Hover Overlay Buttons: Play Video & Fullscreen Image */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                          {project.youtubeId && (
                            <button
                              id={`btn-play-video-${project.id}`}
                              onClick={() => openModal(project)}
                              className="flex items-center gap-2 bg-gradient-to-r from-vice-pink to-vice-purple text-white text-xs font-display font-extrabold px-4 py-2.5 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                              title="Play Embedded Video"
                            >
                              <Play className="w-4 h-4 fill-white" /> PLAY VIDEO
                            </button>
                          )}
                          <button
                            id={`btn-full-image-${project.id}`}
                            onClick={() => openLightbox(cardIndex)}
                            className="flex items-center gap-1.5 bg-black/80 text-white hover:text-vice-cyan border border-white/20 hover:border-vice-cyan text-xs font-display font-bold px-3.5 py-2.5 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                            title="Full Screen Image View"
                          >
                            <Maximize2 className="w-4 h-4 text-vice-cyan" /> FULL VIEW
                          </button>
                        </div>
                      </div>

                      {/* Project Meta Information */}
                      <div className="p-6">
                        <div className="text-[11px] font-mono text-vice-pink font-semibold uppercase tracking-wider mb-1">
                          Client: {project.client}
                        </div>
                        <h3 className={`font-display font-extrabold text-2xl tracking-tight group-hover:text-vice-pink transition-colors ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-xs mt-2.5 line-clamp-3 leading-relaxed ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          {project.tagline}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                isDarkMode 
                                  ? "bg-slate-950 text-slate-300 border-white/10" 
                                  : "bg-slate-100 text-slate-700 border-slate-200"
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions & Details CTA */}
                    <div className={`p-4 px-6 border-t flex items-center justify-between ${
                      isDarkMode ? "bg-slate-950/50 border-white/5" : "bg-slate-50 border-slate-100"
                    }`}>
                      <button
                        id={`btn-inspect-project-${project.id}`}
                        onClick={() => openModal(project)}
                        className="text-xs font-display font-bold text-vice-pink hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                      >
                        INSPECT CASE STUDY <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <button
                        onClick={() => openLightbox(cardIndex)}
                        className="text-[10px] font-mono text-slate-400 hover:text-vice-cyan transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3 text-vice-cyan" /> FULL IMAGE
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Also include the screenshot gallery section below main projects for comprehensive media coverage */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <ScreenshotGallery isDarkMode={isDarkMode} />
            </div>
          </div>
        )}

        {/* Project Case Study Modal (with Embedded YouTube Player Support) */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              id="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                id="project-modal-content"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative max-w-4xl w-full my-8 rounded-2xl overflow-hidden border shadow-2xl ${
                  isDarkMode ? "bg-slate-900 border-white/15 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                {/* Modal Header Bar */}
                <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-black/60">
                  <span className="font-mono text-xs text-vice-cyan uppercase font-bold tracking-widest flex items-center gap-2">
                    ★ CASE STUDY // {activeModalProject.categoryLabel}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {/* Fullscreen image trigger */}
                    <button
                      id="btn-modal-fullscreen-img"
                      onClick={() => {
                        const idx = projects.findIndex(p => p.id === activeModalProject.id);
                        if (idx !== -1) openLightbox(idx);
                      }}
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-vice-cyan/20 text-white text-xs font-mono flex items-center gap-1 border border-white/15 hover:border-vice-cyan cursor-pointer transition-colors"
                      title="Open Full Screen Image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-vice-cyan" /> FULL IMAGE
                    </button>

                    <button
                      id="btn-close-project-modal"
                      onClick={() => setActiveModalProject(null)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Media Container: Toggle between Embedded YouTube Video & High-Res Image */}
                <div className="relative aspect-video w-full bg-black overflow-hidden group">
                  {activeModalProject.youtubeId && modalMediaTab === "video" ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeModalProject.youtubeId}?autoplay=1&rel=0`}
                      title={activeModalProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={activeModalProject.image}
                        alt={activeModalProject.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                      
                      <button
                        onClick={() => {
                          const idx = projects.findIndex(p => p.id === activeModalProject.id);
                          if (idx !== -1) openLightbox(idx);
                        }}
                        className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-display font-bold px-3.5 py-2 rounded-xl border border-white/20 hover:border-vice-cyan flex items-center gap-1.5 cursor-pointer shadow-lg"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-vice-cyan" /> ENLARGE IMAGE
                      </button>
                    </div>
                  )}

                  {/* Media Tab Toggle Bar (if video is available) */}
                  {activeModalProject.youtubeId && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/20">
                      <button
                        onClick={() => setModalMediaTab("video")}
                        className={`px-3 py-1 rounded-lg text-xs font-display font-bold uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                          modalMediaTab === "video"
                            ? "bg-gradient-to-r from-vice-pink to-vice-purple text-white shadow-md"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current" /> EMBEDDED VIDEO
                      </button>
                      <button
                        onClick={() => setModalMediaTab("image")}
                        className={`px-3 py-1 rounded-lg text-xs font-display font-bold uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                          modalMediaTab === "image"
                            ? "bg-gradient-to-r from-vice-pink to-vice-purple text-white shadow-md"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <ImageIcon className="w-3 h-3" /> STILL IMAGE
                      </button>
                    </div>
                  )}
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
                        {activeModalProject.title}
                      </h3>
                      <p className="text-sm text-vice-pink font-mono mt-1 font-semibold">
                        Client: {activeModalProject.client} ({activeModalProject.year})
                      </p>
                    </div>

                    {activeModalProject.youtubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${activeModalProject.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-display font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-md uppercase tracking-wider shrink-0"
                      >
                        OPEN ON YOUTUBE <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {activeModalProject.description}
                  </p>

                  {/* Impact Metrics */}
                  {activeModalProject.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-black/40 border border-white/10">
                      {activeModalProject.metrics.map((m, idx) => (
                        <div key={idx} className="text-center sm:text-left">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">{m.label}</span>
                          <span className="font-display font-black text-xl text-vice-cyan">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">INTEGRATED TECHNOLOGIES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.tags.map((t, idx) => (
                        <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-vice-purple/20 text-vice-cyan border border-vice-purple/30 font-semibold">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 px-6 border-t border-white/10 bg-black/40 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const idx = projects.findIndex(p => p.id === activeModalProject.id);
                      if (idx !== -1) openLightbox(idx);
                    }}
                    className="text-xs font-display font-bold text-vice-cyan hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> FULLSCREEN LIGHTBOX
                  </button>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-vice-pink to-vice-purple text-white text-xs font-display font-bold tracking-wider cursor-pointer hover:brightness-110 transition-all"
                  >
                    CLOSE SPECIFICATION
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FULLSCREEN IMAGE LIGHTBOX VIEWER */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
            <motion.div
              id="fullscreen-lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Lightbox Header Bar */}
              <div 
                className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-vice-pink font-bold bg-vice-pink/10 border border-vice-pink/30 px-3 py-1 rounded-full uppercase">
                    FULL IMAGE VIEWER
                  </span>
                  <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                    [{lightboxIndex + 1} / {filteredProjects.length}] — {filteredProjects[lightboxIndex].title}
                  </span>
                </div>

                <button
                  id="btn-close-lightbox"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors flex items-center gap-2 text-xs font-display font-bold px-4"
                >
                  <X className="w-4 h-4" /> CLOSE
                </button>
              </div>

              {/* Main Image Display Area with Nav Controls */}
              <div 
                className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Previous Button */}
                {filteredProjects.length > 1 && (
                  <button
                    id="btn-lightbox-prev"
                    onClick={handlePrevLightbox}
                    className="absolute left-2 sm:left-6 z-20 p-3.5 rounded-full bg-black/60 hover:bg-vice-pink text-white border border-white/20 hover:border-vice-pink cursor-pointer transition-all shadow-2xl hover:scale-110"
                    title="Previous Image (Left Arrow)"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* High Resolution Image */}
                <motion.img
                  key={filteredProjects[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={filteredProjects[lightboxIndex].image}
                  alt={filteredProjects[lightboxIndex].title}
                  className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />

                {/* Next Button */}
                {filteredProjects.length > 1 && (
                  <button
                    id="btn-lightbox-next"
                    onClick={handleNextLightbox}
                    className="absolute right-2 sm:right-6 z-20 p-3.5 rounded-full bg-black/60 hover:bg-vice-pink text-white border border-white/20 hover:border-vice-pink cursor-pointer transition-all shadow-2xl hover:scale-110"
                    title="Next Image (Right Arrow)"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Lightbox Footer Caption */}
              <div 
                className="w-full max-w-3xl mx-auto bg-black/80 border border-white/15 backdrop-blur-md rounded-2xl p-4 px-6 text-center z-10 flex flex-col sm:flex-row items-center justify-between gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-lg text-white">
                    {filteredProjects[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Category: <span className="text-vice-cyan uppercase font-bold">{filteredProjects[lightboxIndex].categoryLabel}</span> | Client: {filteredProjects[lightboxIndex].client}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {filteredProjects[lightboxIndex].youtubeId && (
                    <button
                      onClick={() => {
                        const proj = filteredProjects[lightboxIndex];
                        setLightboxIndex(null);
                        openModal(proj);
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-vice-pink to-vice-purple text-white text-xs font-display font-bold uppercase flex items-center gap-1.5 cursor-pointer hover:brightness-110"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> WATCH VIDEO
                    </button>
                  )}

                  <a
                    href={filteredProjects[lightboxIndex].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-display font-bold uppercase flex items-center gap-1 cursor-pointer"
                  >
                    ORIGINAL <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
