import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { showLoadingToast, updateToastError, updateToastSuccess } from "@/lib/utils";


export const useApiMutation = ({
  url,
  method = "post",              // "post", "put", "patch", "delete"
  secure = false,                // 🔥 NEW — auto axios selection
  invalidateKeys = [],           // ["wallet-balance", "user-profile"]
  successMessage = "Success!",   // default success message
  errorMessage = "Something went wrong",
}) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const axiosClient = secure ? axiosSecure : axiosPublic;

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosClient[method](url, data);
      return response.data;
    },

    onMutate: () => {
      const toastId = showLoadingToast("Processing...");
      return { toastId };
    },

    onSuccess: (response, variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || successMessage
      );

      // 🔥 invalidate related queries
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries([key]);
      });
    },

    onError: (error, variables, context) => {
      const message =
        error?.response?.data?.message || errorMessage;

      updateToastError(context.toastId, message);
    },
  });
};
