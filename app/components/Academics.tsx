import Image from "next/image";

export default function Academics() {
  return (
    <section className="bg-white text-neutral-900 py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-36">

        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="tracking-[0.35em] text-sm font-semibold text-neutral-500 uppercase">
            Academics
          </p>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            A Structured Learning Journey<br />
            From Grade 1 to Grade 12
          </h2>

          <p className="mt-10 text-lg text-neutral-600 leading-relaxed">
            Our academic program is carefully designed to evolve with each
            student — building strong foundations, encouraging independent
            thinking, and preparing learners for future success.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Foundation Years
            </h3>

            <p className="mt-8 text-neutral-600 text-lg leading-relaxed">
              The early years focus on essential skills in literacy,
              numeracy, and social development. Learning is guided,
              engaging, and structured to foster confidence and curiosity.
            </p>

            <p className="mt-6 text-sm tracking-wide text-neutral-500 uppercase">
              Grades 1 – 5
            </p>
          </div>

          <div className="relative w-full h-[460px]">
            <Image
              src="/images/foundation.jpg"
              alt="Foundation Years"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative w-full h-[460px]">
            <Image
              src="/images/middle.jpg"
              alt="Middle School"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Middle Years
            </h3>

            <p className="mt-8 text-neutral-600 text-lg leading-relaxed">
              During the middle years, students deepen their understanding
              of core subjects, strengthen problem-solving skills, and
              begin developing academic independence.
            </p>

            <p className="mt-6 text-sm tracking-wide text-neutral-500 uppercase">
              Grades 6 – 8
            </p>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Senior Years
            </h3>

            <p className="mt-8 text-neutral-600 text-lg leading-relaxed">
              The senior curriculum emphasizes academic rigor, assessment
              readiness, and future planning. Students receive focused
              guidance to prepare for higher education and life beyond school.
            </p>

            <p className="mt-6 text-sm tracking-wide text-neutral-500 uppercase">
              Grades 9 – 12
            </p>
          </div>

          <div className="relative w-full h-[460px]">
            <Image
              src="/images/asn-club.jpg"
              alt="Senior Years"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ACADEMIC PRINCIPLES */}
        <div className="border-t border-neutral-200 pt-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              "Strong Academic Foundations",
              "Continuous Assessment",
              "Individual Student Support",
              "Future-Oriented Learning",
            ].map((item) => (
              <div key={item}>
                <h4 className="text-xl font-semibold">
                  {item}
                </h4>
                <div className="mt-6 h-[2px] w-14 bg-neutral-400" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
