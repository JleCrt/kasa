import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "*",
      element: <Error />
    }
  ])
export default router;