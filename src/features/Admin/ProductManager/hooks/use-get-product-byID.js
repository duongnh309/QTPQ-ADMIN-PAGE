import { useQuery } from "react-query";
import productApi from "../../../../api/productApi";
const useProductByID = (id) => {
  return useQuery(`productAd${id}`, async () => {
    return productApi.get(id);
  });
};

export default useProductByID;
