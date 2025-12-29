import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          
          {/* SCHOOL INFO */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="School Logo"
                width={48}
                height={48}
              />
              <h3 className="text-2xl font-extrabold">
                ABC Public School
              </h3>
            </div>

            <p className="mt-8 text-neutral-400 leading-relaxed max-w-sm">
              A learning community committed to academic excellence,
              character development, and holistic growth from Grade 1 to 12.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              School
            </h4>

            <ul className="mt-8 space-y-4 text-neutral-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/student-life" className="hover:text-white">Student Life</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* ACADEMICS */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              Academics
            </h4>

            <ul className="mt-8 space-y-4 text-neutral-400">
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

            <ul className="mt-8 space-y-4 text-neutral-400">
              <li>ABC Public School</li>
              <li>Sector XX, City Name</li>
              <li>State – PIN</li>
              <li className="pt-4">+91 98765 43210</li>
              <li>info@abcpublicschool.edu</li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
        <p>
          © {new Date().getFullYear()} ABC Public School. All rights reserved.
        </p>

        <div className="flex gap-8">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
