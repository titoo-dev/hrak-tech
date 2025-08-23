"use client";

import { useEffect, useRef } from "react";
import { Globe, Smartphone, Monitor, Settings, Sparkles } from "lucide-react";
import getGsap from "@/lib/gsapClient";

const services = [
  {
    icon: Globe,
    title: "Développement de sites vitrines",
    description: "Sites web modernes et responsive qui reflètent votre image de marque et attirent vos clients.",
    color: "from-[#40DECF] to-[#82CFCF]",
    bgColor: "from-[#40DECF]/20 to-[#82CFCF]/10"
  },
  {
    icon: Monitor,
    title: "Développement d'applications web",
    description: "Applications web performantes et intuitives pour digitaliser vos processus métier.",
    color: "from-[#1B473F] to-[#4E9B94]",
    bgColor: "from-[#1B473F]/20 to-[#4E9B94]/10"
  },
  {
    icon: Smartphone,
    title: "Applications mobiles (Android & iOS)",
    description: "Applications mobiles natives et cross-platform pour toucher vos utilisateurs partout.",
    color: "from-[#4E9B94] to-[#9DF4F2]",
    bgColor: "from-[#4E9B94]/20 to-[#9DF4F2]/10"
  },
  {
    icon: Settings,
    title: "ERP (Odoo)",
    description: "Solutions ERP personnalisées avec Odoo pour optimiser la gestion de votre entreprise.",
    color: "from-[#82CFCF] to-[#40DECF]",
    bgColor: "from-[#82CFCF]/20 to-[#40DECF]/10"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any = null;
    let cleanupFns: Array<() => void> = [];

    (async () => {
      const res = await getGsap();
      if (!res) return;
      const { gsap, ScrollTrigger, prefersReduced } = res;
      if (prefersReduced) return; // respect user motion preferences

      gsap.registerPlugin?.(ScrollTrigger);

      ctx = gsap.context(() => {
        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 30
        });

        gsap.set(cardsRef.current, {
          opacity: 0,
          y: 40
        });

        gsap.set(ctaRef.current, {
          opacity: 0,
          y: 20
        });

        // Floating orbs animations
        orbsRef.current.forEach((orb, index) => {
          if (orb) {
            gsap.to(orb, {
              y: index % 2 === 0 ? -20 : -25,
              x: index % 3 === 0 ? 15 : -10,
              rotation: index % 2 === 0 ? 3 : -2,
              duration: 4 + index * 1.5,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true
            });
          }
        });

        // Background gradient animation
        gsap.to(".services-bg-gradient", {
          backgroundPosition: "100% 50%",
          duration: 15,
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
          duration: 0.8,
          ease: "power2.out"
        })
          .to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.3");

        // Cards animation - simple staggered fade-in from bottom
        cardsRef.current.forEach((card, index) => {
          if (card) {
            tl.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            }, `-=${0.4 - index * 0.08}`);
          }
        });

        // CTA animation
        tl.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.2");

      }, sectionRef);

      // track revert
      cleanupFns.push(() => ctx?.revert?.());
    })();

    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-[#1B473F] to-slate-800"
    >
      {/* Animated Background Gradient */}
      <div className="services-bg-gradient absolute inset-0 bg-gradient-to-r from-[#40DECF]/10 via-transparent to-[#9DF4F2]/10" style={{ backgroundSize: '200% 200%' }}></div>

      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#40DECF]/30 to-[#9DF4F2]/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-bl from-[#82CFCF]/25 to-transparent rounded-full blur-2xl"
        ></div>
        <div
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4E9B94]/20 to-transparent rounded-full blur-3xl"
        ></div>

        {/* Small accent orbs */}
        <div
          ref={el => { if (el) orbsRef.current[3] = el; }}
          className="absolute top-32 right-1/3 w-20 h-20 bg-[#40DECF]/40 rounded-full blur-xl"
        ></div>
        <div
          ref={el => { if (el) orbsRef.current[4] = el; }}
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#9DF4F2]/50 rounded-full blur-lg"
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Sparkle decoration */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#40DECF] text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Nos Services</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Solutions
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#9DF4F2] bg-clip-text text-transparent">
              Digitales
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Innovantes</span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Nous transformons vos idées en solutions digitales performantes grâce à notre
            <span className="text-[#40DECF] font-medium"> expertise technique</span> et notre
            <span className="text-[#9DF4F2] font-medium"> approche collaborative</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                ref={el => { if (el) cardsRef.current[index] = el; }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#40DECF]/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`service-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="service-content relative z-10 transition-all duration-500 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#40DECF] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Besoin d'un service personnalisé ?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#40DECF] to-[#82CFCF] text-white px-8 py-4 rounded-full font-semibold hover:from-[#1B473F] hover:to-[#4E9B94] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
          >
            <span className="relative z-10">Parlons de votre projet</span>
            <Sparkles className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />

            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
