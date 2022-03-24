import { useQuery } from "react-query";
import orderApi from "../../../../api/orderApi";
const useGetOrderDetail = (id) => {
  return useQuery([`ordersDetail`, id], async () => {
    console.log("vo roi nee");
    return orderApi.getOrderDetail(id);
  });
};

export default useGetOrderDetail;
