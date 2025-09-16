// QFF.jsx
import React from "react";

export default function QFF() {
    const features = [
    {
      icon: "🌍",
      title: "Global Event",
      description: "A global event with participation from universities worldwide.",
    },
    {
      icon: "💻",
      title: "Hands-on Learning",
      description: "Hands-on labs using real quantum computers.",
    },
    {
      icon: "🏆",
      title: "Competitions",
      description: "Creative problem-solving challenges.",
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Networking with the global quantum community.",
    },
  ];

  const topics = [
    "Quantum Circuit Design",
    "VQE (Variational Quantum Eigensolver)",
    "QAOA (Quantum Approximate Optimization Algorithm)",
    "Quantum Machine Learning",
    "Quantum Encryption",
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-5 via-cyan-5 to-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.5) 35px, rgba(59, 130, 246, 0.5) 70px)`,
          }}
        ></div>
      </div>

      {/* Floating Quantum Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-indigo-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            IBM Quantum Network Event
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Qiskit Fall Fest
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Qiskit Fall Fest is a collection of quantum computing events that allows students, researchers and industry professionals to participate in various quantum-themed activities — 
            including quantum challenges, hackathons, coding competitions, workshops, social events, and more. Each year, IBM partners with a select group of university students and other volunteer hosts to help them plan and run the global roster of Fall Fest events.
          </p>
        </div>

        {/* Image with Effects */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-semibold animate-bounce">
            2025 Edition
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="text-4xl mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Topics Section */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Major Learning Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-blue-700 font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
