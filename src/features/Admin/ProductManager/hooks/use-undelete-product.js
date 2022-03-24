import { useMutation, useQueryClient } from "react-query";
import productApi from "../../../../api/productApi";
const useUnDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "unDeleteProduct",
    async (productId) => {
      return productApi.enable(productId);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("productsAdmin");
        queryClient.invalidateQueries("products");
      },
    }
  );
};
export default useUnDeleteProduct;
