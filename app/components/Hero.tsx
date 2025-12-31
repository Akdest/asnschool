"use client";

import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Atom } from "lucide-react";

const media = ["/images/asn-intro.mp4"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Background */}
      {media.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Shapes (hidden on small screens) */}
      <div className="hidden lg:block absolute top-24 left-16 w-32 h-32 border border-white/20 animate-slow-spin"></div>
      <div className="hidden xl:block absolute bottom-32 right-24 w-40 h-40 rounded-full border border-white/15 animate-float"></div>

      {/* Icons (only md+) */}
      <GraduationCap className="hidden md:block absolute top-20 right-32 text-white/20 animate-float" size={44} />
      <BookOpen className="hidden md:block absolute bottom-40 left-24 text-white/20 animate-float-delayed" size={40} />
      <Atom className="hidden lg:block absolute top-1/2 left-12 text-white/20" size={34} />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[100svh]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
          <div className="max-w-4xl">

            {/* Heading */}
            <h1
              className="
                text-white font-semibold
                text-[2.4rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]
                leading-tight
                tracking-wide
                mb-6 sm:mb-8
                animate-slide-up
              "
            >
              ASN PUBLIC SCHOOL
            </h1>

            {/* Divider */}
            <div className="w-24 sm:w-32 lg:w-36 h-[2px] bg-white mb-6 sm:mb-8 animate-expand"></div>

            {/* Tagline */}
            <p
              className="
                text-gray-200
                text-base sm:text-lg md:text-xl lg:text-2xl
                leading-relaxed
                mb-8 sm:mb-10 lg:mb-12
                max-w-3xl
                animate-slide-up delay-200
              "
            >
              Shaping Minds. Building Futures.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up delay-300">
              <button
                className="
                  px-8 sm:px-10 py-3 sm:py-4
                  bg-white text-black
                  text-sm sm:text-base
                  font-medium uppercase tracking-wider
                  transition-all duration-300
                  hover:translate-y-[-2px]
                  hover:shadow-xl
                "
              >
                Admissions
              </button>

              <button
                className="
                  px-8 sm:px-10 py-3 sm:py-4
                  border-2 border-white
                  text-white
                  text-sm sm:text-base
                  font-medium uppercase tracking-wider
                  transition-all duration-300
                  hover:bg-white hover:text-black
                "
              >
                About the School
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll cue (desktop only) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase">
        Scroll
        <div className="w-px h-10 bg-white/50 mx-auto mt-3 animate-scroll"></div>
      </div>
    </section>
  );
}
