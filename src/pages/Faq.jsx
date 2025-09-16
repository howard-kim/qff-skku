import React, { useState } from "react";
import Layout from "../components/Layout";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqCategories = [
    { id: "all", label: "All Questions", icon: "📋" },
    { id: "general", label: "General", icon: "ℹ️" },
    { id: "registration", label: "Registration", icon: "✍️" },
    { id: "technical", label: "Technical", icon: "💻" },
    { id: "logistics", label: "Logistics", icon: "📍" },
  ];

  const faqData = [
    {
      category: "general",
      question: "What is Qiskit Fall Fest?",
      answer:
        "Qiskit Fall Fest is a global series of quantum computing events hosted by universities worldwide in collaboration with IBM Quantum. It's designed to introduce students to quantum computing through hands-on workshops, expert talks, and hackathon challenges using the Qiskit framework.",
    },
    {
      category: "general",
      question: "Who can participate in the event?",
      answer:
        "The event is open to all SKKU students and students from other universities interested in quantum computing. No prior quantum computing experience is required, though basic programming knowledge (Python) is helpful. We welcome students from all majors - computer science, physics, mathematics, engineering, and beyond!",
    },
    {
      category: "registration",
      question: "How do I register for the event?",
      answer:
        "Registration is done through our online form (link available on the main page). Registration is free but seats are limited to 300 participants. We recommend registering early as spots fill up quickly. You'll receive a confirmation email within 24 hours of registration.",
    },
    {
      category: "registration",
      question: "Is there a registration fee?",
      answer:
        "No! Participation in Qiskit Fall Fest 2025 at SKKU is completely free. This includes access to all workshops, talks, hackathon participation, meals during the event, and networking sessions. We're able to offer this thanks to our generous sponsors.",
    },
    {
      category: "registration",
      question: "Can I participate in only specific days?",
      answer:
        "While we encourage full participation to get the most out of the experience, we understand that some students may have scheduling conflicts. You can indicate your availability during registration. However, hackathon participants must commit to both hackathon days (Nov 20-21).",
    },
    {
      category: "technical",
      question: "What programming knowledge do I need?",
      answer:
        "Basic Python programming knowledge is recommended but not mandatory. We'll cover Qiskit basics during the workshops. If you're new to Python, we suggest going through basic Python tutorials before the event. We'll provide learning resources upon registration.",
    },
    {
      category: "technical",
      question: "Do I need to bring my own laptop?",
      answer:
        "Yes, participants should bring their own laptops. Make sure to have Python (3.8 or higher) installed along with Jupyter Notebook or JupyterLab. We'll provide detailed setup instructions via email before the event. WiFi will be available at the venue.",
    },
    {
      category: "technical",
      question: "Will we use real quantum computers?",
      answer:
        "Yes! Through IBM Quantum Experience, you'll have access to real quantum hardware during the hackathon. You'll learn how to run quantum circuits on both simulators and actual quantum processors. This is a unique opportunity to work with cutting-edge quantum technology.",
    },
    {
      category: "logistics",
      question: "Where will the event be held?",
      answer:
        "The event will be held at Sungkyunkwan University's Natural Sciences Campus in Suwon. Specific building and room information will be shared with registered participants. The venue is easily accessible by public transportation.",
    },
    {
      category: "logistics",
      question: "Will meals be provided?",
      answer:
        "Yes! We'll provide lunch boxes during workshop days and both hackathon days. Additionally, there will be a special catering dinner on the final day (Nov 21) during the networking session. Snacks and refreshments will be available throughout the event.",
    },
    {
      category: "logistics",
      question: "Is accommodation provided?",
      answer:
        "Accommodation is not provided by the organizers. However, we can share information about nearby hotels and guesthouses for participants coming from other cities. Suwon has many affordable accommodation options near the campus.",
    },
    {
      category: "general",
      question: "Will certificates be provided?",
      answer:
        "Yes! All participants who complete the program will receive an official certificate of participation from SKKU and IBM Quantum. Hackathon winners will receive special recognition certificates. These certificates can be valuable additions to your portfolio.",
    },
    {
      category: "technical",
      question: "Can I form my own team for the hackathon?",
      answer:
        "Teams can be formed before or during the event. Maximum team size is 4 members. If you don't have a team, don't worry! We'll have a team formation session on the first day of the hackathon where you can meet other participants and form teams based on interests and skills.",
    },
    {
      category: "general",
      question: "What are the prizes for hackathon winners?",
      answer:
        "We have exciting prizes for the top 3 teams, including tech gadgets, quantum computing books, and exclusive IBM Quantum swag. All participants will receive participation certificates and Qiskit Fall Fest merchandise. Detailed prize information will be announced at the opening ceremony.",
    },
    {
      category: "general",
      question: "Can international students participate?",
      answer:
        "Absolutely! International students are welcome and encouraged to participate. The primary language of instruction will be English, with Korean support available when needed. This is a great opportunity to connect with both local and international quantum computing enthusiasts.",
    },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Have Questions?
            </span>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Qiskit Fall Fest 2025 at
              SKKU
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-gray-800 shadow-md hover:shadow-lg"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-2xl mt-1">
                      {
                        faqCategories.find((cat) => cat.id === faq.category)
                          ?.icon
                      }
                    </span>
                    <h3 className="text-lg font-semibold text-gray-100 group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-4 pl-16 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our team is here to
                help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:qiskit@skku.edu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full font-semibold text-purple-600 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email Us</span>
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Join Discord</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Event Schedule
              </h4>
              <a
                href="#/schedule"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                View Schedule →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-semibold text-gray-800 mb-2">Registration</h4>
              <a
                href="#/register"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                Register Now →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-800 mb-2">Resources</h4>
              <a
                href="#/resources"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faq;
