// HowItWorksOverview.tsx
import { Car, MapPin, User, Star } from "lucide-react";

const steps = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Request a Ride",
    desc: "Choose your pickup and destination to request a ride instantly.",
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Get Matched",
    desc: "We'll connect you with the nearest available driver in seconds.",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Enjoy Your Trip",
    desc: "Sit back and relax while your driver takes you to your destination safely.",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Pay & Rate",
    desc: "Pay securely and rate your driver for a better experience next time.",
  },
];

const HowItWorksOverview = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md border border-border bg-card hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOverview;
