"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const clubs = [
  {
    name: "Robotics Club",
    description:
      "Dive into automation, AI, and robotics. Build, program, and compete with innovative robots.",
    image: "/images/asn-science-innovation.jpg",
  },
  {
    name: "Debate & Public Speaking",
    description:
      "Enhance communication, critical thinking, and confidence through debates and presentations.",
    image: "/images/asn-debate.jpg",
  },
  {
    name: "Music & Performing Arts",
    description:
      "Express creativity through music, dance, and theatre. Build stage confidence and artistry.",
    image: "/images/asn-club.jpg",
  },
  {
    name: "Environmental & Eco Club",
    description:
      "Engage in sustainability projects, conservation activities, and community initiatives.",
    image: "/images/asn-science-innovation.jpg",
  },
];

const accordions = [
  {
    title: "How Clubs Boost Skills",
    content: [
      "Leadership: Organize projects and events.",
      "Teamwork: Collaborate across grades.",
      "Creativity: Experiment with ideas.",
      "Problem-solving: Tackle real-world challenges.",
      "Time management: Balance academics and activities.",
    ],
  },
  {
    title: "Joining & Participation",
    content: [
      "Open to students from Grades 1–12.",
      "Monthly meetings guided by mentors.",
      "Opportunities for competitions and performances.",
      "Special events throughout the year.",
    ],
  },
];

export default function ClubsPage() {
  const [activeClub, setActiveClub] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClub((prev) => (prev + 1) % clubs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <SubHeader
        title="Clubs & Societies"
        subtitle="Where passions meet action and creativity thrives."
        image="/images/asn-club.jpg"
      />

      <section className="bg-white relative">
        {/* ===== HERO CAROUSEL ===== */}
        <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[100vh] overflow-hidden">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${idx === activeClub ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <Image
                src={club.image}
                alt={club.name}
                fill
                className="object-cover"
                priority={idx === 0}
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end px-6 md:px-12 lg:px-12 pb-12 md:pb-20 lg:pb-24">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  {club.name}
                </h2>
                <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-[800px]">
                  {club.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== STAGGERED SECTIONS ===== */}
        <div className="relative">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className={`relative w-full my-16 md:my-24 flex flex-col lg:flex-row items-center
              ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] relative overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                />
              </div>

              <div className="w-full lg:w-1/2 px-6 sm:px-10 md:px-12 lg:px-16 py-10 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
                  {club.name}
                </h3>
                <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-lg lg:text-xl text-neutral-700 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== ACCORDIONS ===== */}
        <div className="space-y-10 text-neutral-700 px-6 sm:px-10 md:px-12 lg:px-16 py-20 md:py-32">
          {accordions.map((acc, idx) => (
            <div key={idx} className="border-t border-black/20 pt-6">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === idx ? null : idx)
                }
                className="w-full flex justify-between items-center text-lg sm:text-xl md:text-2xl font-bold py-4"
              >
                {acc.title}
                {openAccordion === idx ? (
                  <ChevronUp size={26} />
                ) : (
                  <ChevronDown size={26} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openAccordion === idx ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                {acc.content.map((item, i) => (
                  <p
                    key={i}
                    className="py-2 sm:py-3 text-sm sm:text-base md:text-lg text-neutral-700"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== CLOSING SECTION ===== */}
        <div className="bg-black/5 py-20 md:py-32 px-6 sm:px-10 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Explore. Engage. Excel.
          </h2>
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 max-w-[900px] mx-auto leading-relaxed">
            Joining a club is more than an activity—it’s a journey of creativity,
            leadership, and discovery. Step beyond the classroom and make your
            mark.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
