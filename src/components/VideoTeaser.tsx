import React, { useState, useEffect } from "react";
import { Play, Eye, Flame, Calendar, Award, Share2, Volume2, Sparkles, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VideoTeaserProps {
  isDarkMode: boolean;
}

export default function VideoTeaser({ isDarkMode }: VideoTeaserProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [views, setViews] = useState(6492); // Handcrafted page views
  const [likes, setLikes] = useState(418);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Live Timer Countdown to Fall 2026 estimate (e.g., Nov 10, 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Slowly increment views and likes for a live feel
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 4500);

    const targetDate = new Date("November 10, 2026 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.warn("Clipboard access not permitted in this context:", err);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section
      id="trailer"
      className={`py-24 px-6 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#050505]" : "bg-slate-50"
      }`}
    >
      {/* Background decoration flares */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Row header with Scroll Motion */}
        <div className="text-center md:text-left md:flex items-end justify-between mb-12">
          <div>
            <span className="font-display font-bold tracking-[0.2em] text-[10px] uppercase text-vice-pink bg-vice-pink/10 px-3 py-1.5 rounded-full select-none">
              ★ CINEMATIC SHOWCASE & BRAND CORE
            </span>
            <h2 className={`font-display font-extrabold text-5xl md:text-6xl tracking-tight mt-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              <span className="font-vermin tracking-widest font-normal inline-block align-middle text-4xl sm:text-5xl mr-2 select-none">LONEWOLF</span> REEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple font-display font-extrabold inline-block">#1</span>
            </h2>
            <p className={`text-sm md:text-base max-w-xl mt-3 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Experience an immersive blend of high-end design, interactive user interfaces, and procedural sound. Sound on for full ambient audio.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4 justify-center md:justify-start">
            <span className={`text-xs font-mono px-3 py-2 rounded-md ${
              isDarkMode ? "bg-slate-900 text-slate-300 border border-slate-800" : "bg-white text-slate-700 border border-slate-200"
            } flex items-center gap-1.5`}>
              <Flame className="w-3.5 h-3.5 text-vice-pink animate-pulse" /> Live Portfolio
            </span>
            <span className={`text-xs font-mono px-3 py-2 rounded-md ${
              isDarkMode ? "bg-slate-900 text-slate-300 border border-slate-800" : "bg-white text-slate-700 border border-slate-200"
            } flex items-center gap-1.5`}>
              <Sparkles className="w-3.5 h-3.5 text-vice-cyan" /> Interactive Unit
            </span>
          </div>
        </div>

        {/* Video Player Card wrapped in interactive smooth-hover bounds */}
        <motion.div
          id="video-player-card"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className={`relative rounded-2xl overflow-hidden shadow-2xl border ${
            isDarkMode ? "bg-slate-900/50 border-white/10" : "bg-white border-slate-200/80"
          } p-3 sm:p-4`}
        >
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black group shadow-inner">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  id="video-poster-overlay"
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Poster Image */}
                  <img
                    src="https://picsum.photos/seed/lonewolf_creative/1920/1080?brightness=85"
                    alt="Lonewolf Creative Showcase"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

                  {/* Pulsing Glowing Neon Play button */}
                  <motion.div
                    className="relative z-10 w-20 h-20 bg-gradient-to-tr from-vice-pink to-vice-purple text-white rounded-full flex items-center justify-center shadow-xl shadow-pink-500/20"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                    {/* Concentric ripples */}
                    <div className="absolute -inset-4 border border-vice-pink/30 rounded-full animate-ping pointer-events-none" />
                  </motion.div>

                  {/* Dynamic Corner HUD Info */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
                    <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-xs font-mono tracking-widest font-bold">LIVE RE-BROADCAST_</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  id="video-iframe-embed"
                  key="player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&mute=0&modestbranding=1"
                    title="LoneWolf Multimedia Showcase Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Stats and Interaction HUD */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
            {/* Realtime incremental views */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">
                <Eye className="w-4 h-4 text-vice-cyan" />
                <span>{views.toLocaleString()} visits</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">
                <Flame className="w-4 h-4 text-vice-pink" />
                <span>Q3 Booking Available</span>
              </div>
            </div>

            {/* Micro Interaction Triggers */}
            <div className="flex items-center gap-3">
              <button
                id="btn-like-trailer"
                onClick={handleLike}
                className={`px-4 py-2 rounded-lg text-xs font-display font-semibold border ${
                  hasLiked
                    ? "bg-vice-pink/15 text-vice-pink border-vice-pink"
                    : "bg-transparent border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                } flex items-center gap-2 transition-all cursor-pointer`}
              >
                ★ LIKE {hasLiked ? "DED" : ""} ({likes.toLocaleString()})
              </button>
              
              <button
                id="btn-share-trailer"
                onClick={handleShare}
                className="px-4 py-2 rounded-lg text-xs font-display font-semibold border bg-transparent border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedLink ? "COPIED URL!" : "SHARE LINK"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Countdown Section (Fall 2026 Estimated Launch) */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl border ${
          isDarkMode
            ? "bg-gradient-to-r from-indigo-950/20 via-slate-900/40 to-pink-950/20 border-white/5"
            : "bg-gradient-to-r from-slate-100/55 via-indigo-55/30 to-pink-55/35 border-slate-200"
        } relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6`}>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-tr from-vice-pink to-vice-purple text-white rounded-xl shadow-md">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-snug ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                PROJECT NEON REVEAL_
              </h4>
              <p className={`text-xs sm:text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                A brand-new immersive, full-stack sandbox dashboard is dropping. Watch the live development countdown timer.
              </p>
            </div>
          </div>

          {/* Countdown Clock Grid */}
          <div className="flex gap-2 sm:gap-4 font-mono">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" }
            ].map((col, i) => (
              <div
                key={i}
                className={`w-16 h-18 sm:w-20 sm:h-20 rounded-xl flex flex-col items-center justify-center border shadow-sm ${
                  isDarkMode
                    ? "bg-black/50 border-white/10 text-white"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-vice-pink to-vice-purple select-none">
                  {String(col.value).padStart(2, "0")}
                </span>
                <span className={`text-[9px] uppercase tracking-wider font-semibold ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                  {col.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
