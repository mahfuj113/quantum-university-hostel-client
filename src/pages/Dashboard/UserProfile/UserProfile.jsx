import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useAuth();
  const { displayName, photoURL, email } = user;
  const axiosSecure = useAxiosSecure();

  const { data: usersBadge = [], isPending: loading } = useQuery({
    queryKey: ["users", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  console.log(loading);
  return (
    <div>
      <div>
        <img src={photoURL} alt="" />
        <h1>{displayName}</h1>
      </div>
      <div>
        <h3>{email}</h3>
        <h2>Badge: {usersBadge?.badge}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
