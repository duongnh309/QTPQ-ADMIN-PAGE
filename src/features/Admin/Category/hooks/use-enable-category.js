import { useMutation, useQueryClient } from "react-query";
import categoriesApi from "../../../../api/categoriesApi";
const useEnableCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "enableCategory",
    async (id) => {
      return categoriesApi.enable(id);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("categories");
      },
    }
  );
};

export default useEnableCategory;
