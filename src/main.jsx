import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Alta from "./pages/Alta";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sistemas from "./pages/Sistemas";
import BitLocker from "./pages/BitLocker";
import Contabilidad from "./pages/Contabilidad";
import Operaciones from "./pages/Operaciones";
import Rh from "./pages/Rh";
import PrismaTech from "./pages/PrismaTech";
import { loaderSistemas } from "./pages/Sistemas";
import { loaderContabilidad } from "./pages/Contabilidad";
import { loaderOperaciones } from "./pages/Operaciones";
import { loaderRh } from "./pages/Rh";
import { loaderPt } from "./pages/PrismaTech";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/alta",
        element: <Alta></Alta>
      },
      {
        path:"/bitlocker",
        element:<BitLocker></BitLocker>
      },
      {
        path:"/sistemas",
        element: <Sistemas></Sistemas>,
        loader:loaderSistemas
      },
      {
        path:"/contabilidad",
        element: <Contabilidad></Contabilidad>,
        loader:loaderContabilidad
      },
      {
        path:"/operaciones",
        element: <Operaciones></Operaciones>,
        loader:loaderOperaciones
      },
      {
        path:"/rh",
        element: <Rh></Rh>,
        loader:loaderRh
      },
      {
        path:"/pt",
        element: <PrismaTech></PrismaTech>,
        loader:loaderPt
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ProSidebarProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProSidebarProvider>
);
