import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import MealsUpcomingCard from "./MealsUpcomingCard";

const MealsUpcomingPage = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: upcomingMeals = [],
    // isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/upcomingMeals`);
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
      {upcomingMeals.map((item) => (
        <MealsUpcomingCard
          key={item._id}
          item={item}
          handleRefetch={refetch}
        ></MealsUpcomingCard>
      ))}
    </div>
  );
};

export default MealsUpcomingPage;
