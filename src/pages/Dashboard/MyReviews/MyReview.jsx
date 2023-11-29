import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReview = ({ review, meals, handleDeleteItem, index }) => {
  const item = meals?.find((meal) => meal._id === review.mealId);
  console.log(item);
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
          onClick={() => handleDeleteItem(review)}
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
