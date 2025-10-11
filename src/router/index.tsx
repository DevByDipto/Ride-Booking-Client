import { createBrowserRouter, Navigate } from "react-router";
import Register from "../page/Register";
import Login from "../page/Login";
import CommonLayout from "../components/layouts/CommonLayout";
import DashBoardLayout from "@/components/layouts/DashBoardLayout";


import Unauthorized from "@/page/Unauthorized";
import PrivateRoute from "./privateRoute";
import generateRouteFromSidebar from "@/utils/generateRouteFromSidebar";
import { adminSidebarItems } from "./adminSidebarItems";
import NotFound from "@/page/NotFound";
import BlockedPage from "@/page/BlockedPage";
import RiderPrivateRoute from "./RiderPrivateRoute";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebaritems";
import HowItWorksOverview from "@/components/modules/home/HowItWorksOverview";
import Home from "@/page/Home/Home";
import AboutUsSection from "@/page/AboutUs";
import FeaturesSection from "@/page/Features";
import ContactSection from "@/page/ContactSection";
import FAQSection from "@/page/FAQSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLayout,
    children: [
      { path: "/", Component: Home },
    ],
  },
  {
    path: "/dashboard/admin",
    element: (
      <PrivateRoute role="admin">
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard/admin/profile" /> },
      ...generateRouteFromSidebar(adminSidebarItems),
    ],
  },
  {
    path: "/dashboard/rider",
    element: (
      <RiderPrivateRoute role="rider">
        <DashBoardLayout />
      </RiderPrivateRoute>
    ),
    children: [{ index: true, element: <Navigate to="/dashboard/rider/profile" /> },
      ...generateRouteFromSidebar(riderSidebarItems),
    ],
  },
  {
    path: "/dashboard/driver",
    element: (
      // <RiderPrivateRoute role="rider">
        <DashBoardLayout />
      // </RiderPrivateRoute>
    ),
    children: [{ index: true, element: <Navigate to="/dashboard/driver/profile" /> },
      ...generateRouteFromSidebar(driverSidebarItems),
    ],
  },
  {
    path: "/about-us",
    Component: AboutUsSection,
  },
  {
    path: "/features",
    Component: FeaturesSection,
  },
  {
    path: "/Contact",
    Component: ContactSection,
  },
  {
    path: "/faq",
    Component: FAQSection,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
  {
    path: "/blockedPage",
    Component: BlockedPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

