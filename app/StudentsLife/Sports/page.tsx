"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import { useState, useEffect } from "react";

const sportsTeams = [
  {
    name: "Football Team",
    description:
      "Competing at state and national levels, focusing on teamwork, endurance, and strategy.",
    image: "/images/asn-sports.jpg",
  },
  {
    name: "Basketball Team",
    description:
      "Fast-paced action on court, nurturing agility, coordination, and leadership.",
    image: "/images/asn-sports.jpg",
  },
  {
    name: "Swimming Squad",
    description:
      "Training in modern facilities, promoting discipline, health, and competitive excellence.",
    image: "/images/asn-sports.jpg",
  },
];

const sportsEvents = [
  {
    title: "Inter-School Football Championship",
    date: "15 Dec 2025",
    image: "/images/asn-sports.jpg",
  },
  {
    title: "Annual Athletics Meet",
    date: "10 Jan 2026",
    image: "/images/asn-sports.jpg",
  },
  {
    title: "Basketball Invitational",
    date: "22 Feb 2026",
    image: "/images/asn-sports.jpg",
  },
];

export default function Sports() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % sportsEvents.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <SubHeader
        title="Sports & Athletics"
        subtitle="Where Talent, Discipline, and Team Spirit Thrive"
        image="/images/asn-sports.jpg"
      />

      {/* FEATURED EVENTS CAROUSEL */}
      <section className="relative w-full min-h-[70svh] sm:min-h-[85svh] lg:h-screen overflow-hidden">
        {sportsEvents.map((event, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeEvent ? "opacity-100 z-20" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 sm:px-12 lg:px-16">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white">
                {event.title}
              </h2>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl text-white/90">
                {event.date}
              </p>
            </div>
          </div>
        ))}

        {/* INDICATORS */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-30">
          {sportsEvents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveEvent(idx)}
              className={`h-2 w-8 sm:w-12 rounded-full transition-all duration-300 ${
                activeEvent === idx ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SPORTS TEAMS SECTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        {sportsTeams.map((team, idx) => (
          <div
            key={idx}
            className={`relative w-full flex flex-col lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 h-[260px] sm:h-[380px] lg:h-[550px] relative overflow-hidden">
              <Image
                src={team.image}
                alt={team.name}
                fill
                className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
              />
            </div>

            <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-10 lg:py-12 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
                {team.name}
              </h3>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SPORTS ACHIEVEMENTS */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Our Achievements
        </h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              50+
            </h3>
            <p className="mt-2 text-base sm:text-lg text-neutral-700">
              Trophies Won
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              30+
            </h3>
            <p className="mt-2 text-base sm:text-lg text-neutral-700">
              Inter-School Matches
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              10+
            </h3>
            <p className="mt-2 text-base sm:text-lg text-neutral-700">
              State Level Competitions
            </p>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black text-center">
          Upcoming Sports Events
        </h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-10 lg:px-16">
          {sportsEvents.map((event, idx) => (
            <div
              key={idx}
              className="relative group h-64 sm:h-80 lg:h-96 overflow-hidden cursor-pointer"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 sm:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {event.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-white">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
