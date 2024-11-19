"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigation = [
    { name: "Solutions", href: "#solutions" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
    <nav className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 animate-scale">
              <Image
                src="/bcgcm.jpeg"
                alt="BCGCM Logo"
                width={200}
                height={200}
                className="rounded"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-white/80 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-white text-[#012061] hover:bg-white/90 btn-animate animate-fade-in" onClick={openModal} >
              Contact Us
            </Button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-white text-[#012061] hover:bg-white/90 btn-animate">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
      </nav>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      </>
  );
};

export default Navbar;