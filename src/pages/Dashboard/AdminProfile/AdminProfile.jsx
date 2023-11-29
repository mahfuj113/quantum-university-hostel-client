import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdminProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  console.log(user);
  // const {
  //   data: meal = [],
  //   isPending: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["meal", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/mealAdded/${user?.email}`);
  //     return res.data;
  //   },
  // });

  // console.log(meal);

  const { displayName, photoURL, email } = user;
  return (
    <div>
      <div>
        <img src={photoURL} alt="" />
        <h1>{displayName}</h1>
      </div>
      <div>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default AdminProfile;
