"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles, MessageCircle, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

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
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#40DECF]/5 via-transparent to-[#9DF4F2]/5"></div>

      {/* Beautiful Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-[#40DECF]/10 to-[#9DF4F2]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-32 w-80 h-80 bg-gradient-to-bl from-[#82CFCF]/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4E9B94]/6 to-transparent rounded-full blur-3xl"></div>
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B473F] mb-6 leading-tight">
            Discutons de
            <span className="block bg-gradient-to-r from-[#40DECF] to-[#82CFCF] bg-clip-text text-transparent">
              Votre Projet
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Ensemble</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prêt à concrétiser votre projet ? Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à
            <span className="text-[#40DECF] font-medium"> réussir votre transformation digitale</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/60 backdrop-blur-sm p-8">
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
                <div className="flex items-center">
                  <div className="bg-[#40DECF] p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F]">Email</h4>
                    <p className="text-gray-600">contact@hraktech.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#1B473F] p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F]">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#4E9B94] p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B473F]">Localisation</h4>
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
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm p-8 relative overflow-hidden">
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
                    <Label htmlFor="name" className="text-[#1B473F] mb-2">
                      <User className="h-4 w-4" />
                      Nom complet *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/70 backdrop-blur-sm focus:ring-[#40DECF] focus:border-[#40DECF]"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#1B473F] mb-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/70 backdrop-blur-sm focus:ring-[#40DECF] focus:border-[#40DECF]"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-[#1B473F] mb-2">
                    <Building className="h-4 w-4" />
                    Entreprise
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/70 backdrop-blur-sm focus:ring-[#40DECF] focus:border-[#40DECF]"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <Label htmlFor="project" className="text-[#1B473F] mb-2">
                    Type de projet *
                  </Label>
                  <Select
                    name="project"
                    required
                    value={formData.project}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, project: value }))}
                  >
                    <SelectTrigger className="w-full bg-white/70 backdrop-blur-sm focus:ring-[#40DECF] focus:border-[#40DECF]">
                      <SelectValue placeholder="Sélectionnez un type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                      <SelectItem value="app-web">Application web</SelectItem>
                      <SelectItem value="app-mobile">Application mobile</SelectItem>
                      <SelectItem value="erp">Solution ERP</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#1B473F] mb-2">
                    <MessageCircle className="h-4 w-4" />
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/70 backdrop-blur-sm focus:ring-[#40DECF] focus:border-[#40DECF] resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#40DECF] to-[#82CFCF] text-white px-8 py-4 font-semibold hover:from-[#1B473F] hover:to-[#4E9B94] shadow-lg hover:shadow-xl gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
