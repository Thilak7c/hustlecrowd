"use client";


// ════════════════════════════════════════════════
// SECTION 3 — HOW IT WORKS
// ════════════════════════════════════════════════

 
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
 

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discovery & Strategy Call",
      desc: "We sit down (or hop on a call) to understand your brand, products, target buyers, and what success looks like for your store.",
    },
    {
      number: "02",
      icon: <Layout className="w-6 h-6" />,
      title: "Design & Development",
      desc: "We build your store pixel-perfect and mobile-first — with your payment gateways, product catalogue, and branding fully configured.",
    },
    {
      number: "03",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "QA, Launch & Handover",
      desc: "We test everything, train your team, and go live. You get full ownership plus 30 days of post-launch support so you're never left hanging.",
    },
  ];
 
  return (
    <section id="process" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-dark">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="🗺️ Our Process"
          title={<>From First Call to Live Store<br />in 4–6 Weeks</>}
          subtitle="A battle-tested process built around Malaysian businesses — no fluff, no delays, just a store that ships on time."
        />
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-lg bg-[#353739] p-6 shadow-md overflow-hidden flex flex-col"
            >
              {/* Ghost step number */}
              <span className="absolute top-4 right-5 text-6xl font-bold text-white/[0.04] font-circular select-none leading-none">
                {step.number}
              </span>
 
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8800ff] text-white flex-shrink-0">
                {step.icon}
              </div>
              <h4 className="mb-2 text-base md:text-lg font-semibold text-white">
                {step.title}
              </h4>
              <p className="text-white/50 flex-grow text-xs md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};