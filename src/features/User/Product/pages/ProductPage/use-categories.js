import { useQuery } from "react-query";
import categoriesApi from "../../../../../api/categoriesApi";
const useCustomerCategories = () => {
  return useQuery("categories", async () => {
    return await categoriesApi.getAllForCustomer();
  });
};

export default useCustomerCategories;
