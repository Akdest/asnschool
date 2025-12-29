"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Sports & Athletics",
    description:
      "A culture of discipline, teamwork, and resilience built through structured sports and physical education.",
    href: "/student-life/sports",
    type: "image",
    src: "/student-life/sports.jpg",
  },
  {
    title: "Cultural Performances",
    description:
      "Music, dance, and theatre that help students express confidence and creativity.",
    href: "/student-life/culture",
    type: "video",
    src: "/student-life/culture.mp4",
  },
  {
    title: "Clubs & Societies",
    description:
      "Academic, creative, and leadership clubs that nurture curiosity beyond classrooms.",
    href: "/student-life/clubs",
    type: "image",
    src: "/student-life/clubs.jpg",
  },
];

export default function StudentsLife() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* SLIDES WRAPPER */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-screen flex-shrink-0 group"
          >
            {/* MEDIA */}
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
            )}

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/45" />

            {/* STATIC HEADING */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <p className="tracking-[0.35em] text-sm font-semibold text-white/70 uppercase">
                  Student Life
                </p>

                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                  {slide.title}
                </h2>
              </div>
            </div>

           {/* WHITE DESCRIPTION PANEL */}
<div
  className="
    absolute left-0 right-0 bottom-0
    bg-white text-black
    px-6 sm:px-10 lg:px-16
    py-12
    h-[50vh]

    transform translate-y-full
    transition-transform duration-500 ease-out
    group-hover:translate-y-0
  "
>
  <div className="max-w-3xl">
    <h3 className="text-2xl sm:text-3xl font-bold">
      {slide.title}
    </h3>

    <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
      {slide.description}
    </p>

    <Link
      href={slide.href}
      className="inline-block mt-8 font-semibold tracking-wide underline underline-offset-4 hover:opacity-70 focus:outline-none"
    >
      Read More →
    </Link>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-[3px] w-12 transition-all duration-300 focus:outline-none ${
              active === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
