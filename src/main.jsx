import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/scss/main.scss";

import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const { BASE_URL } = import.meta.env;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          action: Login.action,
          element: <Login />,
        },
        {
          path: "/signup",
          action: Signup.action,
          element: <Signup />,
        },
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
