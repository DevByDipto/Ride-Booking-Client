import Allride from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import AllUser from "@/page/admin/AllUser";



export const riderSidebarItems= [
    {
      title: "user route",
      items: [
        {
          title: "for admin All user",
          url: "/dashboard/user/all-user",
           Component: Allride
        },
      ],
    },
  ]