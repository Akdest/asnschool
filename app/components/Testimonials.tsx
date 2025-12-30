"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "ABC Public School didn’t just teach me subjects — it taught me how to think. That mindset still drives my career today.",
    name: "Rohit Sharma",
    meta: "Alumnus • IIT Delhi",
    image: "/testimonials/rohit.jpg",
  },
  {
    quote:
      "The school’s balance between academics, discipline, and creativity is rare. As a parent, that matters deeply.",
    name: "Anita Verma",
    meta: "Parent • Class VIII",
    image: "/testimonials/anita.jpg",
  },
  {
    quote:
      "Confidence, clarity, and courage — this campus gave me all three.",
    name: "Neha Gupta",
    meta: "Alumna • Software Engineer",
    image: "/testimonials/neha.jpg",
  },
  {
    quote:
      "Teachers here don’t just instruct — they mentor. That difference stays with you.",
    name: "Arjun Mehta",
    meta: "Alumnus • Startup Founder",
    image: "/testimonials/arjun.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto carousel
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <p className="tracking-[0.35em] text-xs font-semibold text-neutral-500 uppercase">
          Testimonials
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-neutral-900 max-w-3xl">
          What Students & Parents Say About Us
        </h2>

        {/* CAROUSEL */}
        <div
          className="mt-24 relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-2"
              >
                <div className="max-w-4xl">
                  <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-neutral-800">
                    “{t.quote}”
                  </blockquote>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-neutral-300">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-neutral-900">
                        {t.name}
                      </p>
                      <p className="text-neutral-500 text-sm mt-1">
                        {t.meta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PROGRESS INDICATORS */}
          <div className="mt-16 flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-[3px] w-12 transition-all duration-500 ${
                  index === i
                    ? "bg-neutral-900"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
