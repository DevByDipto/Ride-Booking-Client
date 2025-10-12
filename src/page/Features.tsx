import { CheckCircle } from "lucide-react";

const featuresData = [
  {
    role: "Rider",
    features: [
      "Request a ride with pickup & destination",
      "Real-time ride tracking",
      "View ride history and status",
      "Payment options and fare estimation",
      "Manage profile and change password",
    ],
  },
  {
    role: "Driver",
    features: [
      "Set availability status (Online/Offline)",
      "Accept or reject ride requests",
      "Update ride status (Picked Up → In Transit → Completed)",
      "View earnings history and statistics",
      "Manage vehicle info and profile",
    ],
  },
  {
    role: "Admin",
    features: [
      "View and manage all users, drivers, and rides",
      "Approve or suspend drivers",
      "Block or unblock user accounts",
      "Generate reports and analytics",
      "Access advanced filtering and search tools",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: "var(--foreground)" }}
        >
          Platform Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {featuresData.map(({ role, features }) => (
            <div
              key={role}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              style={{ background: "var(--card)", color: "var(--card-foreground)" }}
            >
              <h3 className="text-2xl font-semibold mb-6">{role}</h3>
              <ul className="flex flex-col gap-4 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "var(--primary)" }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
