import { axiosClient } from "./axiosClient";

const accountApi = {
  register(data) {
    const url = `/seller/createSeller`;

    return axiosClient
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw error.response.data.errorCode;
      });
  },
  async getAllAccounts() {
    const url = "/seller/getListSeller";
    const data = await axiosClient.get(url);
    return data.data;
  },
  update(id, data) {
    const url = `/seller/updateSeller/${id}`;
    return axiosClient.put(url, data);
  },

};
export default accountApi;
