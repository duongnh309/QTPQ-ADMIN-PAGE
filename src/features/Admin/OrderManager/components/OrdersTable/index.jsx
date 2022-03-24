import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useGetAllOrders from "../../hooks/use-get-all-orders";
import useUpdateState from "../../hooks/use-update-state";

function OrdersTable() {
  const [orderId, setOrderId] = useState(null);

  const { mutate: updateState } = useUpdateState();
  const { data: response, isLoading } = useGetAllOrders();

  console.log(response, "Orders");

  //Search sp
  const form = useForm();

  const handleNumberOfRecords = (e) => {
    const id = e.target[e.target.selectedIndex].getAttribute("orderId");
    const state = e.target[e.target.selectedIndex].getAttribute("value");

    updateState({ id, state });
  };

  //Xu ly so sp hien thi tren table

  function Row(props) {
    const { row } = props;

    return (
      <>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell sx={{ fontSize: 12 }} component="th" scope="row">
            {row.order_id}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.customerName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.orderDate}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.phone}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.state}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.locationName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.totalPrice}
          </TableCell>
          <TableCell>
            <div
              className="dataTables_info w-1/5"
              id="dataTables-example_info"
              role="alert"
              aria-live="polite"
              aria-relevant="all"
            >
              <label>
                <select
                  onChange={handleNumberOfRecords}
                  name="records"
                  aria-controls="dataTables-example"
                  className="form-control input-sm"
                >
                  <option orderId={row.order_id}> </option>
                  <option value="DELIVERY" orderId={row.order_id}>
                    DELIVERY
                  </option>
                  <option value="SUCCESS" orderId={row.order_id}>
                    SUCCESS
                  </option>
                  <option value="CANCEL" orderId={row.order_id}>
                    CANCEL
                  </option>
                </select>
              </label>
            </div>
          </TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default ">
            <div className="panel-heading">Orders</div>

            <div className="panel-body">
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="flex justify-end">
                      <div className=" flex flex-wrap">
                        <form className="shrink-0">
                          <div
                            id="dataTables-example_filter"
                            className="dataTables_filter"
                          ></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {isLoading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              width: 50,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            ID
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 200,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Customer
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Created date
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Phone
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 50,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            State
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Address
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 50,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Total bill(Vnđ)
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 50,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Update State
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {response?.map((row) => (
                          <Row key={row.id} row={row} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="dataTables_info"
                      id="dataTables-example_info"
                      role="alert"
                      aria-live="polite"
                      aria-relevant="all"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
