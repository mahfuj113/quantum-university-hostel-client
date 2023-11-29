import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "underline decoration-4 underline-offset-8 text-[#7CEA03] text-lg font-medium decoration-[#7CEA03] hover:text-[#7CEA03] hover:bg-inherit"
              : "text-lg font-medium disabled"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-4 underline-offset-8 text-[#7CEA03] text-lg font-medium decoration-[#7CEA03]"
              : "text-lg font-medium disabled"
          }
        >
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/upcomingMeals"}
          className={({ isActive }) =>
            isActive
              ? " underline decoration-4 underline-offset-8 text-[#4BBA86] text-lg font-medium decoration-[#7CEA03]"
              : "text-lg font-medium disabled"
          }
        >
          Upcoming Meals<MdNotificationsNone></MdNotificationsNone>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-80 top-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/zf6z5fV/hostel-1-removebg-preview.png"
          alt=""
        />
        <p className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-[#004EA2] via-[#7CEA03] to-yellow-500  w-full text-xl">
          Quantum University Hostel
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="text-lg">{user.displayName}</p>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-400 hover:bg-red-400"
                      : "text-lg font-medium disabled"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button className="btn btn-sm btn-ghost" onClick={logOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button onClick={handleLogOut} className="btn btn-secondary">
              Join Us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
