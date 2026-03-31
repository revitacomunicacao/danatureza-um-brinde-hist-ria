import bottleImg from "@/assets/images/carrossel (4).jpg";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-cream text-center mb-12 md:mb-16 tracking-wide">
          Sobre a <span className="text-primary">DaNatureza</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="order-2 md:order-1 flex justify-center md:justify-start md:sticky md:top-24">
            <img
              src={bottleImg}
              alt="Garrafa DaNatureza entre canaviais — cachaça artesanal envelhecida em barril de Amburana"
              className="w-full max-w-md rounded-xl shadow-2xl object-contain"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-foreground/85 text-base md:text-lg leading-relaxed font-light">
            <p>
              A marca <strong className="text-primary font-semibold">DaNatureza</strong> foi criada em{" "}
              <strong>2006</strong> com objetivo de montar um trabalho de "Planejamento Estratégico" para um
              produto e efetuar o lançamento no mercado no curso de Gestão de Agronegócio da UNIUBE em
              Uberaba/MG. O foco seria analisar e compreender o antes, dentro e depois da porteira.
            </p>

            <p>
              O trabalho recebeu elogios do professor e seria possível de se concretizar, ou seja, ir
              para a prática, mas infelizmente não aconteceu.
            </p>

            <p>
              Entre idas e vindas e o que fazer com a marca DaNatureza, em{" "}
              <strong>novembro de 2023</strong>, surgiu uma oportunidade diante de uma visita na Fazenda do
              Tião Lunga, Serra da Canastra, Delfinópolis/MG. Ali havia uma produção recente de "pinga"
              que foi destilada no alambique <em>"Kura Trimura"</em> com fermentação no milho. Com apoio
              e incentivo do Sr. Tião do Lunga, foram disponibilizados alguns litros e colocado para
              envelhecimento em barril de Amburana.
            </p>

            <p>
              Entre novembro de 2023 e fevereiro de 2026, foi suficiente para preparar, organizar e
              criar a identidade da marca DaNatureza.
            </p>

            <p>
              Em sua distribuição <strong className="text-primary">"Especial de Lançamento"</strong>,
              quantidade limitada em garrafas de 750ml.{" "}
              <span className="text-primary italic font-serif text-xl">Um brinde DaNatureza.</span>
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-3 mt-8 bg-muted/30 rounded-r-lg italic text-muted-foreground text-sm">
              "O envelhecimento da cachaça em barril de amburana leva, no mínimo, 1 (um) ano para ser
              classificada como 'envelhecida', sendo 6 meses o tempo mínimo para notar amaciar."
              <br />
              <span className="text-xs not-italic">
                Fonte: blog.cachacarianacional.com.br
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
