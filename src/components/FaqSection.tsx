import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles, Workflow, Layers, HelpCircle as AskIcon } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FaqSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: "workflow",
      category: "METHODOLOGY",
      question: "What does your multimedia design workflow look like from kickoff to final export?",
      answer: "My workflow is structured into four high-fidelity phases: 1) Moodboarding & Narrative Outlines, where we align on raw vibe, typography, and color aesthetics; 2) Prototyping & Motion Direction, producing keyframe styles and web wireframes; 3) Production Coding & Audio-Visual Integration, building high-performance creative components and rendering assets; and 4) Final Polish & Export, fine-tuning transitions and responsiveness for a pristine launch."
    },
    {
      id: "tools",
      category: "CREATIVE STACK",
      question: "Which core software suites and frameworks do you execute projects in?",
      answer: "I leverage industry-standard platforms to deliver optimal interactive performance. For graphic layout and interface structure, I build in Figma. Motion design and cinematic montages are developed using After Effects and Premiere Pro. For interactive code, I utilize React with Tailwind CSS, Spline for 3D simulation, and pure creative script mechanisms (such as custom canvas triggers and WebGL) to bridge static graphic design with dynamic browser runtime events."
    },
    {
      id: "code",
      category: "FRONT-END SYNERGY",
      question: "Do you handle custom interactive web coding along with asset production?",
      answer: "Yes, fully! Unlike traditional print or static digital designers, I believe interaction is the soul of online multimedia. I design the visual components and write the production-ready React components, styling structures, and micro-interactions. This dual-threat approach removes the communication friction between design and engineering, ensuring the final deployed product perfectly reflects the high-fidelity design prototype."
    },
    {
      id: "turnaround",
      category: "PRODUCTION TIMELINE",
      question: "What is your typical schedule/turnaround for standard interactive assets?",
      answer: "Timeline depends on density, complexity, and scale. Core branding structures and custom digital assets usually take 1 to 2 weeks. Comprehensive interactive landing concepts paired with custom motion systems average 3 to 4 weeks. Throughout the engagement, you receive access to live, high-fidelity staging preview spaces, allowing for streamlined collaborative feedback loops at critical development milestones."
    },
    {
      id: "rumi",
      category: "AVATAR & INSPIRATION",
      question: "Why is Rumi from KPDH sometimes your profile picture?",
      answer: "Rumi represents the intersection of my favorite creative inspirations—masterful animation, bold character design, and the kind of high-energy storytelling that completely pulls you in. Beyond just looking cool, using the character is a nod to the fandoms and community spaces where I hang out, create art, and share 3D renders. It’s a fun, expressive avatar that bridges my love for modern animation and my own personal corner of the internet."
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? "bg-[#050505] border-white/5 text-slate-300" 
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      {/* Soft gradient orb in backdrop */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-gradient-to-r from-vice-cyan/5 to-vice-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-vice-cyan/30 bg-vice-cyan/10 text-vice-cyan">
            <HelpCircle className="w-3.5 h-3.5 animate-pulse" /> PROCESS PROTOCOLS
          </div>
          
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase leading-none text-slate-900 dark:text-white">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple">QUESTIONS</span>
          </h2>
          
          <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"} max-w-md mx-auto`}>
            Deconstructing my collaborative process, software frameworks, client deliverables, and how I bridge aesthetic vision with functional frontend engineering.
          </p>
        </div>

        {/* FAQ Accordion UI */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = activeIndex === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDarkMode 
                      ? "border-vice-pink/40 bg-white/[0.02]/30 shadow-[0_0_20px_rgba(244,63,94,0.05)]"
                      : "border-vice-pink/30 bg-slate-50 shadow-sm"
                    : isDarkMode
                      ? "border-white/5 bg-black/30 hover:border-white/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-5 px-6 flex items-start justify-between gap-4 text-left transition-colors font-sans focus:outline-none"
                >
                  <div className="space-y-1.5 flex-1 select-none">
                    <span 
                      className={`text-[9px] font-mono tracking-widest font-bold px-1.5 py-0.5 rounded ${
                        isOpen
                          ? "bg-vice-pink/10 text-vice-pink"
                          : isDarkMode
                            ? "bg-white/5 text-slate-500"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div 
                    className={`mt-3 p-1 rounded-lg border transition-transform duration-300 ${
                      isOpen
                        ? "border-vice-pink/30 bg-vice-pink/5 text-vice-pink rotate-180"
                        : isDarkMode
                          ? "border-white/10 bg-white/5 text-slate-400"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Panel (Animated with motion) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className={`px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}>
                        <div className="border-t border-slate-200/50 dark:border-white/5 pt-4 flex gap-3">
                          <div className="flex-1">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Custom Support Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-xl bg-vice-cyan/10 border border-vice-cyan/20">
                <Workflow className="w-5 h-5 text-vice-cyan" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight"> Have a specific multimedia project request?</h4>
                <p className={`text-[10px] sm:text-xs ${isDarkMode ? "text-slate-500" : "text-slate-400"} mt-0.5`}>
                  I deliver customized high-fidelity motion graphics, visual brand directories, and creative web platforms.
                </p>
              </div>
            </div>
            
            <a 
              href="mailto:bannjason@gmail.com"
              className="w-full sm:w-auto px-5 py-2 text-[11px] font-mono font-bold uppercase rounded-xl bg-gradient-to-r from-vice-pink to-vice-purple text-white hover:shadow-lg hover:shadow-vice-pink/15 hover:scale-[1.02] transition-all tracking-wider text-center"
            >
              INQUIRE DIRECTLY_
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
