

import RideDetails from "@/page/ride/RideDetails";
import { RiderAllRideHistory } from "@/page/ride/RiderAllrideHistory";
import RiderProfile from "@/page/rider/RiderProfile";



export const riderSidebarItems= [
    {
      title: "rider route",
      items: [
        {
          title: "All Ride History",
          url: "/dashboard/rider/all-ride",
           Component: RiderAllRideHistory
        },
        {
          title: "Profile",
          url: "/dashboard/rider/profile",
           Component: RiderProfile
        },
         {
          url: "/dashboard/rider/ride-details/:id", 
          Component: RideDetails
        },
          ],
    },
  ]