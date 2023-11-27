import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import MealsByCategory from "../MealsByCategory/MealsByCategory";
import Membership from "../Membership/Membership";

const Home = () => {
  return (
    <div>
      <Banner />
      <MealsByCategory />
      <Facilities />
      <Membership />
    </div>
  );
};

export default Home;
