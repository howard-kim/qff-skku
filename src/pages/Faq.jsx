// src/pages/Faq.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function Faq() {
  const { t } = useTranslation("faq");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("general");

  // 카테고리 (아이콘은 고정, 라벨은 i18n)
  const faqCategories = [
    { id: "general", label: t("categories.general"), icon: "ℹ️" },
    { id: "registration", label: t("categories.registration"), icon: "✍️" },
    { id: "technical", label: t("categories.technical"), icon: "💻" },
    { id: "logistics", label: t("categories.logistics"), icon: "📍" },
  ];

  // Q&A 전체 (i18n JSON에서 로드)
  const faqData = t("items", { returnObjects: true }) || [];

  // ※ general일 때도 'general'만 보이도록 필터(요청사항 반영)
  const filteredFaqs = faqData.filter(
    (faq) => faq.category === selectedCategory
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              {t("badge")}
            </span>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {faqCategories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                    ${
                      active
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:text-gray-900 shadow-md ring-1 ring-gray-200 hover:shadow-lg"
                    }
                  `}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={`${faq.category}-${index}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* 질문 헤더 */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group
                             bg-gradient-to-r from-fuchsia-500 to-blue-600 rounded-xl"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-2xl mt-1 select-none">
                      {faqCategories.find((cat) => cat.id === faq.category)
                        ?.icon || "❓"}
                    </span>
                    {/* ★ 포인트: 기본은 흰색, 호버 시 '검은색'으로 변경 */}
                    <h3 className="text-lg font-semibold text-white group-hover:text-black transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  {/* 화살표 아이콘 색도 대비 높게 */}
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* 답변 영역 */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 pb-4 pl-16 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("help.title")}
              </h3>
              <p className="text-gray-600 mb-6">{t("help.body")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:docong0120@skku.edu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full font-semibold text-purple-600 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                  <span>{t("help.email")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("quick.schedule.title")}
              </h4>
              <a
                href="#/schedule"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                {t("quick.schedule.cta")} →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("quick.registration.title")}
              </h4>
              <a
                href="https://docs.google.com/forms/d/1w5YZjjplAPrApOnVwmXBzGTNdkBY3oGhbCJN95M_qmY/edit"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                {t("quick.registration.cta")} →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("quick.resources.title")}
              </h4>
              <a
                href="#/resources"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                {t("quick.resources.cta")} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faq;
