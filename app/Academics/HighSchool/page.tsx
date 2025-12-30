"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "High School",
    content: [
      "Our High School program encompasses Grades 11–12, focusing on advanced academics and preparing students for higher education and career paths.",
      "Students explore specialized subjects in Science, Commerce, and Humanities with a focus on analytical, creative, and leadership skills.",
      "We emphasize holistic development, including critical thinking, problem-solving, and global awareness."
    ]
  },
  {
    title: "Academic Excellence",
    content: [
      "Rigorous curriculum designed to meet national and international standards.",
      "Project-based and inquiry-based learning that nurtures innovation and intellectual curiosity.",
      "Guidance for competitive exams, college applications, and career planning."
    ]
  }
];

const accordions = [
  {
    title: "Enrichment & Extracurricular",
    content: [
      "Leadership Programs: Student Council, Mentorship, and Peer Guidance.",
      "Clubs: Robotics, Coding, Debating, Environmental Studies.",
      "Performing Arts: Theatre, Music, and Dance programs.",
      "Sports: Competitive athletics, team sports, individual coaching.",
      "Global Exposure: Study tours, international projects, and collaborations."
    ]
  }
];

export default function HighSchool() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="High School"
        subtitle="Empowering future leaders and innovators – Grades 11–12"
        image="/images/high-school.jpg"
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
              High School equips students for higher education and life beyond the classroom.
            </h3>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Through a combination of academic rigor, leadership development, and global exposure, our High School program ensures students graduate with the knowledge, skills, and confidence to pursue their ambitions in any field.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
