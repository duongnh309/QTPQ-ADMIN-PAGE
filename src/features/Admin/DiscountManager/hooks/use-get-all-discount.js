import { useQuery } from "react-query";
import discountApi from "../../../../api/discountApi";
const useGetAllDiscounts = () => {
  return useQuery([`discounts`], async () => {
    return discountApi.getAll();
  });
};

export default useGetAllDiscounts;
