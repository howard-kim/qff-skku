import React, { useState } from "react";
import Layout from "../components/Layout";

function Organizers() {
  const [selectedCategory, setSelectedCategory] = useState("skkai");
  const [selectedOrganizers, setSelectedOrganizers] = useState(null);

  const organizers = [
    {
      id: 1,
      name: "Dong-Wan Kim / Leader",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Computing, Qiskit",
      bio: "Leader of Qiskit Fall Fest SKKU 2025 and developer of SQuIRL QPU Cloud platform.",
      image: "/images/organizers/skkai/dongwan.jpg",
      email: "docong0120@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/wannasleepofficial",
    },
    {
      id: 2,
      name: "Young-Ho Seo",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Computing",
      bio: "Core member of SQuAI and contributor to adaptive VQE strategy.",
      image: "/images/organizers/skkai/youngho.jpeg",
      email: "syhwlgns@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/youngho-seo",
    },
    {
      id: 3,
      name: "Ju-Won Kwon",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Computing",
      bio: "Focused on VQE implementation and simulation testing.",
      image: "/images/organizers/skkai/juwon.jpeg",
      email: "wndnjs0416@skku.edu",
      linkedin: "https://www.linkedin.com/in/주원-권-7845aa354",
    },
    {
      id: 4,
      name: "Se-Jun Yim",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Theory",
      bio: "Supports theoretical aspects and use case validation.",
      image: "/images/organizers/skkai/sejun.jpeg",
      email: "daniel2313@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/sejunyim",
    },
    {
      id: 5,
      name: "Hye-Seon Park",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Algorithms",
      bio: "Interested in hardware-efficient VQE and optimization.",
      image: "/images/organizers/skkai/hyeseon.jpeg",
      email: "0147qkr@g.skku.edu",
      linkedin: "",
    },
    {
      id: 6,
      name: "Byung-Hyun Jun",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Information",
      bio: "Interested in surface codes and error mitigation.",
      image: "/images/organizers/skkai/byunghyun.png",
      email: "jbhskku@skku.edu",
      linkedin: "https://linkedin.com/in/병현-전-3b8921373",
    },

    {
      id: 7,
      name: "Chae-eun Seok",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Computing",
      bio: "Supporting education and outreach for quantum beginners.",
      image: "/images/organizers/skkai/chaeeun.jpeg",
      email: "tjrcodms87@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/chae-eun-seok-323773320",
    },
    {
      id: 8,
      name: "Hajong Kim",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Machine Learning",
      bio: "Contributor to ED-based circuit design methodology.",
      image: "/images/organizers/skkai/hajong.jpeg",
      email: "whoami125@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/hajong-kim-437057260/",
    },
    {
      id: 9,
      name: "Hunmin Do",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Simulators",
      bio: "Simulates noisy quantum devices and assists circuit testing.",
      image: "/images/organizers/skkai/hunmin.jpeg",
      email: "gnsals9262@g.skku.edu",
      linkedin: "",
    },
    {
      id: 10,
      name: "Jiho Yun",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Programming",
      bio: "Focused on Qiskit tutorials and mentoring new students.",
      image: "/images/organizers/skkai/jiho.jpeg",
      email: "yunjoe@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/jihoyun/",
    },

    {
      id: 11,
      name: "Yujin Jeon",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Education",
      bio: "Focused on quantum education materials and community activities.",
      image: "/images/organizers/skkai/yujin.jpeg",
      email: "yujinjeon@g.skku.edu",
      linkedin: "",
    },
    {
      id: 12,
      name: "Riah Ma",
      title: "Undergraduate Researcher",
      organization: "Sungkyunkwan University",
      category: "skkai",
      expertise: "Quantum Circuit Design",
      bio: "Involved in Qiskit circuit building and visualization.",
      image: "/images/organizers/skkai/ria.jpeg",
      email: "lillri@g.skku.edu",
      linkedin: "https://www.linkedin.com/in/Riah-Ma",
    },

    {
      id: 13,
      name: "Seungwook Woo",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Quantum Hardware",
      bio: "Works on QPU interfacing and LabOne Q measurement routines.",
      image: "",
      email: "woosw753@skku.edu",
      linkedin: "",
    },
    {
      id: 14,
      name: "Beomgyu Choi",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Qiskit Integration",
      bio: "Handles Qiskit backend integration with custom QPU.",
      image: "/images/organizers/squirl/beomgyu.jpeg",
      email: "cbk927@g.skku.edu",
      linkedin: "",
    },
    {
      id: 15,
      name: "Dongki Cho",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Device Setup",
      bio: "Assists with LabOne device configuration and parameter calibration.",
      image: "",
      email: "cdk0726@skku.edu",
      linkedin: "",
    },
    {
      id: 16,
      name: "Jong-Won Park",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Measurement Automation",
      bio: "Develops control logic for SHFQC-driven experiments.",
      image: "/images/organizers/squirl/jongwon.jpeg",
      email: "wj9966@skku.edu",
      linkedin: "",
    },
    {
      id: 17,
      name: "Youngwoo Ko",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Quantum Experiments",
      bio: "Performs Rabi, Ramsey, and spectroscopy routines on custom QPU.",
      image: "/images/organizers/squirl/youngwoo.jpeg",
      email: "answjdaos@skku.edu",
      linkedin: "",
    },

    {
      id: 18,
      name: "Jun-Yeol Im",
      title: "Integrated M.S. and Ph.D.",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Pulse Engineering",
      bio: "Specializes in quantum pulse shaping and drag correction.",
      image: "/images/organizers/squirl/junyeol.jpeg",
      email: "ijy723@g.skku.edu",
      linkedin: "",
    },

    {
      id: 19,
      name: "JunHwan Lee",
      title: "Undergraduate Researcher",
      organization: "Superconducting Quantum Information Research Lab",
      category: "squirl",
      expertise: "Control Electronics",
      bio: "Develops synchronization protocols for quantum-classical timing.",
      image: "/images/organizers/squirl/junhwan.jpeg",
      email: "sakamote@skku.edu",
      linkedin: "",
    },
  ];

  const categories = [
    { id: "skkai", label: "SKK:AI", icon: "🎓" },
    { id: "squirl", label: "SQuIRL", icon: "💼" },
  ];

  const filteredOrganizers = organizers.filter(
    (organizer) => organizer.category === selectedCategory
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Best Team Ever
            </span>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Proud Organizers
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our whole team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-full shadow-lg p-2 inline-flex space-x-4">
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

          {/* Organizerss Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOrganizers.map((organizers) => (
              <div
                key={organizers.id}
                className="group relative"
                onClick={() => setSelectedOrganizers(organizers)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                    {organizers.image ? (
                      <div className="absolute inset-0">
                        <img
                          src={organizers.image}
                          alt={organizers.name}
                          className="object-cover w-full h-full rounded-2xl"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
                          {organizers.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                    )}
                    {organizers.category === "squirl" && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        SQuIRL
                      </div>
                    )}
                    {organizers.category === "skkai" && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        SKK:AI
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {organizers.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      {organizers.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {organizers.organization}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {organizers.expertise.split(", ").map((skill, index) => (
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
                      {organizers.linkedin && (
                        <a
                          href={organizers.linkedin}
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
                      {organizers.twitter && (
                        <a
                          href={organizers.twitter}
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
                      {organizers.email && (
                        <a
                          href={`mailto:${organizers.email}`}
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

          {selectedOrganizers && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedOrganizers(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 이미지 영역 */}
                <div className="relative">
                  <img
                    src={selectedOrganizers.image}
                    alt={selectedOrganizers.name}
                    className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedOrganizers(null)}
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedOrganizers.name}
                    </h2>
                    <p className="text-purple-100">
                      {selectedOrganizers.title} at{" "}
                      {selectedOrganizers.organization}
                    </p>
                  </div>
                </div>

                {/* 아래 텍스트 영역 */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      About
                    </h3>
                    <p className="text-gray-600">{selectedOrganizers.bio}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedOrganizers.expertise
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

export default Organizers;
