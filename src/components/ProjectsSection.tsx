"use client";

import { ExternalLink, Smartphone, Globe, Building } from "lucide-react";

const projects = {
  mobile: [
    { name: "La Parole", description: "Application de streaming religieux" },
    { name: "Ariary", description: "Application de gestion financière" },
    { name: "Devinette", description: "Jeu de devinettes interactif" },
    { name: "Sedera", description: "Plateforme communautaire" },
    { name: "Ezango", description: "Application de e-commerce" }
  ],
  web: [
    {
      name: "Ezango",
      url: "https://ezango.app",
      description: "Plateforme e-commerce moderne et intuitive"
    },
    {
      name: "L'Aigle de Libreville",
      url: "https://laigledelibreville.com",
      description: "Site web institutionnel et informatif"
    },
    {
      name: "Mes Convictions",
      url: "https://mesconvictions.com",
      description: "Plateforme d'expression et de débat"
    }
  ],
  erp: [
    {
      name: "Im'tsar",
      description: "Système ERP complet pour la gestion d'entreprise"
    }
  ]
};

const categoryIcons = {
  mobile: Smartphone,
  web: Globe,
  erp: Building
};

const categoryColors = {
  mobile: "from-[#40DECF] to-[#82CFCF]",
  web: "from-[#1B473F] to-[#4E9B94]",
  erp: "from-[#4E9B94] to-[#9DF4F2]"
};

const categoryTitles = {
  mobile: "Applications Mobiles",
  web: "Sites Web",
  erp: "Solutions ERP"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B473F] mb-4">
            Quelques projets réalisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez un aperçu de nos réalisations qui témoignent de notre expertise et de notre engagement envers l'excellence.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(projects).map(([category, projectList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            const colorGradient = categoryColors[category as keyof typeof categoryColors];
            const categoryTitle = categoryTitles[category as keyof typeof categoryTitles];

            return (
              <div
                key={category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${colorGradient} text-white px-6 py-3 rounded-full`}>
                    <IconComponent className="h-6 w-6" />
                    <h3 className="text-xl font-bold">{categoryTitle}</h3>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectList.map((project, index) => (
                    <div
                      key={project.name}
                      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-[#40DECF]"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                    >
                      {/* Project Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${colorGradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>

                      {/* Project Info */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-[#1B473F] group-hover:text-[#40DECF] transition-colors duration-300">
                          {project.name}
                        </h4>
                        {'url' in project && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#40DECF] transition-colors duration-300 group-hover:scale-110"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {project.description}
                      </p>

                      {'url' in project && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#40DECF] hover:text-[#1B473F] font-medium transition-colors duration-300"
                          >
                            Visiter le site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}

                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#1B473F] to-[#4E9B94] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Votre projet sera le prochain
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez nos clients satisfaits et concrétisez vos ambitions digitales avec notre expertise.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#40DECF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1B473F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Démarrer mon projet
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
