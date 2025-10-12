import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

// Layouts
const CommonLayout = lazy(() => import("@/components/layouts/CommonLayout"));
const DashBoardLayout = lazy(
  () => import("@/components/layouts/DashBoardLayout")
);

// Pages
const Register = lazy(() => import("@/page/Register"));
const Login = lazy(() => import("@/page/Login"));
const Unauthorized = lazy(() => import("@/page/Unauthorized"));
const NotFound = lazy(() => import("@/page/NotFound"));
const BlockedPage = lazy(() => import("@/page/BlockedPage"));
const Home = lazy(() => import("@/page/Home/Home"));
const AboutUsSection = lazy(() => import("@/page/AboutUs"));
const FeaturesSection = lazy(() => import("@/page/Features"));
const ContactSection = lazy(() => import("@/page/ContactSection"));
const FAQSection = lazy(() => import("@/page/FAQSection"));

// Sidebar Utils & Routes
import generateRouteFromSidebar from "@/utils/generateRouteFromSidebar";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebaritems";
import PrivateRoute from "./PrivateRoute";
import RiderPrivateRoute from "./RiderPrivateRoute";
import RideDetails from "@/page/ride/RideDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/about-us", Component: AboutUsSection },
      { path: "/features", Component: FeaturesSection },
      { path: "/", Component: ContactSection },
      { path: "/faq", Component: FAQSection },
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
    children: [
      { index: true, element: <Navigate to="/dashboard/rider/profile" /> },
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
    children: [
      { index: true, element: <Navigate to="/dashboard/driver/profile" /> },
      ...generateRouteFromSidebar(driverSidebarItems),
    ],
  },
  {
    path: "/dashboard/ride-details/:id",
    element: (
      <PrivateRoute>
        <RideDetails />
      </PrivateRoute>
    ),
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
