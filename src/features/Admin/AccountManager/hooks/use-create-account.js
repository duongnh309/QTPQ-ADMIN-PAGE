import { useMutation, useQueryClient } from "react-query";
import accountApi from "../../../../api/accountApi";
const useCreateAccount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "createProduct",
    async (account) => {
      return accountApi.register(account);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("accounts");
      },
    }
  );
};

export default useCreateAccount;
