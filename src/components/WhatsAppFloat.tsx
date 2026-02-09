import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/554488292231?text=Olá! Vim pelo seu site! Gostaria de saber mais sobre os produtos.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg shadow-primary/30 transition-transform hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
