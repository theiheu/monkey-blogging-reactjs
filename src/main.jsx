import ReactDOM from "react-dom/client";
import "./App.css";
import "./styles/index.scss";
import { router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/contans";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <ToastContainer />
  </ThemeProvider>
);
