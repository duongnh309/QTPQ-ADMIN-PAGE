import { useMutation, useQueryClient } from "react-query";
import categoriesApi from "../../../../api/categoriesApi";
const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "updateCategory",
    async (data) => {
      console.log(data);
      return categoriesApi.update(data.id, data.name);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("categories");
      },
    }
  );
};

export default useUpdateCategory;
