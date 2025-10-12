
import { lazy } from "react";
import DriverInactive from "@/page/driver/DriverInactive";
const DriverAllRideHistory = lazy(() => import("@/page/driver/DriverAllRideHistory"));
const DriverProfile = lazy(() => import("@/page/driver/DriverProfile"));
const IncomingRides = lazy(() => import("@/page/driver/IncomingRides"));
const RideManagement = lazy(() => import("@/page/driver/RideManagement"));




export const driverSidebarItems= [
    {
      title: "driver route",
      items: [
       {
          title: "Ride History",
          url: "/dashboard/driver/rideHistory",
           Component: DriverAllRideHistory
        },
       {
          title: "Driver Profile",
          url: "/dashboard/driver/profile",
           Component: DriverProfile
        },
       {
          title: "Incoming Rides",
          url: "/dashboard/driver/incomingRides",
           Component: DriverInactive(IncomingRides)
        },
       {
          title: "Ride Management",
          url: "/dashboard/driver/rideManagement",
           Component: DriverInactive(RideManagement)
        },
      //    { 
      //     url: "/dashboard/driver/ride-details/:id", 
      //     Component: RideDetails
      //   },
       
      ],
    },
  ]