import { useMutation, useQueryClient } from "react-query";
import discountApi from "../../../../api/discountApi";
const useCreateDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "discountCreate",
    async (discount) => {
      return discountApi.add(discount);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("discounts");
      },
    }
  );
};

export default useCreateDiscount;
