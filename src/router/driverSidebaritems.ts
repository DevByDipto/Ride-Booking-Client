import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";



export const driverSidebarItems= [
    {
      title: "driver route",
      items: [
        {
          title: "for driver All Ride",
          url: "/dashboard/driver/all-ride",
           Component: Allride
        },
       
      ],
    },
  ]