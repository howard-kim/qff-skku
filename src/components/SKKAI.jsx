// src/pages/SKKAI.jsx
import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function SKKAI() {
  const { t } = useTranslation("skkai");

  // 카드 색상은 UI용이므로 상수 유지
  const gradientColors = [
    "from-purple-500 to-purple-600",
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-cyan-500 to-cyan-600",
    "from-pink-500 to-pink-600"
  ];

  // 핵심가치/통계는 리소스에서 불러옴
  const coreValues = [1, 2, 3, 4, 5].map((k, idx) => ({
    icon: t(`core.values.${k}.icon`),
    title: t(`core.values.${k}.title`),
    desc: t(`core.values.${k}.desc`),
    color: gradientColors[idx]
  }));

  const stats = t("stats.items", { returnObjects: true });

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-white py-24 overflow-hidden">
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
            {t("badge")}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t("brand")}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            {t("headline")}
          </h2>

          {/* Greeting / Summary */}
          <div className="rounded-3xl p-8 mb-10 max-w-5xl mx-auto bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.25)] ring-1 ring-black/5">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <Trans
                i18nKey="greeting"
                ns="skkai"
                values={{ brand: t("brand") }}
                components={{
                  bold: <strong className="font-semibold" />
                }}
              />
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="text-purple-600">📚</span> {t("journey.title")}
                </h3>
                <p className="text-gray-600">{t("journey.body")}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="text-purple-600">🏆</span> {t("recognition.title")}
                </h3>
                <p className="text-gray-600">{t("recognition.body")}</p>
              </div>
            </div>
          </div>

          {/* Intro */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t("core.title")}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="group relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                ></div>
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h4 className={`font-bold text-lg mb-2 bg-gradient-to-r ${v.color} bg-clip-text text-transparent`}>
                    {i + 1}. {v.title}
                  </h4>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600 italic">
            {t("stats.quote")}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-indigo-200 to-white rounded-2xl blur-xl opacity-30 z-0"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img src="/images/etc/SKKAI.jpg" alt="SKKAI Team" className="w-full" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.isArray(stats) &&
            stats.map((s, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {s.number}
                </div>
                <div className="text-gray-600 mt-2">{s.label}</div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
