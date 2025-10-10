
import AdminProfile from "@/page/admin/AdminProfile";
import AllDriver from "@/page/admin/AllDriver";




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
          title: "Admin Profile",
          url: "/dashboard/admin/profile", 
           Component: AdminProfile
        },
         
       
      ],
    },
  ]