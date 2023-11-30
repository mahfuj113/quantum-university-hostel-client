import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Payment from "../Payment/Payment";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";

const MembershipDetails = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const location = useLocation();
  const [getName, setGetName] = useState("");
  // console.log(location);
  const getPackageName = location?.pathname.split("/")[2];
  console.log(getPackageName);

  const membership = [
    {
      name: "silver",
      price: 49.0,
    },
    {
      name: "gold",
      price: 80.0,
    },
    {
      name: "platinum",
      price: 109.0,
    },
  ];

  // const {
  //   data: membershipPackage = [],
  //   isPending: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["package", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/package");
  //     return res.data;
  //   },
  // });
  // console.log(membershipPackage);

  const handleGetPackage = () => {
    // console.log(membershipInfo);
    const getPackage = membership.find((item) => item.name === getPackageName);
    console.log(getPackage);

    return {
      getMemebership: getPackage.name,
      price: getPackage.price,
      name: user.displayName,
      email: user.email,
    };
  };
  console.log(getName);
  return (
    <div>
      <div className=" mt-24 mb-8">
        <h2 className="text-3xl font-bold my-3">Card Info</h2>
        <Payment getBadge={() => handleGetPackage()}></Payment>
      </div>
    </div>
  );
};

export default MembershipDetails;
