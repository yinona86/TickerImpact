import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
}
