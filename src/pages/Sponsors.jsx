// src/pages/Sponsors.jsx
import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function Sponsors() {
  const { t } = useTranslation("sponsors");

  const partners = t("partners", { returnObjects: true }) || [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              {t("badge")}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>
          </div>

          {/* Partners Grid */}
          <div className="space-y-12 max-w-7xl mx-auto px-6 lg:px-8">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group relative ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Logo Section */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative">
                      {/* Glow */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      />
                      {/* Card */}
                      <div className="relative bg-white rounded-2xl shadow-xl p-12 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                        <div className="absolute top-4 right-4">
                          <span
                            className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full"
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

                  {/* Content */}
                  <div className={`lg:w-2/3 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span>{t("cta.visit")}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("thanks.title")}</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">{t("thanks.body")}</p>
              <div className="flex flex-wrap justify-center gap-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sponsors;
