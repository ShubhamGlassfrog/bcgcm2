import Hero from '@/components/hero';
import Features from '@/components/features';
import Solutions from '@/components/solutions';
import CaseStudies from '@/components/case-studies';
import ContactCTA from '@/components/contact-cta';
import AboutUs from '@/components/AboutUs';
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <AboutUs />
      <Features />
      <Solutions />
      <CaseStudies />
      <ContactCTA />
    </div>
  );
}