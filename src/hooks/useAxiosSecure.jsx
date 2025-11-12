import axios from "axios";
import { useAuth } from "./useAuth";
import { useEmail } from "./useEmail";

const useAxiosSecure = () => {
 const {token}=useEmail();

  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
  });

  axiosSecure.interceptors.request.use((config) => {
    if (token) {
      const access_token = token;
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access_token}`,
      };
    }
    return config;
  });

  return axiosSecure;
};

export default useAxiosSecure;