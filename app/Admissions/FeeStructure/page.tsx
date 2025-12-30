"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const feeSections = [
  {
    level: "Primary School (Grade 1–5)",
    overview: "Foundation of learning, creativity, and character-building.",
    important: [
      "Tuition: ₹1,20,000 per year",
      "Includes lunch, activities, and basic supplies",
      "School uniform included"
    ],
    details: [
      { title: "Tuition Fee", amount: "₹1,20,000" },
      { title: "Lab & Library", amount: "₹10,000" },
      { title: "Activities & Clubs", amount: "₹5,000" },
      { title: "School Bus", amount: "₹15,000" },
      { title: "Uniform & Books", amount: "₹12,000" }
    ]
  },
  {
    level: "Secondary School (Grade 6–8)",
    overview: "Analytical thinking, exploration, and leadership skills.",
    important: [
      "Tuition: ₹1,50,000 per year",
      "Includes sports, labs, and creative programs"
    ],
    details: [
      { title: "Tuition Fee", amount: "₹1,50,000" },
      { title: "Lab & Library", amount: "₹15,000" },
      { title: "Sports & Activities", amount: "₹10,000" },
      { title: "Bus Facility", amount: "₹15,000" },
      { title: "Books & Materials", amount: "₹15,000" }
    ]
  },
  {
    level: "High School (Grade 9–12)",
    overview: "Preparing for future education and leadership roles.",
    important: [
      "Tuition: ₹1,80,000 per year",
      "Includes advanced curriculum and career guidance"
    ],
    details: [
      { title: "Tuition Fee", amount: "₹1,80,000" },
      { title: "Lab & Library", amount: "₹20,000" },
      { title: "Career Guidance", amount: "₹10,000" },
      { title: "Bus Facility", amount: "₹15,000" },
      { title: "Books & Materials", amount: "₹20,000" }
    ]
  }
];

export default function FeeStructure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <SubHeader
        title="Fee Structure"
        subtitle="Transparent fees for clarity and peace of mind"
        image="/images/fees-hero.jpg"
      />

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-32">

          {feeSections.map((section, idx) => (
            <div key={idx} className="space-y-12">
              {/* Level Title */}
              <div className="flex flex-col gap-4">
                <div className="h-[4px] bg-black w-24"></div>
                <h2 className="text-5xl font-extrabold text-black">{section.level}</h2>
                <div className="h-[4px] bg-black w-24"></div>
              </div>

              {/* Overview */}
              <p className="text-xl text-neutral-700 leading-relaxed">{section.overview}</p>

              {/* Important Details */}
              <ul className="text-lg font-semibold text-neutral-700 space-y-2">
                {section.important.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Accordion for Full Details */}
              <div className="border-t  border-black/20 mt-6">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 flex justify-between text-neutral-700 items-center text-xl font-semibold focus:outline-none"
                >
                  View Full Fee Details
                  {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === idx ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <table className="w-full text-neutral-700 text-left border-collapse mt-2">
                    <tbody>
                      {section.details.map((item, i) => (
                        <tr key={i} className="border-b border-black/10">
                          <td className="py-3 font-medium">{item.title}</td>
                          <td className="py-3 font-semibold">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6">
            <h2 className="text-5xl font-extrabold text-black">Questions About Fees?</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Reach out to our admissions team for personalized guidance, payment plans, or scholarships.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 px-12 py-5 bg-black text-white font-semibold text-lg tracking-wide hover:bg-neutral-800 transition"
            >
              Contact Admissions
            </a>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
