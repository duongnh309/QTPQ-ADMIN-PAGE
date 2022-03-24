import { useQuery } from "react-query";
import productApi from "../../../../../api/productApi";
const useCustomerProducts = (filter) => {
  return useQuery(["products", filter], async () => {
    return await productApi.getAll(filter);
  });
};

export default useCustomerProducts;
