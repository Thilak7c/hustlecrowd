"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="rounded-lg bg-[#353739] overflow-hidden px-6">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left text-white text-sm font-semibold font-circular py-5 hover:text-[#bb66ff] transition-colors group"
    >
      <span>{question}</span>
      <ChevronDown
        className={`flex-shrink-0 w-6 h-6 p-1 rounded-full bg-[#8800ff]/15 text-[#bb66ff] transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-white/50 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4 pb-5 font-circular">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need any technical knowledge to work with you?",
      a: "Not at all. We handle everything end-to-end — design, development, payment setup, and staff training. You just need to know your products and your customers. We'll handle the rest.",
    },
    {
      q: "Which platforms do you build on?",
      a: "We work with Shopify, WooCommerce, and fully custom stacks depending on your needs. During our discovery call, we'll recommend the best fit for your business size, budget, and future growth plans.",
    },
    {
      q: "Do you support local Malaysian payment gateways?",
      a: "Yes — this is one of our core specialties. We set up FPX, DuitNow QR, GrabPay, Boost, and Billplz as standard. For international brands we also integrate Stripe and PayPal.",
    },
    {
      q: "How long does it really take to go live?",
      a: "Our standard timeline is 4–6 weeks from signed agreement to a live store. Complex enterprise projects can take longer, and we'll always give you a realistic timeline upfront — not a number we can't hit.",
    },
    {
      q: "What happens after the store launches?",
      a: "Every project includes 14–30 days of post-launch support depending on your package. After that, you can take over fully or engage us on an optional monthly maintenance retainer for updates, bug fixes, and performance monitoring.",
    },
    {
      q: "Can you migrate my existing Shopee or Lazada store?",
      a: "Yes. We can migrate your product listings, images, descriptions, and basic customer data from Shopee or Lazada into your new store — saving you hours of manual re-entry.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="font-circular py-6 md:pb-12 md:pt-[120px] bg-dark">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeader
          badge="❓ FAQs"
          title="Questions We Get All the Time"
          subtitle="Still unsure? We've answered the most common ones below — or just reach out directly."
        />

        <div className="flex flex-col gap-3 pb-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.5}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AccordionItem
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;