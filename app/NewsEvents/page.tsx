"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface EventItem {
  title: string;
  description: string;
  image: string;
  date: string;
  href: string;
}

const EVENTS_BY_MONTH: Record<string, EventItem[]> = {
  "December 2025": [
    {
      title: "Winter Music Concert",
      description:
        "An evening celebrating orchestral harmony, choir performances, and solo acts by students across grades.",
      image: "/events/event1.jpg",
      date: "18 Dec 2025",
      href: "/news/winter-music-concert",
    },
    {
      title: "Science & Innovation Expo",
      description:
        "Student-led exhibits featuring robotics, sustainability models, and real-world problem solving.",
      image: "/events/event2.jpg",
      date: "12 Dec 2025",
      href: "/news/science-expo",
    },
    {
      title: "Annual Sports Meet",
      description:
        "A full-day event fostering discipline, teamwork, and competitive spirit.",
      image: "/events/event3.jpg",
      date: "06 Dec 2025",
      href: "/news/sports-meet",
    },
    {
      title: "Inter-School Debate",
      description:
        "Students engaged in structured discourse on global and social topics.",
      image: "/events/event4.jpg",
      date: "03 Dec 2025",
      href: "/news/debate",
    },
    {
      title: "Visual Arts Showcase",
      description:
        "Display of student artwork spanning fine art, digital media, and installations.",
      image: "/events/event5.jpg",
      date: "01 Dec 2025",
      href: "/news/arts-showcase",
    },
  ],

  "November 2025": [
    {
      title: "Winter Music Concert",
      description:
        "An evening celebrating orchestral harmony, choir performances, and solo acts by students across grades.",
      image: "/events/event1.jpg",
      date: "18 Nov 2025",
      href: "/news/winter-music-concert",
    },
    {
      title: "Science & Innovation Expo",
      description:
        "Student-led exhibits featuring robotics, sustainability models, and real-world problem solving.",
      image: "/events/event2.jpg",
      date: "12 Nov 2025",
      href: "/news/science-expo",
    },
    {
      title: "Annual Sports Meet",
      description:
        "A full-day event fostering discipline, teamwork, and competitive spirit.",
      image: "/events/event3.jpg",
      date: "06 Nov 2025",
      href: "/news/sports-meet",
    },
    {
      title: "Inter-School Debate",
      description:
        "Students engaged in structured discourse on global and social topics.",
      image: "/events/event4.jpg",
      date: "03 Nov 2025",
      href: "/news/debate",
    },
    {
      title: "Visual Arts Showcase",
      description:
        "Display of student artwork spanning fine art, digital media, and installations.",
      image: "/events/event5.jpg",
      date: "01 Nov 2025",
      href: "/news/arts-showcase",
    },
  ],
};

export default function NewsEvents() {
  const months = Object.keys(EVENTS_BY_MONTH);
  const [activeMonth, setActiveMonth] = useState(months[0]);

  const events = EVENTS_BY_MONTH[activeMonth];
  const featured = events.slice(0, 3);
  const archive = events.slice(3);

  return (
    <>
      <Navbar />

      <SubHeader
        title="News & Events"
        subtitle="A living archive of campus life, milestones, and shared moments"
        image="/images/news-header.jpg"
      />

      {/* MAIN WRAPPER */}
      <section className="bg-white">
        {/* MONTH SELECTOR */}
        <div className="w-full px-10 lg:px-28 pt-24">
          <div className="flex gap-16 border-b border-neutral-300 pb-8">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`text-2xl font-semibold tracking-wide transition ${
                  activeMonth === month
                    ? "text-black border-b-4 border-black pb-3"
                    : "text-neutral-400 hover:text-black"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED EVENTS */}
        <div className="w-full px-10 lg:px-28 mt-32">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-24">
            {featured.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="group block"
              >
                <div className="relative w-full h-[620px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-10">
                  <p className="text-sm tracking-widest uppercase text-neutral-500">
                    {event.date}
                  </p>

                  <h2 className="mt-4 text-4xl font-extrabold text-black leading-tight">
                    {event.title}
                  </h2>

                  <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* VISUAL SEPARATOR */}
        <div className="w-full h-[2px] bg-neutral-200 my-40" />

        {/* ARCHIVE / FULL LIST */}
        <div className="w-full px-10 lg:px-28 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-28">
            {archive.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="group flex flex-col md:flex-row gap-12"
              >
                <div className="relative w-full md:w-[320px] h-[220px] shrink-0 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm tracking-widest uppercase text-neutral-500">
                    {event.date}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-black">
                    {event.title}
                  </h3>

                  <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
