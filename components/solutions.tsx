import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  PieChart,
  LineChart,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      id: "securitization",
      title: "Securitization",
      description: "Transform illiquid assets into tradable securities",
      features: [
        "Asset pool analysis and structuring",
        "Credit enhancement strategies",
        "Cash flow modeling",
        "Risk tranching",
      ],
      icon: BarChart,
    },
    {
      id: "structured-products",
      title: "Structured Products",
      description: "Custom financial instruments for specific needs",
      features: [
        "Derivative-based solutions",
        "Yield enhancement structures",
        "Capital protection strategies",
        "Hybrid securities",
      ],
      icon: PieChart,
    },
    {
      id: "project-finance",
      title: "Project Finance",
      description: "Long-term financing for major projects",
      features: [
        "Infrastructure financing",
        "Public-private partnerships",
        "Risk allocation strategies",
        "Complex deal structuring",
      ],
      icon: LineChart,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="solutions">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          <span className="gradient-text">Tailored</span> Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our specialized structured finance solutions designed to meet
          your specific needs.
        </p>
      </div>

      <Tabs defaultValue="securitization" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {solutions.map((solution) => (
            <TabsTrigger
              key={solution.id}
              value={solution.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {solution.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {solutions.map((solution) => (
          <TabsContent key={solution.id} value={solution.id}>
            <Card className="p-8 bg-gradient-to-br from-background via-background to-accent/5">
              <div className="flex items-start gap-6">
                <div className="rounded-lg bg-primary/10 p-4">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {solution.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-base"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}