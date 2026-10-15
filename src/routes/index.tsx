import { createBrowserRouter } from "react-router-dom";
import { HomePage, ResumePage } from "@/pages";

// Restore the path saved by public/404.html (GitHub Pages deep-link redirect)
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

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
