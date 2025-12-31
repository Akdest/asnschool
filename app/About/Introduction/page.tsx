import SubHeader from "@/app/components/SubHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <Navbar />

      <SubHeader
        title="Introduction"
        subtitle="Education rooted in values. Learning shaped for the future."
        image="/images/asn-bg.jpg"
      />

      <main className="bg-white">
        {/* SECTION 1 — WHO WE ARE */}
        <section className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <p className="tracking-[0.35em] text-xs sm:text-sm font-semibold text-neutral-500 uppercase">
                Who We Are
              </p>
              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                Shaping Minds, Building Character
              </h2>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-700 leading-relaxed">
                Our school stands as a place where academic excellence meets
                integrity, discipline, and compassion. From Grade 1 through
                Grade 12, we provide a structured yet nurturing environment
                where students are encouraged to question, explore, and grow.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
                We believe education is not limited to textbooks and
                examinations. It is a lifelong foundation built on values,
                responsibility, and the confidence to face a rapidly evolving
                world.
              </p>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[520px]">
              <Image
                src="/images/asn-class.jpg"
                alt="Learning Environment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — OUR PHILOSOPHY */}
        <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[520px] order-last lg:order-first rounded-lg overflow-hidden">
              <Image
                src="/images/foundation.jpg"
                alt="Students Collaboration"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="tracking-[0.35em] text-xs sm:text-sm font-semibold text-neutral-500 uppercase">
                Our Philosophy
              </p>

              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                Learning With Purpose
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-700 leading-relaxed">
                Every child is unique, and so is their learning journey. Our
                approach balances academic rigor with creativity, discipline
                with freedom, and tradition with innovation.
              </p>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
                Through experienced educators, thoughtfully designed
                curriculum, and a strong focus on character development, we
                prepare students not just for examinations — but for life.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — MOTIVATIONAL QUOTE */}
        <section className="relative w-full py-16 sm:py-20 lg:py-28 text-center px-6 sm:px-10 lg:px-0">
          <blockquote className="max-w-4xl sm:max-w-5xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-snug">
            Education is not about filling minds — it is about awakening them.
          </blockquote>
          <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg text-neutral-700 leading-relaxed">
            We strive to create an environment where curiosity is rewarded,
            effort is respected, and every student feels seen, supported, and
            inspired to achieve their highest potential.
          </p>
        </section>

        {/* SECTION 4 — VISION & MISSION */}
        <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
            {/* Vision */}
            <div className="flex flex-col justify-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-tight mb-4 sm:mb-6 lg:mb-6">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                To nurture responsible, innovative, and compassionate individuals
                who are equipped to thrive academically and socially in a rapidly changing world.
                Our vision emphasizes holistic development, empowering students to embrace challenges,
                think critically, and become proactive contributors to society.
                We aim to create an environment where every child feels valued, inspired, and prepared to make a positive impact.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col justify-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-tight mb-4 sm:mb-6 lg:mb-6">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                To provide holistic education that combines strong academics, character development, and extracurricular engagement.
                Our mission is to ensure every student grows with confidence, integrity, and creativity, equipped with the skills to navigate the complexities of modern life.
                Through innovative teaching, experiential learning, and a supportive community, we prepare students not just for examinations but for lifelong success and meaningful contributions to society.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — BIG IMAGE MOTIVATIONAL BANNER */}
        <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] mt-20 sm:mt-24 lg:mt-32 overflow-hidden rounded-lg">
          <Image
            src="/images/asn-about.jpg"
            alt="Motivation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 sm:px-10 lg:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight max-w-4xl">
              Inspire. Engage. Empower Every Student To Reach Their Potential
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
