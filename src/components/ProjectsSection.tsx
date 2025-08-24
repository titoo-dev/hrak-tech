"use client";

import { useRef } from "react";
import { ExternalLink, Smartphone, Globe, Building, Sparkles, Star, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const categoryGlows = {
  mobile: "from-[#40DECF]/20 to-[#82CFCF]/10",
  web: "from-[#1B473F]/20 to-[#4E9B94]/10",
  erp: "from-[#4E9B94]/20 to-[#9DF4F2]/10"
};

const categoryTitles = {
  mobile: "Applications Mobiles",
  web: "Sites Web",
  erp: "Solutions ERP"
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement[]>([]);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) return;

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set(categoriesRef.current, {
      opacity: 0,
      y: 80,
      scale: 0.9
    });

    gsap.set(projectCardsRef.current, {
      opacity: 0,
      y: 30
    });

    gsap.set(ctaRef.current, {
      opacity: 0,
      y: 40
    });

    // Floating stars animation
    starsRef.current.forEach((star, index) => {
      if (star) {
        gsap.to(star, {
          y: `random(-20, -40)`,
          x: `random(-15, 15)`,
          rotation: `random(-90, 90)`,
          scale: `random(0.8, 1.2)`,
          duration: `random(3, 6)`,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        });
      }
    });

    // Floating orbs animations
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          y: index % 2 === 0 ? -30 : -35,
          x: index % 3 === 0 ? 25 : -20,
          rotation: index % 2 === 0 ? 8 : -5,
          duration: 6 + index * 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    });

    // Background gradient animation
    gsap.to(".projects-bg-gradient", {
      backgroundPosition: "100% 50%",
      duration: 25,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Main scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Title and subtitle animation
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    // Categories animation
    categoriesRef.current.forEach((category, index) => {
      if (category) {
        tl.to(category, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, `-=${0.6 - index * 0.2}`);
      }
    });

    // Project cards animation - simple staggered fade-in
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, `-=${0.3 - index * 0.06}`);
      }
    });

    // CTA animation
    tl.to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.2");
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200"
    >
      {/* Animated Background Gradient */}
      <div className="projects-bg-gradient absolute inset-0 bg-gradient-to-r from-[#40DECF]/5 via-transparent to-[#9DF4F2]/5" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-[#40DECF]/15 to-[#9DF4F2]/10 rounded-full blur-3xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute bottom-40 left-32 w-72 h-72 bg-gradient-to-bl from-[#82CFCF]/12 to-transparent rounded-full blur-2xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4E9B94]/8 to-transparent rounded-full blur-3xl"
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Projects badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#40DECF]/20 text-[#1B473F] text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>Portfolio</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B473F] mb-6 leading-tight"
          >
            Projets
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#82CFCF] bg-clip-text text-transparent">
              Réalisés
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">avec Excellence</span>
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez un aperçu de nos 
            <span className="text-[#40DECF] font-medium"> réalisations innovantes</span> qui témoignent de notre 
            <span className="text-[#1B473F] font-medium"> expertise</span> et de notre engagement envers l'excellence.
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
                ref={el => { if (el) categoriesRef.current[categoryIndex] = el; }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`relative inline-flex items-center gap-3 border-2 border-[#40DECF] text-[#1B473F] px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-[#40DECF]/5 transition-colors duration-300`}>
                    <IconComponent className="h-6 w-6 text-[#40DECF]" />
                    <h3 className="text-xl font-bold">{categoryTitle}</h3>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project, index) => {
                    const cardIndex = categoryIndex * 10 + index; // Unique index for each card
                    return (
                      <div
                        key={project.name}
                        ref={el => { if (el) projectCardsRef.current[cardIndex] = el; }}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:border-[#40DECF]/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Project Icon */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${colorGradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>

                        {/* Project Info */}
                        <div className="group-hover:-translate-y-1 transition-transform duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-[#1B473F] group-hover:text-[#40DECF] transition-colors duration-300">
                              {project.name}
                            </h4>
                            {'url' in project && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#40DECF] transition-colors duration-300 group-hover:scale-110 transform"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            )}
                          </div>

                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-4">
                            {project.description}
                          </p>

                          {'url' in project && (
                            <div className="pt-4 border-t border-gray-100">
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#40DECF] hover:text-[#1B473F] font-medium transition-colors duration-300 group"
                              >
                                <span>Visiter le site</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className="text-center mt-16 bg-gradient-to-r from-[#1B473F] to-[#4E9B94] rounded-2xl p-12 text-white relative overflow-hidden"
        >
          {/* CTA Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#40DECF]/10 via-transparent to-[#9DF4F2]/10" style={{backgroundSize: '200% 200%'}}></div>
          <div className="absolute top-4 right-4">
            <Sparkles className="h-8 w-8 text-[#40DECF]/30" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Star className="h-6 w-6 text-[#9DF4F2]/30 fill-current" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Votre projet sera le prochain
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et concrétisez vos ambitions digitales avec notre expertise reconnue.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative inline-flex items-center gap-2 bg-[#40DECF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1B473F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
            >
              <span className="relative z-10">Démarrer mon projet</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
