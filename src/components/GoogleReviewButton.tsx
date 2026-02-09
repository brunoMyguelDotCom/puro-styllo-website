import { Star } from "lucide-react";

export function GoogleReviewButton() {
  return (
    <a
      href="https://search.google.com/local/writereview?placeid=ChIJJaKN8DbR7JQR3HcYPTvcYKs"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        inline-flex items-center gap-3
        rounded-lg px-6 py-3
        bg-primary text-primary-foreground
        border border-border
        shadow-md
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-xl
        hover:brightness-110
        active:scale-[0.97]
      "
    >
      {/* Ícone estrela */}
      <Star className="h-5 w-5 fill-current opacity-90 group-hover:rotate-12 transition-transform" />

      {/* Texto */}
      <span className="font-semibold tracking-wide">
        Avalie no Google
      </span>
    </a>
  );
}
