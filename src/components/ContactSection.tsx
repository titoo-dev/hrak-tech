"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles, MessageCircle, User, Building } from "lucide-react";
import getGsap from "@/lib/gsapClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx: any = null;
    const cleanupFns: Array<() => void> = [];

    (async () => {
      const res = await getGsap();
      if (!res) return;
      const { gsap, prefersReduced } = res;
      if (prefersReduced) return;

      ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set([contactInfoRef.current, formRef.current], {
        opacity: 0,
        y: 80,
        scale: 0.95
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: `random(-40, -60)`,
            x: `random(-30, 30)`,
            rotation: `random(-180, 180)`,
            scale: `random(0.8, 1.2)`,
            duration: `random(4, 8)`,
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
            y: index % 2 === 0 ? -40 : -45,
            x: index % 3 === 0 ? 35 : -30,
            rotation: index % 2 === 0 ? 12 : -10,
            duration: 8 + index * 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
          });
        }
      });

      // Background gradient animation
      gsap.to(".contact-bg-gradient", {
        backgroundPosition: "100% 50%",
        duration: 35,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Pulse animation for contact methods
      gsap.to(".contact-icon", {
        scale: 1.1,
        duration: 2,
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
        duration: 1.2,
        ease: "back.out(1.7)"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // Contact info and form animation
      tl.to([contactInfoRef.current, formRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2
      }, "-=0.4");

      // Form field focus/blur animations - attach per element and track for cleanup
      const formFields = Array.from(document.querySelectorAll('.form-field')) as HTMLElement[];
      formFields.forEach((field) => {
        const onFocus = () => gsap.to(field, { scale: 1.02, duration: 0.3, ease: "power2.out" });
        const onBlur = () => gsap.to(field, { scale: 1, duration: 0.3, ease: "power2.out" });
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
        cleanupFns.push(() => {
          field.removeEventListener('focus', onFocus);
          field.removeEventListener('blur', onBlur);
        });
      });

      }, sectionRef);

      cleanupFns.push(() => ctx?.revert?.());
    })();

    return () => cleanupFns.forEach(fn => fn());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: ""
      });
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1B473F] to-[#2d5a52]">
        {/* Success Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#40DECF]/10 via-transparent to-[#9DF4F2]/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#40DECF] to-[#82CFCF] rounded-full shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Message envoyé avec 
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#9DF4F2] bg-clip-text text-transparent">
              succès !
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais pour discuter de votre projet.
          </p>
          <div className="mt-8">
            <Sparkles className="h-8 w-8 text-[#40DECF] mx-auto animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100"
    >
      {/* Animated Background Gradient */}
      <div className="contact-bg-gradient absolute inset-0 bg-gradient-to-r from-[#40DECF]/5 via-transparent to-[#9DF4F2]/5" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => { if (el) orbsRef.current[0] = el; }}
          className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-[#40DECF]/10 to-[#9DF4F2]/8 rounded-full blur-3xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[1] = el; }}
          className="absolute bottom-40 left-32 w-80 h-80 bg-gradient-to-bl from-[#82CFCF]/8 to-transparent rounded-full blur-2xl"
        ></div>
        <div 
          ref={el => { if (el) orbsRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4E9B94]/6 to-transparent rounded-full blur-3xl"
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
          {/* Contact badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#40DECF]/20 text-[#1B473F] text-sm font-medium">
              <MessageCircle className="h-4 w-4" />
              <span>Contact</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B473F] mb-6 leading-tight"
          >
            Discutons de
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#82CFCF] bg-clip-text text-transparent">
              Votre Projet
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Ensemble</span>
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Prêt à concrétiser votre projet ? Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à 
            <span className="text-[#40DECF] font-medium"> réussir votre transformation digitale</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-[#1B473F] mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-[#40DECF]" />
                Parlons de votre projet
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Que vous ayez une idée précise ou que vous souhaitiez simplement explorer les possibilités, 
                notre équipe est là pour vous accompagner à chaque étape de votre transformation digitale.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="contact-icon bg-gradient-to-br from-[#40DECF] to-[#82CFCF] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F] group-hover:text-[#40DECF] transition-colors duration-300">Email</h4>
                    <p className="text-gray-600">contact@hraktech.com</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="contact-icon bg-gradient-to-br from-[#1B473F] to-[#4E9B94] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F] group-hover:text-[#40DECF] transition-colors duration-300">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="contact-icon bg-gradient-to-br from-[#4E9B94] to-[#9DF4F2] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F] group-hover:text-[#40DECF] transition-colors duration-300">Localisation</h4>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gradient-to-r from-[#9DF4F2]/20 to-[#82CFCF]/20 rounded-2xl p-6 border border-[#40DECF]/20">
                <h4 className="font-bold text-[#1B473F] mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#40DECF]" />
                  Réponse garantie sous 24h
                </h4>
                <p className="text-[#1B473F] opacity-80">
                  Nous nous engageons à vous répondre rapidement pour que votre projet puisse démarrer dans les meilleures conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 relative overflow-hidden">
            {/* Form glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#40DECF]/10 to-[#9DF4F2]/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#1B473F] mb-6 flex items-center gap-3">
                <Send className="h-6 w-6 text-[#40DECF]" />
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-[#1B473F] mb-2 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-[#1B473F] mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium text-[#1B473F] mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-[#1B473F] mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    className="form-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="app-web">Application web</option>
                    <option value="app-mobile">Application mobile</option>
                    <option value="erp">Solution ERP</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-[#1B473F] mb-2 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 resize-none bg-white/70 backdrop-blur-sm"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#40DECF] to-[#82CFCF] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#1B473F] hover:to-[#4E9B94] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                  
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
