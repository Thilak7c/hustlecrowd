import React from "react";
import { motion } from "framer-motion";
import CardSlider from "../components/CardsSlider";

const HeroDark2 = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="w-full pt-40 md:pt-64 pb-24 bg-dark">
      <div className="container">
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-5 text-3xl md:text-6xl font-bold text-white font-circular md:leading-[1.25]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Digital Solutions <br /> For Your Business Growth 🚀 */}
              {/* Solutions to Scale  <br /> Your Business 🚀 */}
              {/* Digital Solutions. <br /> Drive Growth 🚀 */}
              Digital Solutions. <br /> Supercharged Growth 🚀
            </motion.h1>
            <motion.p
              className="mb-12 text-xs md:text-base font-regular text-white text-opacity-70 font-circular"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              We specialize in crafting tailored software solutions to empower businesses of all sizes.
              Our team collaborates closely and delivers cutting-edge software that drives growth and efficiency.
            </motion.p>
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circular"
              >
                Book a call now
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CardSlider products={COMPANIES} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroDark2;

const COMPANIES = [
  {
    id: 1,
    title: "Glumos",
    desc: "Job listing website",
    coverImg: "https://cdn-images-1.medium.com/v2/resize:fit:2400/1*hFe-nYB9KvzOM-RZLzGCEw.png",
    authorName: "John Doe",
    authorImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    authorDesc: "Web Developer",
    url: "https://glumos.netlify.app/",
  },
  {
    id: 2,
    title: "Joey Yap",
    desc: "Job portal",
    coverImg: "https://cdn-images-1.medium.com/v2/resize:fit:1125/1*zlPoysikAN5W5FU7OWzIxg.png",
    authorName: "Jane Doe",
    authorImg: "https://randomuser.me/api/portraits/women/1.jpg",
    authorDesc: "Tech Enthusiast",
    url: "https://joeyyap.com/",
  },
];
