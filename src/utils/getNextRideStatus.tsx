import { rideStatus } from "@/constants/ride";


// 🚀 Next step finder function
export const getNextRideStatus = (currentStatus: string): string | null => {
  switch (currentStatus) {
    case rideStatus.Requested:
      return rideStatus.Accepted;

    case rideStatus.Accepted:
      return rideStatus.PickedUp;

    case rideStatus.PickedUp:
      return rideStatus.Intransited;

    case rideStatus.Intransited:
      return rideStatus.Completed;

    case rideStatus.Completed:
    case rideStatus.Cancelled:
    case rideStatus.NoResponse:
      return null; // ✅ no next step possible

    default:
      return null;
  }
};
