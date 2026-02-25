import { useQuery, keepPreviousData } from "@tanstack/react-query";
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
    enabled, // ✅ prevent auto-fetch if false
    queryFn: async () => {
      const { data } = await axiosClient.get(url, { params });
      return data;
    },
    select,
    placeholderData: keepPreviousData, // ✅ smooth pagination
  });
};
