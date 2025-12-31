import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          
          {/* SCHOOL INFO */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/asn-logo.png"
                alt="School Logo"
                width={48}
                height={48}
              />
              <h3 className="text-2xl font-extrabold">
                ABC Public School
              </h3>
            </div>

            <p className="mt-8 text-neutral-600 leading-relaxed max-w-sm">
              A learning community committed to academic excellence,
              character development, and holistic growth from Grade 1 to 12.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              School
            </h4>

            <ul className="mt-8 space-y-4 text-neutral-600">
              <li><Link href="/about" className="hover:text-neutral-900">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-neutral-900">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-neutral-900">Admissions</Link></li>
              <li><Link href="/student-life" className="hover:text-neutral-900">Student Life</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-900">Contact</Link></li>
            </ul>
          </div>

          {/* ACADEMICS */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              Academics
            </h4>

            <ul className="mt-8 space-y-4 text-neutral-600">
              <li>Primary School (Grades 1–5)</li>
              <li>Middle School (Grades 6–8)</li>
              <li>Senior School (Grades 9–12)</li>
              <li>Assessment & Evaluation</li>
              <li>Academic Support</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              Contact
            </h4>

            <ul className="mt-8 space-y-4 text-neutral-600">
              <li>ABC Public School</li>
              <li>Sector XX, City Name</li>
              <li>State – PIN</li>
              <li className="pt-4 font-medium text-neutral-800">
                +91 98765 43210
              </li>
              <li className="font-medium text-neutral-800">
                info@abcpublicschool.edu
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-neutral-200" />

      {/* BOTTOM FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600">
        <p>
          © {new Date().getFullYear()} ABC Public School. All rights reserved.
        </p>

        <div className="flex gap-8">
          <Link href="/privacy-policy" className="hover:text-neutral-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-neutral-900">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
