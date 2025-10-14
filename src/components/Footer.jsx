// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");

  const partners = t("partners", { returnObjects: true }) || [];
  const socials  = t("socials",  { returnObjects: true }) || [];
  const quick    = t("quick",    { returnObjects: true }) || [];
  const contact  = t("contact",  { returnObjects: true }) || {};

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center">
              <Link to="/" className="group flex items-center gap-3 transition-transform hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img src="/images/logos/skkai.svg" alt="SKKAI Logo" className="relative h-11 w-auto" />
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">{t("about")}</p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" aria-label={s.name} title={s.name}>
                  {/* 아이콘은 그대로 사용(폴리시 상 텍스트만 i18n) */}
                  <span dangerouslySetInnerHTML={{ __html: s.icon }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{t("quickTitle")}</h3>
            <ul className="space-y-2">
              {quick.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 inline-block relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{t("contactTitle")}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {contact.email}
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                {contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            {t("partnersTitle")}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img src={p.logo} alt={p.name} className={`${p.height} object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110`} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">{t("copyright", { year: new Date().getFullYear() })}</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">{t("policies.privacy")}</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">{t("policies.terms")}</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">{t("policies.coc")}</a>
            </div>
          </div>
        </div>

        {/* Quantum Animation */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <svg className="w-20 h-20 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-400" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-400" />
            <circle cx="50" cy="50" r="5"  fill="currentColor" className="text-purple-600" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite }
      `}</style>
    </footer>
  );
}
