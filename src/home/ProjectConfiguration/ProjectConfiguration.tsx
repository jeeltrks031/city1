"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img4bhk from "../../assest/3bhk_1ad1b61ef6.webp";
import img3bhk from "../../assest/4bhk_5ce6242fe5.png";

const configurations = [
  {
    title: "3 BHK",
    area: "1383 sq. ft., 1553 sq. ft.",
    image: img3bhk,
  },
  {
    title: "4 BHK",
    area: "1870 Sq. Ft.",
    image: img4bhk,
  },
];

const ProjectConfiguration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[49px] text-[#BF843D] mb-16"
          style={{ fontWeight: "400" }}
        >
          Project Configuration
        </motion.h2>

        <div className="flex md:flex-row flex-col gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-10 md:w-1/2 md:items-center"
          >
            {configurations.map((config, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`cursor-pointer transition-all duration-300 ${activeIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-[42px] font-serif text-gray-800 mb-3">
                  {config.title}
                </h3>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-[21px] text-gray-600 mb-5" style={{ fontWeight: "400", lineHeight: "28px" }}>
                        {config.area}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-[#BF843D] text-white text-[16px] font-normal tracking-wide"
                        style={{ fontWeight: "400", lineHeight: "24px" }}
                      >
                        Know More
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  layout
                  className={`mt-10 h-[1px] ${activeIndex === index ? "bg-[#BF843D]" : "bg-gray-200"
                    }`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                // initial={{ opacity: 0, scale: 1.05 }}
                // animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0 }}
                // transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={configurations[activeIndex].image}
                  alt={configurations[activeIndex].title}
                  fill
                  priority
                  className="object-cover shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectConfiguration;
