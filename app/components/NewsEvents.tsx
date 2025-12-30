"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */

type SchoolEvent = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

/* ================= DATA ================= */

const eventsByMonth: Record<string, SchoolEvent[]> = {
  "December 2025": [
    {
      title: "Winter Carnival",
      date: "12 Dec 2025",
      description:
        "An immersive celebration of culture, music, art, and student talent.",
      image: "/events/winter.jpg",
      href: "/events/winter-carnival",
    },
    {
      title: "Annual Sports Day",
      date: "18 Dec 2025",
      description:
        "A showcase of athletic excellence, teamwork, and discipline.",
      image: "/events/sports.jpg",
      href: "/events/sports-day",
    },
    {
      title: "Christmas Assembly",
      date: "22 Dec 2025",
      description:
        "A festive gathering celebrating joy, harmony, and traditions.",
      image: "/events/christmas.jpg",
      href: "/events/christmas-assembly",
    },
    {
      title: "Art & Craft Exhibition",
      date: "26 Dec 2025",
      description:
        "Student artwork displayed in a curated exhibition format.",
      image: "/events/art.jpg",
      href: "/events/art-exhibition",
    },
    {
      title: "Alumni Interaction Meet",
      date: "29 Dec 2025",
      description:
        "An inspiring session connecting students with alumni journeys.",
      image: "/events/alumni.jpg",
      href: "/events/alumni-meet",
    },
  ],

  "November 2025": [
    {
      title: "Children’s Day Program",
      date: "14 Nov 2025",
      description:
        "Performances and activities celebrating childhood and creativity.",
      image: "/events/children.jpg",
      href: "/events/childrens-day",
    },
    {
      title: "Science Innovation Fair",
      date: "18 Nov 2025",
      description:
        "Hands-on projects highlighting curiosity and problem solving.",
      image: "/events/science.jpg",
      href: "/events/science-fair",
    },
    {
      title: "Inter-School Debate",
      date: "21 Nov 2025",
      description:
        "A competitive forum sharpening logic, speech, and confidence.",
      image: "/events/debate.jpg",
      href: "/events/debate",
    },
    {
      title: "Math Olympiad",
      date: "25 Nov 2025",
      description:
        "Testing analytical thinking through structured challenges.",
      image: "/events/math.jpg",
      href: "/events/math-olympiad",
    },
    {
      title: "Parent Orientation",
      date: "28 Nov 2025",
      description:
        "An interactive session aligning parents with academic vision.",
      image: "/events/parents.jpg",
      href: "/events/orientation",
    },
  ],
};

/* ================= COMPONENT ================= */

export default function NewsEvents() {
  const months = Object.keys(eventsByMonth);
  const [activeMonth, setActiveMonth] = useState(months[0]);
  const [hovered, setHovered] = useState<number | null>(null);

  const events = eventsByMonth[activeMonth];
  const polaroid = events.slice(0, 3);
  const editorial = events.slice(3);

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <p className="tracking-[0.35em] text-sm font-semibold text-neutral-500 uppercase">
          News & Events
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-black">
          Life at Ambience
        </h2>

        {/* MONTH TABS */}
        <div className="mt-16 flex gap-10 border-b border-neutral-200">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`pb-4 text-lg font-semibold transition-all focus:outline-none ${
                activeMonth === month
                  ? "border-b-2 border-black text-black"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

       {/* POLAROID FEATURED EVENTS */}
<div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
  {polaroid.map((event, index) => {
    const offset =
      index === 0
        ? "lg:mt-20"
        : index === 1
        ? "lg:mt-40"
        : "lg:mt-0";

    return (
      <Link
        key={event.title}
        href={event.href}
        className={`group block lg:col-span-4 ${offset}`}
      >
        {/* IMAGE */}
        <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* META */}
        <div className="mt-6">
          <p className="text-sm tracking-wide text-neutral-500">
            {event.date}
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-black leading-tight group-hover:underline underline-offset-4">
            {event.title}
          </h3>
        </div>
      </Link>
    );
  })}
</div>


        {/* EDITORIAL LIST */}
        <div className="relative mt-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* TEXT */}
          <div className="space-y-16">
            {editorial.map((event: SchoolEvent, index: number) => (
              <Link
                key={event.title}
                href={event.href}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group block"
              >
                <p className="text-sm text-neutral-500">
                  {event.date}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-black group-hover:underline underline-offset-4">
                  {event.title}
                </h3>

                <p className="mt-5 text-lg text-neutral-700 max-w-xl">
                  {event.description}
                </p>
              </Link>
            ))}
          </div>

          {/* HOVER IMAGE */}
          <div className="hidden lg:block relative">
            {hovered !== null && (
              <div className="absolute inset-0">
                <Image
                  src={editorial[hovered].image}
                  alt={editorial[hovered].title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <Link
            href="/events"
            className="inline-block text-lg font-semibold tracking-wide underline underline-offset-8 hover:opacity-70 focus:outline-none text-gray-700"
          >
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
