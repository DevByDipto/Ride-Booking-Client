

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Uddin",
      feedback: "This service has made my life so much easier! Fast and reliable.",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Ayesha Akter",
      feedback: "Their support team is amazing, I get responses very quickly.",
      role: "Client",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Karim Hossain",
      feedback: "Excellent experience. I will definitely use it again!",
      role: "Regular User",
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section
      className="py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold mb-12"
          style={{ color: "var(--foreground)" }}
        >
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, feedback, role, image }) => (
            <div
              key={id}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              style={{ background: "var(--card)", color: "var(--card-foreground)" }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full mb-4 border-4"
                  style={{ borderColor: "var(--primary)" }}
                />
                <p className="italic mb-3" style={{ color: "var(--muted-foreground)" }}>
                  “{feedback}”
                </p>
                <h3 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                  {name}
                </h3>
                <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
