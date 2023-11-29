import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MealReviews = ({ id, mealRefetch }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  console.log(id);
  const {
    data: reviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/reviews/${id}`);
      return res.data;
    },
  });
  console.log(reviews);

  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;

    const reviewInfo = {
      review,
      name: user?.displayName,
      email: user?.email,
      mealId: id,
    };
    console.log(reviewInfo);

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
      axiosSecure
        .post("/reviews", reviewInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            refetch();
            mealRefetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `You request send`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleReviews}>
          <textarea
            placeholder="Type here for review"
            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
            name="review"
          ></textarea>
          <input type="submit" className="btn" value="Review" />
        </form>
      </div>
      <div>
        {reviews.map((item) => (
          <p key={item._id}>{item.review}</p>
        ))}
      </div>
    </div>
  );
};

export default MealReviews;
