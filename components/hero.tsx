import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="gradient-bg text-[#012061] relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6  sm:py-32 lg:px-8">
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
  <svg
    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="gray-pattern"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M100 200V.5M.5 .5H200" fill="none" stroke="gray" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#gray-pattern)"
    />
  </svg>
</div>

    </div>
  );
}