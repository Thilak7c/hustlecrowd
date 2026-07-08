"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaRocket, FaMobileAlt } from "react-icons/fa";

// The fadeIn variant is perfect for staggered animation.
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// New variant for the section title (simple fade-in/slide-up)
const titleFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Cards = () => {
  const services = [
    {
      title: "High-Converting Landing Pages",
      details: "Rapidly deploy powerful, lead-generating landing pages and marketing websites to capture customers.",
      icon: <FaRocket />
    },
    {
      title: "Launch E-commerce Stores",
      details: "Full-stack digital storefronts engineered for sales, payments, and inventory management.",
      icon: <FaShoppingCart />
    },
    {
      title: "Custom Mobile Applications",
      details: "Native and cross-platform mobile apps for iOS and Android to build your customer base on the go.",
      icon: <FaMobileAlt />
    },
  ];
    return (
      <section id="services" className="font-circular py-6 md:pb-12 md:pt-[120px] lg:pb-[0px] bg-[#2C2E2F]">
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Section Title */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={titleFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-circular text-white">
              Digital Solutions to Launch and Scale
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-50 mt-2 max-w-2xl mx-auto">
              Empowering early-stage startups with the essential technology needed to secure funding, drive sales, and grow their user base.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-2 md:-mx-4 pb-8 gap-4 md:gap-0">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    );
}

export default Cards
 
const ServiceCard = ({ icon, title, details, index }) => {
  return (
    <motion.div
      className="w-full px-4 md:w-1/2 lg:w-1/3"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-6 rounded-lg bg-[#353739] p-6 shadow-md hover:shadow-lg h-full flex flex-col">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8800ff] flex-shrink-0">
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        <h4 className="mb-2 text-base md:text-lg font-semibold text-white">{title}</h4>
        <p className="text-white text-opacity-50 flex-grow text-xs md:text-sm leading-relaxed">{details}</p>
      </div>
    </motion.div>
  );
};