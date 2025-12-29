"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Centered Text */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="
            text-white font-bold
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            tracking-wide mb-4
          ">
            ABC PUBLIC SCHOOL
          </h1>

          <p className="
            text-gray-200
            text-base sm:text-lg md:text-xl lg:text-2xl
            max-w-3xl mx-auto
          ">
            Shaping Minds. Building Futures.
          </p>
        </div>
      </div>
    </section>
  );
}
