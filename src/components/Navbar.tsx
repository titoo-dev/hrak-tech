"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useWebsiteConfig } from "@/hooks/useWebsiteConfig";

interface NavButtonProps {
  onClick: () => void;
  isScrolled: boolean;
  children: React.ReactNode;
  className?: string;
}

function NavButton({ onClick, isScrolled, children, className }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-all duration-300",
        isScrolled
          ? "text-gray-900 hover:text-[#1B473F] hover:bg-[#40DECF]/20"
          : "text-white hover:text-[#40DECF] hover:bg-white/30 drop-shadow-sm",
        className
      )}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const config = useWebsiteConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
      isScrolled
        ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
        : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Image
              src={config.company.logo}
              alt={config.company.name}
              width={120}
              height={40}
              className={cn(
                "transition-all duration-300",
                isScrolled
                  ? "brightness-100"
                  : "brightness-0 invert drop-shadow-lg"
              )}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              {config.navigation.items.map((item) => (
                <NavButton
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  isScrolled={isScrolled}
                  className="rounded-full px-6 py-2.5"
                >
                  {item.label}
                </NavButton>
              ))}
            </div>

            {/* Contact CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "ml-4 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-none",
                isScrolled
                  ? "bg-gradient-to-r from-[#40DECF] to-[#1B473F] text-white shadow-[#40DECF]/25 hover:shadow-[#40DECF]/40"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30"
              )}
            >
              {config.navigation.cta.text}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95",
                isScrolled
                  ? "text-gray-700 bg-white/50 backdrop-blur-sm border border-gray-200/50"
                  : "text-white bg-white/20 backdrop-blur-sm border border-white/30"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/20 shadow-xl shadow-black/5 p-2 space-y-1">
              {config.navigation.items.map((item, index) => (
                <MobileNavButton
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  icon={index === 0 ? "🚀" : "⚡"}
                >
                  {item.label}
                </MobileNavButton>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-3 p-4 bg-gradient-to-r from-[#40DECF] to-[#1B473F] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[0.98] active:scale-95"
              >
                {config.navigation.cta.text}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface MobileNavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon: string;
}

function MobileNavButton({ onClick, children, icon }: MobileNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-3 p-4 text-left text-gray-700 hover:text-[#40DECF] hover:bg-[#40DECF]/5 rounded-xl transition-all duration-300 font-medium"
    >
      <span className="text-lg">{icon}</span>
      <span>{children}</span>
    </button>
  );
}
