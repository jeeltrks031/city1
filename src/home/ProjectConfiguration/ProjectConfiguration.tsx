"use client";
import React, { useState } from "react";
import Image from "next/image";
import configImg from "../../assest/3bhk_1ad1b61ef6.webp";

const configurations = [
  {
    title: "3 BHK",
    area: "1383 sq. ft., 1553 sq. ft.",
  },
  {
    title: "4 BHK",
    area: "1870 Sq. Ft.",
  },
];

const ProjectConfiguration = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#BF843D] mb-14 animate-fade-down">
          Project Configuration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8 animate-fade-left">
            {configurations.map((config, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 md:text-center lg:text-start ${activeIndex === index ? "opacity-100" : "opacity-60"
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-4">
                  {config.title}
                </h3>


                {activeIndex === index && (
                  <>
                    <p className="text-sm text-gray-600 mb-5">{config.area}</p>
                    <button className="px-3 py-2 bg-[#BF843D] hover:bg-[#BF843D] cursor-pointer text-white text-sm font-medium transition-all">
                      Know More
                    </button>
                  </>
                )}

                <div className="mt-10 h-[1px] bg-[#BF843D] w-full" />
              </div>
            ))}
          </div>

          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] animate-fade-right">
            <Image
              src={configImg}
              alt="Project Configuration"
              fill
              priority
              className="object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
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
          animation: fadeLeft 0.8s ease-out forwards;
        }
        .animate-fade-right {
          animation: fadeRight 0.8s ease-out forwards;
        }
        .animate-fade-down {
          animation: fadeDown 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectConfiguration;
