"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Primary School",
    content: [
      "Our Primary School program covers Grades 1–5, focusing on building a strong academic foundation while nurturing creativity and character.",
      "We emphasize critical thinking, problem-solving, and collaborative learning, ensuring students develop confidence and curiosity.",
      "Teachers create a supportive environment that balances academics, arts, sports, and social-emotional learning."
    ]
  },
  {
    title: "Learning Approach",
    content: [
      "Integrated curriculum covering core subjects: Mathematics, Language Arts, Science, and Social Studies.",
      "Project-based learning and hands-on experiments to encourage exploration.",
      "Regular assessments and feedback to support individual learning paths."
    ]
  }
];

const accordions = [
  {
    title: "Activities & Enrichment",
    content: [
      "Creative Arts: Music, Visual Arts, Drama, and Dance.",
      "STEM Projects: Robotics, Coding, and Science Experiments.",
      "Sports & Athletics: Team games, physical fitness, and coordination.",
      "Clubs & Societies: Debate, Quiz, and Environmental awareness.",
      "Field Trips & Experiential Learning: Museums, nature trails, and science centers."
    ]
  }
];

export default function PrimarySchool() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="Primary School"
        subtitle="Nurturing curiosity and confidence from Grade 1–5"
        image="/images/primary-school.jpg"
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
              Primary education shapes the foundation for lifelong learning and curiosity.
            </h3>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Our Primary School program equips students with knowledge, skills, and confidence, fostering a love for learning and exploration from the very first years.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
