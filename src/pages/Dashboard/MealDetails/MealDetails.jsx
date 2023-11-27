import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);

  const {
    data: meal = [],
    // isPending: loading,
    // refetch,
  } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      return res.data;
    },
  });
  console.log(meal);
  const {
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
  } = meal;
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20">Meal Details</h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left"> */}
          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
          <img className="max-w-lg max-h-56 w-full" src={image} alt="" />
          {/* </div> */}
          <div className="card shrink-0 w-full max-w-sm ">
            {/* <form className="card-body"> */}
            {/* <div className="form-control"> */}
            <h1>Title: {title}</h1>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
            <p>Likes: {likes}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Post Date: {postDate}</p>
            <p>Reviews: {reviews}</p>
            <p>Details: {details}</p>
            {/* </div> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
