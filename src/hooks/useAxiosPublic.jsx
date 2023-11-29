import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-zeta-eight.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
