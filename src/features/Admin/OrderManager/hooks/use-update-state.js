import { useMutation, useQueryClient } from "react-query";
import orderApi from "../../../../api/orderApi";
const useUpdateState = () => {
    const queryClient = useQueryClient();
    return useMutation("ordersState", async (data) => {
        console.log("vo roi ne``````");
        return orderApi.setState(data.id, data.state);
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("orders");
            },
        });

};

export default useUpdateState;