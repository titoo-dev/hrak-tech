"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce mb-8">
            <CheckCircle className="h-24 w-24 text-[#40DECF] mx-auto" />
          </div>
          <h2 className="text-4xl font-bold text-[#1B473F] mb-4">
            Message envoyé avec succès !
          </h2>
          <p className="text-xl text-gray-600">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B473F] mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à concrétiser votre projet ? Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1B473F] mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Que vous ayez une idée précise ou que vous souhaitiez simplement explorer les possibilités, 
                notre équipe est là pour vous accompagner à chaque étape de votre transformation digitale.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-[#40DECF] to-[#82CFCF] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B473F]">Email</h4>
                  <a href="mailto:contact@hraktech.com" className="text-gray-600 hover:text-[#40DECF] transition-colors">
                    contact@hraktech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-[#1B473F] to-[#4E9B94] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B473F]">Téléphone</h4>
                  <a href="tel:+33123456789" className="text-gray-600 hover:text-[#40DECF] transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-[#4E9B94] to-[#9DF4F2] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B473F]">Localisation</h4>
                  <p className="text-gray-600">France & International</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-[#9DF4F2] to-[#82CFCF] rounded-2xl p-6">
              <h4 className="font-bold text-[#1B473F] mb-3">
                Réponse garantie sous 24h
              </h4>
              <p className="text-[#1B473F] opacity-80">
                Nous nous engageons à vous répondre rapidement pour que votre projet puisse démarrer dans les meilleures conditions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40DECF] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet et vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#40DECF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B473F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
