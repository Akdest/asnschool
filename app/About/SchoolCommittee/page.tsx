"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";

const committeeMembers = [
  {
    name: "Mr. Rakesh Sharma",
    role: "Chairperson",
    bio: "Oversees school policies and strategic decisions, ensuring alignment with vision and mission.",
    photo: "/committee/rakesh.jpg",
  },
  {
    name: "Mrs. Meera Kapoor",
    role: "Secretary",
    bio: "Coordinates meetings, documentation, and official communication within the committee.",
    photo: "/committee/meera.jpg",
  },
  {
    name: "Dr. Amit Verma",
    role: "Academic Advisor",
    bio: "Provides guidance on curriculum development, teaching methodologies, and student assessment.",
    photo: "/committee/amit.jpg",
  },
  {
    name: "Ms. Priya Nair",
    role: "Event Coordinator",
    bio: "Manages school events, extracurricular activities, and student engagement programs.",
    photo: "/committee/priya.jpg",
  },
  {
    name: "Mr. Sunil Joshi",
    role: "Finance Advisor",
    bio: "Oversees budgeting, resource allocation, and financial planning for school initiatives.",
    photo: "/committee/sunil.jpg",
  },
  {
    name: "Mrs. Kavita Singh",
    role: "Parent Representative",
    bio: "Represents parent perspectives and ensures student welfare and community engagement.",
    photo: "/committee/kavita.jpg",
  },
];

export default function SchoolCommittee() {
  return (
    <>
      <Navbar />

      <SubHeader
        title="School Committee"
        subtitle="Meet the dedicated team guiding our school's policies and growth."
        image="/images/committee-header.jpg"
      />

      {/* COMMITTEE GRID */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
          
          {/* INTRO TEXT */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              Our Dedicated Committee
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              The school committee plays a vital role in shaping the policies, programs, and overall development of the school. Their commitment ensures students receive the best learning environment possible.
            </p>
          </div>

          {/* COMMITTEE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
            {committeeMembers.map((member) => (
              <div key={member.name} className="group relative bg-neutral-50 overflow-hidden">
                {/* IMAGE */}
                <div className="relative w-full h-[360px]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* NAME & ROLE */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                  <p className="mt-2 text-neutral-600 font-medium">{member.role}</p>
                  <p className="mt-4 text-neutral-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER MOTIVATION */}
          <div className="border-t border-neutral-200 pt-24 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              Collaboration, Guidance, and Excellence
            </h3>
            <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Our school committee ensures that every decision, policy, and initiative contributes to a nurturing and high-performing environment for our students.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
