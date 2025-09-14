import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img
            src="/qff-skku/images/logos/skku.jpg"
            alt="SKKU"
            className="h-8 object-contain"
          />
          <img
            src="/qff-skku/images/logos/qirsc.png"
            alt="Quantum Information Research Support Center"
            className="h-8 object-contain"
          />
          <img
            src="/qff-skku/images/logos/nces.png"
            alt="National Center for Excellence in Software"
            className="h-9 object-contain"
          />
          <img
            src="/qff-skku/images/logos/squirl.jpeg"
            alt="Superconducting Quantum Information Research Lab"
            className="h-9 object-contain"
          />
          <img
            src="/qff-skku/images/logos/ibm_quantum.png"
            alt="IBM Quantum"
            className="h-6 object-contain"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center mb-8">
        &copy; {new Date().getFullYear()} Qiskit Fall Fest @ SKKU. All rights
        reserved.
      </p>
    </footer>
  );
}
