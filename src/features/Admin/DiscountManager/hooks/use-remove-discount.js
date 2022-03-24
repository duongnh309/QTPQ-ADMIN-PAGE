import { useMutation, useQueryClient } from "react-query";
import discountApi from "../../../../api/discountApi";
const useRemoveDiscount = (discountId) => {
  const queryClient = useQueryClient();
  return useMutation(
    "removeDiscount",
    async (discount) => {
      return discountApi.remove(discount);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(`products${discountId}`);
        queryClient.invalidateQueries("products");
      },
    }
  );
};

export default useRemoveDiscount;
