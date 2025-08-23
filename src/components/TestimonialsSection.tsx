"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    position: "Directrice Marketing",
    company: "TechStart",
    image: "👩‍💼",
    rating: 5,
    comment: "HRak Tech a transformé notre vision en une application mobile exceptionnelle. Leur expertise technique et leur approche collaborative ont dépassé nos attentes. Je recommande vivement leurs services !"
  },
  {
    id: 2,
    name: "Jean-Paul Martin",
    position: "CEO",
    company: "InnovCorp",
    image: "👨‍💼",
    rating: 5,
    comment: "L'équipe de HRak Tech a développé notre site web avec un professionnalisme remarquable. Le résultat est à la hauteur de nos ambitions : moderne, performant et parfaitement adapté à nos besoins."
  },
  {
    id: 3,
    name: "Amina Hassan",
    position: "Responsable IT",
    company: "GlobalTech",
    image: "👩‍💻",
    rating: 5,
    comment: "Notre système ERP Odoo développé par HRak Tech a révolutionné notre gestion d'entreprise. Implementation fluide, formation complète, support réactif. Une collaboration exemplaire !"
  },
  {
    id: 4,
    name: "David Chen",
    position: "Founder",
    company: "StartupLab",
    image: "👨‍🔬",
    rating: 5,
    comment: "HRak Tech nous a accompagnés de l'idée à la réalisation. Leur expertise en développement web et mobile, combinée à leur compréhension de nos enjeux business, fait toute la différence."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const starsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set([cardRef.current, dotsRef.current, previewRef.current], {
        opacity: 0,
        y: 80,
        scale: 0.9
      });

      // Floating stars animation
      starsRef.current.forEach((star, index) => {
        if (star) {
          gsap.to(star, {
            y: `random(-25, -45)`,
            x: `random(-20, 20)`,
            rotation: `random(-90, 90)`,
            scale: `random(0.8, 1.3)`,
            duration: `random(4, 7)`,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.4
          });
        }
      });

      // Floating orbs animations
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: index % 2 === 0 ? -35 : -40,
            x: index % 3 === 0 ? 30 : -25,
            rotation: index % 2 === 0 ? 10 : -8,
            duration: 7 + index * 1.8,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
          });
        }
      });

      // Background gradient animation
      gsap.to(".testimonials-bg-gradient", {
        backgroundPosition: "100% 50%",
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Pulse animation for quotes
      gsap.to(".floating-quote", {
        scale: 1.1,
        opacity: 0.8,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1
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

      // Main card animation
      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.3");

      // Dots and preview animations
      tl.to([dotsRef.current, previewRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Testimonial change animation
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { scale: 0.95, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1B473F] to-[#2d5a52]"
    >
      {/* Animated Background Gradient */}
      <div className="testimonials-bg-gradient absolute inset-0 bg-gradient-to-r from-[#40DECF]/15 via-transparent to-[#9DF4F2]/15" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Floating Quote Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-quote absolute top-20 left-20 text-[#40DECF]/20 text-6xl">"</div>
        <div className="floating-quote absolute top-32 right-32 text-[#82CFCF]/20 text-5xl">"</div>
        <div className="floating-quote absolute bottom-40 left-1/4 text-[#9DF4F2]/20 text-4xl">"</div>
        <div className="floating-quote absolute bottom-20 right-1/3 text-[#40DECF]/20 text-5xl">"</div>
      </div>

      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="absolute top-1/4 left-20 w-96 h-96 bg-gradient-to-r from-[#40DECF]/25 to-[#9DF4F2]/15 rounded-full blur-3xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute bottom-1/4 right-32 w-80 h-80 bg-gradient-to-bl from-[#82CFCF]/20 to-transparent rounded-full blur-2xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4E9B94]/15 to-transparent rounded-full blur-3xl"
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
          {/* Testimonials badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#40DECF] text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>Témoignages</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Clients
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#9DF4F2] bg-clip-text text-transparent">
              Satisfaits
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Témoignent</span>
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez ce que nos clients pensent de notre 
            <span className="text-[#40DECF] font-medium"> travail exceptionnel</span> et de notre 
            <span className="text-[#9DF4F2] font-medium"> accompagnement personnalisé</span>.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            ref={cardRef}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#40DECF]/20 to-[#9DF4F2]/20 rounded-3xl blur-xl opacity-75"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Quote Icon */}
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#40DECF]/30 to-[#9DF4F2]/30 rounded-full blur-lg"></div>
                <Quote className="h-12 w-12 text-[#40DECF] relative z-10" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-8 max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                  "{testimonials[currentIndex].comment}"
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#40DECF] fill-current mx-1" />
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4 bg-white/20 rounded-full p-4 backdrop-blur-sm relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#40DECF]/30 to-[#82CFCF]/30 rounded-full blur-lg"></div>
                  <span className="relative z-10">{testimonials[currentIndex].image}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#40DECF] font-medium mb-1">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-3xl opacity-50">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div ref={dotsRef} className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#40DECF] scale-125 shadow-lg shadow-[#40DECF]/50"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview (Hidden on Mobile) */}
        <div ref={previewRef} className="hidden lg:grid lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`text-left p-4 rounded-xl transition-all duration-300 backdrop-blur-sm border ${
                index === currentIndex
                  ? "bg-white/20 border-[#40DECF] shadow-lg shadow-[#40DECF]/25"
                  : "bg-white/10 hover:bg-white/15 border-white/20 hover:border-white/40"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3 bg-white/20 rounded-lg p-2">{testimonial.image}</div>
                <div>
                  <h5 className="font-semibold text-sm text-white">{testimonial.name}</h5>
                  <p className="text-xs text-gray-300">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200 line-clamp-3">
                "{testimonial.comment}"
              </p>
              <div className="flex mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-[#40DECF] fill-current" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
