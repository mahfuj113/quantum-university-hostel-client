// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useMeal from "../../../hooks/useMeal";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "@tanstack/react-query";

const Meals = () => {
  // const [meal, , refetch] = useMeal();
  const {
    data: meal = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get("/meal");
      return res.data;
    },
  });

  const axiosPublic = useAxiosPublic();
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  console.log(meal);
  console.log(filterCategory);
  const handleMealCategory = (data) => {
    if (category) {
      const filterMealCategory = data?.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilterCategory(filterMealCategory);
    } else {
      setFilterCategory(data);
    }
  };
  // console.log("len", dataSource.length);

  const handleMealPrice = (data) => {
    if (price) {
      const getPrice = price.split(" ");
      console.log(getPrice);
      const initialPrice = Number(getPrice[0]);
      const endPrice = Number(getPrice[1]);
      console.log(initialPrice, endPrice);
      const filterPrice = data.filter(
        (item) => item.price >= initialPrice && item.price <= endPrice
      );
      handleMealCategory(filterPrice);
    } else {
      handleMealCategory(data);
    }
  };

  const handleSearch = () => {
    if (query) {
      const filterByMealTitle = meal?.filter((mealTitle) =>
        mealTitle.title.toLowerCase().includes(query.toLocaleLowerCase())
      );
      handleMealPrice(filterByMealTitle);
      // setDisplayByMealTitle(filterByMealTitle);
      console.log(filterByMealTitle);
    } else {
      handleMealPrice(meal);
    }
  };

  const fetchMoreData = () => {
    //call api
    if (!dataSource?.length) {
      setDataSource([]);
    }
    setTimeout(async () => {
      // setDataSource(dataSource.concat(meal));
      await axiosPublic.get("/meal").then((res) => {
        console.log(res.data);
        setDataSource(dataSource.concat(res.data));
      });
    }, 100);
  };

  useEffect(() => {
    // handleSearch();
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (query || category || price) {
      handleSearch();
    } else {
      setFilterCategory([]);
    }
  }, [query, category, price]);
  return (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="mt-24">
          <div className="lg:flex justify-center items-center gap-5">
            <div className="flex justify-center my-10 p-3">
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                value={query}
                className="h-[50px] w-[360px] pl-3 text-black bg-base-200 focus:outline-none rounded-lg md:rounded-l-lg"
                placeholder="Search by title...."
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
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={""}>Select meal category</option>
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
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value={""}>Select meal price range</option>
                <option value="0 20">0 to 20</option>
                <option value="20 50">21 to 50</option>
                <option value="51 100">51 to 100</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            {filterCategory?.length ? (
              <table className="table w-full">
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
                  {filterCategory?.map((item, index) => (
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
                        <Link to={`/meal/${item._id}`}>
                          <button className="btn btn-md bg-orange-500">
                            Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              dataSource?.length && (
                <InfiniteScroll
                  dataLength={dataSource.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                >
                  <table className="table w-full">
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
                      {dataSource?.map((item, index) => {
                        return (
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
                              <Link to={`/meal/${item._id}`}>
                                <button className="btn btn-md bg-orange-500 hover:bg-orange-500">
                                  Details
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </InfiniteScroll>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Meals;
