"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "ABC Public School shaped my discipline and curiosity. The foundation I received here still guides my decisions today.",
    name: "Rohit Sharma",
    meta: "Alumnus, Class of 2015 • IIT Delhi",
    image: "/testimonials/rohit.jpg",
  },
  {
    quote:
      "As a parent, I value the balance between academics and character-building. This school delivers both with consistency.",
    name: "Anita Verma",
    meta: "Parent of Class VIII Student",
    image: "/testimonials/anita.jpg",
  },
  {
    quote:
      "The confidence to speak, think, and lead — this is where it began for me.",
    name: "Neha Gupta",
    meta: "Alumna • Software Engineer",
    image: "/testimonials/neha.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* SECTION HEADING */}
        <p className="tracking-[0.35em] text-sm font-semibold text-neutral-500 uppercase">
          Voices That Matter
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-black max-w-3xl">
          What Our Students & Parents Say
        </h2>

        {/* SLIDER */}
        <div className="mt-20 relative overflow-hidden">
          <div
            key={index}
            className="transition-opacity duration-700 ease-out opacity-100"
          >
            <blockquote className="max-w-4xl text-2xl sm:text-3xl font-light leading-relaxed text-neutral-800">
              “{t.quote}”
            </blockquote>

            <div className="mt-10 flex items-center gap-6">
              {t.image && (
                <div className="relative w-14 h-14">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div>
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-neutral-500 text-sm mt-1">{t.meta}</p>
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <div className="mt-16 flex gap-10">
            <button
              onClick={prev}
              className="text-sm tracking-widest uppercase font-semibold text-neutral-500 hover:text-black transition"
            >
              ← Previous
            </button>

            <button
              onClick={next}
              className="text-sm tracking-widest uppercase font-semibold text-neutral-500 hover:text-black transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
