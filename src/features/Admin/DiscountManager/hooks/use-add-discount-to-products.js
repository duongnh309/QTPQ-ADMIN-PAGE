import { useMutation, useQueryClient } from "react-query";
import discountApi from "../../../../api/discountApi";
const useAddDiscountToProductList = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "addDiscountToProductList",
    async (discountToProducts) => {
      return discountApi.addDiscountToProductsList(discountToProducts);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("discounts");
        queryClient.invalidateQueries("products");
      },
    }
  );
};

export default useAddDiscountToProductList;
