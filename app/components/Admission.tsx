"use client";

export default function Admission() {
  const highlights = [
    {
      title: "Ranked #1",
      description:
        "ABC Public School is consistently recognized as the top choice for academic excellence in the region.",
    },
    {
      title: "State-of-the-Art Campus",
      description:
        "Modern classrooms, labs, and sports facilities provide an environment for holistic development.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "A rigorous, well-rounded curriculum prepares students for higher education and life success.",
    },
    {
      title: "Scholarships & Support",
      description:
        "Merit-based scholarships and financial assistance programs for deserving students.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Admissions Highlights
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-700 max-w-3xl">
            Discover why ABC Public School continues to set the standard in education excellence.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col border-b border-gray-300 pb-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-700 text-base lg:text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="/admissions/apply"
            className="bg-gray-900 text-white font-bold py-4 px-12 text-lg lg:text-xl transition-colors duration-300 hover:bg-gray-800"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
