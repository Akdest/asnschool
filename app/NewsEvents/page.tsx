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
      title: "Winter Carnival",
      date: "12 Dec 2025",
      description:
        "An immersive celebration of culture, music, art, and student talent.",
      image: "/images/asn-winter-carnival.jpg",
      href: "/events/winter-carnival",
    },
    {
      title: "Annual Sports Day",
      date: "18 Dec 2025",
      description:
        "A showcase of athletic excellence, teamwork, and discipline.",
      image: "/images/asn-annual-sports.jpg",
      href: "/events/sports-day",
    },
    {
      title: "Christmas Assembly",
      date: "22 Dec 2025",
      description:
        "A festive gathering celebrating joy, harmony, and traditions.",
      image: "/images/asn-christmas.jpg",
      href: "/events/christmas-assembly",
    },
    {
      title: "Art & Craft Exhibition",
      date: "26 Dec 2025",
      description:
        "Student artwork displayed in a curated exhibition format.",
      image: "/images/asn-science-innovation.jpg",
      href: "/events/art-exhibition",
    },
    {
      title: "Alumni Interaction Meet",
      date: "29 Dec 2025",
      description:
        "An inspiring session connecting students with alumni journeys.",
      image: "/images/asn-winter-carnival.jpg",
      href: "/events/alumni-meet",
    },
  ],

  "November 2025": [
    {
      title: "Children’s Day Program",
      date: "14 Nov 2025",
      description:
        "Performances and activities celebrating childhood and creativity.",
      image: "/images/asn-children-day.jpg",
      href: "/events/childrens-day",
    },
    {
      title: "Science Innovation Fair",
      date: "18 Nov 2025",
      description:
        "Hands-on projects highlighting curiosity and problem solving.",
      image: "/images/asn-science-innovation.jpg",
      href: "/events/science-fair",
    },
    {
      title: "Inter-School Debate",
      date: "21 Nov 2025",
      description:
        "A competitive forum sharpening logic, speech, and confidence.",
      image: "/images/asn-debate.jpg",
      href: "/events/debate",
    },
    {
      title: "Math Olympiad",
      date: "25 Nov 2025",
      description:
        "Testing analytical thinking through structured challenges.",
      image: "/images/asn-club.jpg",
      href: "/events/math-olympiad",
    },
    {
      title: "Parent Orientation",
      date: "28 Nov 2025",
      description:
        "An interactive session aligning parents with academic vision.",
      image: "/images/asn-bg.jpg",
      href: "/events/orientation",
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
        image="/images/asn-winter-carnival.jpg"
      />

      <section className="bg-white">
        {/* MONTH SELECTOR */}
        <div className="w-full px-6 sm:px-10 lg:px-28 pt-16 sm:pt-24">
          <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16 border-b border-neutral-300 pb-6 sm:pb-8">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide transition ${
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
        <div className="w-full px-6 sm:px-10 lg:px-28 mt-20 sm:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-24">
            {featured.map((event) => (
              <Link key={event.title} href={event.href} className="group block">
                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[620px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 sm:mt-10">
                  <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-500">
                    {event.date}
                  </p>

                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
                    {event.title}
                  </h2>

                  <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-[2px] bg-neutral-200 my-24 sm:my-32 lg:my-40" />

        {/* ARCHIVE */}
        <div className="w-full px-6 sm:px-10 lg:px-28 pb-24 sm:pb-32 lg:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 lg:gap-x-32 gap-y-20 lg:gap-y-28">
            {archive.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="group flex flex-col sm:flex-row gap-8 sm:gap-12"
              >
                <div className="relative w-full sm:w-[280px] lg:w-[320px] h-[200px] sm:h-[220px] shrink-0 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-500">
                    {event.date}
                  </p>

                  <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    {event.title}
                  </h3>

                  <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
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
