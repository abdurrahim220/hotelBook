import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
