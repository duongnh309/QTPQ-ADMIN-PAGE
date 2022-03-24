import { useMutation, useQueryClient } from "react-query";
import categoriesApi from "../../../../api/categoriesApi";
const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "deleteCategory",
    async (id) => {
      return categoriesApi.delete(id);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("categories");
      },
    }
  );
};

export default useDeleteCategory;
