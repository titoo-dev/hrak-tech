"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#1B473F] to-[#4E9B94] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de notre travail et de notre accompagnement.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-12 w-12 text-[#40DECF] opacity-80" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                  "{testimonials[currentIndex].comment}"
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#40DECF] fill-current" />
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4 bg-white/20 rounded-full p-4">
                  {testimonials[currentIndex].image}
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
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#40DECF] scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`text-left p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white/20 border-2 border-[#40DECF]"
                  : "bg-white/10 hover:bg-white/15 border-2 border-transparent"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">{testimonial.image}</div>
                <div>
                  <h5 className="font-semibold text-sm text-white">{testimonial.name}</h5>
                  <p className="text-xs text-gray-300">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200 line-clamp-3">
                "{testimonial.comment}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
