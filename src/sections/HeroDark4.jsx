import { motion } from "framer-motion";

const HeroDark4 = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="w-full pt-24 md:pt-32 md:pb-2 pb-8 bg-dark relative overflow-hidden">
      <div className="container relative z-10">
        <div className="w-full px-4 grid grid-cols-1">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8800ff]/40 bg-[#8800ff]/10 px-4 py-1.5 text-xs text-[#bb66ff] font-circular"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🛒 Malaysia's E-commerce Development Studio
            </motion.div>

            <motion.h1
              className="mb-5 text-3xl md:text-7xl font-bold text-white font-circular md:leading-[1.2]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              We Build E-commerce Stores <br /> That Actually Sell 🛍️
            </motion.h1>

            <motion.p
              className="mb-12 text-xs md:text-[16px] font-regular text-white/50 font-circular max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              From custom Shopify storefronts to fully bespoke online stores — we design,
              build, and launch high-converting e-commerce experiences for Malaysian brands
              ready to grow online.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circularBold hover:bg-[#9a1aff] transition-colors"
              >
                Start Your Store
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-[100px] border border-white/20 text-white/70 font-circular hover:border-white/40 hover:text-white transition-colors"
              >
                See Our Work
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              className="mt-12 flex items-center gap-6 text-white/30 text-xs font-circular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span>✓ Launched in 4–6 weeks</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Mobile-first design</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Payment gateway ready</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroDark4;