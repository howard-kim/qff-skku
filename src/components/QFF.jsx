import React, { useEffect, useRef } from "react";

export default function QFF() {
  const particlesRef = useRef(null);

  // 파티클 애니메이션을 위한 useEffect
  useEffect(() => {
    const particles = particlesRef.current?.children;
    if (!particles) return;

    const animateParticles = () => {
      Array.from(particles).forEach((particle, index) => {
        const delay = index * 500;
        particle.style.animationDelay = `${delay}ms`;
      });
    };

    animateParticles();
  }, []);

  return (
    <section className="relative bg-gradient-to-br overflow-hidden">
      {/* Floating Quantum Orbs with Enhanced Animation */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 4 === 0
                ? "from-blue-400/30 to-cyan-400/30"
                : i % 4 === 1
                ? "from-purple-400/30 to-pink-400/30"
                : i % 4 === 2
                ? "from-emerald-400/30 to-teal-400/30"
                : "from-amber-400/30 to-orange-400/30"
            } blur-sm animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 backdrop-blur-[0.5px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section with Enhanced Typography */}
        <div className="text-center mb-20 space-y-8">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-300 to-pink-400 text-black text-sm font-semibold rounded-full border border-black-200 shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              IBM Quantum Qiskit Fall Fest 2025
            </span>
          </div>
          {/* Wrapped Image and Heading Sections */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
            <section className="lg:w-1/2">
              <div className="relative perspective-1000 mx-auto animate-float">
                <img
                  src="public/images/ibm_quantum/Badge/Badge.png"
                  alt="Qiskit Fall Fest"
                  className="mx-auto w-full max-w-md rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </section>
            <section className="lg:w-1/2 text-left">
              <h1 className="text-6xl md:text-7xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-black-100 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Qiskit Fall Fest
                </span>
              </h1>

              <div className="max-w-4xl m space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Qiskit Fall Fest is a global hackathon series hosted annually
                  by{" "}
                  <span className="font-medium text-blue-600">IBM Quantum</span>{" "}
                  to help university students around the world learn and
                  experience quantum computing using Qiskit.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Each university independently plans and hosts its own Qiskit
                  Fall Fest event, where participants explore a wide range of
                  quantum computing topics.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
