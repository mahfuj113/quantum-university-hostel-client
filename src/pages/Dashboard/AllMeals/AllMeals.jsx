import { Link } from "react-router-dom";
// import useMeal from "../../../hooks/useMeal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllMeals = () => {
  // const [meal, , refetch] = useMeal();
  const axiosPublic = useAxiosPublic();

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

  console.log(meal);
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/meal/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">All Meals</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-lg bg-[#482668] text-white">
              <th>#</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Distributor name</th>
              <th>Distributor email</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {meal?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.likes}</td>
                <td>{item.reviews}</td>
                <td>{item.adminName}</td>
                <td>{item.adminEmail}</td>
                <td>
                  {/* <Link to={`/dashboard/updateItem`}> */}
                  <Link to={`/dashboard/updateItem/${item?._id}`}>
                    <button className="btn btn-lg bg-orange-500">
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-lg"
                    onClick={() => handleDeleteItem(item)}
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
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

export default AllMeals;
