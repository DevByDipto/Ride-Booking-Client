import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Uddin",
      feedback: "এই সার্ভিসটি আমার জীবন অনেক সহজ করেছে! খুব দ্রুত আর নির্ভরযোগ্য।",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Ayesha Akter",
      feedback: "তাদের সাপোর্ট টিম অসাধারণ, সব প্রশ্নের উত্তর খুব দ্রুত পাই।",
      role: "Client",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Karim Hossain",
      feedback: "চমৎকার অভিজ্ঞতা। আমি অবশ্যই আবার ব্যবহার করব!",
      role: "Regular User",
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, feedback, role, image }) => (
            <div
              key={id}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-indigo-500"
                />
                <p className="text-gray-600 dark:text-gray-300 italic mb-3">
                  “{feedback}”
                </p>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
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
