import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

const imageModules = import.meta.glob<{ default: string }>(
  "@/assets/images/carrossel*.jpg",
  { eager: true },
);

const images = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b))
  .map((key, i) => ({
    src: imageModules[key].default,
    alt: `DaNatureza — Galeria ${i + 1}`,
  }));

type SlideImageProps = {
  src: string;
  alt: string;
  isFeatured: boolean;
};

const SlideImage = ({ src, alt, isFeatured }: SlideImageProps) => {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-3 rounded-lg bg-muted/40 text-muted-foreground ring-1 ring-border",
          isFeatured ? "min-h-[min(55vh,480px)]" : "min-h-[min(40vh,320px)]",
        )}
      >
        <ImageOff className="h-10 w-10 opacity-50" aria-hidden />
        <span className="max-w-[14rem] text-center text-xs">Não foi possível carregar esta imagem.</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      loading="eager"
      decoding="async"
      draggable={false}
      onError={() => setBroken(true)}
      className={cn(
        "h-auto w-full select-none object-contain transition-[max-height] duration-500 ease-out",
        isFeatured ? "max-h-[min(72vh,920px)]" : "max-h-[min(48vh,520px)]",
      )}
    />
  );
};

const FotosSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      dragFree: false,
      slidesToScroll: 1,
    },
    [],
  );

  const [selected, setSelected] = useState(0);

  const reselect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    reselect(emblaApi);
    emblaApi.on("select", reselect);
    emblaApi.on("reInit", reselect);
    return () => {
      emblaApi.off("select", reselect);
      emblaApi.off("reInit", reselect);
    };
  }, [emblaApi, reselect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 6000);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="fotos" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-center font-serif text-3xl tracking-wide text-cream md:mb-4 md:text-5xl">
          <span className="text-primary">Galeria</span> de Fotos
        </h2>
        <p className="mb-10 text-center text-sm font-light text-muted-foreground md:mb-14 md:text-base">
          Toque nas laterais ou use as setas — a foto central está em destaque.
        </p>

        <div className="relative rounded-xl bg-brown-deeper/80 py-6 shadow-2xl ring-1 ring-border md:py-10">
          <div className="overflow-hidden pl-2 pr-2 md:pl-4 md:pr-4" ref={emblaRef}>
            <div className="flex items-center gap-3 md:gap-6 [&>*]:min-w-0">
              {images.map((img, i) => {
                const featured = i === selected;
                return (
                  <div
                    key={`${img.src}-${i}`}
                    className={cn(
                      "flex-[0_0_78%] transition-all duration-500 ease-out sm:flex-[0_0_58%] lg:flex-[0_0_48%]",
                      featured
                        ? "z-20 scale-100 opacity-100"
                        : "z-10 scale-[0.88] cursor-pointer opacity-50 hover:opacity-[0.72]",
                    )}
                    onClick={() => {
                      if (!featured) emblaApi?.scrollTo(i);
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-current={featured ? "true" : undefined}
                    aria-label={img.alt}
                  >
                    <div
                      className={cn(
                        "rounded-lg p-2 transition-shadow duration-500 md:p-3",
                        featured ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.65)] ring-2 ring-primary/55" : "ring-1 ring-border/60",
                      )}
                    >
                      <SlideImage src={img.src} alt={img.alt} isFeatured={featured} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-1 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/75 p-2.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background/90 md:left-2"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-1 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/75 p-2.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background/90 md:right-2"
            aria-label="Próxima foto"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === selected ? "w-7 bg-primary" : "w-2.5 bg-foreground/35 hover:bg-foreground/50",
                )}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FotosSection;
