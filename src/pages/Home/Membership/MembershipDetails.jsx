import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MembershipDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: membership = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["membership", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/membership?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(membership);

  const handleDelete = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/membership/${id}`).then((res) => {
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
      <div className="flex justify-evenly mb-8">
        <h2>Membership</h2>
        {/* <h2 className="text-4xl">Items:{membership.length}</h2> */}
        {/* <h2 className="text-4xl">Total price:{membership.price}</h2> */}
        {membership.length > 0 ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Membership</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {membership?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  {item.name}
                  {/* <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div> */}
                </td>
                <td>{item.email}</td>
                <td>{item.membership}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-lg"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipDetails;
