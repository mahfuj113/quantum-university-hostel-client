import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  ///TODO:  get isAdmin value from the database
  // const [isAdmin] = useAdmin();
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminProfile"}>
                  <FaHome></FaHome> Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageUsers"}>
                  <FaUtensils></FaUtensils>Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaList></FaList>Add meal
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allMeals"}>
                  <FaBook></FaBook> All meals
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allReviews"}>
                  <FaUsers></FaUsers> All reviews
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/serveMeals"}>
                  <FaUsers></FaUsers> Serve meals
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/upcomingMeals"}>
                  <FaUsers></FaUsers> Upcoming meals
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart> My cart({cart.length})
                </NavLink>
              </li> */}
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd></FaAd> Add A Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList>Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
