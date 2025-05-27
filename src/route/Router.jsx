import React from "react";
import Blog from "../component/Blog";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Details from "../component/Details";

const Layout = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Blog /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
