import { axiosClient } from "./axiosClient";

const menuApi = {
  async add(menu) {
    const url = `/menu/create`;
    axiosClient.post(url, menu);
  },

  async delete(menuId) {
    const url = `/menu/delete/${menuId}`;
    axiosClient.delete(url);
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
