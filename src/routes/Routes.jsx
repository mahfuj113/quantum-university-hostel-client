import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
// import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
