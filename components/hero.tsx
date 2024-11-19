import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="gradient-bg text-[#012061] relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6  lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Transform Your{" "}
              <span className="text-[#012061]">Financial Future</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#012061]">
              Expert solutions in structured finance, securitization, and complex
              financial instruments. We help organizations optimize capital
              structure and achieve their financial goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button 
                size="lg" 
                className="bg-[#012061]  text-white hover:border-[#012061] hover:text-[#012061] hover-bg-white btn-animate"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#012061]  text-[#012061] hover:bg-white/10 btn-animate"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="animate-float">
            <Image
              src="/sf.png"
              alt="Financial Analysis"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">

</div>

    </div>
  );
}