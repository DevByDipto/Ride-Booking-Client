import { ArrowRight, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const badge = "🚖 Your Everyday Ride Partner";
  const heading = "Book Your Ride Anytime, Anywhere";
  const description =
    "Fast, reliable, and affordable rides at your fingertips. Whether you’re heading to work, college, or across the city — we’ve got you covered with trusted drivers and real-time tracking.";
  const buttons = {
    primary: {
      text: "Book a Ride",
      url: "/book-ride",
    },
    secondary: {
      text: "Become a Driver",
      url: "/register/driver",
    },
  };
  const image = {
    src: "https://www.shutterstock.com/image-vector/smartphone-taxi-service-flat-vector-600nw-1045960822.jpg",
    alt: "Ride booking app showing car on map and pickup location",
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="secondary" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                {badge}
              </Badge>
            )}

            <h1 className="my-6 text-4xl font-bold leading-tight lg:text-6xl text-foreground">
              {heading}
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
              {description}
            </p>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto text-lg px-6 py-3">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                  </a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-6 py-3"
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[420px] w-full object-cover rounded-xl shadow-lg border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
