import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";
import DriverProfile from "@/page/driver/DriverProfile";




export const driverSidebarItems= [
    {
      title: "driver route",
      items: [
       {
          title: "Ride Details",
          url: "/dashboard/driver/rideDetails",
           Component: AllUser
        },
       {
          title: "Driver Profile",
          url: "/dashboard/driver/driverProfile",
           Component: DriverProfile
        },
       
      ],
    },
  ]