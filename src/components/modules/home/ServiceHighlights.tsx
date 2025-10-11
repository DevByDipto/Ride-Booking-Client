// ServiceHighlights.tsx
import { ShieldCheck, DollarSign, Headphones, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Safe & Reliable",
    desc: "Every ride is tracked, and drivers are verified to ensure your safety at all times.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Affordable Pricing",
    desc: "Transparent and fair pricing ensures you always get the best value for your ride.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    desc: "Our customer support team is available round-the-clock to assist you anytime.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Easy App Experience",
    desc: "Book rides quickly and manage your trips with our user-friendly interface.",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Service Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
