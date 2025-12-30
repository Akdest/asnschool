"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import { useState, useEffect } from "react";

// Sample data for sports events, teams, and achievements
const sportsTeams = [
  {
    name: "Football Team",
    description:
      "Competing at state and national levels, focusing on teamwork, endurance, and strategy.",
    image: "/sports/football.jpg",
  },
  {
    name: "Basketball Team",
    description:
      "Fast-paced action on court, nurturing agility, coordination, and leadership.",
    image: "/sports/basketball.jpg",
  },
  {
    name: "Swimming Squad",
    description:
      "Training in modern facilities, promoting discipline, health, and competitive excellence.",
    image: "/sports/swimming.jpg",
  },
];

const sportsEvents = [
  {
    title: "Inter-School Football Championship",
    date: "15 Dec 2025",
    image: "/sports/event1.jpg",
  },
  {
    title: "Annual Athletics Meet",
    date: "10 Jan 2026",
    image: "/sports/event2.jpg",
  },
  {
    title: "Basketball Invitational",
    date: "22 Feb 2026",
    image: "/sports/event3.jpg",
  },
];

export default function Sports() {
  const [activeEvent, setActiveEvent] = useState(0);

  // Auto carousel for featured events
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
        image="/images/sports-header.jpg"
      />

      {/* FEATURED EVENTS CAROUSEL */}
      <section className="relative w-full h-screen overflow-hidden">
        {sportsEvents.map((event, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16">
              <h2 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
                {event.title}
              </h2>
              <p className="mt-4 text-2xl text-white/90 drop-shadow-lg">
                {event.date}
              </p>
            </div>
          </div>
        ))}

        {/* INDICATORS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          {sportsEvents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveEvent(idx)}
              className={`h-2 w-12 rounded-full transition-all duration-300 ${
                activeEvent === idx ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SPORTS TEAMS SECTION */}
      <section className="bg-white py-32">
        {sportsTeams.map((team, idx) => (
          <div
            key={idx}
            className={`relative w-full h-[550px] flex items-center ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 h-full relative overflow-hidden">
              <Image
                src={team.image}
                alt={team.name}
                fill
                className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
              />
            </div>
            <div className="w-1/2 px-16 py-12 flex flex-col justify-center">
              <h3 className="text-5xl font-extrabold text-black">{team.name}</h3>
              <p className="mt-6 text-xl text-neutral-800 leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SPORTS ACHIEVEMENTS / STATS */}
      <section className="bg-gray-50 py-32 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-black text-center">
          Our Achievements
        </h2>
        <div className="mt-16 flex flex-wrap justify-center gap-20">
          <div className="text-center">
            <h3 className="text-6xl font-bold text-black">50+</h3>
            <p className="mt-2 text-xl text-neutral-700">Trophies Won</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-black">30+</h3>
            <p className="mt-2 text-xl text-neutral-700">Inter-School Matches</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-black">10+</h3>
            <p className="mt-2 text-xl text-neutral-700">State Level Competitions</p>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS GRID */}
      <section className="bg-white py-32">
        <h2 className="text-5xl font-extrabold text-black text-center">
          Upcoming Sports Events
        </h2>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-16">
          {sportsEvents.map((event, idx) => (
            <div key={idx} className="relative group h-96 overflow-hidden cursor-pointer">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-3xl font-extrabold text-white">{event.title}</h3>
                <p className="mt-2 text-white">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
