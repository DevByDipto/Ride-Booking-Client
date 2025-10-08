import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";



export const driverSidebarItems= [
    {
      title: "driver route",
      items: [
       {
          title: "Ride Details",
          url: "/dashboard/driver/rideDetails",
           Component: AllUser
        },
       
      ],
    },
  ]