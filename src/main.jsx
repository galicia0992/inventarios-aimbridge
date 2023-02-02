import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import InventarioLap from "./pages/InventarioLap";
import { ProSidebarProvider } from 'react-pro-sidebar';

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/inventarios",
          element: <InventarioLap></InventarioLap>,
        },
      ],
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProSidebarProvider>
    <RouterProvider router={router}></RouterProvider>
  </ProSidebarProvider>
);
