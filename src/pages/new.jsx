"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Zap, Eye, ShieldCheck, ArrowRight, Check, Star,
  ChevronDown, Ghost, Package, CreditCard, StickyNote,
  BarChart2, Layers, Menu, X
} from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// ─── Motion Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const titleFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Shared: Section Header ─────────────────────────────────────────────────
const SectionHeader = ({ badge, title, subtitle, light = false }) => (
  <motion.div
    className="text-center mb-10 md:mb-14"
    variants={titleFade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular">
      {badge}
    </div>
    <h2 className="text-2xl md:text-4xl font-bold text-white font-circular leading-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm md:text-base text-white/50 font-circular max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// ─── Shared: Pill Button ────────────────────────────────────────────────────
const PillButton = ({ children, onClick, variant = "primary", className = "" }) => (
  <button
    onClick={onClick}
    className={`px-7 py-3 rounded-[100px] font-circular font-semibold text-sm transition-all ${
      variant === "primary"
        ? "bg-[#8800ff] text-white hover:bg-[#9a1aff]"
        : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
    } ${className}`}
  >
    {children}
  </button>
);


// ════════════════════════════════════════════════════════════
// 1. NAVBAR
// ════════════════════════════════════════════════════════════
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Products", "How It Works", "Pricing", "FAQ"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-circular ${
      scrolled ? "bg-dark/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#8800ff] flex items-center justify-center text-sm">
            👻
          </div>
          <span className="font-bold text-white text-base">HustleCrowd</span>
          <span className="hidden sm:inline text-[10px] text-[#bb66ff] bg-[#8800ff]/15 border border-[#8800ff]/30 px-2 py-0.5 rounded-full ml-1">
            Micro-SaaS
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white/50 text-sm hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <PillButton>Try Phantom Free</PillButton>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 border-b border-white/10 px-4 pb-5"
          >
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block text-white/50 text-sm py-3 border-b border-white/5 hover:text-white transition-colors">
                {l}
              </a>
            ))}
            <div className="pt-4">
              <PillButton className="w-full">Try Phantom Free</PillButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


// ════════════════════════════════════════════════════════════
// 2. HERO
// ════════════════════════════════════════════════════════════

// Animated speed score counter
const SpeedGauge = ({ from = 38, to = 71 }) => {
  const [val, setVal] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    const delay = setTimeout(() => requestAnimationFrame(step), 600);
    return () => clearTimeout(delay);
  }, [inView, from, to]);

  const pct = ((val - 0) / 100) * 100;
  const color = val >= 60 ? "#22c55e" : val >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r="48" fill="none"
            stroke={color} strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 48}`}
            strokeDashoffset={`${2 * Math.PI * 48 * (1 - pct / 100)}`}
            className="transition-all duration-75"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white font-circular">{val}</span>
          <span className="text-[10px] text-white/30">/ 100</span>
        </div>
      </div>
      <span className="text-xs text-white/40 font-circular">Shopify Speed Score</span>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="w-full pt-28 md:pt-36 pb-10 md:pb-16 bg-dark relative overflow-hidden">
    {/* BG glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#8800ff]/10 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular">
          👻 Micro-tools for Shopify sellers — built in Malaysia
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeUp}
          className="mb-5 text-4xl md:text-7xl font-bold text-white font-circular leading-[1.1] max-w-3xl">
          Your Shopify Store Has a{" "}
          <span className="text-[#bb66ff]">Hidden Problem</span>.{" "}
          We Fix It.
        </motion.h1>

        <motion.p variants={fadeUp}
          className="mb-10 text-sm md:text-base text-white/50 font-circular max-w-xl">
          HustleCrowd builds surgical micro-tools for Shopify merchants — tiny apps that solve one painful problem exceptionally well, so your store runs faster, converts better, and earns more.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
          <PillButton>Try Phantom Free — It's Fast</PillButton>
          <PillButton variant="outline">See All Tools</PillButton>
        </motion.div>

        {/* Phantom preview card */}
        <motion.div variants={fadeUp}
          className="w-full max-w-2xl rounded-2xl bg-[#353739] border border-white/10 overflow-hidden shadow-2xl">

          {/* Card header */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-[#2C2E2F]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-white/25 font-circular">Phantom — Theme Code Scanner</span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Left: scan result */}
              <div className="flex-1 w-full">
                <p className="text-xs text-white/40 font-circular mb-3">Scan complete — active theme</p>
                {[
                  { app: "Loox Reviews", lines: 312, safe: true },
                  { app: "ReConvert Upsell", lines: 198, safe: true },
                  { app: "Klaviyo (old)", lines: 441, safe: true },
                  { app: "Lucky Orange", lines: 88, safe: false },
                ].map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="flex items-center justify-between py-2.5 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.safe ? "bg-green-400" : "bg-amber-400"}`} />
                      <span className="text-xs text-white/70 font-circular">{item.app}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/30 font-circular">{item.lines} lines</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-circular ${
                        item.safe
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                      }`}>
                        {item.safe ? "Safe to remove" : "Review first"}
                      </span>
                    </div>
                  </motion.div>
                ))}

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/40 font-circular">Total dead code found</span>
                  <span className="text-sm font-bold text-white font-circular">1,039 lines</span>
                </div>

                <button className="mt-4 w-full py-2.5 rounded-[100px] bg-[#8800ff] text-white text-xs font-circular font-semibold hover:bg-[#9a1aff] transition-colors">
                  Remove All Safe Code →
                </button>
              </div>

              {/* Right: speed before/after */}
              <div className="flex flex-col items-center gap-5">
                <div className="flex items-end gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl font-bold text-white/25 font-circular">38</span>
                    <span className="text-[10px] text-white/25 font-circular">Before</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#bb66ff] mb-3" />
                  <SpeedGauge from={38} to={71} />
                </div>
                <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full font-circular">
                  +33 speed score 🚀
                </span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div variants={fadeUp}
          className="mt-8 flex items-center gap-6 text-white/25 text-xs font-circular flex-wrap justify-center">
          <span>✓ Works with all Shopify themes</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ No code knowledge needed</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Free to scan, forever</span>
        </motion.div>

      </motion.div>
    </div>
  </div>
);


// ════════════════════════════════════════════════════════════
// 3. PROBLEM SECTION
// ════════════════════════════════════════════════════════════
const Problem = () => {
  const stats = [
    { value: "73%", label: "of Shopify stores have dead code from deleted apps" },
    { value: "1.2s", label: "average load time added per uninstalled app left uncleaned" },
    { value: "7%", label: "conversion drop for every extra second of load time" },
  ];

  return (
    <section className="py-16 md:pt-[100px] md:pb-12 bg-[#2C2E2F] font-circular">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="⚠️ The Problem"
          title={<>Every App You Delete Leaves a<br /><span className="text-[#bb66ff]">Ghost Behind</span></>}
          subtitle="When you uninstall a Shopify app, the code it injected into your theme stays behind — invisible, unmaintained, and silently dragging your store down."
        />

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-lg bg-[#353739] p-6 text-center">
              <div className="text-4xl font-bold text-[#bb66ff] font-circular mb-2">{s.value}</div>
              <p className="text-xs text-white/40 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Story block */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-xl bg-[#353739] border border-[#8800ff]/20 p-7 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="text-4xl flex-shrink-0">🛒</div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white mb-3">
              You've installed — and deleted — a lot of apps.
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              The average Shopify merchant tries 7–12 apps before settling on their stack. Every one of those installs injects JavaScript, CSS, and Liquid snippets into your theme. When you delete the app, Shopify removes its dashboard — but <span className="text-white/80">leaves every line of code in your theme untouched</span>.
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              That dead code still loads on every page visit. It slows your store, confuses Google, and sometimes <span className="text-white/80">outright breaks features</span> when your theme updates. Most merchants have no idea it's even there.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 4. PHANTOM PRODUCT DEEP-DIVE
// ════════════════════════════════════════════════════════════
const PhantomSection = () => {
  const features = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Smart Theme Scanner",
      desc: "Phantom scans your active theme files and cross-references against a database of 200+ known app code signatures — mapping every orphaned snippet back to its original app.",
      tag: "Core feature",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Safe Removal Preview",
      desc: "Before touching anything, Phantom shows you exactly what it found. Green means safe to auto-remove. Yellow means review first. Red means leave it. You're always in control.",
      tag: "Safety first",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Before & After Speed Score",
      desc: "See your Shopify speed score live — before cleanup and after. The number goes up. You screenshot it. Your customers feel it.",
      tag: "Instant ROI",
    },
  ];

  return (
    <section id="products" className="py-16 md:pt-[100px] md:pb-12 bg-dark font-circular">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header with Phantom branding */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          variants={titleFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular">
            👻 Our First Tool
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-circular">Phantom</h2>
            <span className="text-xs bg-green-500/15 text-green-400 border border-green-500/25 px-3 py-1 rounded-full">
              Available Now
            </span>
          </div>
          <p className="text-lg md:text-xl text-[#bb66ff] font-circular mb-3 font-semibold">
            Clean your store. Kill the ghost code.
          </p>
          <p className="text-sm text-white/50 max-w-lg mx-auto">
            The only Shopify app dedicated to finding and safely removing leftover code from deleted apps — so your store loads faster, ranks higher, and converts better.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {features.map((f, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-lg bg-[#353739] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#8800ff] flex items-center justify-center text-white flex-shrink-0">
                  {f.icon}
                </div>
                <span className="text-[10px] text-[#bb66ff] bg-[#8800ff]/10 border border-[#8800ff]/20 px-2 py-0.5 rounded-full">
                  {f.tag}
                </span>
              </div>
              <h4 className="text-sm md:text-base font-semibold text-white">{f.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed flex-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA inline */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PillButton>Install Phantom on Shopify — Free</PillButton>
          <span className="text-xs text-white/30 font-circular">
            No credit card · Free scan · 2-min setup
          </span>
        </motion.div>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 5. TOOLS PIPELINE
// ════════════════════════════════════════════════════════════
const Pipeline = () => {
  const tools = [
    {
      icon: <Ghost className="w-5 h-5" />,
      name: "Phantom",
      tagline: "Ghost code remover",
      desc: "Scans your Shopify theme for dead code from deleted apps and removes it safely — boosting speed and cleaning your codebase.",
      status: "live",
      platform: "Shopify",
    },
    {
      icon: <Package className="w-5 h-5" />,
      name: "StockBridge",
      tagline: "Micro-inventory sync",
      desc: "Syncs stock levels between two Shopify stores in real-time — perfect for brands running separate wholesale and retail storefronts.",
      status: "coming",
      platform: "Shopify",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      name: "CheckoutBlocks",
      tagline: "Single-purpose checkout fields",
      desc: "Add a gift message, delivery instructions, or VAT number field to your checkout — without needing Shopify Plus.",
      status: "coming",
      platform: "Shopify",
    },
    {
      icon: <StickyNote className="w-5 h-5" />,
      name: "AdminNotes",
      tagline: "Sticky notes for Shopify Admin",
      desc: "Add private internal notes directly on product and order pages — keep your team aligned without leaving Shopify.",
      status: "coming",
      platform: "Shopify",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      name: "ReviewBridge",
      tagline: "Multi-store review syncer",
      desc: "Automatically sync product reviews across your regional Shopify stores by SKU — no CSV uploads, no manual work.",
      status: "coming",
      platform: "Shopify",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      name: "PixelKit",
      tagline: "GA4 & ads pixel wizard",
      desc: "Set up and verify Google Analytics 4, Meta Pixel, and TikTok Pixel in minutes — no developer needed, no broken tracking.",
      status: "coming",
      platform: "Shopify",
    },
  ];

  return (
    <section className="py-16 md:pt-[100px] md:pb-12 bg-[#2C2E2F] font-circular">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="🗺️ The Pipeline"
          title="One Problem. One Tool. Done Right."
          subtitle="We're building a portfolio of surgical micro-tools — each one solves exactly one Shopify pain point and nothing else."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {tools.map((t, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-lg p-6 flex flex-col gap-4 transition-all relative overflow-hidden ${
                t.status === "live"
                  ? "bg-[#2a1a4a] border-2 border-[#8800ff]/60 hover:border-[#8800ff]"
                  : "bg-[#353739] border border-white/8 hover:border-white/20"
              }`}
            >
              {t.status === "live" && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#8800ff] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg font-circular">
                    LIVE
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  t.status === "live" ? "bg-[#8800ff]" : "bg-white/8"
                }`}>
                  <div className={t.status === "live" ? "text-white" : "text-white/40"}>
                    {t.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className={`text-[11px] ${t.status === "live" ? "text-[#bb66ff]" : "text-white/35"}`}>
                    {t.tagline}
                  </p>
                </div>
              </div>

              <p className={`text-xs leading-relaxed flex-1 ${
                t.status === "live" ? "text-white/55" : "text-white/30"
              }`}>
                {t.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/25 bg-white/5 px-2 py-0.5 rounded-full">
                  {t.platform}
                </span>
                {t.status === "coming" && (
                  <span className="text-[10px] text-amber-400/70 font-circular">
                    Coming soon
                  </span>
                )}
                {t.status === "live" && (
                  <button className="text-[11px] text-[#bb66ff] flex items-center gap-1 hover:gap-2 transition-all font-circular">
                    Install free <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 6. HOW IT WORKS
// ════════════════════════════════════════════════════════════
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      emoji: "📦",
      title: "Install Phantom from the Shopify App Store",
      desc: "One click. No dev needed. Phantom connects to your store read-only at first — it can see your theme but won't touch anything yet.",
    },
    {
      number: "02",
      emoji: "🔍",
      title: "Run a scan — see what's hiding",
      desc: "Phantom analyses your active theme files in seconds. Every ghost snippet gets flagged, named, and sorted by safety — so you know exactly what you're dealing with.",
    },
    {
      number: "03",
      emoji: "🚀",
      title: "Remove safe code and watch your score climb",
      desc: "Approve the cleanup with one click. Phantom removes the dead code, shows you the before/after speed score, and keeps scanning monthly so new ghosts never build up.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:pt-[100px] md:pb-12 bg-dark font-circular">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="⚡ How It Works"
          title="Up and Running in Under 5 Minutes"
          subtitle="No developers. No CSV exports. No guesswork. Phantom does the technical heavy lifting so you don't have to."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
          {steps.map((s, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-lg bg-[#353739] p-6 overflow-hidden flex flex-col gap-4">
              <span className="absolute top-5 right-5 text-5xl font-bold text-white/[0.04] font-circular leading-none select-none">
                {s.number}
              </span>
              <div className="text-3xl">{s.emoji}</div>
              <h4 className="text-sm md:text-base font-bold text-white leading-snug">{s.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 7. PRICING
// ════════════════════════════════════════════════════════════
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      suffix: "forever",
      desc: "See the full picture before spending a cent. Scan your store as many times as you like.",
      features: [
        "Unlimited theme scans",
        "Full dead code report",
        "Safety rating per snippet",
        "Speed score preview",
      ],
      locked: ["One-click code removal", "Monthly auto-scan", "Team access & history"],
      cta: "Start Free",
      featured: false,
    },
    {
      name: "Clean",
      price: "9",
      suffix: "/ month",
      desc: "For growing stores that want a fast, clean codebase without hiring a developer.",
      features: [
        "Everything in Free",
        "One-click safe code removal",
        "Monthly auto-scan",
        "Before & after speed report",
        "14-day changelog history",
      ],
      locked: ["Team access", "Priority support"],
      cta: "Start Clean",
      featured: false,
    },
    {
      name: "Pro",
      price: "19",
      suffix: "/ month",
      desc: "For serious merchants and agencies managing multiple stores or teams.",
      features: [
        "Everything in Clean",
        "Multi-store management",
        "Full team access",
        "Unlimited changelog history",
        "Priority email support",
        "Early access to new tools",
      ],
      locked: [],
      cta: "Go Pro",
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:pt-[100px] md:pb-12 bg-[#2C2E2F] font-circular">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="💰 Pricing"
          title="Start Free. Pay Only When It Helps."
          subtitle="Phantom is free to install and scan. You only upgrade when you're ready to remove the code and see your score climb."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pb-6">
          {plans.map((plan, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative rounded-xl p-7 flex flex-col gap-5 ${
                plan.featured
                  ? "bg-[#2a1a4a] ring-2 ring-[#8800ff]"
                  : "bg-[#353739]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8800ff] text-white text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap font-circular tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.featured ? "text-purple-300" : "text-white/35"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  {plan.price !== "0" && (
                    <span className={`text-base mt-1 ${plan.featured ? "text-purple-300" : "text-white/50"}`}>$</span>
                  )}
                  <span className="text-4xl font-bold text-white font-circular leading-none">
                    {plan.price === "0" ? "Free" : plan.price}
                  </span>
                  <span className={`text-xs ml-1 ${plan.featured ? "text-purple-200/60" : "text-white/30"}`}>
                    {plan.suffix}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed pb-5 border-b ${
                  plan.featured ? "text-purple-200/55 border-[#8800ff]/25" : "text-white/35 border-white/10"
                }`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-white">
                    <span className="mt-0.5 w-4 h-4 min-w-4 rounded-full bg-green-500/15 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-400" />
                    </span>
                    {f}
                  </li>
                ))}
                {plan.locked.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-white/25">
                    <span className="mt-0.5 w-4 h-4 min-w-4 rounded-full bg-white/5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white/20" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-[100px] text-sm font-semibold font-circular transition-colors ${
                plan.featured
                  ? "bg-[#8800ff] text-white hover:bg-[#9a1aff]"
                  : "border border-white/20 text-white/70 hover:border-white/35 hover:text-white"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 font-circular pt-2">
          All plans are billed monthly. Cancel anytime. No contracts.
        </p>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 8. SOCIAL PROOF / WAITLIST STRIP
// ════════════════════════════════════════════════════════════
const SocialProof = () => {
  const quotes = [
    {
      text: "Finally. I've been paying a freelancer $80 every few months to clean up my theme. This does it in minutes.",
      name: "Daniel K.", role: "Shopify merchant, Kuala Lumpur", initials: "DK",
      avatarClass: "bg-purple-900/60 text-purple-300",
    },
    {
      text: "My store went from a speed score of 34 to 58 after the first cleanup. Didn't change anything else.",
      name: "Amirah S.", role: "Fashion brand owner, Selangor", initials: "AS",
      avatarClass: "bg-teal-900/60 text-teal-300",
    },
    {
      text: "I had no idea Loox was still loading JavaScript even after I deleted it 6 months ago. This is eye-opening.",
      name: "Wei Liang", role: "Electronics store, Penang", initials: "WL",
      avatarClass: "bg-blue-900/60 text-blue-300",
    },
  ];

  return (
    <section className="py-16 md:pt-[100px] md:pb-12 bg-dark font-circular">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="⭐ Early Users"
          title="Merchants Are Already Seeing Results"
          subtitle="Phantom is in early access. Here's what testers are saying after their first scan."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-lg bg-[#353739] p-6 flex flex-col gap-4 hover:ring-1 hover:ring-[#8800ff]/30 transition-all">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white/55 text-xs leading-relaxed flex-1">"{q.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${q.avatarClass}`}>
                  {q.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{q.name}</p>
                  <p className="text-white/30 text-[11px] mt-0.5">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 9. FAQ
// ════════════════════════════════════════════════════════════
const FAQ = () => {
  const faqs = [
    {
      q: "Is it safe? Will Phantom break my store?",
      a: "Phantom never deletes code without your explicit approval. Every snippet is reviewed and safety-rated before you see it. You always get a preview of what will be removed. And before any cleanup, Phantom creates a full theme backup automatically — so you can roll back in one click.",
    },
    {
      q: "How does Phantom know which code came from which app?",
      a: "We maintain a signature database of code patterns left by 200+ popular Shopify apps. When Phantom scans your theme, it matches the snippets it finds against this database and names the source app. We update the database regularly as new apps enter the market.",
    },
    {
      q: "My store is on a heavily customised theme. Will it still work?",
      a: "Yes. Phantom scans your theme files directly and only flags code that matches known dead-app patterns. It does not touch any custom code you or your developer wrote. The safety rating system exists precisely to protect custom implementations.",
    },
    {
      q: "Do I need a developer to use Phantom?",
      a: "No. Phantom is built for non-technical merchants. The interface shows you plain-English summaries — 'This is leftover code from Loox, which you deleted 4 months ago. It is safe to remove.' No Liquid, no CSS, no terminal. Just a button.",
    },
    {
      q: "How often should I run a scan?",
      a: "On the Clean and Pro plans, Phantom runs monthly auto-scans so you never need to think about it. On the Free plan, you can run manual scans any time — we recommend scanning after every app uninstall.",
    },
    {
      q: "What's coming next after Phantom?",
      a: "Our pipeline includes StockBridge (inventory sync between two Shopify stores), CheckoutBlocks (single-purpose checkout fields without Shopify Plus), AdminNotes (sticky notes in Shopify Admin), and more. Pro plan users get early access to every new tool we ship.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:pt-[100px] md:pb-12 bg-[#2C2E2F] font-circular">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeader
          badge="❓ FAQ"
          title="Good Questions Deserve Straight Answers"
          subtitle="Everything you need to know before installing."
        />

        <Accordion type="single" collapsible className="flex flex-col gap-3 pb-4">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              variants={fadeUp} custom={i * 0.4}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              <AccordionItem value={`faq-${i}`}
                className="rounded-lg bg-[#353739] border-none px-6 overflow-hidden">
                <AccordionTrigger className="text-white text-sm font-semibold font-circular py-5 hover:text-[#bb66ff] hover:no-underline transition-colors text-left [&>svg]:text-[#bb66ff] [&>svg]:bg-[#8800ff]/15 [&>svg]:rounded-full [&>svg]:p-1 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:flex-shrink-0">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4 pb-5 font-circular">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};


// ════════════════════════════════════════════════════════════
// 10. FINAL CTA
// ════════════════════════════════════════════════════════════
const CTA = () => (
  <section id="contact" className="py-16 md:pt-[100px] md:pb-16 bg-dark font-circular">
    <div className="max-w-3xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl bg-[#353739] p-12 md:p-20 overflow-hidden text-center"
      >
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-[#8800ff]/12 blur-3xl" />
        </div>

        <div className="relative">
          <div className="text-5xl mb-5">👻</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-circular mb-4 leading-tight">
            Your Store Has Ghosts.<br />Time to Hunt Them.
          </h2>
          <p className="text-white/50 text-sm md:text-base font-circular max-w-md mx-auto mb-10">
            Install Phantom free and run your first scan in under 2 minutes. No credit card. No commitment. Just a faster store.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PillButton className="px-10 py-4 text-base">
              Install Phantom Free on Shopify
            </PillButton>
            <PillButton variant="outline" className="px-10 py-4 text-base">
              See the Pipeline
            </PillButton>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/25 font-circular">
            <span>✓ Free forever scan</span>
            <span>✓ 2-min install</span>
            <span>✓ Works on all themes</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


// ════════════════════════════════════════════════════════════
// 11. FOOTER
// ════════════════════════════════════════════════════════════
const Footer = () => {
  const cols = [
    {
      heading: "Tools",
      links: ["Phantom — Ghost Code Remover", "StockBridge (Coming Soon)", "CheckoutBlocks (Coming Soon)", "AdminNotes (Coming Soon)", "PixelKit (Coming Soon)"],
    },
    {
      heading: "Company",
      links: ["About HustleCrowd", "The Pipeline", "Changelog", "Blog", "Contact"],
    },
    {
      heading: "Support",
      links: ["Documentation", "FAQs", "Report a Bug", "hello@hustlecrowd.my", "WhatsApp Us"],
    },
  ];

  return (
    <footer className="bg-dark border-t border-white/10 pt-14 pb-8 font-circular">
      <div className="max-w-5xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#8800ff] flex items-center justify-center">👻</div>
              <span className="font-bold text-white text-base">HustleCrowd</span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed mb-2 max-w-[200px]">
              Micro-tools for Shopify sellers — built in Malaysia, used worldwide.
            </p>
            <p className="text-white/20 text-[11px] mb-5">
              One problem. One tool. Done right.
            </p>
            <div className="flex gap-2">
              {["ig", "tw", "li", "wa"].map((s) => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded-lg bg-[#353739] border border-white/10 flex items-center justify-center text-white/30 text-xs hover:border-[#8800ff]/50 hover:text-[#bb66ff] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{col.heading}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/30 text-xs hover:text-white transition-colors leading-snug block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <span>© 2025 HustleCrowd Sdn. Bhd. All rights reserved. 🇲🇾</span>
          <span>Privacy Policy · Terms of Service · Shopify Partner</span>
        </div>
      </div>
    </footer>
  );
};


// ════════════════════════════════════════════════════════════
// ROOT EXPORT — Full Landing Page
// ════════════════════════════════════════════════════════════
export default function HustleCrowdLanding() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <PhantomSection />
      <Pipeline />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      {/* <FAQ /> */}
      <CTA />
      <Footer />
    </div>
  );
}