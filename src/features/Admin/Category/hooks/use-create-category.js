import { useMutation, useQueryClient } from "react-query";
import categoriesApi from "../../../../api/categoriesApi";
const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "createCategory",
    async (name) => {
      return categoriesApi.add(name);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("categories");
      },
    }
  );
};

export default useCreateCategory;
