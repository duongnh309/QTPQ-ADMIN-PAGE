import { useQuery } from "react-query";
import menuApi from "../../../../api/menuApi";
const useGetAllMenu = () => {
  return useQuery("orders", async () => {
    return menuApi.getAllAdmin();
  });
};

export default useGetAllMenu;
