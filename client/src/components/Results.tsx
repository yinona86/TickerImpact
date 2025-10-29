import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
  company: string;
  industry: string;
  headline: string;
  metrics: Array<{ label: string; value: string }>;
  description: string;
}

function CaseStudyCard({ company, industry, headline, metrics, description }: CaseStudyProps) {
  return (
    <Card className="p-8 hover-elevate" data-testid={`card-case-study-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{company}</h3>
          <Badge variant="secondary" data-testid={`badge-industry-${industry.toLowerCase().replace(/\s+/g, '-')}`}>{industry}</Badge>
        </div>
        <ArrowUpRight className="w-6 h-6 text-chart-2" />
      </div>
      
      <div className="my-6">
        <p className="text-3xl font-bold text-primary">{headline}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center p-4 bg-accent rounded-md">
            <div className="font-mono text-2xl font-bold mb-1">{metric.value}</div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}

export default function Results() {
  const caseStudies = [
    {
      company: "TechFlow SaaS",
      industry: "Technology",
      headline: "3.2x ROAS in 60 days",
      metrics: [
        { label: "ROAS", value: "3.2x" },
        { label: "Conversions", value: "+215%" },
        { label: "CPL", value: "-42%" }
      ],
      description: "Through strategic campaign restructuring and audience targeting optimization, we helped TechFlow achieve sustainable growth while significantly reducing customer acquisition costs."
    },
    {
      company: "EcoStyle Fashion",
      industry: "E-commerce",
      headline: "5x revenue growth",
      metrics: [
        { label: "Revenue", value: "+400%" },
        { label: "AOV", value: "+67%" },
        { label: "Traffic", value: "+180%" }
      ],
      description: "A comprehensive multi-channel strategy combining paid social, Google Shopping, and email marketing transformed EcoStyle into a market leader in sustainable fashion."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-accent/30" id="results">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Proven Results That Speak
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real success stories from brands we've helped scale through data-driven performance marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
