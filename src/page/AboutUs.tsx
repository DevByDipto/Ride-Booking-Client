import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    name: "Ayesha Akter",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 3,
    name: "Karim Hossain",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/150?img=30",
  },
];

const AboutUsSection = () => {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
          About Us
        </h2>

        {/* Company Background */}
        <p className="text-lg mb-6" style={{ color: "var(--muted-foreground)" }}>
          We are a modern ride-booking platform dedicated to providing fast, safe, and reliable transportation solutions for everyone. Our mission is to connect riders with trusted drivers seamlessly and efficiently.
        </p>

        {/* Mission */}
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
          Our Mission
        </h3>
        <p className="text-lg mb-12" style={{ color: "var(--muted-foreground)" }}>
          To revolutionize urban mobility by offering a user-friendly and technology-driven ride experience that prioritizes safety, convenience, and sustainability.
        </p>

        {/* Team Profiles */}
        <h3 className="text-2xl font-semibold mb-8" style={{ color: "var(--foreground)" }}>
          Meet Our Team
        </h3>
        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
          {teamMembers.map(({ id, name, role, image }) => (
            <div
              key={id}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
              style={{ background: "var(--card)", color: "var(--card-foreground)" }}
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mb-4 border-4"
                style={{ borderColor: "var(--primary)" }}
              />
              <h4 className="text-lg font-semibold mb-1">{name}</h4>
              <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
