import { useQuery } from "react-query";
import productApi from "../../../../api/productApi";
const useGetAllProductById = (filter) => {
  return useQuery([`products${filter.discountId}`, filter], async () => {
    return productApi.getProductByDiscountId(filter);
  });
};

export default useGetAllProductById;
