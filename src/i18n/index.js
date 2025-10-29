// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enSkKAI from "../locales/en/skkai.json";
import koCommon from "../locales/ko/common.json";
import koSkKAI from "../locales/ko/skkai.json";
import enSchedule from "../locales/en/schedule.json";
import koSchedule from "../locales/ko/schedule.json";
import enOrganizers from "../locales/en/organizers.json";
import koOrganizers from "../locales/ko/organizers.json";
import enSponsors from "../locales/en/sponsors.json";
import koSponsors from "../locales/ko/sponsors.json";
import enFaq from "../locales/en/faq.json";
import koFaq from "../locales/ko/faq.json";
import enFooter from "../locales/en/footer.json";
import koFooter from "../locales/ko/footer.json";
import enQff from "../locales/en/qff.json";
import koQff from "../locales/ko/qff.json";
import enHero2 from "../locales/en/hero2.json";
import koHero2 from "../locales/ko/hero2.json";
import enSpeakers from "../locales/en/speakers.json";
import koSpeakers from "../locales/ko/speakers.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, skkai: enSkKAI, schedule: enSchedule, organizers: enOrganizers, sponsors: enSponsors, faq: enFaq, footer: enFooter, qff: enQff, hero2: enHero2, speakers: enSpeakers },
      ko: { common: koCommon, skkai: koSkKAI, schedule: koSchedule, organizers: koOrganizers, sponsors: koSponsors, faq: koFaq, footer: koFooter, qff: koQff, hero2: koHero2, speakers: koSpeakers },
    },
    fallbackLng: "ko",
    supportedLngs: ["en", "ko"],
    ns: ["common", "skkai", "schedule", "organizers", "sponsors", "faq", "footer", "qff", "hero2", "speakers"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "querystring", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
