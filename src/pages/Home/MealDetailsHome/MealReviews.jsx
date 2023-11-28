import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MealReviews = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;

    const reviewInfo = {
      review,
      name: user.displayName,
      email: user.email,
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
    </div>
  );
};

export default MealReviews;
