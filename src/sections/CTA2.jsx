
// ════════════════════════════════════════════════
// SECTION 8 — FINAL CTA
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
 

export const CTA2 = () => (
  <section id="contact" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-[#2C2E2F]">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl bg-[#353739] p-12 md:p-20 overflow-hidden text-center shadow-md"
      >
        {/* Soft purple glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-[#8800ff]/10 blur-3xl" />
        </div>
 
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-circular mb-4 leading-tight">
            Your Store Won't Build Itself. 🚀
          </h2>
          <p className="text-white/50 font-circular text-sm md:text-base max-w-md mx-auto mb-10">
            Book a free 30-minute strategy call and find out exactly what it takes to get your brand selling online.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-[100px] bg-[#8800ff] text-white font-circularBold hover:bg-[#9a1aff] transition-colors">
              Book a Free Call
            </button>
            <button className="px-8 py-3.5 rounded-[100px] border border-white/20 text-white/70 font-circular hover:border-white/40 hover:text-white transition-colors">
              See Pricing
            </button>
          </div>
 
          <p className="mt-8 text-xs text-white/25 font-circular">
            ✓ No hard sell &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ Just straight answers
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);