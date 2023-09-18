import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/contans";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ThemeProvider>
);
