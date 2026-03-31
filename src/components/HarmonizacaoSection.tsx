import { UtensilsCrossed, Candy, Beef } from "lucide-react";

const suggestions = [
  {
    icon: UtensilsCrossed,
    title: "Queijos e tábuas",
    description:
      "A cachaça envelhecida em barril de Amburana costuma trazer notas doces, florais e especiarias. Harmoniza bem com queijos de média intensidade, como o Canastra da região, gruyère ou um mix de curados suaves em uma tábua com frutas secas.",
  },
  {
    icon: Beef,
    title: "Carnes suínas e defumados",
    description:
      "Pratos com porco — costela assada, barriga confitada ou lombo — e cortes levemente defumados conversam com o caráter amanteigado e o calor da madeira. O dulçor da bebida equilibra gorduras e realça molhos adocicados ou com especiarias.",
  },
  {
    icon: Candy,
    title: "Doces e sobremesas",
    description:
      "Sobremesas com canela, doce de leite, brigadeiro gourmet ou tortas de frutas amarelas realçam o perfil aromático da Amburana. Sirva em taça pequena, em goles lentos, para fechar a refeição com elegância.",
  },
];

const HarmonizacaoSection = () => {
  return (
    <section id="harmonizacao" className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-cream text-center mb-4 tracking-wide">
          <span className="text-primary">Harmonização</span> com alimentos
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-base md:text-lg font-light leading-relaxed">
          Sugestões para acompanhar a DaNatureza, pensando no envelhecimento em barril de Amburana — notas que lembram baunilha,
          canela e flores.
        </p>

        <ul className="grid gap-8 md:grid-cols-3">
          {suggestions.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-xl border border-border bg-card/50 p-6 md:p-8 flex flex-col items-center text-center shadow-lg shadow-black/20"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HarmonizacaoSection;
