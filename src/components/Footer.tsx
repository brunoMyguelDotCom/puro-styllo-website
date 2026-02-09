import { Instagram, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/554488292231?text=Olá! Vim pelo seu site! Gostaria de saber mais sobre os produtos.";
const VIP_LINK = "https://chat.whatsapp.com/DCgGORdqFZS4xFDIyPwvKO?mode=gi_t";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            {/* Logo tema escuro */}
            <img
              src="/logo_footer.png"
              alt="logo puro styllo"
              width={170}
              height={120}
              className="hidden dark:block mx-auto"
            />

            {/* Logo tema claro */}
            <img
              src="/logo_footer_tema_claro.png"
              alt="logo puro styllo"
              width={170}
              height={120}
              className="block dark:hidden mx-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button asChild variant="outline" className="border-border hover:bg-muted gap-2 w-full sm:w-auto">
              <a href="https://instagram.com/purostyllobones" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2 w-full sm:w-auto">
              <a href={VIP_LINK} target="_blank" rel="noopener noreferrer">
                <Users className="h-5 w-5" />
                Grupo VIP
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Puro Styllo Bonés. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
