import { createBrowserRouter } from "react-router-dom";
import Admission from "../components/Addmission";
import CoDetails from "../components/CoDetails";
import {
  default as CollageDetails,
  default as CollegeDetails,
} from "../components/CollageDetails";
import Error from "../components/Error";
import MyCollege from "../components/MyCollage";
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
        path: "/collage/:id",
        element: <CoDetails></CoDetails>,
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
      {
        path: "/collage",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission></Admission>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-collage",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
