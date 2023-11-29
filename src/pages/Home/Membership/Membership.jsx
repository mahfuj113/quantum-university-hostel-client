import { FiDollarSign } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Membership = () => {
  const { user } = useAuth();
  // const axiosSecure = useAxiosSecure();

  const handleMembership = (membership, price) => {
    console.log(membership, typeof parseFloat(price));
    const membershipDetails = {
      membership,
      price: parseFloat(price),
      name: user?.displayName,
      email: user?.email,
    };
    console.log(membershipDetails);
    // axiosSecure
    //   .post("/membership", membershipDetails)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //   });
  };
  return (
    <div className="mt-24 mb-24">
      <h2 className="text-center text-3xl font-bold">Membership Package</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-3">
        <div className="card card-compact border">
          <p className="text-center text-2xl font-medium h-10 my-6">Silver</p>
          <figure className="bg-red-500 hover:bg-black h-28">
            <h1 className="text-4xl flex items-end font-bold text-white">
              <FiDollarSign className="text-lg"></FiDollarSign>49.00
            </h1>
          </figure>
          <div className="card-body">
            <ul className="h-28">
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Weekly cleaning
                service
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Standard bed
                type
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Access to common
                areas and events.
              </li>
            </ul>
            <div className="card-actions justify-center items-end mt-8 mb-5">
              <Link to={`/checkout/${"silver"}`}>
                <button
                  onClick={() => handleMembership("silver", 49.0)}
                  className="text-lg text-white font-semibold bg-red-500 px-6 py-3"
                >
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact border">
          <p className="text-center text-2xl font-medium h-10 my-6">Gold</p>
          <figure className="bg-red-500 hover:bg-black h-28">
            <h1 className="text-4xl flex items-end font-bold text-white">
              <FiDollarSign className="text-lg"></FiDollarSign>80.00
            </h1>
          </figure>
          <div className="card-body">
            <ul className="h-28">
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Premium bed type
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Upgraded bed and
                room amenities
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Monthly laundry
                service
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Free access to
                premium Wi-Fi
              </li>
            </ul>
            <div className="card-actions justify-center mt-8 mb-5">
              <Link to={`/checkout/${"gold"}`}>
                <button
                  onClick={() => handleMembership("gold", 80.0)}
                  className="text-lg text-white font-semibold bg-red-500 px-6 py-3"
                >
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact border">
          <p className="text-center text-2xl font-medium h-10 my-6">Platinum</p>
          <figure className="bg-red-500 hover:bg-black h-28">
            <h1 className="text-4xl flex items-end font-bold text-white">
              <FiDollarSign className="text-lg"></FiDollarSign>109.00
            </h1>
          </figure>
          <div className="card-body">
            <ul className="h-28">
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Deluxe bed type
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Exclusive access
                to premium facilities
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>24/7 concierge
                service.
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Bi-weekly room
                cleaning
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Free access to
                on-site fitness facilities.
              </li>
              <li className="text-base flex items-center">
                <BsCheckLg className="text-red-600"></BsCheckLg>Private ensuite
                bathroom
              </li>
            </ul>
            <div className="card-actions justify-center mt-8 mb-5">
              <Link to={`/checkout/${"platinum"}`}>
                <button
                  onClick={() => handleMembership("platinum", 109.0)}
                  className="text-lg text-white font-semibold bg-red-500 px-6 py-3"
                >
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
