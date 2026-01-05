"use client";
import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Telescope,
  Home,
  Flame,
  Users,
  Dumbbell,
  TreePine,
  Sparkles,
  Shield,
  Droplets,
  Baby,
} from "lucide-react";

const Amenities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const amenities = [
    {
      id: 1,
      icon: Telescope,
      title: "Star Gazing Deck",
      color: "bg-[#BF843D]",
    },
    {
      id: 2,
      icon: Home,
      title: "Party Lawn With Buttef Deck",
      color: "bg-[#BF843D]",
    },
    {
      id: 3,
      icon: Flame,
      title: "Barbecue Lounge",
      color: "bg-[#BF843D]",
    },
    {
      id: 4,
      icon: Users,
      title: "Discussion Lounge",
      color: "bg-[#BF843D]",
    },
    {
      id: 5,
      icon: Dumbbell,
      title: "Breezy Gymnasium",
      color: "bg-[#BF843D]",
    },
    {
      id: 6,
      icon: TreePine,
      title: "Zen Garden",
      color: "bg-[#BF843D]",
    },
    {
      id: 7,
      icon: Droplets,
      title: "Swimming Pool",
      color: "bg-[#BF843D]",
    },
    {
      id: 8,
      icon: Baby,
      title: "Kids Play Area",
      color: "bg-[#BF843D]",
    },
    {
      id: 9,
      icon: Shield,
      title: "24/7 Security",
      color: "bg-[#BF843D]",
    },
    {
      id: 10,
      icon: Sparkles,
      title: "Club House",
      color: "bg-[#BF843D]",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto py-16 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-[49px] font-serif text-[#bf843d] text-center mb-16 animate-fadeInDown">
          Amenities
        </h2>

        <div className="relative px-12 md:px-16">
          <button
            onClick={scrollLeft}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border border-gray-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border-[#BF843D] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border border-gray-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
          >
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className="flex-shrink-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group relative flex flex-col items-center">
                  <div className="relative mx-auto w-20 h-20 mb-3">
                    <div
                      className={`absolute inset-0 ${amenity.color} rounded-full `}
                    ></div>

                    <div className="relative flex items-center justify-center h-full">
                      <amenity.icon
                        className="w-12 h-12 md:w-12 md:h-12 text-white transition-all duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h3 className="text-center text-gray-800 text-base md:text-lg font-medium leading-snug px-2 transition-colors group-hover:text-[#BF843D]">
                    {amenity.title}
                  </h3>

                  <div className="mx-auto mt-3 w-0 h-0.5 bg-[#BF843D] transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth scroll behavior */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Amenities;
