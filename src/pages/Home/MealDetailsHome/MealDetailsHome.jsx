import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { SlLike } from "react-icons/sl";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MealReviews from "./MealReviews";
import MealRequest from "./MealRequest";

const MealDetailsHome = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: meal = [],
    // isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    title,
    price,
    category,
    rating,
    ingredients,
    postDate,
    likes,
    reviews,
    details,
    image,
    adminName,
    adminEmail,
  } = meal;

  const handleLikes = (id) => {
    console.log(id);
    if (!user) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Please login`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
      return;
    } else {
      axiosPublic
        .put(`/mealLikes/${id}`, { email: user.email })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
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

  const handleMealRequest = () => {
    // console.log(meal);
    const mealRequestInfo = {
      title,
      price,
      category,
      rating,
      ingredients,
      postDate,
      likes,
      reviews,
      details,
      image,
      adminName,
      adminEmail,
      name: user?.displayName,
      email: user?.email,
      status: "pending",
    };
    console.log(mealRequestInfo);
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
      console.log(meal);
      // axiosSecure
      //   .post("/mealRequest", mealRequestInfo)
      //   .then((res) => {
      //     console.log(res.data);
      //     if (res.data.insertedId) {
      //       Swal.fire({
      //         position: "top-end",
      //         icon: "success",
      //         title: `You request send`,
      //         showConfirmButton: false,
      //         timer: 1500,
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error.message);
      //   });
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold mt-20">Meal Details</h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="max-w-lg max-h-56 w-full" src={image} alt="" />
          <div className="card shrink-0 w-full max-w-sm ">
            <h1>Title: {title}</h1>
            <p>Price: ${price}</p>
            <p>{adminName}</p>
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Post Date: {postDate}</p>
            <p>Reviews: {reviews}</p>
            <p>Details: {details}</p>
            <div className="flex gap-2">
              <button onClick={() => handleLikes(_id)} className="btn text-xl">
                <SlLike /> {likes}
              </button>
              <MealRequest handleMealRequest={handleMealRequest}></MealRequest>
            </div>
          </div>
        </div>
      </div>
      <MealReviews id={id} mealRefetch={refetch}></MealReviews>
    </div>
  );
};

export default MealDetailsHome;
