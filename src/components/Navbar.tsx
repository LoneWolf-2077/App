import React, { useState, useEffect, useRef } from "react";
import { 
  Sun, 
  Moon, 
  ArrowUpRight, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Palette, 
  Sparkles, 
  Image as ImageIcon, 
  Layers, 
  UserCheck, 
  Cpu, 
  Compass, 
  Newspaper, 
  Radio, 
  Users, 
  Package, 
  HelpCircle, 
  Share2, 
  ChevronRight,
  Home,
  Zap,
  Film
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import WolfLogo from "./WolfLogo";
import mainFontImg from "../assets/images/Main font.png";

export interface NavSubItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface NavTabItem {
  id: string;
  title: string;
  subItems?: NavSubItem[];
}

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  activeTab: string;
  onSelectTab: (tabId: string, subCategory?: string | null) => void;
}

export default function Navbar({ 
  isDarkMode, 
  onToggleTheme, 
  isMuted, 
  onToggleMute,
  activeTab,
  onSelectTab
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTabs: NavTabItem[] = [
    {
      id: "home",
      title: "HOME",
      subItems: [
        { id: "hero", title: "Splash Screen", description: "Cinematic hero banner & brand showcase", icon: Home },
        { id: "reel", title: "Studio Reel", description: "Interactive audio-visual showcase reel", icon: Sparkles }
      ]
    },
    {
      id: "about",
      title: "ABOUT",
      subItems: [
        { id: "studio", title: "Studio Story", description: "Our origin, vision & aesthetic philosophy", icon: Sparkles },
        { id: "archetypes", title: "Character Archetypes", description: "System Architect & Creative Director profiles & skill matrix", icon: UserCheck },
        { id: "faq", title: "FAQ & Support", description: "Frequently asked questions & specifications", icon: HelpCircle },
        { id: "socials", title: "Social Stream", description: "Neural network links & community channels", icon: Share2 }
      ]
    },
    {
      id: "work",
      title: "MY WORK",
      subItems: [
        { id: "all", title: "All Projects", description: "Complete portfolio manifest & case studies", icon: Layers },
        { id: "animation", title: "Animation", description: "3D character rigging, keyframe motion & 3D animation reels", icon: Film },
        { id: "multimedia", title: "Multimedia Design", description: "Interactive WebGL, spatial sound & audio-visual installations", icon: Sparkles },
        { id: "motion-graphics", title: "Motion Graphics & VFX", description: "Kinetic typography, promo trailers & sound-reactive FX", icon: Zap },
        { id: "branding", title: "Branding & Identity", description: "Brand identities, vector suites & motion logos", icon: Palette },
        { id: "web-design", title: "Web Design & UI", description: "Clean, responsive Web UI concepts & landing layouts", icon: Globe },
        { id: "gallery", title: "4K Capture Gallery", description: "High-resolution animation stills & prototype captures", icon: ImageIcon }
      ]
    },
    {
      id: "dispatches",
      title: "DISPATCHES",
      subItems: [
        { id: "bulletins", title: "Dev Bulletins", description: "Official studio announcements & release notes", icon: Newspaper },
        { id: "radio", title: "Radio Transmissions", description: "Decrypted comms & field audio notes", icon: Radio },
        { id: "press", title: "Community Feed", description: "Media features, reviews & coverage", icon: Users }
      ]
    }
  ];

  const handleMouseEnter = (tabId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 180);
  };

  const handleTabClick = (tabId: string, subId?: string | null) => {
    onSelectTab(tabId, subId);
    setHoveredTab(null);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 dark:bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Lonewolf Logo -> Takes user to Home tab */}
        <motion.div
          id="nav-logo"
          onClick={() => handleTabClick("home")}
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center transition-shadow group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
            <WolfLogo className="w-10 h-10 select-none object-contain" />
          </div>
          <div className="leading-tight flex flex-col justify-center">
            <img 
              src={mainFontImg} 
              alt="LONEWOLF" 
              className="h-[18px] sm:h-5 w-auto block object-contain select-none pointer-events-none" 
              referrerPolicy="no-referrer"
            />
            <span className="font-script text-[11px] text-vice-cyan tracking-widest block -mt-0.5 leading-none font-medium">
              Creative Studio
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav Tabs with Hover Sub-Menus */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;

            return (
              <div
                key={tab.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  id={`nav-tab-btn-${tab.id}`}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-display font-bold tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm shadow-pink-500/20 border border-white/15"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{tab.title}</span>
                  {tab.subItems && tab.subItems.length > 0 && (
                    <ChevronDown className={`w-3.5 h-3.5 text-vice-cyan transition-transform duration-200 ${
                      isHovered ? "rotate-180 text-vice-pink" : ""
                    }`} />
                  )}

                  {/* Bottom Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-vice-pink to-vice-cyan rounded-full"
                    />
                  )}
                </button>

                {/* Dropdown Flyout Sub-menu */}
                <AnimatePresence>
                  {isHovered && tab.subItems && (
                    <motion.div
                      id={`dropdown-menu-${tab.id}`}
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-[#0a0d14]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-2 z-50 overflow-hidden"
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className="h-[2px] w-full bg-gradient-to-r from-vice-pink via-vice-purple to-vice-cyan mb-1 rounded-full" />

                      <div className="flex flex-col gap-1">
                        {tab.subItems.map((sub) => {
                          const IconComp = sub.icon;
                          return (
                            <button
                              id={`sub-item-${tab.id}-${sub.id}`}
                              key={sub.id}
                              onClick={() => handleTabClick(tab.id, sub.id)}
                              className="group w-full text-left p-2.5 rounded-lg hover:bg-white/10 transition-all flex items-start gap-3 cursor-pointer"
                            >
                              <div className="p-2 rounded-md bg-slate-900 border border-white/10 group-hover:border-vice-pink/50 group-hover:bg-vice-pink/20 transition-colors text-vice-cyan group-hover:text-vice-pink mt-0.5">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-display font-bold text-xs text-white group-hover:text-vice-pink transition-colors tracking-wide uppercase">
                                    {sub.title}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-0.5 leading-snug line-clamp-2">
                                  {sub.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mute/Unmute Atmosphere Soundtrack */}
          <motion.button
            id="audio-mute-toggle"
            onClick={onToggleMute}
            className="p-2 rounded-full border border-white/20 hover:border-vice-pink text-slate-300 hover:text-vice-pink transition-colors cursor-pointer"
            title={isMuted ? "Unmute Ambient Wave" : "Mute Sound"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-vice-pink" />}
          </motion.button>

          {/* Sun/Moon Theme Switcher */}
          <motion.button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-white/20 hover:border-vice-cyan text-slate-300 hover:text-vice-cyan transition-colors cursor-pointer"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </motion.button>

          {/* Direct Linktree CTA Button -> Opens Linktree in new tab */}
          <motion.a
            id="direct-linktree-btn"
            href="https://linktr.ee/lonewolf_2077"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-vice-pink to-vice-purple text-white text-[11px] font-display font-extrabold tracking-widest px-4 py-2 rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md shadow-pink-500/25 cursor-pointer uppercase"
            whileHover={{ scale: 1.05 }}
          >
            LINKTREE <span className="font-vermin tracking-wider font-normal text-[14px]">LONEWOLF</span> <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>

          {/* Mobile Hamburger menu */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Accordion Sub-Menus */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-layer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-3">
              {navTabs.map((tab) => {
                const isExpanded = expandedMobileTab === tab.id;
                const isActive = activeTab === tab.id;

                return (
                  <div key={tab.id} className="border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleTabClick(tab.id)}
                        className={`font-display text-lg font-bold tracking-widest text-left uppercase transition-colors ${
                          isActive ? "text-vice-pink" : "text-slate-200 hover:text-white"
                        }`}
                      >
                        {tab.title}
                      </button>

                      {tab.subItems && (
                        <button
                          onClick={() => setExpandedMobileTab(isExpanded ? null : tab.id)}
                          className="p-1.5 text-slate-400 hover:text-white"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {/* Expandable Mobile Sub-links */}
                    {isExpanded && tab.subItems && (
                      <div className="mt-3 pl-4 space-y-2 border-l border-white/10">
                        {tab.subItems.map((sub) => {
                          const IconComp = sub.icon;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleTabClick(tab.id, sub.id)}
                              className="w-full text-left py-1.5 flex items-center gap-2.5 text-xs font-display font-semibold text-slate-300 hover:text-vice-pink uppercase tracking-wider"
                            >
                              <IconComp className="w-3.5 h-3.5 text-vice-cyan" />
                              {sub.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2">
                <a
                  id="mobile-linktree-btn"
                  href="https://linktr.ee/lonewolf_2077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center flex items-center justify-center gap-1.5 bg-gradient-to-r from-vice-pink to-vice-purple text-white text-[13px] font-display font-medium tracking-widest py-3 rounded-md cursor-pointer uppercase shadow-md shadow-pink-500/25"
                >
                  LINKTREE <span className="font-vermin tracking-wider font-normal text-[15px] ml-1">LONEWOLF</span> <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

