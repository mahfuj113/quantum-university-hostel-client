// import { FaUtensils } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMeal = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const mealItem = {
        title: data.title,
        price: parseFloat(data.price),
        category: data.category,
        rating: parseFloat(data.rating),
        ingredients: data.ingredients,
        postDate: data.postDate,
        likes: parseFloat(data.likes),
        reviews: parseFloat(data.reviews),
        details: data.details,
        adminName: user?.displayName,
        adminEmail: user?.email,
        image: res.data.data.display_url,
      };
      console.log(mealItem);
      const mealRes = await axiosSecure.post("/meal", mealItem);
      console.log(mealRes.data);
      if (mealRes.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} added to the meal`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  //   const upComingMeal = () => {
  //     console.log("object");
  //     const onSubmited = async (data) => {
  //       console.log("data");
  //       const imageFile = { image: data.image[0] };
  //       const res = await axiosPublic.post(image_hosting_api, imageFile, {
  //         headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //       });

  //       if (res.data.success) {
  //         const mealItem = {
  //           title: data.title,
  //           price: parseFloat(data.price),
  //           category: data.category,
  //           rating: parseFloat(data.rating),
  //           ingredients: data.ingredients,
  //           postDate: data.postDate,
  //           likes: parseFloat(data.likes),
  //           reviews: data.reviews,
  //           details: data.details,
  //           adminName: user?.displayName,
  //           adminEmail: user?.email,
  //           image: res.data.data.display_url,
  //         };
  //         console.log(mealItem);
  //       }
  //       console.log("with image url", res.data);
  //     };
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Meal title*</span>
            </label>
            <input
              {...register("title", { required: true })}
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
              {...register("price", { required: true })}
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
              defaultValue="default"
              {...register("category", { required: true })}
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
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
              {...register("reviews")}
              type="number"
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
            {...register("details")}
            className="textarea textarea-bordered h-24"
            placeholder="Meal details"
          ></textarea>
        </div>
        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <button className="btn">
          Add Meal <FaUtensils></FaUtensils>
        </button>
        <button className="btn">
          Upcoming Meal <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddMeal;
