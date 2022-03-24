import { useMutation, useQueryClient } from "react-query";
import commentsApi from "../../../../../api/commentsApi";
const useCommentt = () => {
  const queryClient = useQueryClient();

  return useMutation(
    "comment",
    async (data) => {
      return commentsApi.comment(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("commentss");
      },
    }
  );
};

export default useCommentt;
