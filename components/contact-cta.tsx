"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Main Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-90" />
          <div className="relative p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Ready to Transform Your Financial Structure?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Get in touch with our experts to discuss how we can help you
                achieve your financial goals through innovative structured
                finance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Open Modal on Button Click */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={openModal} // Fixed the onClick handler
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-[#012061] hover:text-white hover:bg-white/10"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
