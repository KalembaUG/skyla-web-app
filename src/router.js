import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./screens/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

export default router;
