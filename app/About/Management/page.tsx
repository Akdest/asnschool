"use client";


import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";

const managementTeam = [
  {
    name: "Dr. Collin Felch",
    role: "Superintendent",
    bio: "Dr. Felch leads the institution with vision and integrity, ensuring academic excellence and holistic development.",
    photo: "/management/collin.jpg",
  },
  {
    name: "Mrs. Ananya Roy",
    role: "Principal",
    bio: "With over 15 years of experience, Mrs. Roy fosters a learning environment where every student thrives.",
    photo: "/management/ananya.jpg",
  },
  {
    name: "Mr. Rajiv Mehta",
    role: "Head of Operations",
    bio: "Mr. Mehta ensures smooth functioning of school operations, maintaining the highest standards in administration.",
    photo: "/management/rajiv.jpg",
  },
  {
    name: "Ms. Sneha Kapoor",
    role: "Head of Academic Affairs",
    bio: "Ms. Kapoor drives curriculum development and teacher mentorship, blending innovation with tradition.",
    photo: "/management/sneha.jpg",
  },
];

export default function ManagementPage() {
  return (
    <>
      <Navbar/>

      <SubHeader
        title="Management Team"
        subtitle="Meet the leadership guiding our institution towards excellence."
        image="/images/management-header.jpg"
      />

      {/* MANAGEMENT GRID */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
          
          {/* INTRO TEXT */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              Leaders Who Inspire
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Our management team brings experience, vision, and dedication to ensure every student has the tools and support to succeed academically and personally.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
            {managementTeam.map((member) => (
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

          {/* MOTIVATIONAL FOOTER */}
          <div className="border-t border-neutral-200 pt-24 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              Leadership with Vision,  
              <br />
              Commitment, and Integrity
            </h3>
            <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Our management team is committed to providing a safe, nurturing, and forward-thinking environment where students thrive academically, socially, and emotionally.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
