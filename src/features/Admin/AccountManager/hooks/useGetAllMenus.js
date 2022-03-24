import { useQuery } from "react-query";
import menuApi from "../../../../api/menuApi";
const useGetMenus = () => {
    return useQuery("menus", async () => {
        return await menuApi.getAllAdmin();
    });
};

export default useGetMenus;
