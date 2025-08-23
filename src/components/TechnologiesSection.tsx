"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Code, Zap, Layers } from "lucide-react";
import getGsap from "@/lib/gsapClient";

const technologies = [
  {
    name: "Next.js",
    description: "Framework React pour des applications web performantes et SEO-friendly",
    logo: "⚛️",
    color: "from-black to-gray-800",
    glowColor: "from-blue-500/20 to-cyan-500/20",
    accent: "#61dafb"
  },
  {
    name: "NestJS",
    description: "Framework Node.js évolutif pour construire des APIs robustes et maintenables",
    logo: "🚀",
    color: "from-red-500 to-pink-600",
    glowColor: "from-red-500/20 to-pink-500/20",
    accent: "#e0234e"
  },
  {
    name: "Flutter",
    description: "SDK de Google pour créer des applications mobiles natives multiplateformes",
    logo: "📱",
    color: "from-blue-400 to-blue-600",
    glowColor: "from-blue-400/20 to-cyan-400/20",
    accent: "#0175c2"
  },
  {
    name: "Odoo",
    description: "Plateforme ERP open-source pour gérer tous les aspects de votre entreprise",
    logo: "🏢",
    color: "from-purple-500 to-indigo-600",
    glowColor: "from-purple-500/20 to-indigo-500/20",
    accent: "#875a7b"
  }
];

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const additionalInfoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

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
          y: 50
        });

        gsap.set(additionalInfoRef.current, {
          opacity: 0,
          y: 30
        });

        // Floating particles animation
        particlesRef.current.forEach((particle, index) => {
          if (particle) {
            gsap.to(particle, {
              y: `random(-30, -50)`,
              x: `random(-20, 20)`,
              rotation: `random(-180, 180)`,
              duration: `random(3, 6)`,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true,
              delay: index * 0.2
            });
          }
        });

        // Floating orbs animations
        orbsRef.current.forEach((orb, index) => {
          if (orb) {
            gsap.to(orb, {
              y: index % 2 === 0 ? -25 : -30,
              x: index % 3 === 0 ? 20 : -15,
              rotation: index % 2 === 0 ? 5 : -3,
              duration: 5 + index * 1.2,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true
            });
          }
        });

        // Background gradient animation
        gsap.to(".tech-bg-gradient", {
          backgroundPosition: "100% 50%",
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true
        });

        // Code animation
        gsap.to(".floating-code", {
          y: -20,
          duration: 3,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.5
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

        // Cards animation - simple fade and slide up
        cardsRef.current.forEach((card, index) => {
          if (card) {
            tl.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            }, `-=${0.4 - index * 0.1}`);
          }
        });

        // Additional info animation
        tl.to(additionalInfoRef.current, {
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
      id="technologies"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
    >
      {/* Animated Background Gradient */}
      <div className="tech-bg-gradient absolute inset-0 bg-gradient-to-r from-[#9DF4F2]/15 via-transparent to-[#40DECF]/15" style={{ backgroundSize: '200% 200%' }}></div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-code absolute top-20 left-20 text-[#40DECF]/30 text-2xl font-mono">{'<>'}</div>
        <div className="floating-code absolute top-32 right-32 text-[#82CFCF]/30 text-xl font-mono">{'</>'}</div>
        <div className="floating-code absolute bottom-40 left-1/4 text-[#9DF4F2]/30 text-lg font-mono">{'{ }'}</div>
        <div className="floating-code absolute bottom-20 right-1/3 text-[#40DECF]/30 text-xl font-mono">{'[ ]'}</div>
      </div>

      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="absolute top-1/4 left-20 w-72 h-72 bg-gradient-to-r from-[#40DECF]/25 to-[#9DF4F2]/15 rounded-full blur-3xl"
        ></div>
        <div
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute bottom-1/4 right-32 w-80 h-80 bg-gradient-to-bl from-[#82CFCF]/20 to-transparent rounded-full blur-2xl"
        ></div>
        <div
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4E9B94]/15 to-transparent rounded-full blur-3xl"
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Tech badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#40DECF] text-sm font-medium">
              <Code className="h-4 w-4" />
              <span>Technologies</span>
              <Zap className="h-4 w-4" />
            </div>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Stack
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#9DF4F2] bg-clip-text text-transparent">
              Technologique
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Moderne</span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Nous maîtrisons les
            <span className="text-[#40DECF] font-medium"> technologies les plus avancées</span> pour vous offrir des
            <span className="text-[#9DF4F2] font-medium"> solutions performantes</span> et durables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={el => { if (el) cardsRef.current[index] = el; }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#40DECF]/50 transition-all duration-500 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect */}
              <div className={`tech-glow absolute -inset-1 bg-gradient-to-br ${tech.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Logo Section */}
              <div className={`relative overflow-hidden rounded-t-2xl bg-gradient-to-br ${tech.color} p-8 text-center`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#40DECF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="tech-logo text-4xl mb-4 filter drop-shadow-lg transition-all duration-300 group-hover:rotate-12">
              {tech.logo}
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#40DECF] transition-colors duration-300">
              {tech.name}
            </h3>
          </div>

          {/* Floating icons */}
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Layers className="h-6 w-6 text-white" />
          </div>
              </div>

              {/* Description Section */}
              <div className="tech-content p-6 relative transition-all duration-300">
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {tech.description}
          </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          ref={additionalInfoRef}
          className="mt-16 text-center bg-gradient-to-r from-[#1B473F]/80 to-[#4E9B94]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="h-8 w-8 text-[#40DECF]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Et bien plus encore...
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Notre équipe se forme continuellement aux dernières technologies pour vous proposer toujours les meilleures solutions.
            <span className="text-[#40DECF] font-medium"> TypeScript, PostgreSQL, MongoDB, Docker, AWS...</span> nous adaptons notre stack à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
