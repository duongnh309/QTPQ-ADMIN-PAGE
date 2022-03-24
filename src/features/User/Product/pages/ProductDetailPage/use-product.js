import { useQuery } from "react-query";
import productApi from "../../../../../api/productApi";
const useProduct = (id) => {
  return useQuery([`product`, id], async () => {
    return productApi.get(id);
  });
};

export default useProduct;
