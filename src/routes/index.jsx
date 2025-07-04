import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, SFSUPage, ResumePage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sfsu",
    element: <SFSUPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
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
