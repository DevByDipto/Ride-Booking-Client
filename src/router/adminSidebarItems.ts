
import AdminProfile from "@/page/admin/AdminProfile";
import AllDriver from "@/page/admin/AllDriver";
import { AllRide } from "@/page/admin/Allride";
import AllRider from "@/page/admin/AllRider";
import RideDetails from "@/page/ride/RideDetails";




export const adminSidebarItems= [
    {
      title: "admin route",
      items: [
         {
          title: "Admin Profile",
          url: "/dashboard/admin/profile", 
           Component: AdminProfile
        },
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
          title: "All ride",
          url: "/dashboard/admin/all-ride", 
          Component: AllRide
        },
        {
          url: "/dashboard/admin/ride-details/:id", 
          Component: RideDetails
        },
         
       
      ],
    },
  ]