import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashBoard from "../layout/DashBoard";
// import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);
export default router;
