
import  { lazy } from "react";

const AdminProfile = lazy(() => import("@/page/admin/AdminProfile"));
const AllDriver = lazy(() => import("@/page/admin/AllDriver"));
const AllRider = lazy(() => import("@/page/admin/AllRider"));
const AllRide = lazy(() => import("@/page/admin/Allride"));





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
        // {
        //   url: "/dashboard/admin/ride-details/:id", 
        //   Component: RideDetails
        // },
         
       
      ],
    },
  ]