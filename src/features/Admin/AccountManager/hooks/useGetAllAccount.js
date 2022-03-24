import { useQuery } from "react-query";
import accountApi from "../../../../api/accountApi";
const useGetAllAccount = () => {
  return useQuery("accounts", async () => {
    return accountApi.getAllAccounts();
  });
};

export default useGetAllAccount;
