import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          আজই আমাদের সার্ভিস ব্যবহার করে দেখুন — দ্রুত, নির্ভরযোগ্য ও আধুনিক অভিজ্ঞতা উপভোগ করুন।
          <br />
          (English: Try our service today — fast, reliable, and modern experience awaits.)
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full flex items-center gap-2 hover:scale-105 transition"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
