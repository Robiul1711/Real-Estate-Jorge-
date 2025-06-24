import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/about/About";
import Agents from "@/pages/agents/Agents";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import NewPassword from "@/pages/auth/NewPassword";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/home/Home";
import Properties from "@/pages/properties/Properties";
import Services from "@/pages/services/Services";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);

export default router;
