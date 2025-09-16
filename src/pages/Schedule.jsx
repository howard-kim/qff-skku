import React, { useState } from "react";
import Layout from "../components/Layout";

function Schedule() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewSchedule = [
    {
      date: "2025.11.18 (Tue)",
      title: "Workshop Day 1",
      content: "Overview of Quantum Computings",
      details: "Introduction & Hardware Backends and Algorithms",
      icon: "🔬",
      color: "from-purple-500 to-purple-600",
    },
    {
      date: "2025.11.19 (Wed)",
      title: "Workshop Day 2",
      content: "IBM & Qiskit and Qiskit Hands-On",
      details: "Platform Introduction and Basics",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      date: "2025.11.20 (Thu)",
      title: "Hackathon Day 1",
      content: "Hackathon Begins",
      details: "Problem Briefing, Team Formation and Hacking Start",
      icon: "🚀",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      date: "2025.11.21 (Fri)",
      title: "Hackathon Day 2",
      content: "Final Presentations & Awards",
      details: "Award Ceremony & Networking Party",
      icon: "🏆",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const detailedSchedule = {
    day1: {
      date: "2025.11.20 (Thu)",
      title: "Hackathon Day 1",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Hackathon Orientation",
          desc: "Problem introduction, submission and presentation guidelines",
          icon: "📋",
        },
        {
          time: "10:00 - 12:00",
          title: "Hackathon Session",
          desc: "Team-based problem solving begins",
          icon: "💡",
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break",
          desc: "Lunch box provided",
          icon: "🍱",
        },
        {
          time: "13:00 - 18:00",
          title: "Hackathon Session",
          desc: "Focused development time",
          icon: "⚡",
        },
      ],
    },
    day2: {
      date: "2025.11.21 (Fri)",
      title: "Hackathon Day 2 & Awards",
      events: [
        {
          time: "09:00 - 12:00",
          title: "Hackathon Session",
          desc: "Final touches and wrap-up",
          icon: "🔧",
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break",
          desc: "Lunch box provided",
          icon: "🍱",
        },
        {
          time: "13:00 - 15:00",
          title: "Presentations",
          desc: "First-come-first-served presentation order with bonus points",
          icon: "🎤",
        },
        {
          time: "15:00 - 17:00",
          title: "Judging & Networking",
          desc: "Judging by professors, light refreshments provided",
          icon: "☕",
        },
        {
          time: "17:00 - 18:00",
          title: "Awards Ceremony",
          desc: "Awards for outstanding teams",
          icon: "🏅",
        },
        {
          time: "18:00 - 20:00",
          title: "Dinner Reception",
          desc: "Catered meal and networking",
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
            Details on
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Event Schedule
              </span>
            </h1>
            <p className="text-lg text-gray-600">4 days of Quantum Journey</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="rounded-full shadow-lg p-1 inline-flex space-x-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Schedule Overview
              </button>
              <button
                onClick={() => setActiveTab("hackathon")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "hackathon"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Hackathon Details
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
                    Presentations will be conducted on a first-come,
                    first-served basis, and bonus points will be awarded to
                    presenting teams.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Lunch boxes will be provided on both Day 1 and Day 2.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>A catered dinner
                    will be provided on Day 2.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Make use of the networking time to connect with other
                    participants.
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
