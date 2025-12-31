"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Secondary School",
    content: [
      "Our Secondary School program covers Grades 9–10, focusing on preparing students for higher studies while developing independence and critical thinking.",
      "The curriculum balances academic rigor with creative exploration and leadership opportunities.",
      "Students are encouraged to explore STEM, humanities, arts, and social sciences in depth."
    ]
  },
  {
    title: "Learning Approach",
    content: [
      "Structured curriculum with advanced concepts in Mathematics, Sciences, Languages, and Social Studies.",
      "Emphasis on analytical skills, research-based projects, and collaborative learning.",
      "Assessments and feedback tailored to individual growth and preparation for national and international exams."
    ]
  }
];

const accordions = [
  {
    title: "Extracurricular & Enrichment",
    content: [
      "Clubs: Debate, Science, Coding, Environmental Awareness.",
      "Performing Arts: Music, Drama, and Dance programs.",
      "Sports: Athletics, Team Sports, Individual Coaching.",
      "Community Engagement: Volunteering, Social Service Projects.",
      "Field Trips & Competitions: Science fairs, inter-school competitions, and cultural visits."
    ]
  }
];

export default function SecondarySchool() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="Secondary School"
        subtitle="Building critical thinkers and future leaders – Grades 9–10"
        image="/images/asn-club.jpg"
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
              Secondary education prepares students for the challenges of higher studies and beyond.
            </h3>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Our Secondary School program equips students with critical thinking skills, independence, and confidence. They develop the knowledge, creativity, and leadership necessary for success in higher education and life.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
