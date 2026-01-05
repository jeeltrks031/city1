// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="bg-white relative">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto text-center"
//       >
//         <div className="flex justify-center mb-6">
//           <img
//             src="https://kalpataruelitus.ondevwebs.com/assets/images/rera.jpeg"
//             alt="RERA QR"
//             className="w-28 h-28 object-contain"
//           />
//         </div>

//         <p className="text-gray-500 text-sm mb-6 font-medium">
//           RERA Registration Number :{" "}
//           <span className="font-semibold text-gray-700">P51800023840</span>
//         </p>

//         <div className="text-sm font-medium text-black mb-6">
//           Terms Of Use | Privacy Policy | Disclaimer
//         </div>

//         <p
//           className="text-gray-400 text-[15px] leading-7 max-w-5xl mx-auto mb-10"
//           style={{ letterSpacing: "1px" }}
//         >
//           Disclaimer : Thank you for visiting our website. We are currently in
//           the process of revising our website in accordance under RERA. We are
//           in the process of updating the website. The content provided on this
//           website is for informational purposes only, and should not be
//           construed as legal advice on any subject matter. Without any
//           limitation or qualification, users hereby agree with this Disclaimer,
//           when accessing or using this website.
//         </p>

//         <div className="text-gray-400 text-sm space-y-1">
//           <p>COPYRIGHTS © 2024</p>
//           <p className="uppercase tracking-wide">Kalpataru Elitus</p>
//         </div>

//         <div className="mt-6 text-sm text-gray-400 mb-6">
//           Developed by{" "}
//           <span className="text-black font-medium">Shashwat Technologies.</span>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center"
        >
          <input
            placeholder="Full Name"
            className="bg-black text-white px-4 py-4 outline-none"
          />
          <input
            placeholder="Mobile Number"
            className="bg-black text-white px-4 py-4 outline-none"
          />
          <input
            placeholder="Email Address"
            className="bg-black text-white px-4 py-4 outline-none"
          />
          <select className="bg-black cursor-pointer text-white px-4 py-4 outline-none">
            <option>Select a Project</option>
            <option>City One</option>
            <option>City Two</option>
          </select>
          <button className="bg-[#c58a3d] text-white py-4 font-medium hover:bg-[#b07835] transition">
            Submit
          </button>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-[#c58a3d] font-serif text-lg mb-6">
            GET IN TOUCH
          </h4>
          <h3 className="font-serif text-2xl mb-3">HEAD OFFICE</h3>
          <p className="text-sm leading-6 mb-6">
            Adjoining the Pune-Bengaluru Highway,<br />
            Ravet, Pune – 412101
          </p>

          <h4 className="text-[#c58a3d] font-serif text-lg mb-2">
            CONTACT US
          </h4>
          <p className="text-sm">✉ sales@city1.co.in</p>
        </motion.div>

        <FooterColumn
          title="QUICK LINKS"
          items={["Home", "About Us", "Projects", "Blogs", "Contact Us", "EMI Calculator"]}
        />

        <FooterColumn
          title="NAVIGATION"
          items={["Careers", "Privacy Policy"]}
        />

        <FooterColumn
          title="MEDIA"
          items={["News / PR", "Media"]}
        />

        <FooterColumn
          title="TYPOLOGY"
          items={[
            "3 BHK Apartments in Ravet",
            "3 Apartments in Pradhikaran",
            "4 BHK Apartments in Pradhikaran",
            "Upcoming Project in PCMC",
            "Ongoing Project in PCMC",
            "Completed Project in PCMC",
          ]}
        />
      </div>

      <div className="text-center text-sm text-gray-500 py-6 mt-10">
        © {new Date().getFullYear()} City One. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h4 className="font-serif text-lg mb-6">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#c58a3d] cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
