import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { GiMeal } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";

const DashBoard = () => {
  ///TODO:  get isAdmin value from the database
  const [isAdmin] = useAdmin();
  // const isAdmin = false;

  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#482668]">
          <h2 className="text-center text-lg text-white py-4">Dashboard</h2>
          <ul className="menu text-white">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/adminProfile"}>
                    <FaHome></FaHome> Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageUsers"}>
                    <FaUsers></FaUsers>Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addItems"}>
                    <FaList></FaList>Add meal
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allMeals"}>
                    <GiMeal /> All meals
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allReviews"}>
                    <FaUsers></FaUsers> All reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/serveMeals"}>
                    <GiHotMeal /> Serve meals
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/upcomingMeals"}>
                    <FaUtensils /> Upcoming meals
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard/profile"}>
                    <FaHome></FaHome> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/mealRequest"}>
                    <FaCalendar></FaCalendar> Requested Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reviews"}>
                    <FaAd></FaAd> My Review
                  </NavLink>
                </li>
                {/* <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList>Payment History
                </NavLink>
              </li> */}
              </>
            )}
            <div className="divider divider-info">Pages</div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/meals"}>
                <GiMeal /> Meal
              </NavLink>
            </li>
            <li>
              <NavLink to={"/upcomingMeals"}>
                <FaUtensils /> Upcoming meal
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
