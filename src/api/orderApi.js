import { axiosClient } from "./axiosClient";

const orderApi = {
  async setState(id, state) {
    const url = `/order/updateOrderState/${id}?state=${state}`;
    axiosClient.post(url);
  },

  async getAllAdmin() {
    let url = "/order/getListOrders";
    const response = await axiosClient.get(url);
    console.log(response.data.data, "dataaaa");
    return response.data.data;
  },

  async getOrderDetail(orderId) {
    const url = `/order/getOrdersById/${orderId}`;
    const response = await axiosClient.get(url);
    console.log(response.data.data, "data");
    return response.data.data;
  },


  async get(id) {
    const url = `/order/${id}`;
    return axiosClient.get(url);
  },
};
export default orderApi;
