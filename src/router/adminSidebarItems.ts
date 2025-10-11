
import AdminProfile from "@/page/admin/AdminProfile";
import AllDriver from "@/page/admin/AllDriver";
import AllRider from "@/page/admin/AllRider";




export const adminSidebarItems= [
    {
      title: "admin route",
      items: [
        {
          title: "All Driver",
          url: "/dashboard/admin/all-driver", 
           Component: AllDriver
        },
        {
          title: "All Rider",
          url: "/dashboard/admin/all-rider", 
           Component: AllRider
        },
        {
          title: "Admin Profile",
          url: "/dashboard/admin/profile", 
           Component: AdminProfile
        },
         
       
      ],
    },
  ]