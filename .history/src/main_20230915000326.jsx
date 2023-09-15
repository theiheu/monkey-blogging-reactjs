import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from '../.history/src/routers/router_20230915000032';

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router}><App /></RouterProvider>
<App />

);
