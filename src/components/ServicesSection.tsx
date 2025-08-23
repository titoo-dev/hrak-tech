"use client";

import { Globe, Smartphone, Monitor, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Développement de sites vitrines",
    description: "Sites web modernes et responsive qui reflètent votre image de marque et attirent vos clients.",
    color: "from-[#40DECF] to-[#82CFCF]"
  },
  {
    icon: Monitor,
    title: "Développement d'applications web",
    description: "Applications web performantes et intuitives pour digitaliser vos processus métier.",
    color: "from-[#1B473F] to-[#4E9B94]"
  },
  {
    icon: Smartphone,
    title: "Applications mobiles (Android & iOS)",
    description: "Applications mobiles natives et cross-platform pour toucher vos utilisateurs partout.",
    color: "from-[#4E9B94] to-[#9DF4F2]"
  },
  {
    icon: Settings,
    title: "ERP (Odoo)",
    description: "Solutions ERP personnalisées avec Odoo pour optimiser la gestion de votre entreprise.",
    color: "from-[#82CFCF] to-[#40DECF]"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B473F] mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous transformons vos idées en solutions digitales innovantes grâce à notre expertise technique et notre approche collaborative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1B473F] mb-4 group-hover:text-[#40DECF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Besoin d'un service personnalisé ?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#40DECF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1B473F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Parlons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
}
