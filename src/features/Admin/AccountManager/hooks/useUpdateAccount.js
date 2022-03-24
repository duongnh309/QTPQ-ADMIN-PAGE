import { useMutation, useQueryClient } from "react-query";
import accountApi from "../../../../api/accountApi";
const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "updateAccount",
    async (account) => {
      return accountApi.update(account);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("accounts");
      },
    }
  );
};

export default useUpdateAccount;
