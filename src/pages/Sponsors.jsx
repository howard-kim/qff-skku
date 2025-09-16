import React from "react";
import Layout from "../components/Layout";

function Sponsors() {
  const partners = [
    {
      name: "SKKU",
      logo: "/images/logos/skku.png",
      url: "https://www.skku.edu/",
      category: "Host Institution",
      description:
        "Sungkyunkwan University is a national university with 627 years of glorious history and shining tradition, and is a representative symbol of a leading university that leads the new era. At the same time, the university has led the development of higher education in Korea by challenging and innovating with a mind for sharing and coexistence. SKKU will be hosting Qiskit Fall Fest 2025, which demonstrates its commitment to advancing quantum computing education and research.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Quantum Information Research Support Center",
      logo: "/images/logos/qirsc.png",
      url: "https://qcenter.kr/",
      category: "Research Partner",
      description:
        "The Quantum Information Research Support Center focuses on contributing to expanding the base of the domestic quantum research field and achieving a leap in capacity by fostering manpower and establishing infrastructure to create a domestic quantum information science research ecosystem. By supporting Qiskit Fall Fest 2025, QIRSC continues its mission to accelerate quantum technology adoption in Korea.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "National Center for Excellence in Software",
      logo: "/images/logos/nces.png",
      url: "https://skb.skku.edu/swuniv/index.do",
      category: "Academic Partner",
      description:
        "The National Program of Excellence in Software is recognized as a cradle for fostering professionals and high-quality human resources in the SW and AI fields, and will upgrade the education system and further strengthen the educational infrastructure by making the most of this reputation. By supporting Qiskit Fall Fest 2025, the National Center of Excellence in Software will be able to support the training of leading talents in SW and AI.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "Superconducting Quantum Information Research Lab",
      logo: "/images/logos/squirl.png",
      url: "http://quantum.skku.edu/",
      category: "Technical Partner",
      description:
        "The Superconducting Quantum Information Research Lab (SQUIRL) at SKKU represents the forefront of quantum hardware research in Korea. SQUIRL’s expertise is in qubit design, fabrication, and quantum device engineering. With the support of SQUIRL, participants will be able to gain insights into the physical implementation of quantum computers and theoretical quantum algorithms.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      name: "IBM Quantum",
      logo: "/images/logos/ibm_quantum.png",
      url: "https://www.ibm.com/quantum",
      category: "Global Partner",
      description:
        "IBM Quantum, the global leader in quantum computing, provides full-stack quantum computing. It provides access to the world’s largest fleet of utility-scale quantum computers and performant Qiskit software to explore, demonstrate, and scale quantum advantage. IBM's commitment to quantum education and open-source development through Qiskit has democratized quantum computing access worldwide, making events like this possible.",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Support Network
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Partners & Sponsors
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qiskit Fall Fest 2025 at SKKU is made possible through the
              generous support and collaboration of leading institutions in
              quantum computing research and education
            </p>
          </div>

          {/* Partners Grid */}
          <div className="space-y-12 max-w-7xl mx-auto px-6 lg:px-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`group relative ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Logo Section */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>

                      {/* Logo Container */}
                      <div className="relative bg-white rounded-2xl shadow-xl p-12 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${partner.gradient} text-white text-xs font-semibold rounded-full`}
                          >
                            {partner.category}
                          </span>
                        </div>
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="h-24 w-48 flex items-center justify-center">
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="max-h-24 max-w-full object-contain"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`lg:w-2/3 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    <h2 className="text-3xl font-bold mb-4">
                      <span
                        className={`bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent`}
                      >
                        {partner.name}
                      </span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {partner.description}
                    </p>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${partner.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                    >
                      <span>Visit Website</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Thank You Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Special Thanks
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                SKKAI is thankful to all our partners and sponsors who make this
                event possible. Their commitment to advancing quantum computing
                and to supporting our student organization in holding the event
                has enabled us to provide this transformative learning
                experience to all participants.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-purple-600 font-medium shadow-md">
                  🤝 Collaboration
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-md">
                  🚀 Innovation
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-green-600 font-medium shadow-md">
                  🎓 Education
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-indigo-600 font-medium shadow-md">
                  💡 Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sponsors;
