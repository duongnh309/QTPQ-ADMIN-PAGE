import { axiosClient } from "./axiosClient";

const productApi = {
  async getAll(filter) {
    const { page = 0, size = 5 } = filter || {};
    const query = new URLSearchParams({
      pageNum: page.toString(),
      pageSize: size.toString(),
    });
    let url = "/product/getList";
    const response = await axiosClient.get(url, { params: query });
    return response.data.data
  },

  async get(id) {
    console.log("get detail");
    const url = `/product/findById/${id}`;
    const { data } = await axiosClient.get(url);
    return data.data;
  },

  async update(data) {
    const url = `/product/update/?productID=${data.id}`;
    return await axiosClient.put(url, data);
  },

  async add(data) {
    const url = "/product/create";
    return await axiosClient.post(url, data);
  },

};

export default productApi;
