"use client";

const technologies = [
  {
    name: "Next.js",
    description: "Framework React pour des applications web performantes et SEO-friendly",
    logo: "⚛️",
    color: "bg-gradient-to-br from-black to-gray-800"
  },
  {
    name: "NestJS",
    description: "Framework Node.js évolutif pour construire des APIs robustes et maintenables",
    logo: "🚀",
    color: "bg-gradient-to-br from-red-500 to-pink-600"
  },
  {
    name: "Flutter",
    description: "SDK de Google pour créer des applications mobiles natives multiplateformes",
    logo: "📱",
    color: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    name: "Odoo",
    description: "Plateforme ERP open-source pour gérer tous les aspects de votre entreprise",
    logo: "🏢",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600"
  }
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B473F] mb-4">
            Nos Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous maîtrisons les technologies les plus avancées pour vous offrir des solutions performantes et durables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#40DECF] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Logo Section */}
              <div className={`${tech.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#40DECF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#40DECF] transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#40DECF]/5 to-[#1B473F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#9DF4F2] to-[#82CFCF] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#1B473F] mb-4">
            Et bien plus encore...
          </h3>
          <p className="text-lg text-[#1B473F] max-w-3xl mx-auto">
            Notre équipe se forme continuellement aux dernières technologies pour vous proposer toujours les meilleures solutions. 
            TypeScript, PostgreSQL, MongoDB, Docker, AWS... nous adaptons notre stack à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
