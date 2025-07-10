import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, ResumePage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
]);
