"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard, FaBoxOpen, FaChartLine, FaMobileAlt, FaBolt } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
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

const Services3 = () => {
  const services = [
    {
      title: "Custom Online Storefronts",
      details: "Bespoke e-commerce stores built from scratch — fully branded, blazing fast, and optimised to convert visitors into buyers.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Payment Gateway Integration",
      details: "Seamless setup of local and global payment options — FPX, DuitNow, Stripe, Billplz, and more — so customers can pay their way.",
      icon: <FaCreditCard />,
    },
    {
      title: "Inventory & Order Management",
      details: "Smart dashboards to track stock, manage orders, handle fulfilment, and never oversell — all in one place.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Mobile Shopping Experience",
      details: "Pixel-perfect, thumb-friendly mobile storefronts that feel as native as an app — because most of your buyers shop on their phones.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Sales Analytics Dashboard",
      details: "Real-time insights into your best-sellers, customer behaviour, cart abandonment, and revenue trends to drive smarter decisions.",
      icon: <FaChartLine />,
    },
    {
      title: "Fast Launch — 4 to 6 Weeks",
      details: "From first call to live store in under 6 weeks. We move fast without cutting corners so you start selling sooner.",
      icon: <FaBolt />,
    },
  ];

  return (
    <section id="services" className="font-circular py-6 md:pb-12 md:pt-[120px] lg:pb-[0px] bg-[#2C2E2F]">
      <div className="max-w-5xl mx-auto px-4">

        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={titleFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-circular text-white">
            Everything Your Online Store Needs
          </h2>
          <p className="text-sm md:text-base text-white/50 mt-2 max-w-2xl mx-auto">
            We handle every layer of your e-commerce build — design, development, payments,
            and post-launch — so you can focus on selling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;

const ServiceCard = ({ icon, title, details, index }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: true, amount: 0.3 }}
    className="rounded-lg bg-[#353739] p-6 shadow-md hover:shadow-lg flex flex-col"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8800ff] flex-shrink-0">
      <div className="text-white text-2xl">{icon}</div>
    </div>
    <h4 className="mb-2 text-base md:text-lg font-semibold text-white">{title}</h4>
    <p className="text-white/50 flex-grow text-xs md:text-sm leading-relaxed">{details}</p>
  </motion.div>
);