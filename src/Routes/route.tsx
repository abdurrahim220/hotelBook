import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
    ],
  },
]);

export default router;
