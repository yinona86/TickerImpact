import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function TestimonialCard({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="p-8 hover-elevate" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <Quote className="w-10 h-10 text-primary mb-4" />
      <p className="text-lg mb-6 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="border-t pt-4">
        <p className="font-semibold" data-testid={`text-author-${author.toLowerCase().replace(/\s+/g, '-')}`}>{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </Card>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CraftyFunnel transformed our digital presence. Their data-driven approach helped us achieve a 3x return on ad spend within just two months.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow SaaS"
    },
    {
      quote: "Working with CraftyFunnel has been a game-changer. They don't just run campaigns—they build growth engines that scale with your business.",
      author: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "EcoStyle Fashion"
    },
    {
      quote: "The level of transparency and insight we get from CraftyFunnel is unmatched. Every decision is backed by data, and the results speak for themselves.",
      author: "Emma Thompson",
      role: "VP of Growth",
      company: "HealthHub"
    }
  ];

  return (
    <section className="py-20 md:py-32" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it—hear from the brands we've helped grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
