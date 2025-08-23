"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1B473F] text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#40DECF] hover:bg-[#82CFCF] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-gradient-white">
                HRak Tech
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Votre partenaire de confiance pour transformer vos idées en solutions digitales innovantes. 
              Expertise technique, approche collaborative, résultats durables.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#40DECF] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#40DECF] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#40DECF] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@hraktech.com"
                className="bg-white/10 hover:bg-[#40DECF] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#40DECF] mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-[#40DECF] transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("technologies")}
                  className="text-gray-300 hover:text-[#40DECF] transition-colors duration-300 text-left"
                >
                  Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-[#40DECF] transition-colors duration-300 text-left"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-[#40DECF] transition-colors duration-300 text-left"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-[#40DECF] transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#40DECF] mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Sites vitrines</span>
              </li>
              <li>
                <span className="text-gray-300">Applications web</span>
              </li>
              <li>
                <span className="text-gray-300">Apps mobiles</span>
              </li>
              <li>
                <span className="text-gray-300">Solutions ERP</span>
              </li>
              <li>
                <span className="text-gray-300">Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 HRak Tech. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#40DECF] transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-[#40DECF] transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-[#40DECF] transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient-white {
          background: linear-gradient(135deg, #40DECF, #9DF4F2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </footer>
  );
}
