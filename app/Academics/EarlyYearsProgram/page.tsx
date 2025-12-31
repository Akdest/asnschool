"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Early Years Program",
    content: [
      "Our Early Years Program lays the foundation for lifelong learning. We focus on holistic development—cognitive, emotional, social, and physical growth.",
      "Children learn through play, exploration, and guided activities that promote curiosity and confidence.",
      "Small class sizes ensure individual attention, fostering a safe, nurturing, and engaging environment."
    ]
  },
  {
    title: "Learning Approach",
    content: [
      "Emphasis on hands-on experiences and discovery-based learning.",
      "Integrated development: language, numeracy, arts, and social skills.",
      "Daily routines encourage independence, responsibility, and collaboration among peers."
    ]
  }
];

const accordions = [
  {
    title: "Activities & Enrichment",
    content: [
      "Creative Arts: Drawing, painting, music, and movement.",
      "Early STEM: Simple experiments and explorations to spark curiosity.",
      "Outdoor Play: Developing motor skills, social interaction, and problem-solving.",
      "Storytelling & Language: Encouraging communication, comprehension, and imagination."
    ]
  }
];

export default function EarlyYearsProgram() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="Early Years Program"
        subtitle="Building strong foundations for young learners"
        image="/images/foundation.jpg"
      />

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-32">

          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex flex-col gap-4">
                <div className="h-[4px] bg-black w-24"></div>
                <h2 className="text-5xl font-extrabold text-black">{section.title}</h2>
                <div className="h-[4px] bg-black w-24"></div>
              </div>
              {section.content.map((p, i) => (
                <p key={i} className="text-lg text-neutral-700 leading-relaxed">{p}</p>
              ))}
            </div>
          ))}

          {accordions.map((accordion, idx) => (
            <div key={idx} className="border-t border-black/20">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full py-4 flex justify-between items-center text-xl font-semibold focus:outline-none"
              >
                {accordion.title}
                {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                {accordion.content.map((item, i) => (
                  <p key={i} className="py-2 text-neutral-700 text-lg">{item}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-black/20 pt-24">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              Every young learner deserves a strong and joyful start to their education.
            </h3>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Our Early Years Program nurtures curiosity, confidence, and a love for learning that forms the foundation for success in later years.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
