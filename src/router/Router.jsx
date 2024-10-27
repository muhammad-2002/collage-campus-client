import { createBrowserRouter } from "react-router-dom";
import CollageDetails from "../components/CollageDetails";
import Error from "../components/Error";
import UserProfile from "../components/userProfile";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <CollageDetails></CollageDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
