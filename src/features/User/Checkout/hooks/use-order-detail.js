import { useQuery } from "react-query";
import orderApi from "../../../../api/orderApi";
const useOrderDetail = (id) => {
  return useQuery(["orderDetail", id], async () => {
    return orderApi.getOrderDetail(id);
  });
};

export default useOrderDetail;
