import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How do I request a ride?",
    answer: "Simply log in as a Rider, enter your pickup and destination locations, and submit your ride request.",
  },
  {
    question: "Can I cancel a ride?",
    answer: "Yes, riders can cancel rides before a driver accepts the request.",
  },
  {
    question: "How do drivers set their availability?",
    answer: "Drivers can toggle their status between Online and Offline in the Driver Dashboard.",
  },
  {
    question: "How can I contact support?",
    answer: "Use the Contact form on our website or reach out to our support email.",
  },
  {
    question: "How do I view my ride history?",
    answer: "Riders and drivers can view their ride history in their respective dashboards.",
  },
];

const FAQSection = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
          Frequently Asked Questions
        </h2>

        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg"
            style={{
              background: "var(--input)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
          />
        </div>

        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              style={{ background: "var(--card)", color: "var(--card-foreground)" }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: "var(--primary)" }}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">No questions found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
