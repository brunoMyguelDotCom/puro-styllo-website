import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const WHATSAPP_LINK =
  "https://wa.me/554488292231?text=Olá! Vim pelo seu site! Gostaria de saber mais sobre os produtos.";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "VIP", href: "#vip" },
  { label: "Localização", href: "#localizacao" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8 h-20 flex items-center justify-between animate-pulse [animation-duration:4s]">
        {/* Logo */}
        <a href="#hero" className="block">
          {/* Logo tema escuro */}
          <img
            src="src/assets/logos/logo_header.png"
            alt="logo puro styllo horizontal"
            width={145}
            height={100}
            className="hidden dark:block"
          />

          {/* Logo tema claro */}
          <img
            src="src/assets/logos/logo_header_tema_claro.png"
            alt="logo puro styllo horizontal"
            width={145}
            height={100}
            className="block dark:hidden"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}

          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            className="text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2"
              >
                {item.label}
              </a>
            ))}

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
