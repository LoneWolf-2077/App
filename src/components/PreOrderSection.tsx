import React, { useState } from "react";
import { Check, ShieldCheck, Download, Laptop, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PreOrderEdition } from "../types";

export default function PreOrderSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [platform, setPlatform] = useState<"ps5" | "xbox" | "pc" >("ps5");
  const [selectedEdition, setSelectedEdition] = useState("royalty");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const editions: PreOrderEdition[] = [
    {
      id: "regular",
      name: "Core Blueprint Tier",
      price: "$2,400",
      benefits: [
        "In-depth 90-Minute Technical Strategy session",
        "Interactive component wireframe & layout mockup",
        "Aesthetic typography pairings & Tailwind setup",
        "Full ownership of structured source files"
      ],
      image: "https://picsum.photos/seed/standardbox/400/500?noise=1"
    },
    {
      id: "royalty",
      name: "High-Fidelity Suite",
      price: "$4,800",
      badge: "MOST REQUESTED",
      benefits: [
        "Full end-to-end multi-layer interactive setup",
        "Custom procedural audio loop synthesized",
        "3 dynamic theme layouts configured (night / light)",
        "3 months post-launch systems priority triage",
        "Full mobile-touch layout alignment & testing"
      ],
      image: "https://picsum.photos/seed/specialbox/400/500?noise=2"
    },
    {
      id: "syndicate",
      name: "Bespoke Enterprise Level",
      price: "$9,600",
      badge: "ENTERPRISE MODEL",
      benefits: [
        "Custom high-touch interactive React masterpiece",
        "Robust REST server endpoints or database sync",
        "Dynamic real-time analytics & chart overlays",
        "1-on-1 private whiteboard architectural session",
        "Unlimited bespoke asset & visual design generation",
        "Full interactive presentation deck in standard PDF"
      ],
      image: "https://picsum.photos/seed/collectorbox/400/500?noise=3"
    }
  ];

  const handlePreOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section
      id="preorder"
      className={`py-24 px-6 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#050505]" : "bg-slate-50"
      }`}
    >
      {/* Background Neon ambient gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-vice-pink/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-black tracking-[0.2em] text-[10px] text-vice-pink bg-vice-pink/10 px-3 py-1.5 rounded-full uppercase">
            ★ SECURE PORTAL ENGAGEMENT
          </span>
          <h2 className={`font-display font-extrabold text-4xl sm:text-5xl mt-3 tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            LOCK IN YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple">COOPERATION</span> NOW
          </h2>
          <p className={`text-sm mt-3 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Secure customized design & development capacity. Choose your project division, pick your engagement suite, and get high-fidelity previews distributed instantly on kickoff.
          </p>
        </div>

        {/* Step 1: Platforms Selection Grid with cool icons */}
        <div className="mb-12">
          <h3 className={`font-display font-extrabold text-base tracking-widest uppercase mb-4 ${
            isDarkMode ? "text-slate-300" : "text-slate-700"
          }`}>
            1. CHOOSE CORE WORK DIVISION:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { id: "ps5", label: "Full-Stack Code", detail: "React, APIs, database setup", icon: "🌐" },
              { id: "xbox", label: "Interface Design", detail: "UX mappings, mockups, Figma", icon: "🎨" },
              { id: "pc", label: "Interactive Experience", detail: "Motion, audio synth, WebGL", icon: "⚡" }
            ].map(sys => (
              <button
                id={`platform-btn-${sys.id}`}
                key={sys.id}
                onClick={() => setPlatform(sys.id as any)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  platform === sys.id
                    ? "bg-gradient-to-tr from-indigo-950/40 to-slate-900 border-vice-pink shadow-md text-white"
                    : isDarkMode
                    ? "bg-slate-950/60 border-white/5 text-slate-400 hover:border-slate-800"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{sys.icon}</span>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-wider uppercase">{sys.label}</h4>
                    <p className="text-[10px] text-slate-500 font-mono">{sys.detail}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Editions Deck selection */}
        <div className="mb-12">
          <h3 className={`font-display font-extrabold text-base tracking-widest uppercase mb-4 ${
            isDarkMode ? "text-slate-300" : "text-slate-700"
          }`}>
            2. SELECT YOUR ENGAGEMENT BUNDLE:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editions.map(ed => (
              <div
                id={`edition-card-${ed.id}`}
                key={ed.id}
                onClick={() => setSelectedEdition(ed.id)}
                className={`relative rounded-2xl p-6 border cursor-pointer flex flex-col justify-between transition-all shadow-md ${
                  selectedEdition === ed.id
                    ? "bg-gradient-to-b from-indigo-950/15 to-transparent border-vice-pink shadow-pink-500/5 ring-1 ring-vice-pink"
                    : isDarkMode
                    ? "bg-slate-950/60 border-white/5 hover:border-white/10"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {ed.badge && (
                  <span className="absolute -top-3 left-6 bg-gradient-to-r from-vice-pink to-vice-purple text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold shadow-md">
                    {ed.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-display font-black text-xl tracking-tight leading-none ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {ed.name}
                    </h4>
                    <span className="text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-purple block mt-2 select-none">
                      {ed.price}
                    </span>
                  </div>

                  <div className="h-[1px] bg-slate-200 dark:bg-white/5" />

                  {/* Benefits check list */}
                  <ul className="space-y-2.5 text-xs">
                    {ed.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-vice-cyan shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className={`w-full text-center py-2.5 rounded-lg font-display font-extrabold text-xs tracking-widest uppercase transition-all ${
                    selectedEdition === ed.id
                      ? "bg-vice-pink text-white"
                      : isDarkMode
                      ? "bg-slate-900 text-slate-400 group-hover:text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {selectedEdition === ed.id ? "SELECTED CONTRACT" : "SELECT BUNDLE"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Secure Email submission and Fan reward pack */}
        <div className={`p-8 sm:p-10 rounded-2xl border ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-950 to-indigo-950/20 border-white/5"
            : "bg-white border-slate-200 shadow-xl"
        }`}>
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-2">
                  <span className="text-xs font-mono text-vice-cyan font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> SECURE 256-BIT ENCRYPTED CONNECTION
                  </span>
                  <h3 className={`font-display font-bold text-2xl tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}>
                    Pre-register to Unlock the <span className="font-vermin tracking-widest font-normal text-[22px] text-slate-800 dark:text-white inline-block align-middle ml-0.5 mr-0.5">LONEWOLF</span> Design Asset Pack
                  </h3>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Enter your email to submit pre-registration. Doing so instantly unlocks a premium zip download packed with official resume files, vector decal kits, and high fidelity color tokens!
                  </p>
                </div>

                <form onSubmit={handlePreOrder} className="lg:col-span-5 w-full">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="preorder-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="ENTER EMAIL TO START PROPOSAL..."
                      className={`flex-1 px-4 py-3 rounded-xl font-mono text-xs outline-none transition-all ${
                        isDarkMode
                          ? "bg-black text-white border border-white/10 focus:border-vice-pink"
                          : "bg-slate-50 text-slate-800 border border-slate-200 focus:border-vice-pink"
                      }`}
                    />
                    <button
                      id="preorder-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-vice-pink to-vice-purple text-white px-6 py-3 rounded-xl font-display font-black text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-pink-500/20 disabled:opacity-50"
                    >
                      {isSubmitting ? "PROCESSING..." : "SUBMIT CONTRACT"}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono mt-3 text-center sm:text-left">
                    By submitting, you agree to secure capacity logs. You may undo or unsubscribe anytime.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6 max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div className="space-y-2">
                  <h3 className={`font-display font-black text-3xl tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    CONTRACT INQUIRY LOGGED!
                  </h3>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Your project registration has been logged successfully for: <span className="font-mono font-bold uppercase text-vice-pink">{platform === "ps5" ? "Full-Stack Code" : platform === "xbox" ? "Interface Design" : "Interactive Experience"}</span> core contract with tier: <span className="font-mono font-bold uppercase text-vice-cyan">{selectedEdition}</span>.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${
                  isDarkMode ? "bg-slate-950/80 border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <p className="text-xs font-mono text-slate-500">
                    SENDER_MESSAGE:_ CONGRATS COMMITTED PARTNER. GRAB <span className="font-vermin tracking-wider font-normal text-xs align-middle">LONEWOLF</span>'S CV KIT BELOW.
                  </p>
                  
                  {/* Download launcher */}
                  <a
                    id="download-fan-kit"
                    href="https://picsum.photos/seed/wallpapers/1920/1080"
                    download="Lonewolf_CV_Kit.jpg"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-display font-extrabold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    DOWNLOAD <span className="font-vermin tracking-wider font-normal text-[13px] ml-0.5 mr-0.5">LONEWOLF</span> CV KIT <Download className="w-4 h-4 animate-bounce" />
                  </a>
                </div>

                <button
                  id="reset-preorder"
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail("");
                  }}
                  className="text-slate-500 hover:text-vice-pink font-mono text-[10px] uppercase cursor-pointer"
                >
                  ← BACK TO PACKAGES SELECT
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
