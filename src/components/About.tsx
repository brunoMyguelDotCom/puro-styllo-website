import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          MAIS QUE UM BONÉ.<br />
          <span className="text-primary">É IDENTIDADE.</span>
        </h2>
        <div className={`w-16 h-1 bg-primary mx-auto mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`} />
        <p className={`text-muted-foreground text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 font-medium ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          Desde 2017, a Puro Styllo Bonés é referência em bonés e acessórios masculinos. Estilo, qualidade e identidade para quem valoriza presença em cada detalhe.
        </p>
      </div>
    </section>
  );
};

export default About;
