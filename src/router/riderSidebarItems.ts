import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";



export const riderSidebarItems= [
    {
      title: "rider route",
      items: [
        {
          title: "for rider All Ride",
          url: "/dashboard/rider/all-ride",
           Component: Allride
        },
      ],
    },
  ]