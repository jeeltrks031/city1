"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-16">
        <h2 className="text-4xl font-serif text-[#BF843D] mb-10">
          Location Advantages
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full h-[400px] lg:h-[100%] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=City%20One%20Panache&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>

          <div>
            <h3 className="text-4xl font-serif text-gray-800 mb-6">
              Connectivity
            </h3>

            <div className="space-y-2">
              {data.map((section, index) => (
                <div key={index} className="border-b border-gray-400">
                  <button
                    onClick={() => setActive(active === index ? -1 : index)}
                    className={`w-full cursor-pointer flex justify-between items-center py-2 text-left transition ${
                      active === index ? "px-4" : "px-2"
                    }`}
                  >
                    <span className="text-lg text-gray-800">
                      {section.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform text-black ${
                        active === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === index ? " py-3 px-6" : "max-h-0"
                    }`}
                  >
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 text-sm text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          {item.name}
                        </div>
                        <span>{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
