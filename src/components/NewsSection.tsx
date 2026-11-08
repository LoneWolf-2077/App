import React from "react";
import { MessageSquare, Calendar, ArrowUpRight, Share2, Award, Pocket } from "lucide-react";
import { motion } from "motion/react";
import { NewsItem } from "../types";

export default function NewsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const news: NewsItem[] = [
    {
      id: "news-1",
      date: "May 25, 2026",
      category: "News",
      title: "Built-In Synthesizer: Procedural Web Audio Generation",
      summary: "A behind-the-scenes breakdown of how this application's custom audio synth works. Discover warm analog lowpass filters, gain ramps, and oscillator chord frequencies designed purely in TypeScript.",
      image: "https://picsum.photos/seed/sound_engineering/600/400?noise=1"
    },
    {
      id: "news-2",
      date: "May 10, 2026",
      category: "Update",
      title: "Parallax Multi-Layer Mathematics & Layout Viewports",
      summary: "Explore calculated offset transformations, smooth passive document scroll triggers, and visual viewport gradients configured to ensure high performance on modern screens and major browsers.",
      image: "https://picsum.photos/seed/code_math/600/400?noise=2"
    },
    {
      id: "news-3",
      date: "May 02, 2026",
      category: "Community",
      title: "The Aesthetic Canvas: Mastering Sleek Neon Accents",
      summary: "A design journal on pairing heavy display typography spacing with deep, high-contrast dark-mode backgrounds, glowing radial halos, and delicate gradient border rails to create premium layouts.",
      image: "https://picsum.photos/seed/creative_canvas/600/400?noise=3"
    }
  ];

  return (
    <section
      id="news"
      className={`py-24 px-6 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#050505] border-b border-white/5" : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* News Section Header */}
        <div className="text-center md:text-left md:flex items-end justify-between mb-12">
          <div>
            <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-pink bg-vice-pink/10 px-3 py-1.5 rounded-full uppercase">
              ★ CREATIVE DISPATCHES
            </span>
            <h2 className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight mt-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              THE <span className="font-vermin tracking-widest font-normal inline-block align-middle text-4xl ml-1 mr-2 select-none">LONEWOLF</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple">DISPATCHES</span>
            </h2>
            <p className={`text-sm mt-3 max-w-xl ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Gain direct access to development logs, technical design journals, creative checklists, and front-end system code documentation.
            </p>
          </div>

          <motion.a
            id="all-news-link"
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:flex items-center gap-2 text-xs font-display font-black tracking-widest uppercase border px-5 py-3 rounded-xl transition-all cursor-pointer ${
              isDarkMode
                ? "border-white/10 text-slate-300 hover:border-vice-pink hover:text-vice-pink bg-slate-900/50"
                : "border-slate-200 text-slate-700 hover:border-vice-pink hover:text-vice-pink bg-slate-50"
            }`}
          >
            VIEW ALL RELEASES <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* News Cards Deck */}
        <div id="news-deck" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              id={`news-item-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`flex flex-col h-full rounded-2xl overflow-hidden border ${
                isDarkMode 
                  ? "bg-slate-900/40 border-white/5 shadow-2xl shadow-indigo-950/15" 
                  : "bg-white border-slate-200/80 shadow-md shadow-slate-200/50"
              }`}
            >
              {/* Leader Cover Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* News tag */}
                <span className={`absolute top-4 left-4 text-[9px] font-mono font-black tracking-widest px-2.5 py-1.5 rounded uppercase ${
                  item.category === "News"
                    ? "bg-vice-pink text-white"
                    : item.category === "Update"
                    ? "bg-vice-cyan text-slate-950"
                    : "bg-vice-purple text-white"
                }`}>
                  #{item.category}
                </span>
              </div>

              {/* content description */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>BY RECON TEAM</span>
                  </div>

                  <h3 className={`font-display font-extrabold text-xl leading-snug tracking-tight hover:text-vice-pink transition-colors cursor-pointer ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {item.summary}
                  </p>
                </div>

                {/* Read more button link */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-display font-black tracking-widest">
                  <a href="#news" className="text-vice-pink hover:text-rose-600 uppercase flex items-center gap-1">
                    READ LOG BULLETIN <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <button className="text-slate-500 hover:text-vice-cyan cursor-pointer p-1">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
