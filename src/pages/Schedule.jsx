// src/pages/Schedule.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function Schedule() {
  const { t } = useTranslation("schedule");
  const [activeTab, setActiveTab] = useState("overview");

  // 날짜/아이콘/색상은 그대로, 텍스트는 t(...) 사용
  const overviewSchedule = [
    {
      date: "2025.11.18 (Tue)",
      title: t("overview.days.1.title"),
      content: t("overview.days.1.content"),
      details: t("overview.days.1.details"),
      icon: "🔬",
      color: "from-purple-500 to-purple-600",
    },
    {
      date: "2025.11.19 (Wed)",
      title: t("overview.days.2.title"),
      content: t("overview.days.2.content"),
      details: t("overview.days.2.details"),
      icon: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      date: "2025.11.20 (Thu)",
      title: t("overview.days.3.title"),
      content: t("overview.days.3.content"),
      details: t("overview.days.3.details"),
      icon: "🚀",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      date: "2025.11.21 (Fri)",
      title: t("overview.days.4.title"),
      content: t("overview.days.4.content"),
      details: t("overview.days.4.details"),
      icon: "🏆",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const workshopSchedule = {
    day1: {
      date: "2025.11.18 (Tue)",
      title: t("workshop.day1.title"),
      events: [
        {
          time: "13:00 - 13:10",
          title: t("workshop.day1.events.1.title"),
          desc: t("workshop.day1.events.1.desc"),
          icon: t("workshop.day1.events.1.icon"),
        },
        {
          time: "13:10 - 13:30",
          title: t("workshop.day1.events.2.title"),
          desc: t("workshop.day1.events.2.desc"),
          icon: t("workshop.day1.events.2.icon"),
        },
        {
          time: "13:30 - 14:30",
          title: t("workshop.day1.events.3.title"),
          desc: t("workshop.day1.events.3.desc"),
          icon: t("workshop.day1.events.3.icon"),
        },
        {
          time: "15:00 - 16:00",
          title: t("workshop.day1.events.4.title"),
          desc: t("workshop.day1.events.4.desc"),
          icon: t("workshop.day1.events.4.icon"),
        },
        {
          time: "16:10 - 17:10",
          title: t("workshop.day1.events.5.title"),
          desc: t("workshop.day1.events.5.desc"),
          icon: t("workshop.day1.events.5.icon"),
        },
      ],
    },
    day2: {
      date: "2025.11.19 (Wed)",
      title: t("workshop.day2.title"),
      events: [
        {
          time: "13:00 - 14:00",
          title: t("workshop.day2.events.1.title"),
          desc: t("workshop.day2.events.1.desc"),
          icon: t("workshop.day2.events.1.icon"),
        },
        {
          time: "14:10 - 15:10",
          title: t("workshop.day2.events.2.title"),
          desc: t("workshop.day2.events.2.desc"),
          icon: t("workshop.day2.events.2.icon"),
        },
        {
          time: "15:20 - 16:20",
          title: t("workshop.day2.events.3.title"),
          desc: t("workshop.day2.events.3.desc"),
          icon: t("workshop.day2.events.3.icon"),
        },
        {
          time: "16:30 - 17:30",
          title: t("workshop.day2.events.4.title"),
          desc: t("workshop.day2.events.4.desc"),
          icon: t("workshop.day2.events.4.icon"),
        },
      ],
    },
    day3: {
      date: "2025.11.20 (Thu)",
      title: t("workshop.day3.title"),
      events: [
        {
          time: "09:00 - 12:00",
          title: t("workshop.day3.events.1.title"),
          desc: t("workshop.day3.events.1.desc"),
          icon: t("workshop.day3.events.1.icon"),
        },
      ],
    },
  };

  const detailedSchedule = {
    day1: {
      date: "2025.11.20 (Thu)",
      title: t("hackathon.day1.title"),
      events: [
        {
          time: "13:00 - 14:00",
          title: t("hackathon.day1.events.1.title"),
          desc: t("hackathon.day1.events.1.desc"),
          icon: "📋",
        },
        {
          time: "14:00 - 18:00",
          title: t("hackathon.day1.events.2.title"),
          desc: t("hackathon.day1.events.2.desc"),
          icon: "💡",
        },
        {
          time: "18:00 - 19:00",
          title: t("hackathon.day1.events.3.title"),
          desc: t("hackathon.day1.events.3.desc"),
          icon: "🍱",
        },
        {
          time: "19:00 - 22:00",
          title: t("hackathon.day1.events.4.title"),
          desc: t("hackathon.day1.events.4.desc"),
          icon: "⚡",
        },
      ],
    },
    day2: {
      date: "2025.11.21 (Fri)",
      title: t("hackathon.day2.title"),
      events: [
        {
          time: "09:00 - 12:00",
          title: t("hackathon.day2.events.1.title"),
          desc: t("hackathon.day2.events.1.desc"),
          icon: "🔧",
        },
        {
          time: "12:00 - 13:00",
          title: t("hackathon.day2.events.2.title"),
          desc: t("hackathon.day2.events.2.desc"),
          icon: "🍱",
        },
        {
          time: "13:00 - 15:00",
          title: t("hackathon.day2.events.3.title"),
          desc: t("hackathon.day2.events.3.desc"),
          icon: "🎤",
        },
        {
          time: "15:00 - 17:00",
          title: t("hackathon.day2.events.4.title"),
          desc: t("hackathon.day2.events.4.desc"),
          icon: "☕",
        },
        {
          time: "17:00 - 18:00",
          title: t("hackathon.day2.events.5.title"),
          desc: t("hackathon.day2.events.5.desc"),
          icon: "🏅",
        },
        {
          time: "18:00 - 20:00",
          title: t("hackathon.day2.events.6.title"),
          desc: t("hackathon.day2.events.6.desc"),
          icon: "🍽️",
        },
      ],
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            {t("badge")}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>
            <p className="text-lg text-gray-600">{t("subtitle")}</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="rounded-full shadow-lg p-1 inline-flex space-x-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-white-100 hover:text-green-800"
                }`}
              >
                {t("tabs.overview")}
              </button>
              <button
                onClick={() => setActiveTab("workshop")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "workshop"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-white-100 hover:text-green-800"
                }`}
              >
                {t("tabs.workshop")}
              </button>
              <button
                onClick={() => setActiveTab("hackathon")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "hackathon"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-white-100 hover:text-green-800"
                }`}
              >
                {t("tabs.hackathon")}
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

                {overviewSchedule.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-8">
                    <div className="hidden md:flex absolute left-8 w-4 h-4 bg-white border-4 border-purple-600 rounded-full -translate-x-1/2 z-10"></div>

                    <div className="md:ml-20 w-full group">
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                        <div
                          className={`h-2 bg-gradient-to-r ${item.color}`}
                        ></div>
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                  {item.date}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-lg text-gray-700 font-medium">
                                {item.content}
                              </p>
                              <p className="text-gray-600 mt-1 whitespace-pre-line">
                                {item.details}
                              </p>
                            </div>
                            <div
                              className={`ml-4 px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full`}
                            >
                              {t("overview.chip", { n: index + 1 })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    label: t("stats.totalDays.label"),
                    value: t(4),
                    icon: "📅",
                  },
                  {
                    label: t("stats.workshops.label"),
                    value: t("stats.workshops.value"),
                    icon: "🎓",
                  },
                  {
                    label: t("stats.hackathon.label"),
                    value: t("stats.hackathon.value"),
                    icon: "💻",
                  },
                  {
                    label: t("stats.meals.label"),
                    value: t("stats.meals.value"),
                    icon: "🍱",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workshop Detail Tab */}
          {activeTab === "workshop" && (
            <div className="space-y-8">
              {/* Day 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {workshopSchedule.day1.title}
                  </h2>
                  <p className="text-purple-100">
                    {workshopSchedule.day1.date}
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  {workshopSchedule.day1.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="text-2xl">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="text-sm text-purple-600 font-medium">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {workshopSchedule.day2.title}
                  </h2>
                  <p className="text-blue-100">{workshopSchedule.day2.date}</p>
                </div>
                <div className="p-6 space-y-4">
                  {workshopSchedule.day2.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="text-2xl">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="text-sm text-blue-600 font-medium">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {workshopSchedule.day3.title}
                  </h2>
                  <p className="text-indigo-100">
                    {workshopSchedule.day3.date}
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  {workshopSchedule.day3.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="text-2xl">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="text-sm text-indigo-600 font-medium">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📌</span>
                  {t("workshop.notes.title")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("workshop.notes.items.1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("workshop.notes.items.2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("workshop.notes.items.3")}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Hackathon Detail Tab */}
          {activeTab === "hackathon" && (
            <div className="space-y-8">
              {/* Day 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {detailedSchedule.day1.title}
                  </h2>
                  <p className="text-indigo-100">
                    {detailedSchedule.day1.date}
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  {detailedSchedule.day1.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="text-2xl">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="text-sm text-indigo-600 font-medium">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {detailedSchedule.day2.title}
                  </h2>
                  <p className="text-amber-100">{detailedSchedule.day2.date}</p>
                </div>
                <div className="p-6 space-y-4">
                  {detailedSchedule.day2.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="text-2xl">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="text-sm text-amber-600 font-medium">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📌</span>
                  {t("hackathon.notes.title")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("hackathon.notes.items.1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("hackathon.notes.items.2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("hackathon.notes.items.3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {t("hackathon.notes.items.4")}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Schedule;
