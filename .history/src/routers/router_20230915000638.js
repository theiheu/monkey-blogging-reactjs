import { createBrowserRouter } from "react-router-dom";
import Home from "../conponents/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
  },
]);
