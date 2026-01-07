"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Retail",
    items: [
      { name: "D Mart", distance: "650 Mtr" },
      { name: "Reliance Smart", distance: "2.5 Km" },
      { name: "Big Bazar", distance: "5.5 Km" },
    ],
  },
  {
    title: "Restaurants",
    items: [
      { name: "Cafe Coffee Day", distance: "2 Km" },
      { name: "Domino’s", distance: "3 Km" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { name: "Mulund Railway Station", distance: "4 Km" },
      { name: "Eastern Express Highway", distance: "2 Km" },
    ],
  },
  {
    title: "Recreation",
    items: [
      { name: "Joggers Park", distance: "1.5 Km" },
      { name: "Mall", distance: "3 Km" },
    ],
  },
  {
    title: "Hospitals",
    items: [
      { name: "Fortis Hospital", distance: "3 Km" },
      { name: "Hira Mongi Hospital", distance: "2 Km" },
    ],
  },
  {
    title: "Colleges & Schools",
    items: [
      { name: "DAV School", distance: "2 Km" },
      { name: "Kelkar College", distance: "4 Km" },
    ],
  },
  {
    title: "Banks",
    items: [
      { name: "HDFC Bank", distance: "1 Km" },
      { name: "SBI", distance: "1.5 Km" },
    ],
  },
  {
    title: "Other",
    items: [{ name: "Police Station", distance: "2 Km" }],
  },
];

const Location = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section
      className=" py-20"
      style={{
        background:
          "linear-gradient(180deg,#fff -1%,hsla(0,0%,100%,0) 36.54%,#fff 74.47%),url(webpack:///mini-css-extract-plugin/_next/static/media/bg.dcc56c30.png) #d3d3d3 -182.857px 0 /140.101% 75.655% no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:text-[49px] text-[30px] text-[#BF843D] mb-10 text-center lg:text-left"
          style={{ fontWeight: "400" }}
        >
          Location Advantages
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
          <div className="w-full h-[400px] lg:h-[100%] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=City%20One%20Panache&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h3
              className="text-[36px] lg:text-[40px] text-center lg:text-left font-serif text-gray-900 mb-3"
              style={{ fontWeight: "400", lineHeight: "55px" }}
            >
              Connectivity
            </h3>

            <div className="space-y-2">
              {data.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden border-b border-black"
                >
                  <button
                    onClick={() => setActive(active === index ? -1 : index)}
                    className={`w-full cursor-pointer flex justify-between items-center py-2 text-left transition ${active === index ? "" : ""
                      }`}
                  >
                    <span
                      className="text-[21px] text-[#333]"
                      style={{ fontWeight: "400", lineHeight: "31px" }}
                    >
                      {section.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform text-black ${active === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${active === index ? "py-3 px-5" : "max-h-0"
                      }`}
                  >
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 text-sm text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span
                            className="text-[17px]"
                            style={{ fontWeight: "400" }}
                          >
                            {" "}
                            {item.name}
                          </span>
                        </div>
                        <span
                          className="text-[17px]"
                          style={{ fontWeight: "400" }}
                        >
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

// components/Location.tsx
// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, MapPin } from "lucide-react";

// const data = [
//   {
//     title: "Retail",
//     items: [
//       { name: "D Mart", distance: "650 Mtr" },
//       { name: "Reliance Smart", distance: "2.5 Km" },
//       { name: "Big Bazar", distance: "5.5 Km" },
//     ],
//   },
//   {
//     title: "Restaurants",
//     items: [
//       { name: "Cafe Coffee Day", distance: "2 Km" },
//       { name: "Domino’s", distance: "3 Km" },
//     ],
//   },
//   {
//     title: "Connectivity",
//     items: [
//       { name: "Mulund Railway Station", distance: "4 Km" },
//       { name: "Eastern Express Highway", distance: "2 Km" },
//     ],
//   },
//   {
//     title: "Recreation",
//     items: [
//       { name: "Joggers Park", distance: "1.5 Km" },
//       { name: "Mall", distance: "3 Km" },
//     ],
//   },
//   {
//     title: "Hospitals",
//     items: [
//       { name: "Fortis Hospital", distance: "3 Km" },
//       { name: "Hira Mongi Hospital", distance: "2 Km" },
//     ],
//   },
//   {
//     title: "Colleges & Schools",
//     items: [
//       { name: "DAV School", distance: "2 Km" },
//       { name: "Kelkar College", distance: "4 Km" },
//     ],
//   },
//   {
//     title: "Banks",
//     items: [
//       { name: "HDFC Bank", distance: "1 Km" },
//       { name: "SBI", distance: "1.5 Km" },
//     ],
//   },
//   {
//     title: "Other",
//     items: [{ name: "Police Station", distance: "2 Km" }],
//   },
// ];

// const Location = () => {
//   const [active, setActive] = useState<number | null>(null);

//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-serif text-[#BF843D] text-center mb-16"
//         >
//           Location Advantages
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="order-2 lg:order-1"
//           >
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.732595888397!2d72.941246!3d19.072829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5b8e5b8e5%3A0x8e5b8e5b8e5b8e5!2sMulund%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1634567890123"
//                 width="100%"
//                 height="100%"
//                 loading="lazy"
//                 className="border-0 transition-all duration-1000"
//                 allowFullScreen
//               />
//             </div>
//           </motion.div>

//           {/* Accordion List */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="order-1 lg:order-2"
//           >
//             <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10">
//               Connectivity
//             </h3>

//             <div className="space-y-4">
//               {data.map((section, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//                 >
//                   {/* Header */}
//                   <button
//                     onClick={() => setActive(active === index ? null : index)}
//                     className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors"
//                   >
//                     <span className="text-xl font-semibold text-gray-800">
//                       {section.title}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: active === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ChevronDown className="w-6 h-6 text-gray-600" />
//                     </motion.div>
//                   </button>

//                   {/* Content */}
//                   <AnimatePresence>
//                     {active === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 pb-6 pt-2 space-y-4">
//                           {section.items.map((item, i) => (
//                             <motion.div
//                               key={i}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: i * 0.1 }}
//                               className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
//                             >
//                               <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
//                                   <MapPin className="w-5 h-5 text-orange-600" />
//                                 </div>
//                                 <span className="text-gray-700 font-medium">
//                                   {item.name}
//                                 </span>
//                               </div>
//                               <span className="text-orange-600 font-semibold">
//                                 {item.distance}
//                               </span>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;
