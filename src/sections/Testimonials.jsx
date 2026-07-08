
// ════════════════════════════════════════════════
// SECTION 6 — TESTIMONIALS
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

export const Testimonials = () => {
  const reviews = [
    {
      quote:
        "We had zero technical knowledge and were terrified to go online. HustleCrowd made it completely stress-free — they handled everything from design to payment setup. We hit our first RM10k month within 6 weeks of launch.",
      name: "Siti Rahmah",
      role: "Founder, Haus of Raya",
      initials: "SR",
      avatarClass: "bg-purple-900/60 text-purple-300",
    },
    {
      quote:
        "Previously we were just on Shopee. Now we have our own store with proper branding and 40% better margins because we cut out the marketplace fees. The ROI paid for the project in under 3 months.",
      name: "Amir Hazwan",
      role: "CEO, OmniNutrition",
      initials: "AH",
      avatarClass: "bg-teal-900/60 text-teal-300",
    },
    {
      quote:
        "The team understood how Malaysians shop. FPX, DuitNow, even a Malay-language checkout — all there on day one. That local knowledge made a huge difference in our conversion rate.",
      name: "Jenny Lim",
      role: "Co-founder, KraftHaus Bakery",
      initials: "JL",
      avatarClass: "bg-blue-900/60 text-blue-300",
    },
  ];
 
  return (
    <section id="testimonials" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-[#2C2E2F]">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="⭐ Client Stories"
          title="Malaysian Brands, Real Results"
          subtitle="Don't take our word for it — here's what founders say after going live with us."
        />
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-lg bg-[#353739] p-6 shadow-md flex flex-col gap-5 hover:ring-1 hover:ring-[#8800ff]/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
 
              <p className="text-white/55 text-xs md:text-sm leading-relaxed flex-1">
                "{r.quote}"
              </p>
 
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${r.avatarClass}`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};