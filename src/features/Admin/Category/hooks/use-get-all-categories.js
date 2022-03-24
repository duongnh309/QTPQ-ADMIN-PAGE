import { useQuery } from "react-query";
import categoriesApi from "../../../../api/categoriesApi";
const useGetAllCategories = () => {
  return useQuery([`categories`], async () => {
    return categoriesApi.getAllForAdmin();
  });
};

export default useGetAllCategories;
