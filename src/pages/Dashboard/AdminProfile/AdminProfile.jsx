import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdminProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: meal = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meal", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/mealAddByAdmin/${user?.email}`);
      return res.data;
    },
  });

  console.log(meal);

  const { displayName, photoURL, email } = user;
  return (
    <div className="lg:flex justify-center items-center gap-6">
      <div>
        <img src={photoURL} alt="" />
        <h1>{displayName}</h1>
        <h3>{email}</h3>
      </div>
      <div className="lg:text-3xl">
        <h1>You Added</h1>
        <h2 className="lg:text-3xl">Total Meals: {meal?.length}</h2>
      </div>
    </div>
  );
};

export default AdminProfile;
