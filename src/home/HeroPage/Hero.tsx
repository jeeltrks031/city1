"use client";
import React, { useState } from "react";
import heroImg from "../../assest/Desktop_Banner_c72f6992d9.webp";
import logo from "../../assest/logo.svg";
import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div>
      <header
        className={`fixed top-0 w-full z-50 transtion-all duration-500 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src={logo.src} alt="Logo" className="h-10" />
            <button className="">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={heroImg.src}
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
