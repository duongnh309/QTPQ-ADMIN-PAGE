import { useQuery } from "react-query";
import menuApi from "../../../../api/menuApi";
const useGetAllMenu = () => {
  return useQuery("menus", async () => {
    return menuApi.getAllAdmin();
  });
};

export default useGetAllMenu;
