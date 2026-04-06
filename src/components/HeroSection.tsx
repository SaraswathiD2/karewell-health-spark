import heroImage from "@/assets/hero-hospital.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[600px] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Karewell Hospital" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-80" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
          <span className="text-sm font-medium text-secondary-light">24/7 Emergency Services</span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
          Karewell{" "}
          <span className="text-secondary">Hospital</span>
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-medium text-primary-foreground/80 mt-3">
          Health First
        </p>
        <p className="text-primary-foreground/70 mt-6 text-lg max-w-lg leading-relaxed">
          Delivering compassionate, world-class healthcare with advanced technology and a team of renowned specialists.
        </p>
      </div>
    </div>

    {/* Bottom curve */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" className="w-full">
        <path d="M0 80V40C360 0 1080 0 1440 40V80H0Z" fill="hsl(0 0% 100%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
