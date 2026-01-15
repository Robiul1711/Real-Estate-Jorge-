import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { showLoadingToast, updateToastError, updateToastSuccess } from "@/lib/utils";


export const useApiMutation = ({
  url,
  method = "post",
  secure = false,
  invalidateKeys = [],
  successMessage = "Success!",
  errorMessage = "Something went wrong",
  onSuccess: externalOnSuccess, // <--- 1. Capture the external callback
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

      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries([key]);
      });

      // 🔥 2. Call the external callback if it exists
      if (externalOnSuccess) {
        externalOnSuccess(response, variables, context);
      }
    },
    onError: (error, variables, context) => {
      const message = error?.response?.data?.message || errorMessage;
      updateToastError(context.toastId, message);
    },
  });
};
