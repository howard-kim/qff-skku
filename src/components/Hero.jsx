import React from "react";
import Countdown from "react-countdown";

const Hero = () => {
  // Custom countdown renderer
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-2xl font-bold text-green-600">
          Event Started! 🎉
        </span>
      );
    } else {
      return (
        <div className="flex justify-center gap-3 md:gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {String(days).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Days
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {String(hours).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Hours
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {String(minutes).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Minutes
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                {String(seconds).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-purple-50/30 to-white py-20 md:py-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200 shadow-md">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            IBM Quantum Network Event
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient">
            Qiskit Fall Fest 2025
          </h1>

          {/* SKKU Host Badge */}
          <div className="mt-6 inline-block">
            <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
              <span className="text-gray-800">Hosted by</span>
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 blur-xl opacity-40"></span>
                <span className="relative bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Sungkyunkwan University
                </span>
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">November 17-21 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">Natural Sciences Campus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">5 Days of Quantum</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-10">
            <Countdown
              date={new Date("2025-11-17T00:00:00")}
              renderer={countdownRenderer}
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Register Now
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </span>
            </button>
            <button className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-full shadow-md hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative group">
          {/* Image Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
            <img
              src={
                "/qff-skku/images/ibm_quantum/Illustration/Full_Illustration.png"
              }
              alt="Qiskit Fall Fest Visual"
              className="w-full transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            <span className="text-sm font-bold">Limited Seats!</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Participants" },
            { number: "10+", label: "Workshops" },
            { number: "10+", label: "Speakers" },
            { number: "48h", label: "Hackathon" },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
