// "use client";
// import React, { useState } from "react";
// import heroImg from "../../assest/Desktop_Banner_c72f6992d9.webp";
// import logo from "../../assest/logo.svg";
// import { motion } from "framer-motion";
// import { ChevronDown, Menu } from "lucide-react";

// const Hero = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   return (
//     <div>
//       <header
//         className={`fixed top-0 w-full z-50 transtion-all duration-500 ${
//           isScrolled
//             ? "bg-background/95 backdrop-blur-md shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-6xl container mx-auto px-4 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <img src={logo.src} alt="Logo" className="h-10" />
//             <button className="cursor-pointer">
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </header>

//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       >
//         <div className="absolute inset-0">
//           <img src={heroImg.src} alt="" className="w-full h-full" />
//         </div>

//         <div className="absolute inset-0 bg-black/20" />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
//         >
//           <motion.a
//             href="#about"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors"
//           >
//             <span className="text-xs tracking-widest uppercase">Scroll</span>
//             <ChevronDown className="w-6 h-6" />
//           </motion.a>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

"use client";
import React, { useEffect, useState } from "react";
import heroImg from "../../assest/Desktop_Banner_c72f6992d9.webp";
import logo from "../../assest/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  "Home",
  "About Us",
  "Project",
  "Career",
  "Channel Partner",
  "NRI Corner",
  "Contact Us",
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled more than 10px
      const shouldChange = window.scrollY > 10;
      if (shouldChange !== isScrolled) {
        setIsScrolled(shouldChange);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-15">
            <img src={logo.src} alt="Logo" className="h-10" />
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white cursor-pointer"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src={heroImg.src} alt="" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-black/30" />

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
            className="flex flex-col items-center gap-2 text-white"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </section>

      {/* SIDEBAR MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            {/* MENU PANEL */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ opacity: 0.5 }}
              className="fixed top-0 right-0 w-full sm:w-[300px] h-full z-50 bg-gradient-to-b from-[#0b1623] to-[#05080d] text-white px-10 py-10"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute cursor-pointer top-6 right-6 text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <img src={logo.src} alt="Logo" className="h-12 mb-14" />

              {/* MENU ITEMS */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="space-y-6"
              >
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="text-[16px] tracking-widest uppercase cursor-pointer hover:text-primary transition"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
