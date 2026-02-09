import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cap.jpg";

const WHATSAPP_LINK = "https://wa.me/554488292231?text=Olá! Vim pelo seu site! Gostaria de saber mais sobre os produtos.";
const VIP_LINK = "https://chat.whatsapp.com/DCgGORdqFZS4xFDIyPwvKO?mode=gi_t";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">


        <div style={{ display: "flex", justifyContent: "center", marginBottom: 80 }}>
          <img src="src\assets\logos\logo_hero.png" alt="logotipo puro styllo" width="320" height="100" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
          SEU ESTILO.<br />
          <span className="text-primary">SUA ATITUDE.</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Fale no WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-3">
            <a href={VIP_LINK} target="_blank" rel="noopener noreferrer">
              <Users className="h-5 w-5" />
              Grupo VIP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
