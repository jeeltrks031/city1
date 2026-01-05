// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";

// type GalleryData = {
//   [key: string]: string[];
// };

// const galleryData: GalleryData = {
//   Interior: [
//     "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
//     "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
//   ],
//   Exterior: ["https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png"],
//   "Floor Plan": [
//     "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
//     "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
//   ],
//   Walkthrough: ["https://api.city1.co.in/uploads/2bhk_a389be76d9.png"],
// };

// const tabs = Object.keys(galleryData);

// const Gallery = () => {
//   const [activeTab, setActiveTab] = useState("Interior");
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const images = galleryData[activeTab];

//   const nextImage = () => {
//     if (activeIndex === null) return;
//     setActiveIndex((prev) => (prev! + 1) % images.length);
//   };

//   const prevImage = () => {
//     if (activeIndex === null) return;
//     setActiveIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
//   };

//   return (
//     <section className="bg-white py-14">
//       <div className="max-w-6xl mx-auto px-4 lg:px-16">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-5xl font-serif text-[#BF843D] mb-12"
//         >
//           Gallery
//         </motion.h2>

//         {/* TABS */}
//         <div className="flex gap-10 mb-10 border-b border-gray-200">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-3 cursor-pointer relative transition ${
//                 activeTab === tab
//                   ? "text-[#BF843D] font-medium"
//                   : "text-gray-500"
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#BF843D]" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative group cursor-pointer overflow-hidden"
//               onClick={() => setActiveIndex(index)}
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* HOVER OVERLAY */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
//                   <Plus className="text-white w-6 h-6" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* LIGHTBOX */}
//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
//           >
//             <button
//               onClick={() => setActiveIndex(null)}
//               className="absolute cursor-pointer top-6 right-6 text-white"
//             >
//               <X size={28} />
//             </button>

//             <button
//               onClick={prevImage}
//               className="absolute cursor-pointer left-6 text-white"
//             >
//               <ChevronLeft size={40} />
//             </button>

//             {/* IMAGE */}
//             <motion.img
//               key={activeIndex}
//               src={images[activeIndex]}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="max-h-[85vh] max-w-[90vw] object-contain"
//             />

//             {/* NEXT */}
//             <button
//               onClick={nextImage}
//               className="absolute cursor-pointer right-6 text-white"
//             >
//               <ChevronRight size={40} />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";

type GalleryData = {
  [key: string]: string[];
};

const galleryData: GalleryData = {
  Interior: [
    "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
  ],
  Exterior: [
    "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
  ],
  "Floor Plan": [
    "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
  ],
  Walkthrough: [
    "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
  ],
};

const tabs = Object.keys(galleryData);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Interior");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = galleryData[activeTab];

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 lg:px-16">
        {/* TITLE */}
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-serif text-[#BF843D] mb-12"
        >
          Gallery
        </motion.h2>

        {/* TABS */}
        <div className="flex gap-10 mb-14 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 relative transition ${
                activeTab === tab
                  ? "text-[#BF843D] font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#BF843D]" />
              )}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                  <Plus className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </button>

            {/* PREV */}
            <button onClick={prevImage} className="absolute left-6 text-white">
              <ChevronLeft size={40} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />

            {/* NEXT */}
            <button onClick={nextImage} className="absolute right-6 text-white">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
