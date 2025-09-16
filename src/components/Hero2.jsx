import React from "react";

const features = [
  {
    title: "Quantum workshops",
    description:
      "Hands-on sessions exploring Qiskit and quantum computing basics for all levels.",
    image: "/images/ibm_quantum/Illustration/Crops/Crop_Future.png",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    shadowColor: "shadow-purple-200",
  },
  {
    title: "Expert talks",
    description:
      "Hear from IBM researchers and quantum computing professionals.",
    image: "/images/ibm_quantum/Illustration/Crops/Crop_Heisenbergpng.png",
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-300",
    borderColor: "border-gray-10",
    textColor: "text-gray-600",
    shadowColor: "shadow-gray-200",
  },
  {
    title: "Networking events",
    description:
      "Meet peers, join team challenges, and connect with the Quantum community.",
    image: "/images/ibm_quantum/Illustration/Crops/Crop_Einstein.png",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-500",
    shadowColor: "shadow-purple-100",
  },
  {
    title: "Quantum Hackathon",
    description:
      "Solve real-world challenges using Qiskit on actual quantum hardware.",
    image: "/images/ibm_quantum/Illustration/Crops/Crop_Schrodinger.png",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    shadowColor: "shadow-blue-200",
  },
  {
    title: "Valuable Awards",
    description:
      "Awards & certifications are given to the participants by the name of President of SKKU and IBM Quantum.",
    image: "/images/ibm_quantum/Badge/Badge_Dark.png",
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-300",
    borderColor: "border-gray-10",
    textColor: "text-gray-600",
    shadowColor: "shadow-gray-200",
  },
];

function Hero2() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4">
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
        <div className="space-y-32">
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
                  className={`relative w-48 h-38 ${feature.bgColor} rounded-2xl p-5 shadow-lg ${feature.shadowColor} group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border ${feature.borderColor}`}
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
              <div className="text-center md:text-left max-w-xl">
                {/* Number Badge */}
                <span
                  className={`inline-block px-3 py-1 ${feature.bgColor} ${feature.textColor} text-sm font-semibold rounded-full mb-4`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-xl leading-relaxed">
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
