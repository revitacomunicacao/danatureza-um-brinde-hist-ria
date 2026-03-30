import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/DaNatureza-Carrossel-01.png", alt: "DaNatureza 01" },
  { src: "/images/DaNatureza-Carrossel-02.png", alt: "DaNatureza 02" },
  { src: "/images/DaNatureza-Carrossel-03.png", alt: "DaNatureza 03" },
  { src: "/images/DaNatureza-Carrossel-04.png", alt: "DaNatureza 04" },
  { src: "/images/DaNatureza-Carrossel-05.png", alt: "DaNatureza 05" },
];

const FotosSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="fotos" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-cream text-center mb-12 tracking-wide">
          <span className="text-primary">Galeria</span> de Fotos
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full flex-shrink-0 object-cover aspect-video"
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-foreground/40"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FotosSection;
