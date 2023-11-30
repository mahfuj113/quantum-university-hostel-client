import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpcomingMeals = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: upcomingMeals = [],
    // isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/upcomingMeals`);
      return res.data;
    },
  });
  console.log(upcomingMeals);

  const handlePublish = (user) => {
    const {
      _id,
      adminEmail,
      adminName,
      category,
      details,
      image,
      ingredients,
      likes,
      postDate,
      price,
      rating,
      reviews,
      title,
    } = user;
    const saveMeal = {
      adminEmail,
      adminName,
      category,
      details,
      image,
      ingredients,
      likes,
      postDate,
      price,
      rating,
      reviews,
      title,
    };
    axiosPublic
      .delete(`/upcomingMeals/${_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    axiosPublic
      .post(`/meal`, saveMeal)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Meal has been added`,
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
        <h2 className="text-3xl">Upcoming Meals</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="text-lg bg-[#482668] text-white">
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Likes</th>
                <th>Post By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingMeals.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.title}</td>
                  <td>{user.price}</td>
                  <td>{user.likes}</td>
                  <td>{user.adminEmail}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-orange-500 hover:bg-orange-500"
                      onClick={() => handlePublish(user)}
                    >
                      Publish
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

export default UpcomingMeals;
