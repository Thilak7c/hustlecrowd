
// ════════════════════════════════════════════════
// SECTION 4 — PORTFOLIO / OUR WORK
// ════════════════════════════════════════════════

"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Star, MessageSquare, Layout, CheckCircle2 } from "lucide-react";
 
// ─── Shared animation variants (same pattern as your existing sections) ───
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};
 
const titleFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
 
// ─── Reusable section header (matches your pill badge + heading style) ───
const SectionHeader = ({ badge, title, subtitle }) => (
  <motion.div
    className="text-center mb-8 md:mb-12"
    variants={titleFadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
  >
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular">
      {badge}
    </div>
    <h2 className="text-2xl md:text-4xl font-circular font-bold text-white mb-4 leading-tight">
      {title}
    </h2>
    <p className="text-sm md:text-base text-white/50 font-circular max-w-2xl mx-auto">
      {subtitle}
    </p>
  </motion.div>
);

export const Portfolio = () => {
  const projects = [
    {
      tag: "Fashion & Apparel",
      name: "Haus of Raya — Bespoke Clothing",
      desc: "Full Shopify build with size-configurator, FPX + GrabPay checkout, and a lookbook gallery that converts browsers into buyers.",
      platform: "Shopify Plus",
      duration: "5 weeks",
      thumbGradient: "from-purple-950 via-purple-900 to-violet-900",
      accentBar: "bg-[#8800ff]/70",
    },
    {
      tag: "Health & Wellness",
      name: "OmniNutrition — Supplements D2C",
      desc: "Custom WooCommerce build with subscription bundles, Billplz integration, and a loyalty points system to drive repeat purchases.",
      platform: "WooCommerce",
      duration: "6 weeks",
      thumbGradient: "from-blue-950 via-blue-900 to-cyan-900",
      accentBar: "bg-blue-400/70",
    },
    {
      tag: "Food & Beverage",
      name: "KraftHaus Bakery — Artisan Goods",
      desc: "Pre-order system, DuitNow QR checkout, and a mobile-first listing that handles daily stock resets automatically.",
      platform: "Custom Stack",
      duration: "4 weeks",
      thumbGradient: "from-amber-950 via-amber-900 to-orange-900",
      accentBar: "bg-amber-400/70",
    },
  ];
 
  return (
    <section id="work" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-[#2C2E2F]">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="💼 Portfolio"
          title="Stores We've Built That Sell"
          subtitle="Real Malaysian brands. Real results. Each store designed around their customers, their products, and their growth goals."
        />
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-lg bg-[#353739] shadow-md overflow-hidden hover:ring-1 hover:ring-[#8800ff]/50 transition-all flex flex-col"
            >
              {/* Mock thumbnail */}
              <div className={`h-44 bg-gradient-to-br ${p.thumbGradient} flex items-center justify-center p-5`}>
                <div className="w-full bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col gap-2">
                  <div className={`h-2.5 w-3/5 rounded-full ${p.accentBar}`} />
                  <div className="h-1.5 w-2/5 rounded-full bg-white/15" />
                  <div className="grid grid-cols-2 gap-1.5 mt-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-7 rounded bg-white/10" />
                    ))}
                  </div>
                  <div className={`h-6 w-2/5 rounded-md ${p.accentBar} mt-1`} />
                </div>
              </div>
 
              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block mb-3 text-xs text-[#bb66ff] bg-[#8800ff]/10 border border-[#8800ff]/30 px-3 py-1 rounded-full w-fit">
                  {p.tag}
                </span>
                <h4 className="mb-2 text-sm md:text-base font-semibold text-white">{p.name}</h4>
                <p className="text-white/50 flex-grow text-xs leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center gap-4 text-xs text-white/30 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Live & Selling
                  </span>
                  <span>{p.platform}</span>
                  <span>{p.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};