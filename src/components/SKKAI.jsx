// SKKAI.jsx
import React from "react";

export default function SKKAI() {
  const achievements = [
    { number: "50+", label: "Active Members" },
    { number: "17", label: "Majors Represented" },
    { number: "2", label: "Campus Locations" },
    { number: "2025", label: "Premium Study Club" },
  ];

  const coreValues = [
    {
      icon: "🔄",
      title: "Convergence",
      description: "Interdisciplinary integration",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "⭐",
      title: "Specialty",
      description: "Domain expertise",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🚀",
      title: "Proactive",
      description: "Initiative and inquiry",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: "🌐",
      title: "Network",
      description: "University-wide & external networks",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: "💡",
      title: "Open-minded",
      description: "Free expression and sharing",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const supporters = [
    { name: "SKKU National Center of Excellence in Software", icon: "🏛️" },
    { name: "Sungkyun AI Research Institute", icon: "🤖" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-10 via-indigo-50 to-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            SKKU AI Academic Club
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SKKAI
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Sungkyunkwan University Artificial Intelligence Student Association
          </h2>

          {/* English Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Greetings from <strong>SKKAI</strong> - the representative AI
              student association of Sungkyunkwan University. We bring together
              students from diverse majors who value interdisciplinary
              convergence and grow together.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-purple-600">📚</span> Our Journey
                </h3>
                <p className="text-gray-600">
                  Rebranded from the data-analytics association TNT, SKKAI
                  launched in 2025 with enthusiastic participation from students
                  across both Natural Sciences and Humanities & Social Sciences
                  campuses.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-purple-600">🏆</span> Recognition
                </h3>
                <p className="text-gray-600">
                  Selected for the{" "}
                  <strong>2025 Sungkyun Premium Study Club</strong>, a
                  distinction awarded to SKKU's most prestigious organizations,
                  recognizing our founding leadership and members' dedication.
                </p>
              </div>
            </div>
          </div>

          {/* Korean Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            성균관대학교의 인공지능(AI) 중심 학술 동아리로, 머신러닝, 딥러닝,
            자연어처리, 양자AI 등 다양한 분야를 주제로 한 세미나, 프로젝트, 연구
            활동을 활발히 진행하고 있습니다.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our 5 Core Values
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${value.color})`,
                  }}
                ></div>
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4
                    className={`font-bold text-lg mb-2 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                  >
                    {index + 1}. {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600 italic">
            "Grounded in these values, SKKAI strives to create both academic
            achievement and social value."
          </p>
        </div>

        {/* Image Section with Overlay */}
        <div className="relative group mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <img
            src="/images/hero/skkai_hero.png"
            alt="SKKAI Team"
            className="mx-auto rounded-2xl shadow-2xl w-full max-w-4xl transform transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white rounded-full shadow-lg">
            <p className="text-purple-600 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Actively Recruiting New Members
            </p>
          </div>
        </div>

        {/* Supporters Section */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
            Supported By
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 shadow-md"
              >
                <span className="text-2xl">{supporter.icon}</span>
                <span className="text-gray-700 font-medium">
                  {supporter.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
