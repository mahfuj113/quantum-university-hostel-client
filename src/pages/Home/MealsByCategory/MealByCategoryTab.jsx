import { Link } from "react-router-dom";

const MealByCategoryTab = ({ meal }) => {
  const { _id, title, image, rating, price } = meal;
  // console.log(meal);
  return (
    <div className="card card-compact border border-[#482668]">
      <figure>
        <img className="h-52 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-center">
          <Link to={`/meal/${_id}`}>
            <button className="btn bg-[#482668] hover:bg-[#482668] text-white rounded-3xl">
              Details
            </button>
          </Link>
          <Link to="meals">
            <button className="btn bg-[#482668] hover:bg-[#482668] text-white rounded-3xl">
              All Meal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealByCategoryTab;
