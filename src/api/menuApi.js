import { axiosClient } from "./axiosClient";

const menuApi = {
  async add(menu) {
    let url = "/menu/create?";
    menu.selectedList.forEach((productId) => {
      url += `productId=${productId}&`;
    });
    url = url.slice(0, -1);
    axiosClient.post(url, menu.values);
  },

  async getAllAdmin() {
    let url = "/menu/getMenus";
    const response = await axiosClient.get(url);
    console.log(response.data.data, "dataaaa");
    return response.data.data;
  },

  async getMenuById(menuId) {
    const url = `/menu/getMenuById/${menuId}`;
    const response = await axiosClient.get(url);
    console.log(response.data.data, "data");
    return response.data.data;
  },
};
export default menuApi;
