import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";



export const adminSidebarItems= [
    {
      title: "admin route",
      items: [
        {
          title: "All User",
          url: "/dashboard/admin/all-user",
           Component: AllUser
        },
        {
          title: "All Rider",
          url: "/dashboard/admin/all-rider",
          Component: AllRider
        },
        {
          title: "All Ride",
          url: "/dashboard/admin/all-ride", 
           Component: Allride
        },
       
      ],
    },
  ]