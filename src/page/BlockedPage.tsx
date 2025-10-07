// BlockedPage.tsx
import React from "react";
import { Link } from "react-router";

interface BlockedPageProps {
  status?: string; // যেমন: "Blocked", "Suspended", "Pending"
  message?: string; 
  contactEmail?: string;
  contactPhone?: string;
}

const BlockedPage: React.FC<BlockedPageProps> = ({
  status = "Blocked",
  message = "Your account is currently blocked. Please contact support for assistance.",
  contactEmail = "support@example.com",
  contactPhone = "+880123456789",
}) => {
    
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-md w-full p-8 rounded-[var(--radius)] shadow-lg bg-[var(--card)] text-[var(--card-foreground)]">
        <h1 className="text-4xl font-bold text-[var(--destructive)] mb-4">{status}</h1>
        <p className="text-[var(--muted-foreground)] mb-6">{message}</p>

        <div className="bg-[var(--muted)] p-4 rounded-lg mb-4">
          <p className="text-[var(--foreground)] mb-2 font-semibold">Contact Support:</p>
          <p className="text-[var(--foreground)]">
            Email: <a className="text-[var(--primary)] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
          <p className="text-[var(--foreground)]">
            Phone: <a className="text-[var(--primary)] underline" href={`tel:${contactPhone}`}>{contactPhone}</a>
          </p>
        </div>

        <Link
          className="mt-4 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:brightness-90 transition"
        //   onClick={() => window.location.href = "/home"}
        to='/'

        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlockedPage;
