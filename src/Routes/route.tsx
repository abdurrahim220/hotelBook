import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import AddHotel from "../pages/AddHotel/AddHotel";
import MyHotels from "../pages/MyHotels/MyHotels";
import EditHotel from "../pages/EditHotel/EditHotel";


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
      {
        path: "/edit-hotel/:hotelId",
        element: <EditHotel />,
      },
      {
        path: "/my-hotels",
        element: <MyHotels />,
      },
      {
        path: "/my-bookings",
        element: <MyHotels />,
      },
    ],
  },
]);

export default router;
