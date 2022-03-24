import { useQuery } from "react-query";
import orderApi from "../../../../api/orderApi";
const useOrders = (id, phone) => {
  return useQuery(["orders", phone], async () => {
    if (id) return orderApi.getOrderByCustomerId(id);
    return orderApi.getOrderByPhoneNumberGuest(phone);
  });
};

export default useOrders;
