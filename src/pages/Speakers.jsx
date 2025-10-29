// src/pages/Speakers.jsx
import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export default function Speakers() {
  const { t } = useTranslation("speakers");

  // i18n JSON에서 데이터 로드
  const categories = t("categories", { returnObjects: true }) || [];
  const people = t("people", { returnObjects: true }) || [];

  // 기본: 첫 카테고리
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id || ""
  );
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // 언어 전환/데이터 변동 시 첫 카테고리로 고정
  useEffect(() => {
    setSelectedCategory(categories[0]?.id || "");
  }, [categories.length]);

  // 필터링 (카테고리 없으면 전체 노출)
  const filtered = useMemo(() => {
    if (!categories.length || !selectedCategory) return people;
    return people.filter((p) => (p?.category || "") === selectedCategory);
  }, [people, categories.length, selectedCategory]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </h1>
          </div>

          {/* Category Tabs (ALL 제거) */}
          {categories.length > 0 && (
            <div className="flex justify-center mb-10">
              <div className="bg-white rounded-full shadow-lg p-1 inline-flex space-x-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === c.id
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {c.icon && <span aria-hidden>{c.icon}</span>}
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((sp) => {
              const skills = Array.isArray(sp.expertise)
                ? sp.expertise
                : String(sp.expertise || "").split(/[,\s]*,\s*/).filter(Boolean);

              return (
                <div
                  key={sp.id}
                  className="group relative"
                  onClick={() => setSelectedSpeaker(sp)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">
                    <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {sp.image ? (
                          <img
                            src={sp.image}
                            alt={sp.name}
                            className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-md"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
                            {(sp.name || "").split(" ").map((n) => n[0]).join("")}
                          </div>
                        )}
                      </div>
                      {sp.category === "ibm" && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          IBM Quantum
                        </div>
                      )}
                      {sp.category === "professor" && (
                        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          SKKU
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{sp.name}</h3>
                      {sp.title && <p className="text-purple-600 font-medium mb-2">{sp.title}</p>}
                      {sp.organization && <p className="text-gray-600 text-sm mb-4">{sp.organization}</p>}

                      {!!skills.length && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {skills.map((s, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal */}
          {selectedSpeaker && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
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
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold text-white">{selectedSpeaker.name}</h2>
                    <p className="text-purple-100">
                      {selectedSpeaker.title} · {selectedSpeaker.organization}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t("about")}</h3>
                    <p className="text-gray-700">{selectedSpeaker.bio}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t("expertise")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(selectedSpeaker.expertise)
                        ? selectedSpeaker.expertise
                        : String(selectedSpeaker.expertise || "").split(/[,\s]*,\s*/).filter(Boolean)
                      ).map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {s}
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
