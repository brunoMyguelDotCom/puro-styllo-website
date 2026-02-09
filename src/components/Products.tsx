import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import productCaps from "@/assets/product-caps.jpg";
import productGlasses from "@/assets/product-glasses.jpg";
import productBags from "@/assets/product-bags.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

const WHATSAPP_LINK = "https://wa.me/554488292231?text=Olá! Vim pelo seu site! Gostaria de saber mais sobre os produtos.";

const products = [
  {
    title: "Bonés",
    subtitle: "Produto principal",
    image: productCaps,
    featured: true,
  },
  {
    title: "Óculos",
    subtitle: "Visão com atitude",
    image: productGlasses,
    featured: false,
  },
  {
    title: "Bolsas",
    subtitle: "Corre com estilo",
    image: productBags,
    featured: false,
  },
  {
    title: "Acessórios",
    subtitle: "Detalhes que marcam",
    image: productAccessories,
    featured: false,
  },
];

const Products = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex justify-center mb-8 animate-pulse [animation-duration:4s]">
            <img src="/logo_caveira.png" alt="logo puro styllo caveira" width="56" height="100" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">PRODUTOS</span>
          </h2>

          <p className="text-muted-foreground text-lg font-medium">Tudo que você precisa pra fechar o visual.</p>
        </div>

        <div className="mb-6">
          <ProductCard product={products[0]} delay={0} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(1).map((product, i) => (
            <ProductCard key={product.title} product={product} delay={(i + 1) * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: (typeof products)[0];
  delay?: number;
}

const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
  ref={ref}
  className={`relative overflow-hidden rounded-lg group transition-all duration-700 ${
    product.featured ? "min-h-[400px] md:min-h-[500px]" : "min-h-[300px]"
  } ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
  style={{ transitionDelay: `${delay}ms` }}
>
  {/* Imagem */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
    style={{ backgroundImage: `url(${product.image})` }}
  />

  {/* Overlay FIXO */}
  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

  {/* Conteúdo */}
  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
    {product.featured && (
      <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 w-fit">
        Destaque
      </span>
    )}

    <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-1">
      {product.subtitle}
    </p>

    <h3 className={`font-bold text-white mb-2 ${
      product.featured ? "text-4xl md:text-5xl" : "text-3xl"
    }`}>
      {product.title}
    </h3>

    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-fit">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        Quero o meu
      </a>
    </Button>
  </div>
</div>
  );
};

export default Products;
