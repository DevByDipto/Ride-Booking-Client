import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import Register from "../page/Register";
import Login from "../page/Login";
import CommonLayout from "../components/layouts/CommonLayout";
import Hero from "../page/Hero";
import DashBoardLayout from "@/components/layouts/DashBoardLayout";
import AllUser from "@/page/admin/AllUser";
import AllRider from "@/page/admin/AllRider";
import Allride from "@/page/admin/Allride";
import Unauthorized from "@/page/Unauthorized";
import PrivateRoute from "./privateRoute";
import generateRouteFromSidebar from "@/utils/generateRouteFromSidebar";
import { adminSidebarItems } from "./adminSidebarItems";
import NotFound from "@/page/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLayout,
    children: [
      { path: "/", Component: Hero },
      { path: "/hero", Component: Hero },
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
      { index: true, element: <Navigate to="/dashboard/admin/all-user" /> },
      ...generateRouteFromSidebar(adminSidebarItems),
    ],
  },
  {
    path: "/dashboard/rider",
    element: (
      <PrivateRoute role="rider">
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [{ path: "/dashboard/rider/all-ride", Component: Allride }],
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
    path: "*",
    Component: NotFound,
  },
]);

console.log(generateRouteFromSidebar(adminSidebarItems));
