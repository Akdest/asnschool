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
    image: "/clubs/robotics.jpg",
  },
  {
    name: "Debate & Public Speaking",
    description:
      "Enhance communication, critical thinking, and confidence through debates and presentations.",
    image: "/clubs/debate.jpg",
  },
  {
    name: "Music & Performing Arts",
    description:
      "Express creativity through music, dance, and theatre. Build stage confidence and artistry.",
    image: "/clubs/music.jpg",
  },
  {
    name: "Environmental & Eco Club",
    description:
      "Engage in sustainability projects, conservation activities, and community initiatives.",
    image: "/clubs/environment.jpg",
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
      "Time management: Balance academics and activities."
    ]
  },
  {
    title: "Joining & Participation",
    content: [
      "Open to students from Grades 1–12.",
      "Monthly meetings guided by mentors.",
      "Opportunities for competitions and performances.",
      "Special events throughout the year."
    ]
  }
];

export default function ClubsPage() {
  const [activeClub, setActiveClub] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Auto carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClub((prev) => (prev + 1) % clubs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (idx: number) =>
    setOpenAccordion(openAccordion === idx ? null : idx);

  return (
    <>
      <Navbar />
      <SubHeader
        title="Clubs & Societies"
        subtitle="Where passions meet action and creativity thrives."
        image="/images/clubs-header.jpg"
      />

      <section className="bg-white relative">
        {/* Club Carousel - full bleed */}
        <div className="relative w-full h-[100vh] overflow-hidden">
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
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end px-12 pb-24">
                <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
                  {club.name}
                </h2>
                <p className="mt-6 text-2xl text-white/80 max-w-[800px]">{club.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlapping staggered sections */}
        <div className="relative">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className={`relative w-full h-[500px] my-24 flex items-center ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 h-full relative overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                />
              </div>
              <div className="w-1/2 px-16 py-12 flex flex-col justify-center">
                <h3 className="text-5xl font-extrabold text-black">{club.name}</h3>
                <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accordions - free layout */}
        <div className="space-y-12 text-neutral-700 px-16 py-32">
          {accordions.map((acc, idx) => (
            <div key={idx} className="border-t border-black/20 pt-6">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center text-2xl font-bold py-4 focus:outline-none"
              >
                {acc.title}
                {openAccordion === idx ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openAccordion === idx ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                {acc.content.map((item, i) => (
                  <p key={i} className="py-3 text-lg text-neutral-700">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Motivational closing section */}
        <div className="bg-black/5 py-32 px-16 text-center">
          <h2 className="text-6xl font-extrabold text-black leading-tight">
            Explore. Engage. Excel.
          </h2>
          <p className="mt-8 text-2xl text-neutral-700 max-w-[900px] mx-auto leading-relaxed">
            Joining a club is more than an activity—it’s a journey of creativity, leadership, and discovery. Step beyond the classroom and make your mark.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
