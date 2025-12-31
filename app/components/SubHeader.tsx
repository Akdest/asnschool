interface SubHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function SubHeader({
  title,
  subtitle,
  image,
}: SubHeaderProps) {
  return (
    <section
      className="relative w-full h-[55vh] min-h-[420px] overflow-hidden bg-white flex items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // makes it fixed on scroll
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-neutral-900/80" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 text-center">
        <h1 className="mt-6 text-5xl lg:text-8xl  font-extrabold text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-xl md:text-2xl text-white/80 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
