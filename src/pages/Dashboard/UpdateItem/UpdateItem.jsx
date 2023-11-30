import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { FaUtensils } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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
  //   console.log(title, category);

  const onSubmit = async (data) => {
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });

    //   if (res.data.success) {

    // };

    const mealItem = {
      title: data?.title,
      price: parseFloat(data?.price),
      category: data?.category,
      rating: parseFloat(data?.rating),
      ingredients: data?.ingredients,
      postDate: data?.postDate,
      likes: parseFloat(data?.likes),
      reviews: parseFloat(data?.reviews),
      details: data?.details,
      adminName: user?.displayName,
      adminEmail: user?.email,
      image: data.image,
      likedByUser: [],
    };
    console.log("meal item", mealItem);
    const mealRes = await axiosSecure.patch(`/meal/${id}`, mealItem);
    console.log("res", mealRes?.data);
    if (mealRes?.data?.modifiedCount > 0) {
      // show success pop up
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} update to the meal`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Update Meal Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Meal title*</span>
            </label>
            <input
              defaultValue={title}
              {...register("title")}
              type="text"
              placeholder="Meal title"
              className="input input-bordered w-full"
            />
          </div>
          {/* price */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              defaultValue={price}
              {...register("price")}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="lg:flex gap-6">
          {/* category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Meal Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          {/* rating */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              defaultValue={rating}
              {...register("rating")}
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="lg:flex gap-6">
          {/* ingredients */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Ingredients</span>
            </label>
            <input
              defaultValue={ingredients}
              {...register("ingredients")}
              type="text"
              placeholder="Meal Ingredients"
              className="input input-bordered w-full"
            />
          </div>
          {/* post time */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Post Time</span>
            </label>
            <input
              defaultValue={postDate}
              {...register("postDate")}
              type="date"
              placeholder="Post Date"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="lg:flex gap-6">
          {/* likes */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Likes</span>
            </label>
            <input
              defaultValue={likes}
              {...register("likes")}
              type="number"
              placeholder="likes"
              className="input input-bordered w-full"
            />
          </div>
          {/* price */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Reviews</span>
            </label>
            <input
              defaultValue={reviews}
              {...register("reviews")}
              type="text"
              placeholder="reviews"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* recipe details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            defaultValue={details}
            {...register("details")}
            className="textarea textarea-bordered h-24"
            placeholder="Meal details"
          ></textarea>
        </div>
        <div className="form-control w-full my-6">
          <input
            defaultValue={image}
            {...register("image", { required: true })}
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn bg-[#482668] hover:bg-[#482668] text-white">
          Update Meal <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
