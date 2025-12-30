"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SubHeader from "@/app/components/SubHeader";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Bus,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <SubHeader
        title="Contact & Campus"
        subtitle="Where learning lives. Where conversations begin."
        image="/images/contact-header.jpg"
      />

      <section className="bg-white w-full">

        {/* ===================== */}
        {/* SECTION 1 — IDENTITY */}
        {/* ===================== */}
        <div className="px-6 md:px-12 lg:px-32 py-20 md:py-28 lg:py-32 space-y-20">

          <div>
            <p className="tracking-[0.3em] text-xs md:text-sm font-semibold text-neutral-500 uppercase">
              School Identity
            </p>

            <h2 className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
              Ambience Public School
            </h2>

            <p className="mt-6 md:mt-8 max-w-4xl text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed">
              Ambience Public School is a K–12 institution committed to
              academic excellence, character development, and a safe,
              disciplined learning environment. The campus operates as a
              structured academic ecosystem with dedicated administrative,
              academic, and support divisions.
            </p>
          </div>

          {/* ===================== */}
          {/* CONTACT GRID */}
          {/* ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-x-32 lg:gap-y-20">

            {/* ADDRESS */}
            <div className="flex gap-4 md:gap-6">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black mt-1 shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Campus Address
                </h3>
                <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                  Plot No. 1, Opp. Golf Course Road  
                  <br />
                  Near DLF Phase 5, Sector 43  
                  <br />
                  Gurugram – 122002, Haryana
                </p>
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div className="flex gap-4 md:gap-6">
              <Clock className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black mt-1 shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Office Hours
                </h3>
                <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                  Monday – Friday  
                  <br />
                  8:30 AM – 4:30 PM
                  <span className="block mt-2 text-sm text-neutral-500">
                    Administrative support available during working hours only
                  </span>
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4 md:gap-6">
              <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black mt-1 shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Contact Numbers
                </h3>
                <div className="mt-4 space-y-2 text-base md:text-lg text-neutral-700">
                  <p>+91 987 129 6479</p>
                  <p>+91 885 193 9160</p>
                  <p>0124 – 2574627</p>
                  <p>0124 – 2576627</p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 md:gap-6">
              <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black mt-1 shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Email Communication
                </h3>
                <div className="mt-4 space-y-2 text-base md:text-lg text-neutral-700">
                  <p>
                    <strong>Admissions:</strong> admissions@ambienceschool.com
                  </p>
                  <p>
                    <strong>Careers:</strong> careers@ambienceschool.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-neutral-200" />

        {/* ===================== */}
        {/* SECTION 2 — MAP */}
        {/* ===================== */}
        <div className="w-full h-[60vh] md:h-[75vh] lg:h-screen">
          <iframe
            title="Ambience Public School Location"
            src="https://www.google.com/maps?q=Ambience%20Public%20School%20Gurugram&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* ===================== */}
        {/* SECTION 3 — VISITOR INFO */}
        {/* ===================== */}
        <div className="bg-neutral-100 px-6 md:px-12 lg:px-32 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">

          <div className="flex gap-6">
            <UserCheck className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black mt-1 shrink-0" />
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-black">
                Campus Visits
              </h4>
              <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                All visitors must report to the reception desk with valid
                identification. Academic meetings are conducted strictly by
                prior appointment.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Bus className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black mt-1 shrink-0" />
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-black">
                Transportation
              </h4>
              <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                GPS-enabled buses operate across major residential zones with
                centralized routing for punctuality and safety.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black mt-1 shrink-0" />
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-black">
                Safety & Security
              </h4>
              <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                CCTV surveillance, trained security staff, and strict safety
                protocols ensure a secure learning environment.
              </p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
