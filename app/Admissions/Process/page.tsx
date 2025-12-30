"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import Link from "next/link";

export default function Process() {
  const processSteps = [
    {
      title: "Explore Our School",
      description:
        "Visit our campus or explore virtually to understand our culture, curriculum, and facilities.",
      icon: "/icons/explore.svg",
    },
    {
      title: "Submit Application",
      description:
        "Complete the online application form and upload necessary documents for the desired grade.",
      icon: "/icons/application.svg",
    },
    {
      title: "Entrance Assessment",
      description:
        "Students may be invited for a grade-specific assessment to evaluate learning readiness.",
      icon: "/icons/assessment.svg",
    },
    {
      title: "Personalized Interview",
      description:
        "Meet our admissions team for a friendly discussion about your child's needs and aspirations.",
      icon: "/icons/interview.svg",
    },
    {
      title: "Admission Decision",
      description:
        "Receive a clear response on the admission outcome along with next steps for enrollment.",
      icon: "/icons/decision.svg",
    },
  ];

  return (
    <>
      <Navbar />

      <SubHeader
        title="Admissions Process"
        subtitle="Join our school community and embark on a transformative educational journey."
        image="/images/admissions-hero.jpg"
      />

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-32">
          
          {/* INTRO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black">
              A Simple, Transparent Process
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our admissions process is designed to ensure clarity, ease, and a personalized experience for every student and parent.
            </p>
          </div>

          {/* PROCESS STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-neutral-50 p-10 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-4"
              >
                <div className="w-24 h-24 mb-6 relative">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{step.description}</p>

                <span className="absolute -top-4 -left-4 w-16 h-16 border-2 border-neutral-200 rotate-12 hidden lg:block"></span>
                <span className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-neutral-200 -rotate-12 hidden lg:block"></span>
              </div>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="bg-neutral-100 py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/admissions-bg.jpg"
                alt="Admissions Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-extrabold text-black">
                Ready to Join Us?
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Begin the admissions journey today and be a part of a school that transforms education into experience.
              </p>

              <Link
                href="/admissions/apply"
                className="inline-block mt-6 px-12 py-5 bg-black text-white font-semibold text-lg tracking-wide hover:bg-neutral-800 transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
