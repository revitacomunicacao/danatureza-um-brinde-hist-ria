const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/DaNatureza-Mesa.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <img
          src="/images/DaNatureza-Logo-Redonda.png"
          alt="DaNatureza Logo"
          className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full shadow-2xl"
        />
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-bold mb-4 tracking-wide">
          Um brinde <span className="text-primary italic">DaNatureza!</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
          Cachaça artesanal envelhecida em barril de Amburana
        </p>
        <div className="mt-10">
          <a
            href="#sobre"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Conheça nossa história
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
