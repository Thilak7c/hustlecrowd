import { motion } from "framer-motion";

const HeroDark3 = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="w-full pt-40 md:pt-52 md:pb-2 pb-8 bg-dark relative overflow-hidden">
      <div className="container relative z-10">
        <div className="w-full px-4 grid grid-cols-1">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-5 text-3xl md:text-7xl font-bold text-white font-circular md:leading-[1.25]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Digital Solutions to Scale <br/> Your Business 🚀
            </motion.h1>
            <motion.p
              className="mb-12 text-xs md:text-[16px] font-regular text-white text-opacity-50 font-circular max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Specializing in crafting tailored software solutions to empower startups and SMEs. The team collaborates <br/> closely and delivers cutting-edge software that drives growth and efficiency.
            </motion.p>
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circularBold"
              >
                Book a call now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroDark3;