import { 
  MessageSquare, 
  Search, 
  Sparkles, 
  BarChart3,
  Lightbulb,
  Users
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  identifier: string;
  index: number;
}

function ServiceCard({ icon, title, description, identifier, index }: ServiceCardProps) {
  const colors = [
    "from-primary/20 to-primary/5 border-primary/30",
    "from-accent/20 to-accent/5 border-accent/30",
    "from-chart-3/20 to-chart-3/5 border-chart-3/30",
    "from-chart-4/20 to-chart-4/5 border-chart-4/30",
    "from-chart-5/20 to-chart-5/5 border-chart-5/30",
    "from-primary/20 to-accent/5 border-primary/30"
  ];
  
  const iconColors = [
    "text-primary",
    "text-accent", 
    "text-chart-3",
    "text-chart-4",
    "text-chart-5",
    "text-primary"
  ];

  return (
    <Card 
      className={`p-8 lg:p-10 group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${colors[index]} border-2 relative overflow-hidden`}
      data-testid={`card-service-${identifier}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className={`mb-6 ${iconColors[index]}`}>
          {icon}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{title}</h3>
        <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {identifier}
          </div>
          <div className={`w-8 h-0.5 ${iconColors[index]} bg-current group-hover:w-16 transition-all duration-300`} />
        </div>
      </div>
    </Card>
  );
}

export default function Services() {
  const services = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Paid Social Media",
      description: "Strategic campaigns across Facebook, Instagram, LinkedIn, and TikTok that drive engagement and conversions with precision targeting.",
      identifier: "SOCIAL_001"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Paid Search",
      description: "High-performance Google Ads and Bing campaigns optimized to capture high-intent customers at the perfect moment.",
      identifier: "SEARCH_002"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Creative Production",
      description: "Compelling ad creative and content that captures attention, tells your story, and drives action across all channels.",
      identifier: "CREATIVE_003"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Analytics & Attribution",
      description: "Advanced tracking and measurement systems that provide clear visibility into campaign performance and ROI.",
      identifier: "ANALYTICS_004"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Strategy & Consulting",
      description: "Expert guidance on marketing strategy, channel mix, and growth initiatives backed by data and industry expertise.",
      identifier: "STRATEGY_005"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Affiliate Marketing",
      description: "Performance-based partnership programs that expand your reach and drive incremental revenue through trusted affiliates.",
      identifier: "AFFILIATE_006"
    }
  ];

  return (
    <section className="py-24 md:py-40 relative" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">What We Do</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end performance marketing solutions designed to scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                identifier={service.identifier}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
