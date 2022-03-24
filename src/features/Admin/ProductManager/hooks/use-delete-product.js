import { useMutation, useQueryClient } from "react-query";
import productApi from "../../../../api/productApi";
const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "deleteProduct",
    async (productId) => {
      return productApi.disable(productId);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("productsAdmin");
        queryClient.invalidateQueries("products");
      },
    }
  );
};

export default useDeleteProduct;
