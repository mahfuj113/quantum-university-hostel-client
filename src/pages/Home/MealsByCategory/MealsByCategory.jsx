import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
import MealByCategoryTab from "./MealByCategoryTab";

const MealsByCategory = () => {
  const [mealCategory, setMealCategory] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const axiosPublic = useAxiosPublic();

  //   const {
  //     data: meal = [],
  //     // isPending: loading,
  //     // refetch,
  //   } = useQuery({
  //     queryKey: ["meal"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get(`/mealCategory?category=${category}`);
  //       return res.data;
  //     },
  //   });
  //   console.log(meal);

  useEffect(() => {
    handleAllMeals();
  }, []);

  const handleAllMeals = () => {
    setActiveTab(0);
    console.log(activeTab);

    axiosPublic
      .get("/meal")
      .then((res) => {
        // console.log(res.data);
        setMealCategory(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleMealByCategory = (category, tabIndex) => {
    // console.log(category, tabIndex);
    setActiveTab(tabIndex);
    axiosPublic
      .get(`/mealCategory?category=${category}`)
      .then((res) => {
        setMealCategory(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-center my-10">Our Meals</h1>
      </div>
      <Tabs>
        {/* <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}> */}
        <TabList>
          <Tab onClick={handleAllMeals}>All Job</Tab>
          <Tab onClick={() => handleMealByCategory("breakfast")}>Breakast</Tab>
          <Tab onClick={() => handleMealByCategory("lunch")}>Lunch</Tab>
          <Tab onClick={() => handleMealByCategory("dinner")}>Dinner</Tab>
        </TabList>
        <div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
              {mealCategory?.map((meal) => (
                <MealByCategoryTab
                  key={meal._id}
                  meal={meal}
                ></MealByCategoryTab>
              ))}
            </div>
          </TabPanel>
        </div>
        <div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
              {mealCategory?.map((meal) => (
                <MealByCategoryTab
                  key={meal._id}
                  meal={meal}
                ></MealByCategoryTab>
              ))}
            </div>
          </TabPanel>
        </div>
        <div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
              {mealCategory?.map((meal) => (
                <MealByCategoryTab
                  key={meal._id}
                  meal={meal}
                ></MealByCategoryTab>
              ))}
            </div>
          </TabPanel>
        </div>
        <div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
              {mealCategory?.map((meal) => (
                <MealByCategoryTab
                  key={meal._id}
                  meal={meal}
                ></MealByCategoryTab>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
