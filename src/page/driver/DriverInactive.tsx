import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import Loading from "@/components/shared/Loading";

const DriverInactive = (WrappedComponent: React.ComponentType) => {
  const WithDriverInactive = () => {
    const { data,isLoading } = useUserInfoQuery();
    const navigate = useNavigate();
if(isLoading)return <Loading/>
    // //console.log(data?.data?.driver);
 if (data?.data?.driver?.isApproved === "pending") {
      // ⚠️ ভুল ছিল — WrappedComponent শুধু return করলে কিছু render হয় না
      // তাই JSX আকারে return করতে হবে 👇
      return (
        <div
          className="max-w-md mx-auto mt-16 p-8 rounded-2xl shadow-lg text-center border transition-colors duration-300"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--card-foreground)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col items-center space-y-5">
            {/* ⚠️ Warning icon */}
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full border text-2xl"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-foreground)",
                borderColor: "var(--border)",
              }}
            >
              ⏳
            </div>

            {/* 🔤 Heading */}
            <h2
              className="text-2xl font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Your profile is not approved yet
            </h2>

            {/* 📝 Description */}
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Your profile is currently{" "}
              <span className="font-medium text-yellow-600 dark:text-yellow-400">
                pending
              </span>{" "}
              approval from the admin. Please wait a little while to enjoy all
              application features, or contact the admin via email at{" "}
              <a
                href="mailto:admin@gmail.com"
                className="underline font-medium"
                style={{ color: "var(--primary)" }}
              >
                admin@gmail.com
              </a>
              .
            </p>

            {/* 🔘 Button */}
            <Button
              variant="outline"
              className="mt-3 px-6 font-medium"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                borderColor: "var(--border)",
              }}
              onClick={() => navigate("/dashboard/driver/profile")}
            >
              View Profile
            </Button>
          </div>
        </div>
      );
    }

    if (data?.data?.driver?.availability) {
      // ⚠️ ভুল ছিল — WrappedComponent শুধু return করলে কিছু render হয় না
      // তাই JSX আকারে return করতে হবে 👇
      return <WrappedComponent />;
    }
    
   

    return (
      <div
        className="max-w-md mx-auto mt-16 p-8 rounded-2xl shadow-lg text-center border"
        style={{
          backgroundColor: "var(--card)",
          color: "var(--card-foreground)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* 🧩 Warning icon */}
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full border"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
              borderColor: "var(--border)",
            }}
          >
            ⚠️
          </div>

          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Your profile is currently inactive
          </h2>

          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "var(--muted-foreground)" }}
          >
            To access this page, please go to your profile and activate your
            availability.
          </p>

          <Button
            variant="outline"
            className="mt-2 px-6"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              borderColor: "var(--border)",
            }}
            onClick={() => navigate("/dashboard/driver/profile")}
          >
            Go to Profile
          </Button>
        </div>
      </div>
    );
  };

  return WithDriverInactive;
};

export default DriverInactive;
