"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* BACKGROUND IMAGE */}
<div className="fixed inset-0 -z-10">
  <Image
    src="/campus/contact-bg.jpg"
    alt="Campus Background"
    fill
    className="object-cover opacity-[0.08]"
    priority
  />
  {/* NEUTRAL OVERLAY */}
  <div className="absolute inset-0 bg-neutral-100/90" />
</div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* SECTION HEADER */}
        <p className="tracking-[0.35em] text-sm font-semibold text-neutral-500 uppercase">
          Contact
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-black">
          Get in Touch
        </h2>

        {/* MAIN GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-12">
            {/* LOCATION */}
            <div className="bg-white p-12">
              <div className="flex items-start gap-6">
                <MapPin size={32} className="text-black mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black">Location</h3>
                  <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                    <span className="font-semibold">
                      Ambience Public School
                    </span>
                    <br />
                    Plot No.1, Opp. Golf Course Road,
                    <br />
                    Near DLF Phase 5, Sector 43,
                    <br />
                    Gurugram – 122002
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white p-12">
              <div className="flex items-start gap-6">
                <Mail size={32} className="text-black mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black">E-Mail Us</h3>
                  <div className="mt-6 space-y-4 text-lg text-neutral-700">
                    <p>
                      <span className="font-semibold">Admissions:</span>{" "}
                      <Link
                        href="mailto:admissions@ambienceschool.com"
                        className="underline underline-offset-4 hover:opacity-70 focus:outline-none"
                      >
                        admissions@ambienceschool.com
                      </Link>
                    </p>
                    <p>
                      <span className="font-semibold">Careers:</span>{" "}
                      <Link
                        href="mailto:careers@ambienceschool.com"
                        className="underline underline-offset-4 hover:opacity-70 focus:outline-none"
                      >
                        careers@ambienceschool.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white p-12">
              <div className="flex items-start gap-6">
                <Phone size={32} className="text-black mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Contact Numbers
                  </h3>
                  <div className="mt-6 space-y-3 text-lg text-neutral-700">
                    <Link href="tel:+919871296479" className="block hover:underline">
                      +91 987 129 6479
                    </Link>
                    <Link href="tel:+918851939160" className="block hover:underline">
                      +91 885 193 9160
                    </Link>
                    <Link href="tel:01242574627" className="block hover:underline">
                      0124 – 2574627
                    </Link>
                    <Link href="tel:01242576627" className="block hover:underline">
                      0124 – 2576627
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* MAP */}
            <div className="bg-white p-3">
              <iframe
                title="Ambience Public School Location"
                src="https://www.google.com/maps?q=Ambience%20Public%20School%20Gurugram&output=embed"
                className="w-full h-[360px] border-0"
                loading="lazy"
              />
            </div>

            {/* VISIT INFO */}
            <div className="bg-white p-12">
              <p className="tracking-[0.3em] text-xs font-semibold text-neutral-500 uppercase">
                Visit Us
              </p>

              <h3 className="mt-4 text-2xl font-bold text-black">
                Campus Visits & Office Hours
              </h3>

              <div className="mt-8 space-y-6 text-lg text-neutral-700">
                <p>
                  <span className="font-semibold">Office Hours:</span>
                  <br />
                  Monday – Friday, 8:30 AM – 4:30 PM
                </p>

                <p>
                  <span className="font-semibold">Campus Tours:</span>
                  <br />
                  Available by appointment
                </p>
              </div>

              <Link
                href="/contact/visit"
                className="inline-block mt-10 font-semibold tracking-wide underline underline-offset-4 hover:opacity-70 focus:outline-none"
              >
                Schedule a Visit →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
