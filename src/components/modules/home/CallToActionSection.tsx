import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-20 text-center"
      style={{
        background: "var(--card)", // Darker background
        color: "var(--card-foreground)", // Contrast text
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Ready to Get Started?
        </h2>

        <p
          className="text-lg mb-8"
          style={{ color: "var(--muted-foreground)" }}
        >
          Join us today and experience a faster, smarter, and more reliable service.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 font-semibold rounded-full flex items-center gap-2 hover:scale-105 transition"
            style={{
              background: "var(--primary)", // Darker button
              color: "var(--primary-foreground)", // Contrast text
              border: "1px solid var(--border)",
            }}
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 font-semibold rounded-full transition"
            style={{
              border: "2px solid var(--primary-foreground)",
              color: "var(--primary-foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-foreground)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--primary-foreground)";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
