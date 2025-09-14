import React from "react";

const features = [
  {
    title: "Quantum workshops.",
    description:
      "Hands-on sessions exploring Qiskit and quantum computing basics for all levels.",
    image: "/qff-skku/images/ibm_quantum/Illustration/Crops/Crop_Future.png",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
  },
  {
    title: "Expert talks.",
    description:
      "Hear from IBM researchers and quantum computing professionals.",
    image:
      "/qff-skku/images/ibm_quantum/Illustration/Crops/Crop_Heisenbergpng.png",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
  },
  {
    title: "Networking events.",
    description:
      "Meet peers, join team challenges, and connect with the Quantum community.",
    image: "/qff-skku/images/ibm_quantum/Illustration/Crops/Crop_Einstein.png",
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-600",
  },
  {
    title: "Quantum Hackathon",
    description:
      "Solve real-world challenges using Qiskit on actual quantum hardware.",
    image:
      "/qff-skku/images/ibm_quantum/Illustration/Crops/Crop_Schrodinger.png",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-600",
  },
];

function Hero2() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            What to Expect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for an immersive quantum computing experience with
            workshops, talks, and hands-on challenges
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-center gap-12 md:gap-20`}
            >
              {/* Image Container */}
              <div className="relative group">
                {/* Decorative Background Circle */}
                <div
                  className={`absolute inset-0 w-48 h-48 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110`}
                ></div>

                {/* Rotating Border */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                ></div>

                {/* Image with Background */}
                <div
                  className={`relative w-48 h-38 ${feature.bgColor} rounded-2xl p-5 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border ${feature.borderColor}`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating Elements */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 ${feature.bgColor} rounded-full border-2 ${feature.borderColor} animate-pulse`}
                ></div>
                <div
                  className={`absolute -bottom-3 -left-3 w-8 h-8 ${feature.bgColor} rounded-full border-2 ${feature.borderColor} animate-bounce`}
                ></div>
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left max-w-md">
                {/* Number Badge */}
                <span
                  className={`inline-block px-3 py-1 ${feature.bgColor} ${feature.textColor} text-sm font-semibold rounded-full mb-4`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={`mt-6 h-1 w-20 bg-gradient-to-r ${
                    feature.color
                  } rounded-full ${index % 2 === 0 ? "" : "md:ml-auto"}`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="flex items-center gap-3">
              Join the Quantum Revolution
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero2;
