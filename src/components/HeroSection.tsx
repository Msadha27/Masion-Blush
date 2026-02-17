import heroImage from "@/assets/hero-lifestyle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aesthetic lifestyle flat lay with books, jewelry and flowers"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Curated with love
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Maison Blush
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Your go-to destination for aesthetic fashion, must-read books, and the prettiest Amazon finds — all in one place.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#shop"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Shop Now
          </a>
          <a
            href="#categories"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-foreground/20 text-foreground font-medium text-sm hover:bg-foreground/5 transition-colors"
          >
            Explore Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
