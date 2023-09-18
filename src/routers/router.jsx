import { Link, createBrowserRouter } from "react-router-dom";
import Home from "../conponents/Home";
import SignInPage from "../pages/SignInPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
]);
