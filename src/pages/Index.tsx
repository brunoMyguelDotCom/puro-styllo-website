import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import VipSection from "@/components/VipSection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <VipSection />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
