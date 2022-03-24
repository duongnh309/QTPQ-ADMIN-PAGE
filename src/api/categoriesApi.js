import { axiosClient } from "./axiosClient";

const categoriesApi = {
  async getAllForCustomer() {
    let url = "/category/getList";
    const response = await axiosClient.get(url);
    return response.data;
  },
  async add(name) {
    let url = "/category/create";
    const response = await axiosClient.post(url, { name });
    return response.data;
  },
  async update(id, name) {
    let url = `/category/update/${id}?CategoryName=${name}`;
    const response = await axiosClient.put(url);
    return response.data;
  }
};
export default categoriesApi;
