import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/about/About";
import Agents from "@/pages/agents/Agents";
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
]);

export default router;
