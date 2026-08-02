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
// PROBLEM SECTION
// ════════════════════════════════════════════════════════════
export const ProblemSection = () => {
  const stats = [
    {
      value: "73%",
      label: "of Shopify stores carry dead code from apps they already deleted",
    },
    {
      value: "7%",
      label: "drop in conversions for every extra second your store takes to load",
    },
    {
      value: "9+",
      label: "apps the average merchant tries before settling on a final stack",
    },
  ];

  return (
    <section className="font-circular py-6 md:pb-12 md:pt-[120px] bg-[#2C2E2F]">
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
            ⚠️ The Problem
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white font-circular leading-tight mb-4">
            Most Shopify Stores Are{" "}
            <span className="text-[#bb66ff]">Carrying Hidden Weight</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 font-circular max-w-xl mx-auto">
            Every app you install leaves a footprint. Most merchants never clean it up —
            and it quietly costs them speed, rankings, and sales every single day.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-lg bg-[#353739] p-8 text-center"
            >
              <div className="text-5xl font-bold text-[#bb66ff] font-circular mb-3">
                {s.value}
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Story block */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-xl bg-[#353739] border border-[#8800ff]/20 p-7 md:p-10 flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="text-4xl flex-shrink-0">🛒</div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white mb-3">
              The big platforms sell you tools. Nobody fixes what those tools leave behind.
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Shopify's App Store has over 8,000 apps. Merchants install, test, and delete
              dozens of them building their ideal stack. But every install injects JavaScript,
              CSS, and Liquid snippets into your theme. Deleting the app removes it from your
              dashboard —{" "}
              <span className="text-white/80">
                but leaves every line of its code sitting in your theme untouched.
              </span>
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              That dead code loads on every page visit. It slows your store, confuses Google,
              and sometimes breaks features when your theme updates. And it's just one of
              dozens of small, specific problems that{" "}
              <span className="text-white/80">
                no single all-in-one app was built to solve.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
