import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from '../assets/generated_images/Marketing_team_collaboration_workspace_5273c014.png'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-end overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-primary/20" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating logo/brand */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="text-white">Crafty</span>
          <span className="text-primary">Funnel</span>
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter mb-6 leading-[0.95]" data-testid="text-hero-headline">
              <span className="text-white">Performance</span><br />
              <span className="text-white">Marketing</span><br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                That Converts
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Bold strategies. Creative execution. Measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="gap-2 px-10 py-7 text-lg rounded-full bg-primary hover:bg-primary/90 border-2 border-primary shadow-[0_0_50px_-12px] shadow-primary/50 group" 
                data-testid="button-contact-us"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 px-10 py-7 text-lg rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10 border-2 border-white/20 text-white"
                onClick={scrollToServices}
                data-testid="button-view-services"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
