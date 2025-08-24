"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleWordsRef = useRef<HTMLSpanElement[]>([]);
  const realisableRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) return;

    // Set initial states
    gsap.set([badgeRef.current, ...titleWordsRef.current, realisableRef.current, subtitleRef.current, ctaRef.current, trustRef.current], {
      opacity: 0,
      y: 50
    });
    
    gsap.set(underlineRef.current, {
      scaleX: 0
    });

    // Background gradient animation
    gsap.to(".bg-gradient-animated", {
      backgroundPosition: "100% 50%",
      duration: 8,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Floating orbs animations
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          y: index % 2 === 0 ? -30 : -25,
          rotation: index % 2 === 0 ? 5 : -3,
          duration: 6 + index * 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    });

    // Pulse animation for center orb
    gsap.to(".center-orb", {
      opacity: 0.5,
      scale: 1.05,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    // Bounce animations for small orbs
    gsap.to(".small-orb-1", {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    gsap.to(".small-orb-2", {
      y: -8,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1
    });

    // Main animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Badge animation
    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)"
    })

    // Title words animation (staggered)
    .to(titleWordsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2
    }, "-=0.5")

    // "réalisable" word animation
    .to(realisableRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.2")

    // Underline animation
    .to(underlineRef.current, {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")

    // Subtitle animation
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")

    // CTA button animation
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.2")

    // Trust indicators animation
    .to(trustRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.2");

    // Gradient text animation for "réalisable"
    gsap.to(".gradient-text", {
      backgroundPosition: "100% 50%",
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Pulse animation for trust indicators dots
    gsap.to(".trust-dot", {
      opacity: 0.3,
      scale: 0.8,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });
  }, { scope: heroRef });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1B473F] to-[#2d5a52] pt-24"
    >
      {/* Animated Background Gradient */}
      <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#40DECF]/20 via-transparent to-[#9DF4F2]/20" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large center orb */}
        <div 
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="center-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#40DECF]/30 to-[#9DF4F2]/20 rounded-full blur-3xl opacity-30"
        ></div>
        
        {/* Top right orb */}
        <div 
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-[#40DECF]/40 to-transparent rounded-full blur-2xl"
        ></div>
        
        {/* Bottom left orb */}
        <div 
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#9DF4F2]/30 to-transparent rounded-full blur-2xl"
        ></div>
        
        {/* Small accent orbs */}
        <div className="small-orb-1 absolute top-20 right-1/4 w-32 h-32 bg-[#40DECF]/40 rounded-full blur-xl"></div>
        <div className="small-orb-2 absolute bottom-20 left-1/4 w-24 h-24 bg-[#9DF4F2]/40 rounded-full blur-lg"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sparkle decoration */}
        <div className="flex justify-center mb-4">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#40DECF] text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            <span>Innovation Technologique</span>
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        {/* Main heading with stunning typography */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          <span 
            ref={el => { if (el) titleWordsRef.current[0] = el; }}
            className="inline-block"
          >
            Oui,
          </span>{" "}
          <span 
            ref={el => { if (el) titleWordsRef.current[1] = el; }}
            className="inline-block"
          >
            votre
          </span>{" "}
          <span 
            ref={el => { if (el) titleWordsRef.current[2] = el; }}
            className="inline-block"
          >
            projet
          </span>
          <br />
          <span 
            ref={el => { if (el) titleWordsRef.current[3] = el; }}
            className="inline-block"
          >
            est
          </span>{" "}
          <span className="relative inline-block">
            <span 
              ref={realisableRef}
              className="gradient-text bg-gradient-to-r from-[#40DECF] via-[#9DF4F2] to-[#40DECF] bg-clip-text text-transparent"
              style={{backgroundSize: '200% 200%'}}
            >
              réalisable
            </span>
            <div 
              ref={underlineRef}
              className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-[#40DECF] to-[#9DF4F2] rounded-full origin-left"
            ></div>
          </span>
        </h1>
        
        {/* Subtitle with glass effect */}
        <div 
          ref={subtitleRef}
          className="max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed mb-3">
            Discutons ensemble pour voir ce que notre équipe peut vous apporter.
          </p>
          <p className="text-base md:text-lg text-[#9DF4F2] font-medium">
            Solutions digitales sur mesure • Innovation • Excellence
          </p>
        </div>

        {/* CTA Button with stunning design */}
        <div ref={ctaRef}>
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#40DECF] to-[#1B473F] rounded-2xl shadow-2xl shadow-[#40DECF]/25 hover:shadow-[#40DECF]/40 transition-all duration-500 hover:cursor-pointer overflow-hidden"
          >
            {/* Button background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#40DECF] to-[#1B473F] opacity-100 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative">Discutons</span>
            <ArrowRight className="relative h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust indicators */}
        <div ref={trustRef} className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="trust-dot w-2 h-2 bg-[#40DECF] rounded-full"></div>
              <span>+50 Projets Réalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="trust-dot w-2 h-2 bg-[#9DF4F2] rounded-full"></div>
              <span>Technologies Modernes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="trust-dot w-2 h-2 bg-[#40DECF] rounded-full"></div>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
