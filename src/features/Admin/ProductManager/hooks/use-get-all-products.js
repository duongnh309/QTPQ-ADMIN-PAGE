import { useQuery } from "react-query";
import productsApi from "../../../../api/productApi";
const useGetAllProducts = (filter) => {
  return useQuery([`productsAdmin`, filter], async () => {
    return productsApi.getAll(filter);
  });
};

export default useGetAllProducts;
