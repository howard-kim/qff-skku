import React, { useState } from "react";
import Layout from "../components/Layout";

function Schedule() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewSchedule = [
    {
      date: "2025.11.17 (월)",
      title: "Workshop Day 1",
      content: "양자컴퓨터 개관",
      details: "백엔드 (초전도체, 이온트랩)",
      icon: "🔬",
      color: "from-purple-500 to-purple-600",
    },
    {
      date: "2025.11.18 (화)",
      title: "Workshop Day 2",
      content: "IBM & Qiskit",
      details: "플랫폼 소개 및 기초",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      date: "2025.11.19 (수)",
      title: "Workshop Day 3",
      content: "Qiskit 실습",
      details: "알고리즘 구현",
      icon: "⚛️",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      date: "2025.11.20 (목)",
      title: "Hackathon Day 1",
      content: "해커톤 시작",
      details: "문제 설명 및 팀 구성",
      icon: "🚀",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      date: "2025.11.21 (금)",
      title: "Hackathon Day 2",
      content: "발표 & 시상식",
      details: "네트워킹 파티",
      icon: "🏆",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const detailedSchedule = {
    day1: {
      date: "2025.11.20 (목)",
      title: "Hackathon Day 1",
      events: [
        {
          time: "09:00 - 10:00",
          title: "해커톤 OT",
          desc: "문제 설명, 제출 및 발표 안내",
          icon: "📋",
        },
        {
          time: "10:00 - 12:00",
          title: "해커톤 진행",
          desc: "팀별 문제 해결 시작",
          icon: "💡",
        },
        {
          time: "12:00 - 13:00",
          title: "점심시간",
          desc: "도시락 제공",
          icon: "🍱",
        },
        {
          time: "13:00 - 18:00",
          title: "해커톤 진행",
          desc: "집중 개발 시간",
          icon: "⚡",
        },
      ],
    },
    day2: {
      date: "2025.11.21 (금)",
      title: "Hackathon Day 2 & Awards",
      events: [
        {
          time: "09:00 - 12:00",
          title: "해커톤 진행",
          desc: "최종 마무리 작업",
          icon: "🔧",
        },
        {
          time: "12:00 - 13:00",
          title: "점심시간",
          desc: "도시락 제공",
          icon: "🍱",
        },
        {
          time: "13:00 - 15:00",
          title: "발표",
          desc: "선착순 발표, 가산점 부여",
          icon: "🎤",
        },
        {
          time: "15:00 - 17:00",
          title: "심사 & 네트워킹",
          desc: "교수님 심사, 다과 제공",
          icon: "☕",
        },
        {
          time: "17:00 - 18:00",
          title: "시상식",
          desc: "우수팀 시상",
          icon: "🏅",
        },
        {
          time: "18:00 - 20:00",
          title: "만찬",
          desc: "케이터링 식사 & 네트워킹",
          icon: "🍽️",
        },
      ],
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Event Schedule
              </span>
            </h1>
            <p className="text-lg text-gray-600">5일간의 양자컴퓨팅 여정</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                전체 일정
              </button>
              <button
                onClick={() => setActiveTab("hackathon")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "hackathon"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                해커톤 상세
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Timeline Cards */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

                {overviewSchedule.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-8">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-8 w-4 h-4 bg-white border-4 border-purple-600 rounded-full -translate-x-1/2 z-10"></div>

                    {/* Card */}
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
                              <p className="text-gray-600 mt-1">
                                {item.details}
                              </p>
                            </div>
                            <div
                              className={`ml-4 px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full`}
                            >
                              Day {index + 1}
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
                  { label: "Total Days", value: "5", icon: "📅" },
                  { label: "Workshops", value: "3", icon: "🎓" },
                  { label: "Hackathon", value: "2 Days", icon: "💻" },
                  { label: "Meals Provided", value: "5+", icon: "🍱" },
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
                        <p className="text-gray-600 mt-1">{event.desc}</p>
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
                        <p className="text-gray-600 mt-1">{event.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📌</span>
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    발표는 선착순으로 진행되며, 발표팀에게는 가산점이 부여됩니다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    모든 식사가 제공되므로 별도 준비가 필요하지 않습니다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    네트워킹 시간을 활용하여 다른 참가자들과 교류하세요
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
