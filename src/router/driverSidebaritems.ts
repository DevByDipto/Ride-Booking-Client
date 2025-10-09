import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";
import DriverAllRideHistory from "@/page/driver/DriverAllRideHistory";
import DriverProfile from "@/page/driver/DriverProfile";




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
       
      ],
    },
  ]