const timelineData = [
  {
    year: "2006",
    title: "A Semente",
    description:
      "Criação da marca DaNatureza como projeto de Planejamento Estratégico no curso de Gestão de Agronegócio da UNIUBE, Uberaba/MG.",
  },
  {
    year: "2006–2023",
    title: "O Amadurecimento",
    description:
      "Entre idas e vindas, a marca DaNatureza aguardou o momento certo para ganhar vida e encontrar o seu propósito.",
  },
  {
    year: "Nov 2023",
    title: "A Descoberta",
    description:
      "Visita à Fazenda do Tião Lunga, Serra da Canastra, Delfinópolis/MG. Início da produção com destilação no alambique Kura Trimura e fermentação no milho.",
  },
  {
    year: "2023–2026",
    title: "O Envelhecimento",
    description:
      "A cachaça descansa em barril de Amburana enquanto a identidade visual e a marca DaNatureza são criadas e preparadas para o lançamento.",
  },
  {
    year: "Fev 2026",
    title: "O Lançamento",
    description:
      "Edição Especial de Lançamento: aproximadamente 60 garrafas de 750ml de cachaça artesanal envelhecida. Um brinde DaNatureza!",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-cream text-center mb-16 tracking-wide">
          Nossa <span className="text-primary">Trajetória</span>
        </h2>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:-translate-x-0.5" />

          {timelineData.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-lg shadow-primary/30" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[45%] ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="inline-block text-primary font-serif text-xl md:text-2xl font-bold mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
