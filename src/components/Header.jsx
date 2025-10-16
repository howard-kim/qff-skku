import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common");

  const [isScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentLang = i18n.language?.startsWith("ko") ? "ko" : "en";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollRatio * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 네비 항목(문자열은 다 t(...)로)
  const navItems = [
    { name: t("nav.about"), href: "#/aboutus" },
    { name: t("nav.schedule"), href: "#/schedule" },
    { name: t("nav.speakers"), href: "#/speakers" },
    { name: t("nav.organizers"), href: "#/organizers" },
    { name: t("nav.sponsors"), href: "#/sponsors" },
    { name: t("nav.faq"), href: "#/faq" },
  ];

  // 언어 토글
  const toggleLanguage = () => {
    const next = currentLang === "ko" ? "en" : "ko";
    i18n.changeLanguage(next);
    // 선택적으로 <html lang="...">도 업데이트
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", next);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a
              href="/"
              className="group flex items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src="/images/logos/skkai.svg"
                  alt="SKKAI Logo"
                  className="relative h-11 w-auto"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-900 transition-all duration-500 hover:scale-110 hover:text-blue-600"
                  >
                    <span className="relative z-20 flex items-center gap-2">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Register Button - Desktop */}
            <a
              href="https://docs.google.com/forms/d/1w5YZjjplAPrApOnVwmXBzGTNdkBY3oGhbCJN95M_qmY/edit"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{t("cta.register")}</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="relative group px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
              aria-label={currentLang === "ko" ? t("lang.switchToEn") : t("lang.switchToKo")}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                {/* 버튼 라벨: KO/EN 토글 */}
                <span className="font-medium text-gray-700">
                  {currentLang === "ko" ? "EN" : "KO"}
                </span>
              </div>

              {/* Tooltip */}
              <span
                className="absolute -bottom-9 left-1/2 -translate-x-1/2
                          px-2 py-1 rounded text-xs text-white bg-gray-900
                          pointer-events-none whitespace-nowrap shadow-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          z-50"
              >
                {currentLang === "ko" ? "English" : "한국어"}
                {/* i18n 쓰고 싶으면 아래로 바꿔도 됩니다:
                    {currentLang === "ko" ? t("lang.switchToEn") : t("lang.switchToKo")} */}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:bg-gray-200 transition-colors"
              aria-label={isMobileMenuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 overflow-y-auto opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="py-1 border-t border-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${
                        activeLink === item.name
                          ? "bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://docs.google.com/forms/d/1w5YZjjplAPrApOnVwmXBzGTNdkBY3oGhbCJN95M_qmY/edit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 mx-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
                >
                  <span>{t("cta.registerNow")}</span>
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Progress Bar (optional) */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;