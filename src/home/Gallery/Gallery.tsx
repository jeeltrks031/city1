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
//   const [mobileIndex, setMobileIndex] = useState(0);

//   const images = galleryData[activeTab];

//   const nextMobile = () => setMobileIndex((prev) => (prev + 1) % images.length);
//   const prevMobile = () =>
//     setMobileIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

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
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-[49px] font-serif text-[#BF843D] mb-8 text-center lg:text-left"
//         >
//           Gallery
//         </motion.h2>

//         {/* TABS */}
//         <div className="flex justify-center lg:justify-start gap-10 mb-10 border-b border-gray-200">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setMobileIndex(0);
//               }}
//               className={`pb-3 cursor-pointer text-[18px] md:text-[20px] relative ${
//                 activeTab === tab
//                   ? "text-[#BF843D] font-medium"
//                   : "text-[#BF843D]"
//               }`}
//               style={{ fontWeight: activeTab === tab ? "bold" : "normal" }}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#BF843D]" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* ✅ MOBILE SLIDER */}
//         <div className="relative md:hidden">
//           <motion.div
//             key={mobileIndex}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//             className="relative overflow-hidden"
//             onClick={() => setActiveIndex(mobileIndex)}
//           >
//             <img
//               src={images[mobileIndex]}
//               className="w-full h-[300px] object-cover"
//             />
//           </motion.div>

//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={prevMobile}
//                 className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-white"
//               >
//                 <ChevronLeft size={32} />
//               </button>
//               <button
//                 onClick={nextMobile}
//                 className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white"
//               >
//                 <ChevronRight size={32} />
//               </button>
//             </>
//           )}
//         </div>

//         {/* ✅ DESKTOP GRID */}
//         <div className="hidden md:grid grid-cols-2 gap-8">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="relative group cursor-pointer overflow-hidden"
//               onClick={() => setActiveIndex(index)}
//             >
//               <img
//                 src={img}
//                 className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
//                   <Plus className="text-white w-6 h-6" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ FULLSCREEN MODAL SLIDER */}
//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
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

//             <motion.img
//               key={activeIndex}
//               src={images[activeIndex]}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className="max-h-[85vh] max-w-[90vw] object-contain"
//             />

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

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type GalleryData = {
  [key: string]: MediaItem[];
};

const galleryData: GalleryData = {
  Interior: [
    {
      type: "image",
      src: "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    },
    {
      type: "image",
      src: "https://api.city1.co.in/uploads/2bhk_a389be76d9.png",
    },
  ],
  Exterior: [
    {
      type: "image",
      src: "https://api.city1.co.in/uploads/1bhk_20ff5a10d2.png",
    },
  ],
  "Floor Plan": [
    {
      type: "image",
      src: "https://city1.co.in/_next/image?url=https%3A%2F%2Fapi.city1.co.in%2Fuploads%2F3_cbc2e1e44a.jpg&w=1920&q=75",
    },
    {
      type: "image",
      src: "https://city1.co.in/_next/image?url=https%3A%2F%2Fapi.city1.co.in%2Fuploads%2F5_76accad941.jpg&w=1920&q=75",
    },
  ],
  Walkthrough: [
    {
      type: "video",
      src: "https://api.city1.co.in/uploads/City_One_Panache_M_Walkthrough_e7abfb2487.mp4",
    },
  ],
};

const tabs = Object.keys(galleryData);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Interior");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const items = galleryData[activeTab];
  const isVideo = items[mobileIndex]?.type === "video";

  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % items.length);

  const prevMobile = () =>
    setMobileIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const nextItem = () => setActiveIndex((prev) => (prev! + 1) % items.length);

  const prevItem = () =>
    setActiveIndex((prev) => (prev! === 0 ? items.length - 1 : prev! - 1));

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[49px] font-serif text-[#BF843D] mb-8"
        >
          Gallery
        </motion.h2>

        {/* TABS */}
        <div className="flex gap-10 mb-10 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileIndex(0);
              }}
              className={`pb-3 cursor-pointer relative text-[18px] ${
                activeTab === tab
                  ? "font-bold text-[#BF843D]"
                  : "text-[#BF843D]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BF843D]" />
              )}
            </button>
          ))}
        </div>

        {/* ✅ MOBILE VIEW */}
        <div className="relative md:hidden">
          <motion.div
            key={mobileIndex}
            onClick={() => setActiveIndex(mobileIndex)}
            className="cursor-pointer"
          >
            {isVideo ? (
              <video
                src={items[mobileIndex].src}
                className="w-full h-[300px] object-cover"
                muted
                playsInline
              />
            ) : (
              <img
                src={items[mobileIndex].src}
                className="w-full h-[300px] object-cover"
              />
            )}
          </motion.div>

          {items.length > 1 && (
            <>
              <button
                onClick={prevMobile}
                className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextMobile}
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setActiveIndex(index)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-[420px] object-cover"
                  muted
                />
              ) : (
                <img
                  src={item.src}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                />
              )}

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                  <Plus className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute cursor-pointer top-6 right-6 text-white"
            >
              <X size={28} />
            </button>

            <button onClick={prevItem} className="absolute cursor-pointer left-6 text-white">
              <ChevronLeft size={40} />
            </button>

            {items[activeIndex].type === "video" ? (
              <video
                src={items[activeIndex].src}
                controls
                autoPlay
                className="max-h-[85vh] max-w-[90vw]"
              />
            ) : (
              <motion.img
                src={items[activeIndex].src}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
            )}

            <button onClick={nextItem} className="absolute cursor-pointer right-6 text-white">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
