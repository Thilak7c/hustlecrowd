
// ════════════════════════════════════════════════
// SECTION 5 — PRICING
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

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "4,999",
      desc: "Best for new businesses launching their first online store and wanting to validate fast.",
      features: [
        "Up to 50 product listings",
        "1 payment gateway (FPX or Stripe)",
        "Mobile-responsive design",
        "Basic SEO setup",
        "14-day post-launch support",
      ],
      disabled: ["Custom analytics dashboard", "Multi-gateway checkout"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      price: "9,999",
      desc: "For growing brands ready to compete online with a fully custom, conversion-focused experience.",
      features: [
        "Unlimited product listings",
        "All major gateways (FPX, DuitNow, GrabPay, Stripe)",
        "Bespoke UI/UX design",
        "Sales analytics dashboard",
        "Inventory & order management",
        "30-day post-launch support",
        "SEO + performance optimisation",
      ],
      disabled: [],
      cta: "Start Your Store",
      featured: true,
    },
    {
      name: "Enterprise",
      price: null,
      desc: "For established brands with complex requirements — multi-vendor, high volume, or fully bespoke systems.",
      features: [
        "Everything in Growth",
        "Multi-vendor / marketplace setup",
        "ERP / inventory system integration",
        "Dedicated project manager",
        "SLA-backed support retainer",
        "Priority turnaround",
      ],
      disabled: [],
      cta: "Book a Consultation",
      featured: false,
    },
  ];
 
  return (
    <section id="pricing" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-dark">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="💰 Pricing"
          title={<>Transparent Packages.<br />No Hidden Fees.</>}
          subtitle="Every package is a fixed-scope project — you know exactly what you're getting before we start."
        />
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative rounded-lg p-8 flex flex-col gap-6 ${
                plan.featured
                  ? "bg-[#3d1f72] ring-2 ring-[#8800ff]"
                  : "bg-[#353739] shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8800ff] text-white text-xs font-bold px-5 py-1 rounded-full whitespace-nowrap font-circular">
                  Most Popular
                </div>
              )}
 
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 font-circular ${plan.featured ? "text-purple-300" : "text-white/40"}`}>
                  {plan.name}
                </p>
 
                {plan.price ? (
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-lg font-circular mt-1 ${plan.featured ? "text-purple-300" : "text-white/50"}`}>
                      RM
                    </span>
                    <span className="text-4xl font-bold text-white font-circular leading-none">
                      {plan.price}
                    </span>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-white font-circular mb-3">Custom</p>
                )}
 
                <p className={`text-xs leading-relaxed pb-5 border-b ${plan.featured ? "text-purple-200/60 border-[#8800ff]/30" : "text-white/40 border-white/10"}`}>
                  {plan.desc}
                </p>
              </div>
 
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-white">
                    <span className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-400" />
                    </span>
                    {f}
                  </li>
                ))}
                {plan.disabled.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-white/25">
                    <span className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-white/5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white/20" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
 
              <button
                className={`w-full py-3 rounded-[100px] font-circular font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-[#8800ff] text-white hover:bg-[#9a1aff]"
                    : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
 
        <p className="text-center text-xs text-white/25 font-circular pb-8">
          All prices are one-time project fees. Optional monthly maintenance retainers available from RM 299/mo.
        </p>
      </div>
    </section>
  );
};