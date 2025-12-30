"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Inquiry-Based Learning",
    content: [
      "Inquiry-Based Learning (IBL) encourages students to ask questions, explore concepts, and develop critical thinking skills from a young age.",
      "Through hands-on projects, collaborative experiments, and guided discovery, students are actively involved in constructing knowledge rather than passively receiving it.",
      "IBL nurtures curiosity, problem-solving abilities, and independent thinking, preparing learners for future academic and life challenges."
    ]
  },
  {
    title: "Our Approach",
    content: [
      "We design learning experiences that are student-centered, promoting exploration and discussion.",
      "Teachers act as facilitators, guiding students to find answers, test hypotheses, and reflect on their learning.",
      "Assessment is ongoing, focusing on understanding, creativity, and application rather than rote memorization."
    ]
  }
];

const accordions = [
  {
    title: "Sample Activities & Projects",
    content: [
      "Science Experiments: Students formulate questions, conduct experiments, and analyze results.",
      "Math Investigations: Problem-based challenges encouraging reasoning and logical thinking.",
      "Social Studies Inquiry: Exploring local community issues and global topics through research and discussion.",
      "Art & Creativity Projects: Encouraging self-expression while linking to broader academic themes."
    ]
  }
];

export default function InquiryBasedLearning() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="Inquiry-Based Learning"
        subtitle="Empowering students to explore, question, and discover."
        image="/images/inquiry-based.jpg"
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

          {/* Motivational Statement */}
          <div className="border-t border-black/20 pt-24">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              Learning is most powerful when driven by curiosity and guided by purpose.
            </h3>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Our Inquiry-Based Learning program ensures students not only grasp concepts but also develop the confidence and skills to navigate challenges creatively and independently.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
