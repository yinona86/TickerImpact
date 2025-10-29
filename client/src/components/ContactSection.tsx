import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Clock, Mail, Users, Zap, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 md:py-40 relative overflow-hidden" id="contact">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-accent">Get In Touch</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Let's Build<br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your marketing? Let's talk about driving real results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 lg:p-10 border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 text-lg bg-background/50 border-border/50 focus:border-primary"
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-14 text-lg bg-background/50 border-border/50 focus:border-primary"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-14 text-lg bg-background/50 border-border/50 focus:border-primary"
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger id="service" className="h-14 text-lg bg-background/50 border-border/50" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paid-social">Paid Social Media</SelectItem>
                      <SelectItem value="paid-search">Paid Search</SelectItem>
                      <SelectItem value="creative">Creative Production</SelectItem>
                      <SelectItem value="analytics">Analytics & Attribution</SelectItem>
                      <SelectItem value="strategy">Strategy & Consulting</SelectItem>
                      <SelectItem value="affiliate">Affiliate Marketing</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and challenges..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-lg bg-background/50 border-border/50 focus:border-primary resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-7 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_50px_-12px] shadow-primary/50 group" 
                  data-testid="button-submit"
                >
                  Get My Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="p-8 border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5 hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Lightning Fast Response</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We respond within 24 hours. Usually much faster.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Trusted by 50+ Brands</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Join leading companies already growing with CraftyFunnel.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-chart-3/20 bg-gradient-to-br from-card to-chart-3/5 hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-chart-3/20">
                    <Mail className="w-8 h-8 text-chart-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Prefer email? We're here to help.
                    </p>
                    <a 
                      href="mailto:hello@craftyfunnel.com" 
                      className="text-chart-3 hover:underline font-medium inline-flex items-center gap-2"
                    >
                      hello@craftyfunnel.com
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
