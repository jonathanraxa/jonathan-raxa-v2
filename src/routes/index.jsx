import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  SFSUPage,
  LQDigitalPage,
  DataRobotPage,
  PLMPage,
  GapIncPage,
  ResumePage,
} from "@/pages";

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
  {
    path: "/lqdigital",
    element: <LQDigitalPage />,
  },
  {
    path: "/datarobot",
    element: <DataRobotPage />,
  },
  {
    path: "/plm",
    element: <PLMPage />,
  },
  {
    path: "/gapinc",
    element: <GapIncPage />,
  },
]);
