import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Infrastructure Fund Structuring",
      description:
        "Helped structure a $2B infrastructure fund with innovative financing solutions.",
      category: "Infrastructure",
      impact: "$2B Fund",
    },
    {
      title: "Renewable Energy Project Securitization",
      description:
        "Securitized renewable energy assets worth $500M for sustainable funding.",
      category: "Green Finance",
      impact: "$500M Deal",
    },
    {
      title: "Real Estate Portfolio Optimization",
      description:
        "Restructured a $1.5B real estate portfolio for enhanced returns.",
      category: "Real Estate",
      impact: "$1.5B Portfolio",
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="case-studies"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Case Studies</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our success stories and learn how we've helped organizations
          achieve their financial objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Card
            key={study.title}
            className="p-6 hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge variant="secondary">{study.category}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {study.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-primary">
                  {study.impact}
                </span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}