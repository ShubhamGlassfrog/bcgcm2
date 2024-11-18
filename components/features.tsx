import {
  LineChart,
  PieChart,
  Wallet,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: LineChart,
      title: "Securitization",
      description:
        "Transform illiquid assets into marketable securities through innovative structuring solutions.",
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description:
        "Optimize your investment portfolio with sophisticated risk-return analysis.",
    },
    {
      icon: Wallet,
      title: "Asset-Backed Securities",
      description:
        "Create value through strategic ABS issuance and management.",
    },
    {
      icon: Building2,
      title: "Real Estate Finance",
      description:
        "Specialized solutions for commercial and residential real estate financing.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          <span className="gradient-text">Comprehensive</span> Financial Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our range of structured finance solutions designed to meet
          your complex financial needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group relative overflow-hidden p-6 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="rounded-lg bg-primary/10 p-3 w-fit">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <ArrowUpRight className="h-5 w-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}