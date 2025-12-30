"use client";

import Image from "next/image";

export default function Say() {
  return (
    <section className="w-full bg-black text-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE TEXT */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  leading-tight">
            We Transform <br /> The School Experience
          </h2>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed">
            At ABC Public School, we are committed to transforming the school experience. 
            From the moment you walk into our classrooms, you&apos;ll notice the difference. 
            Beyond the warm welcome and supportive environment is a team of highly trained 
            teachers, administrators, and support personnel, all dedicated to ensuring 
            that our students are fully engaged academically and feel 100% part of the ABC family.
          </p>

          <p className="mt-8  font-semibold">
            Alpha Beta, Ed.D., Superintendent
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:w-1/2 w-full h-80 sm:h-96  relative">
          <Image
            src="/images/asn-principal.jpg" // replace with your image path
            alt="ASN Public School"
            fill
            className="object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
