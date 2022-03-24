import { useMutation, useQueryClient } from "react-query";
import productApi from "../../../../api/productApi";
const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  let tmpProduct;
  return useMutation(
    "updateProduct",
    async (product) => {
      tmpProduct = product;
      return productApi.update(product);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("productsAdmin");
        queryClient.invalidateQueries(`productAd${tmpProduct.id}`);
        queryClient.invalidateQueries("products");
      },
    }
  );
};

export default useUpdateProduct;
