import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { HomeLayout } from "@/layouts/home-layout";
// import { ProfileLayout } from "@/layouts/profile-layout";
// import { RegisterPage } from "@/pages/register-page";
// import { ConnectionLayout } from "@/layouts/connection-layout";
import { App } from "@/App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/home",
  //   element: <HomeLayout />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  // },
  // {
  //   path: "/profile",
  //   element: <ProfileLayout />,
  // },
  // {
  //   path: "/connections",
  //   element: <ConnectionLayout />,
  // },
]);
