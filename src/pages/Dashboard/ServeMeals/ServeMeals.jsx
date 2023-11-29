import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: serveMeal = [], refetch } = useQuery({
    queryKey: ["serveMeal"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/serveMeal`);
      return res.data;
    },
  });

  const handleServe = (id) => {
    console.log(id);
    axiosSecure
      .patch(`/users/serve/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Meal has been delevered`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Serve Meals</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Serve</th>
              </tr>
            </thead>
            <tbody>
              {serveMeal?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <th>{user.title}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-orange-500 hover:bg-orange-500"
                      onClick={() => handleServe(user._id)}
                    >
                      Serve
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

export default ServeMeals;
