import React, { useState } from "react";
import Layout from "../components/Layout";

function Speakers() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: "TBD",
      title: "Professor",
      organization: "SKKU Department of Physics",
      category: "professor",
      expertise: "Quantum Computing, Superconducting Qubits",
      bio: "Leading researcher in quantum information science with focus on superconducting quantum processors and quantum error correction.",
      image: "/images/speakers/placeholder1.jpg",
      linkedin: "#",
      email: "jaeyoung@skku.edu",
    },
    {
      id: 2,
      name: "TBD",
      title: "Quantum Research Scientist",
      organization: "IBM Quantum",
      category: "ibm",
      expertise: "Qiskit Development, Quantum Algorithms",
      bio: "Core contributor to Qiskit framework and expert in variational quantum algorithms for optimization problems.",
      image: "/images/speakers/placeholder2.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 3,
      name: "TBD",
      title: "Professor",
      organization: "SKKU Department of Computer Science",
      category: "professor",
      expertise: "Quantum Machine Learning, AI",
      bio: "Pioneer in quantum-classical hybrid algorithms and their applications in machine learning and artificial intelligence.",
      image: "/images/speakers/placeholder3.jpg",
      linkedin: "#",
      email: "minho@skku.edu",
    },
    {
      id: 4,
      name: "TBD",
      title: "Senior Quantum Engineer",
      organization: "IBM Research",
      category: "ibm",
      expertise: "Quantum Hardware, Ion Traps",
      bio: "Specializes in ion trap quantum computers and quantum hardware optimization for practical applications.",
      image: "/images/speakers/placeholder4.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 5,
      name: "TBD",
      title: "Assistant Professor",
      organization: "SKKU Department of Electrical Engineering",
      category: "professor",
      expertise: "Quantum Circuits, Quantum Simulation",
      bio: "Research focuses on quantum circuit optimization and simulation of quantum systems for material science.",
      image: "/images/speakers/placeholder5.jpg",
      linkedin: "#",
      email: "jiwoo@skku.edu",
    },
    {
      id: 6,
      name: "TBD",
      title: "Qiskit Advocate Lead",
      organization: "IBM Quantum Network",
      category: "ibm",
      expertise: "Quantum Education, Community Building",
      bio: "Leads global quantum education initiatives and coordinates Qiskit Fall Fest events worldwide.",
      image: "/images/speakers/placeholder6.jpg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Speakers", icon: "👥" },
    { id: "professor", label: "SKKU Professors", icon: "🎓" },
    { id: "ibm", label: "IBM Experts", icon: "💼" },
  ];

  const filteredSpeakers =
    selectedCategory === "all"
      ? speakers
      : speakers.filter((speaker) => speaker.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              World-Class Experts
            </span>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Speakers
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from leading quantum computing researchers and industry
              experts from SKKU and IBM Quantum
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-full shadow-lg p-1 inline-flex">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="group relative"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    {speaker.category === "ibm" && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        IBM Quantum
                      </div>
                    )}
                    {speaker.category === "professor" && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        SKKU
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      {speaker.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {speaker.organization}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {speaker.expertise.split(", ").map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {speaker.linkedin && (
                        <a
                          href={speaker.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {speaker.twitter && (
                        <a
                          href={speaker.twitter}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                      {speaker.email && (
                        <a
                          href={`mailto:${speaker.email}`}
                          className="text-gray-400 hover:text-purple-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Speaker Modal */}
          {selectedSpeaker && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedSpeaker(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600">
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedSpeaker.name}
                    </h2>
                    <p className="text-purple-100">
                      {selectedSpeaker.title} at {selectedSpeaker.organization}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      About
                    </h3>
                    <p className="text-gray-600">{selectedSpeaker.bio}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSpeaker.expertise
                        .split(", ")
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Speakers;
