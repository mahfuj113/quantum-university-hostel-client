import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashBoard from "../layout/DashBoard";
import AddMeal from "../pages/Dashboard/AddMeal/AddMeal";
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import MealDetails from "../pages/Dashboard/MealDetails/MealDetails";
import AllReviews from "../pages/Dashboard/AllReviews/AllReviews";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ServeMeals from "../pages/Dashboard/ServeMeals/ServeMeals";
import UpcomingMeals from "../pages/Dashboard/UpcomingMeals/UpcomingMeals";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import Meals from "../pages/Meals/Meals/Meals";
import MembershipDetails from "../pages/Home/Membership/MembershipDetails";
import Payment from "../pages/Home/Payment/Payment";
import MealDetailsHome from "../pages/Home/MealDetailsHome/MealDetailsHome";
// import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "meal/:id",
        element: <MealDetailsHome />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      //admin routes
      {
        path: "adminProfile",
        element: <AdminProfile />,
      },
      {
        path: "addItems",
        element: <AddMeal />,
      },
      {
        path: "allMeals",
        element: <AllMeals />,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
      },
      {
        path: "mealDetails/:id",
        element: <MealDetails />,
      },
      {
        path: "allReviews",
        element: <AllReviews />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "serveMeals",
        element: <ServeMeals />,
      },
      {
        path: "upcomingMeals",
        element: <UpcomingMeals />,
      },
      {
        path: "checkout/:membership",
        element: <MembershipDetails />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);
export default router;
