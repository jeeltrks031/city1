"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Telescope,
  Home,
  Flame,
  Users,
  Dumbbell,
  TreePine,
  Droplets,
  Baby,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const amenities = [
  { id: 1, icon: Telescope, title: "Star Gazing Deck" },
  { id: 2, icon: Home, title: "Party Lawn With Buffet Deck" },
  { id: 3, icon: Flame, title: "Barbecue Lounge" },
  { id: 4, icon: Users, title: "Discussion Lounge" },
  { id: 5, icon: Dumbbell, title: "Breezy Gymnasium" },
  { id: 6, icon: TreePine, title: "Zen Garden" },
  { id: 7, icon: Droplets, title: "Infinity Swimming Pool" },
  { id: 8, icon: Baby, title: "Kids Play Area" },
  { id: 9, icon: Shield, title: "24/7 Security" },
  { id: 10, icon: Sparkles, title: "Club House" },
];

const Amenities = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-[49px] font-medium text-[#BF843D] mb-10"
        >
          Amenities
        </motion.h2>

        {/* ARROWS */}
        <button
          onClick={scrollPrev}
          className="absolute cursor-pointer left-4 lg:left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute cursor-pointer right-4 lg:right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4 lg:px-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  {/* Icon */}
                  <div className="relative mx-auto w-28 h-28 mb-8">
                    <motion.div
                      className="absolute inset-0 bg-[#BF843D] rounded-full shadow-xl"
                    />
                    <div className="relative flex items-center justify-center h-full">
                      <amenity.icon className="w-14 h-14 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-[#BF843D] transition">
                    {amenity.title}
                  </h3>

                  <motion.div
                    className="mx-auto mt-4 h-0.5 bg-[#BF843D]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "70%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
