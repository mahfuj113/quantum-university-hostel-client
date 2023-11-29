import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { SlLike } from "react-icons/sl";

const MealsUpcomingCard = ({ item, handleRefetch }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLikes = () => {
    if (!user) {
      Swal.fire({
        title: "Please login?",
        text: "You can't request without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      axiosPublic
        .put(`/upcomingMeals/${item._id}`, { email: user?.email })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            handleRefetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `You like this item`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-24">
      <figure>
        <img className="h-72 w-full" src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>Price: ${item.price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleLikes} className="btn btn-primary">
            <SlLike></SlLike>
            {item.likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsUpcomingCard;
