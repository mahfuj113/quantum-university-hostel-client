import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyReview = ({ review, meals = [], handleDeleteItem, index }) => {
  // const axiosPublic = useAxiosPublic();

  const item = meals?.find((meal) => meal?._id === review?.mealId);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item?.title}</td>
      <td>{item?.likes}</td>
      <td>{item?.reviews}</td>
      <td>{review?.review}</td>
      <td>
        <button
          className="btn btn-ghost btn-lg"
          onClick={() => handleDeleteItem(review._id)}
        >
          <FaTrashAlt className="text-red-600"></FaTrashAlt>
        </button>
      </td>
      <td>
        <Link to={`/dashboard/mealDetails/${item?._id}`}>
          <button className="btn btn-md bg-orange-500">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default MyReview;
