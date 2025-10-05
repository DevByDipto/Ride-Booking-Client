import { createBrowserRouter } from "react-router";
import  App from "../App";
import Register from "../page/Register";
import Login from "../page/Login";
import CommonLayout from "../components/layouts/CommonLayout";
import Hero from "../page/Hero";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLayout,
    children: [
      { index: true, Component: Hero },
    ],   
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
]);