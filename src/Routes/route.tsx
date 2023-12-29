import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import AddHotel from "../pages/AddHotel/AddHotel";


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
      {
        path: "/add-hotel",
        element: <AddHotel />,
      },
    ],
  },
]);

export default router;
