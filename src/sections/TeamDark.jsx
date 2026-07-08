import React from 'react';
import { motion } from 'framer-motion';

const TeamDark = ({ items }) => {
  return (
    <section id="team" className="w-full bg-dark md:pt-32 pt-0 pb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:py-16 py-8 text-[36px] font-bold text-white font-circular md:leading-[1.25]">
          Meet The Team
        </h1>

        <div className="flex justify-center">
          <div className="place-content-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 text-black">
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="blank"
                className="max-w-[300px] bg-[#353739] hover:cursor-pointer rounded-xl overflow-hidden drop-shadow-md hover:drop-shadow-lg font-circular mb-1 mx-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  className="h-64 w-full object-cover min-w-[300px]"
                  src={item.coverImg}
                  alt={item.title}
                />
                <div className="p-8">
                  <h3 className="text-2xl text-white my-1">{item.title}</h3>
                  <p className="text-white text-opacity-50 text-xl">{item.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDark;
