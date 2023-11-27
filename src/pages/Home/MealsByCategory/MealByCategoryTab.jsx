import { Link } from "react-router-dom";

const MealByCategoryTab = ({ meal }) => {
  const { _id, title, image, rating, price } = meal;
  console.log(meal);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/meal/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to="meals">
            <button className="btn btn-primary">All Meal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealByCategoryTab;
