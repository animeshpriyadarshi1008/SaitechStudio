interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  height?: string;
}

export default function HeroSection({ 
  title, 
  description, 
  backgroundImage,
  height = '67vh'
}: HeroSectionProps) {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat relative flex items-center" 
      style={{ backgroundImage: `url(${backgroundImage})`, height }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}