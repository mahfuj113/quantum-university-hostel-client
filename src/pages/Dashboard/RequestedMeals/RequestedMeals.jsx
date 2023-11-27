import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const RequestedMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: mealRequest = [], refetch } = useQuery({
    queryKey: ["mealRequest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mealRequest?email=${user.email}`);
      return res.data;
    },
  });
  console.log(mealRequest);

  const handleDeleteUser = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/mealRequest/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Meals</h2>
        <h2 className="text-3xl">Total Meals {mealRequest.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Likes</th>
                <th>Reviews</th>
                <th>Subscription Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mealRequest.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.title}</td>
                  <td>{user.likes}</td>
                  <td>{user.reviews}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-lg"
                      onClick={() => handleDeleteUser(user)}
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestedMeals;
