import { MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GoogleReviewButton } from "./GoogleReviewButton";

const Location = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="localizacao" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            NOSSA <span className="text-primary">LOJA</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">Vem conhecer pessoalmente.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={`flex flex-col justify-center gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-bold text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Shopping Center Brasil – Loja 115<br />
                  Avenida Brasil, 3434
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-bold text-lg mb-1">
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground">
                  Segunda a sexta-feira: das 9h às 18h <br /> <br />
                  Sábados: <br />
                  • 1º e 2º sábados do mês: das 9h às 18h <br />
                  • Demais sábados: das 9h às 13h
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg overflow-hidden border border-border h-[300px] md:h-[400px] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.110514718818!2d-51.938029788166936!3d-23.420374656341448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd136f08da225%3A0xab60dc3b3d1877dc!2sPuro%20Styllo%20Bon%C3%A9s!5e0!3m2!1spt-BR!2sbr!4v1770575970699!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
          <div className={`mt-14 w-full flex justify-center transition-opacity duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <GoogleReviewButton />
          </div>
      </div>
    </section>
  );
};

export default Location;
