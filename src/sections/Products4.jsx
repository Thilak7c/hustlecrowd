"use client";
 
import { motion } from "framer-motion";
import {
  Ghost,
  Package,
  CreditCard,
  StickyNote,
  BarChart2,
  Layers,
  ArrowRight,
} from "lucide-react";
 
// ─── Shared animation variants ───────────────────────────────────────────────
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};
 
const titleFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ════════════════════════════════════════════════════════════
// PRODUCTS SECTION
// ════════════════════════════════════════════════════════════
const tools = [
  {
    icon: <Ghost className="w-5 h-5" />,
    name: "Phantom",
    tagline: "Ghost code remover",
    desc: "Scans your Shopify theme for dead code left behind by deleted apps and removes it safely — boosting speed and cleaning your codebase.",
    platform: "Shopify",
    status: "live",
    cta: "Install free",
    href: "#",
  },
  {
    icon: <Package className="w-5 h-5" />,
    name: "StockBridge",
    tagline: "Micro-inventory sync",
    desc: "Syncs inventory levels between two Shopify stores in real-time — built for brands running separate wholesale and retail storefronts.",
    platform: "Shopify",
    status: "coming",
    cta: null,
    href: null,
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    name: "CheckoutBlocks",
    tagline: "Single-purpose checkout fields",
    desc: "Add a gift message, delivery note, or VAT number field to your checkout — without needing Shopify Plus.",
    platform: "Shopify",
    status: "coming",
    cta: null,
    href: null,
  },
  {
    icon: <StickyNote className="w-5 h-5" />,
    name: "AdminNotes",
    tagline: "Sticky notes for Shopify Admin",
    desc: "Add private internal notes directly on product and order pages — keep your team aligned without ever leaving Shopify.",
    platform: "Shopify",
    status: "coming",
    cta: null,
    href: null,
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    name: "ReviewBridge",
    tagline: "Multi-store review syncer",
    desc: "Automatically sync product reviews across your regional Shopify stores by SKU — no CSV uploads, no manual work.",
    platform: "Shopify",
    status: "coming",
    cta: null,
    href: null,
  },
  {
    icon: <Layers className="w-5 h-5" />,
    name: "PixelKit",
    tagline: "GA4 & ads pixel wizard",
    desc: "Set up and verify Google Analytics 4, Meta Pixel, and TikTok Pixel in minutes — no developer needed, no broken tracking.",
    platform: "Shopify",
    status: "coming",
    cta: null,
    href: null,
  },
];
 
 
export const ProductsSection = () => (
  <section id="products" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-dark">
    <div className="max-w-5xl mx-auto px-4">
 
      {/* Section header */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        variants={titleFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular">
          🛠️ Our Tools
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white font-circular leading-tight mb-4">
          One Problem.{" "}
          <span className="text-[#bb66ff]">One Tool.</span>{" "}
          Done Right.
        </h2>
        <p className="text-sm md:text-base text-white/50 font-circular max-w-xl mx-auto">
          We build a growing suite of focused micro-tools for Shopify merchants —
          each one solves exactly one painful problem and nothing else.
        </p>
      </motion.div>
 
      {/* Tool cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
        {tools.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`relative rounded-lg p-6 flex flex-col gap-4 transition-all overflow-hidden ${
              t.status === "live"
                ? "bg-[#2a1a4a] border-2 border-[#8800ff]/60 hover:border-[#8800ff]"
                : "bg-[#353739] border border-white/8 hover:border-white/20"
            }`}
          >
            {/* Live badge */}
            {t.status === "live" && (
              <div className="absolute top-0 right-0 bg-[#8800ff] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg font-circular tracking-wide">
                LIVE
              </div>
            )}
 
            {/* Icon + name */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  t.status === "live" ? "bg-[#8800ff]" : "bg-white/8"
                }`}
              >
                <div className={t.status === "live" ? "text-white" : "text-white/30"}>
                  {t.icon}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-circular">{t.name}</h4>
                <p
                  className={`text-[11px] font-circular ${
                    t.status === "live" ? "text-[#bb66ff]" : "text-white/30"
                  }`}
                >
                  {t.tagline}
                </p>
              </div>
            </div>
 
            {/* Description */}
            <p
              className={`text-xs leading-relaxed flex-1 font-circular ${
                t.status === "live" ? "text-white/50" : "text-white/30"
              }`}
            >
              {t.desc}
            </p>
 
            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/25 bg-white/5 px-2 py-0.5 rounded-full font-circular">
                {t.platform}
              </span>
 
              {t.status === "live" ? (
                <a
                  href={t.href}
                  className="text-[11px] text-[#bb66ff] flex items-center gap-1 hover:gap-2 transition-all font-circular"
                >
                  {t.cta} <ArrowRight className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-[10px] text-amber-400/60 font-circular">
                  Coming soon
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
 
      {/* Bottom note */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-xs text-white/20 font-circular pb-4"
      >
        More tools shipping throughout 2025 — follow along as we build in public.
      </motion.p>
 
    </div>
  </section>
);