import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Error from "./pages/Error";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "*",
      element: <Error />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Accomodation/:id",
      element: <Accomodation />
    }
  ])
export default router;