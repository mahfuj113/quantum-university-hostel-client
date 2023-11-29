import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MealRequest = ({ handleMealRequest }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data,
    // isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <>
      {data?.badge !== "bronze" ? (
        <button onClick={handleMealRequest} className="btn">
          Meal Request
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default MealRequest;
