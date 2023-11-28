// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useMeal from "../../../hooks/useMeal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";

const Meals = () => {
  const [meal, , refetch] = useMeal();
  // const axiosPublic = useAxiosPublic();
  const [displayByMealTitle, setDisplayByMealTitle] = useState([]);
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterByPriceRange, setFilterByPriceRange] = useState([]);

  const handleSearch = () => {
    const filterByMealTitle = meal.filter((mealTitle) =>
      mealTitle.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
    setDisplayByMealTitle(filterByMealTitle);
    console.log(filterByMealTitle);
  };

  const handleMealCategory = (mealCategory) => {
    const filterMealCategory = meal?.filter((item) =>
      item.category.toLowerCase().includes(mealCategory.toLowerCase())
    );
    setFilterCategory(filterMealCategory);
  };
  // console.log(filterCategory);

  const handleMealPrice = (myPrice) => {
    console.log(myPrice);
    const getPrice = myPrice.split(" ");
    console.log(getPrice);
    const initialPrice = Number(getPrice[0]);
    const endPrice = Number(getPrice[1]);
    console.log(initialPrice, endPrice);
    const filterPrice = meal.filter(
      (item) => item.price >= initialPrice && item.price <= endPrice
    );
    setFilterByPriceRange(filterPrice);
  };
  console.log(filterByPriceRange);
  return (
    <div className="mt-24">
      <div className="lg:flex justify-center items-center gap-5">
        <div className="flex justify-center my-10 p-3">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            value={query}
            className="h-[50px] w-[360px] pl-3 text-black bg-base-200 focus:outline-none rounded-lg md:rounded-l-lg"
            placeholder="Search by job title...."
          />
          <button
            onClick={handleSearch}
            className="bg-[#FF444A] px-7 py-3 rounded-lg md:rounded-l-none md:rounded-r-lg text-base font-semibold text-[#FFF]"
          >
            Search
          </button>
        </div>
        <div className="flex items-center justify-center my-6">
          <select
            className="p-3 bg-[#FF444A] text-white text-lg rounded-3xl"
            name=""
            required
            id=""
            onChange={(e) => handleMealCategory(e.target.value)}
          >
            <option disabled selected>
              Select meal category
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="flex items-center justify-center my-6">
          <select
            className="p-3 bg-[#FF444A] text-white text-lg rounded-3xl"
            name=""
            required
            id=""
            onChange={(e) => handleMealPrice(e.target.value)}
          >
            <option disabled selected>
              Select meal price range
            </option>
            <option value="0 20">0 to 20</option>
            <option value="20 50">21 to 50</option>
            <option value="51 100">51 to 100</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Distributor name</th>
              <th>Distributor email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {displayByMealTitle.length > 0
              ? displayByMealTitle?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.likes}</td>
                    <td>{item.reviews}</td>
                    <td>{item.adminName}</td>
                    <td>{item.adminEmail}</td>
                    <td>
                      <Link to={`/dashboard/mealDetails/${item._id}`}>
                        <button className="btn btn-md bg-orange-500">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              : meal?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.likes}</td>
                    <td>{item.reviews}</td>
                    <td>{item.adminName}</td>
                    <td>{item.adminEmail}</td>
                    <td>
                      <Link to={`/dashboard/mealDetails/${item._id}`}>
                        <button className="btn btn-md bg-orange-500">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            {filterCategory.length > 0 &&
              filterCategory?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.likes}</td>
                  <td>{item.reviews}</td>
                  <td>{item.adminName}</td>
                  <td>{item.adminEmail}</td>
                  <td>
                    <Link to={`/dashboard/mealDetails/${item._id}`}>
                      <button className="btn btn-md bg-orange-500">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            {filterByPriceRange.length > 0 &&
              filterByPriceRange?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.likes}</td>
                  <td>{item.reviews}</td>
                  <td>{item.adminName}</td>
                  <td>{item.adminEmail}</td>
                  <td>
                    <Link to={`/dashboard/mealDetails/${item._id}`}>
                      <button className="btn btn-md bg-orange-500">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Meals;
