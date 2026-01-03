"use client";

import React from "react";
import Image from "next/image";
import highlightImg from "../../assest/3bhk_1ad1b61ef6.webp";

const highlights = [
  "A breath of fresh air in the city of Mulund brings healthy living.",
  "All equipped with open spaces, cross ventilation, and fantastic views.",
  "Elitus Residence is a treasure that you will cherish for a lifetime.",
  "It is planned well and is built with all modern amenities and facilities.",
  "It offers 24X7 security service to facilitate the needs of the residents.",
  "Kalpataru Elitus is covered with panoramic greenery and true nature.",
  "Spread across 3.79 acres of land with 3 tall towers of 38 storeys.",
  "Well equipped with all modern amenities.",
  "Thoughtfully designed to cater to the needs of the residents.",
  "Brings opulent and super-spacious residences.",
  "Luxury address where you get a high-end life in a trendy metropolis.",
  "Kalpataru Elitus brings Opulent and Super-spacious residences.",
];

const Highlight = () => {
  return (
    <section className="relative bg-[#f4f4f2] py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#bbb_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-14 animate-fade-down">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#BF843D] tracking-wide">
            HIGHLIGHTS
          </h2>
          <div className="w-12 h-[2px] bg-amber-800 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[290px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-left">
            <Image
              src={highlightImg}
              alt="Project Highlights"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="border border-gray-300 rounded-2xl overflow-hidden animate-fade-right">
            {highlights.map((text, index) => (
              <div
                key={index}
                className="px-4 py-3 text-sm sm:text-[14px] text-gray-700 border-b border-gray-300 last:border-none transition-colors"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-left {
          animation: fadeLeft 0.9s ease-out forwards;
        }
        .animate-fade-right {
          animation: fadeRight 0.9s ease-out forwards;
        }
        .animate-fade-down {
          animation: fadeDown 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Highlight;
