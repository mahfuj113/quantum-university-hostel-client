import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMeal from "../../../hooks/useMeal";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const AllReviews = () => {
  const [meal, , refetch] = useMeal();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    console.log(item);
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
        const res = await axiosSecure.delete(`/meal/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">All Reviews</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-lg bg-[#482668] text-white">
              <th>#</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {meal.length &&
              meal?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.likes}</td>
                  <td>{item.reviews}</td>
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
                      <button className="btn btn-md bg-orange-500 hover:bg-orange-500">
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

export default AllReviews;
