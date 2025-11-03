import React from "react";
import { useTranslation, Trans } from "react-i18next";

function Hero2() {
  const { t } = useTranslation("hero2");

  const visual = [
    {
      image: "/images/ibm_quantum/Illustration/Crops/Crop_Future.png",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      shadowColor: "shadow-purple-200",
    },
    {
      image: "/images/ibm_quantum/Illustration/Crops/Crop_Heisenbergpng.png",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      shadowColor: "shadow-gray-200",
    },
    {
      image: "/images/ibm_quantum/Illustration/Crops/Crop_Einstein.png",
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      shadowColor: "shadow-purple-100",
    },
    {
      image: "/images/ibm_quantum/Illustration/Crops/Crop_Schrodinger.png",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      shadowColor: "shadow-blue-200",
    },
    {
      image: "/images/ibm_quantum/Badge/Badge_Dark.png",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      shadowColor: "shadow-gray-200",
    },
  ];

  // i18n에서 features 배열 가져오기 (안전 가드)
  const items = t("features", { returnObjects: true });
  const features = Array.isArray(items) ? items : [];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <Trans
              ns="hero2"
              i18nKey="subtitle"
              components={{
                b: <strong className="font-semibold" />,
                blue: <span className="text-blue-600 font-medium" />,
              }}
            />
          </p>
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feat, index) => {
            const v = visual[index % visual.length];
            return (
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
                    className={`absolute inset-0 w-48 h-48 bg-gradient-to-br ${v.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110`}
                  />
                  {/* Rotating Border */}
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${v.color} rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                  />
                  {/* Image with Background */}
                  <div
                    className={`relative w-48 h-38 ${v.bgColor} rounded-2xl p-5 shadow-lg ${v.shadowColor} group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border ${v.borderColor}`}
                  >
                    <img
                      src={v.image}
                      alt={t("featuresAlt", { index: index + 1 })}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Elements */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 ${v.bgColor} rounded-full border-2 ${v.borderColor} animate-pulse`}
                  />
                  <div
                    className={`absolute -bottom-3 -left-3 w-8 h-8 ${v.bgColor} rounded-full border-2 ${v.borderColor} animate-bounce`}
                  />
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl">
                  {/* Number Badge */}
                  <span
                    className={`inline-block px-3 py-1 ${v.bgColor} ${v.textColor} text-sm font-semibold rounded-full mb-4`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${v.color} bg-clip-text text-transparent`}
                  >
                    {feat.title}
                  </h3>

                  {/* 설명은 <Trans>로 굵게/색상 유지 가능 */}
                  <p className="text-gray-700 text-xl leading-relaxed">
                    <Trans
                      ns="hero2"
                      i18nKey={`features.${index}.description`}
                      components={{
                        b: <strong className="font-semibold" />,
                        blue: <span className="text-blue-600 font-medium" />,
                        purple: <span className="text-purple-600 font-medium" />,
                      }}
                    />
                  </p>

                  {/* Decorative Line */}
                  <div
                    className={`mt-6 h-1 w-20 bg-gradient-to-r ${
                      v.color
                    } rounded-full ${index % 2 === 0 ? "" : "md:ml-auto"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50%      { transform: translateY(-10px) }
        }
        .animate-float { animation: float 3s ease-in-out infinite }
      `}</style>
    </section>
  );
}

export default Hero2;
