import { useQuery } from "react-query";
import orderApi from "../../../../api/orderApi";
const useGetAllOrders = () => {
  return useQuery("orders", async () => {
    console.log("vo roi nee");
    return orderApi.getAllAdmin();
  });
};

export default useGetAllOrders;
