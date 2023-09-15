import { Link, createBrowserRouter } from "react-router-dom";
import Home from "../conponents/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="home">About Us</Link>
      </div>
    ),
  },
  {
    path: "home",
    element: <div>About</div>,
  },
]);
