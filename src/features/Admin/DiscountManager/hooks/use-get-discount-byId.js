import { useQuery } from "react-query";
import discountApi from "../../../../api/discountApi";
const useGetDiscountById = (id) => {
  return useQuery([`discounts${id}`], async () => {
    return discountApi.get(id);
  });
};

export default useGetDiscountById;
