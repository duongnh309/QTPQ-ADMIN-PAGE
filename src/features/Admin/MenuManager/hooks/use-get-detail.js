import { useMutation, useQueryClient } from "react-query";
import menuApi from "../../../../api/menuApi";
const useCreateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "createMenu",
    async (menu) => {
      return menuApi.add(menu);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("menus");
      },
    }
  );
};

export default useCreateMenu;
