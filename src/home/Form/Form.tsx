"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const Form = ({ isOpen, onClose }: FormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#000] lg:mt-10 text-white rounded-3xl w-full max-w-[600px] h-auto pointer-events-auto shadow-2xl overflow-hidden">
              <div className="relative px-8 pt-8 pb-6 text-center">
                <button
                  onClick={onClose}
                  className="absolute cursor-pointer top-6 right-6 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold tracking-wider"
                >
                  ENQUIRE NOW
                </motion.h2>

                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/70 text-sm mt-3"
                >
                  Please Enter Your Details To Get More Information
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-5">
                {["fullName", "mobile", "email"].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "mobile"
                          ? "tel"
                          : "text"
                      }
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#BF843D] focus:bg-white/15 transition-all duration-300"
                      placeholder={
                        field === "fullName"
                          ? "Enter your full name"
                          : field === "mobile"
                          ? "Enter mobile number"
                          : "Enter email address"
                      }
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#BF843D] hover:bg-[#d89a4e] hover:bg-transparent hover:border hover:border-[#BF843D] hover:text-[#BF843D] text-white font-normal text-[20px] py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Form;
