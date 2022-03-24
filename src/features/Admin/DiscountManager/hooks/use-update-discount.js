import { useMutation, useQueryClient } from "react-query";
import discountApi from "../../../../api/discountApi";
const useUpdateDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "discountUpdate",
    async (discount) => {
      return discountApi.update(discount);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("discounts");
      },
    }
  );
};

export default useUpdateDiscount;
