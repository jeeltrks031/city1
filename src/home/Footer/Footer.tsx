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
            className="bg-black text-[17px] text-white px-4 py-4 outline-none"
          />
          <input
            placeholder="Mobile Number"
            className="bg-black text-[17px] text-white px-4 py-4 outline-none"
          />
          <input
            placeholder="Email Address"
            className="bg-black text-[17px] text-white px-4 py-4 outline-none"
          />
          <select className="bg-black cursor-pointer text-[17px] text-white px-4 py-4 outline-none">
            <option>Select a Project</option>
            <option>City One</option>
            <option>City Two</option>
          </select>
          <button
            className="bg-[#c58a3d] text-[16px] text-white py-4 font-medium hover:bg-[#b07835] transition"
            style={{ fontWeight: "700" }}
          >
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
            className="hover:text-[#c58a3d] text-[15px] cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
