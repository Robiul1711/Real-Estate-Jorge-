import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export const useApiQuery = ({
  queryKey,
  url,
  params = {},
  enabled = true,
  secure = false,
  select,
}) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const axiosClient = secure ? axiosSecure : axiosPublic;

  return useQuery({
    queryKey,
    enabled,
    queryFn: async () => {
      const res = await axiosClient.get(url, { params });
      return res.data;
    },
    select,
    keepPreviousData: true, // ✅ smooth pagination
  });
};
