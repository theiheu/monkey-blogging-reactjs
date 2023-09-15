import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./routers/router.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
