import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, SFSUPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sfsu",
    element: <SFSUPage />,
  },
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
