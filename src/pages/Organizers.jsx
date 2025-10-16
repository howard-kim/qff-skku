// src/pages/Organizers.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export default function Organizers() {
  const { t } = useTranslation("organizers");
  const [selected, setSelected] = useState(null);

  // 멤버/텍스트 전부 JSON에서 읽기
  // members는 배열로 읽고, 누락 시 안전하게 빈 배열
  const members = t("members", { returnObjects: true }) || [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((p) => (
              <div
                key={p.id}
                className="group relative"
                onClick={() => setSelected(p)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
                          {(p.name || "")
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                    )}

                    {/* 이미지 우상단 보라 배지 - SKK:AI 고정 */}
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {t("badgeLogo")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {p.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      {p.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {p.organization}
                    </p>

                    {/* Expertise tags (문자열 또는 배열 모두 허용) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(Array.isArray(p.expertise)
                        ? p.expertise
                        : String(p.expertise || "").split(", ")
                      ).map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                      {p.linkedin && (
                        <a
                          href={p.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204 8.25 3.994 8.25 4.968 7.466 6.732 6.5 6.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.241V19z" />
                          </svg>
                        </a>
                      )}
                      {p.email && (
                        <a
                          href={`mailto:${p.email}`}
                          className="text-gray-400 hover:text-purple-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
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

          {/* Modal */}
          {selected && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelected(null)}
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
                      {selected.name}
                    </h2>
                    <p className="text-purple-100">
                      {selected.title} · {selected.organization}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t("labels.about")}
                    </h3>
                    <p className="text-gray-600">{selected.bio}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t("labels.expertise")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(selected.expertise)
                        ? selected.expertise
                        : String(selected.expertise || "").split(", ")
                      ).map((skill, i) => (
                        <span
                          key={i}
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
