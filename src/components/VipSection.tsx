import { Crown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VIP_LINK = "https://chat.whatsapp.com/DCgGORdqFZS4xFDIyPwvKO?mode=gi_t";

const VipSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="vip" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <Crown className={`h-12 w-12 text-primary mx-auto mb-6 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`} />
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          GRUPO <span className="text-primary">VIP</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4 font-medium">
          Lançamentos em primeira mão, bazar exclusivo e condições que só quem tá dentro conhece.
        </p>
        <p className="text-foreground font-semibold text-lg mb-8">
          Entra no grupo e sai na frente.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 gap-3">
          <a href={VIP_LINK} target="_blank" rel="noopener noreferrer">
            <Users className="h-5 w-5" />
            Entrar no Grupo VIP
          </a>
        </Button>
      </div>
    </section>
  );
};

export default VipSection;
