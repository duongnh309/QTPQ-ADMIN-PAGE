import { useMutation, useQueryClient } from "react-query";
import productApi from "../../../../api/productApi";
const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "createProduct",
    async (product) => {
      return productApi.add(product);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("productsAdmin");
        queryClient.invalidateQueries("products");
      },
    }
  );
};

export default useCreateProduct;
