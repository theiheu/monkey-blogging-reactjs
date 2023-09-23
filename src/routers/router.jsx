import { Link, createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
]);
