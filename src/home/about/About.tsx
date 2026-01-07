"use client";
import React, { useEffect, useRef, useState } from "react";
import sideImg from "../../assest/Featured_Image_754c864e70.webp";

const stats = [
  { number: 57, suffix: "", label: "Limited Edition Suites" },
  {
    number: 20,
    suffix: "",
    label: "Storey Grand Colossal Tower In Pradhikaran",
  },
  { number: 3, suffix: "", label: "Suites Per Floor" },
  { number: 1, suffix: "+", label: "Private Elevators For Every Suite" },
  { number: 3, suffix: "", label: "Side Open Views Of Suites" },
  { number: 270, suffix: "", label: "Degree Views In Every Suite" },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <div className="flex md:flex-row flex-col gap-14 items-center">
          <div className="animate-fade-left">
            <h2
              className="text-[49px] text-[#BF843D] mb-3"
              style={{ fontWeight: "500" }}
            >
              About Panache
            </h2>

            <p
              className="text-gray-700 text-[13px] max-w-6xl mb-3"
              style={{
                letterSpacing: "0.5px",
                lineHeight: "18px",
                fontWeight: "400",
              }}
            >
              A New Face Of Luxury In Pradhikaran Is Here To Change History. An
              Ultra-Luxurious Project Of 3 & 4 BHK Sky Suites, This Glamorous
              Living Will Let You Experience The Grandeur Like Never Before.
              With Stunning 270-Degree Open Views And 3-Side Open Suites, This
              Grand Colossal Tower In Pradhikaran Is A Landmark Of Luxury. The
              Dramatic Interiors, Star-Studded Facilities, And Exquisite
              Amenities Spell Of Grandiose. Live A Life Of Extravagance In
              Pradhikaran!
            </p>

            {/* STATS */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-10 md:text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative pl-6 animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >

                  <CountUp
                    value={stat.number}
                    suffix={stat.suffix}
                    start={startCount}
                  />

                  <p className="text-[sm] text-gray-700 max-w-[200px]">
                    {stat.label}
                  </p>

                </div>
              ))}
            </div> */}

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-10 md:text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative pl-6 animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {index % 3 !== 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-[2px] bg-[#BF843D] opacity-30"></div>
                  )}

                  <CountUp
                    value={stat.number}
                    suffix={stat.suffix}
                    start={startCount}
                  />

                  <p className="text-[sm] text-gray-700 max-w-[200px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div className="w-[100%] md:w-[50%] relative sm:h-[auto] lg:h-[auto] animate-fade-right">
            <img
              src={sideImg.src}
              alt="Panache Luxury Building"
              // fill
              // priority
              className="object-cover rounded-sm shadow-xl"
            />
          </div> */}

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[400px] lg:mt-10 animate-fade-right">
            <img
              src={sideImg.src}
              alt="Panache Luxury Building"
              className="w-full h-full object-cover rounded-sm shadow-xl"
            />
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
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

/* COUNT UP COMPONENT */
const CountUp = ({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <h3 className="text-[64px] font-serif text-[#BF843D]">
      {count}
      {suffix}
    </h3>
  );
};

export default About;
