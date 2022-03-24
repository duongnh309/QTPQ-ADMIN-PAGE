import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  CircularProgress,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { numberWithCommas } from "../../../../../components/helper";
import useGetAllOrders from "../../hooks/use-get-all-orders";
import useGetOrderDetail from "../../hooks/use-get-detail";

function OrdersTable() {
  const [orderId, setOrderId] = useState(null);

  const { data: response, isLoading } = useGetAllOrders();
  const { data: details, isLoadingDetail } = useGetOrderDetail(orderId);

  console.log(response, "Orders");
  console.log(details, "Details");

  //Search sp
  const form = useForm();

  //Xu ly so sp hien thi tren table

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpen(!open);
                setOrderId(row.order_id);
              }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
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
            {row.locationName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.totalPrice}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {!details ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ margin: 1 }}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    Detail
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                          align="left"
                        >
                          Size
                        </TableCell>
                        <TableCell
                          sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                          align="left"
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                          align="left"
                        >
                          Sum
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {details?.map((detail) => (
                        <>
                          <TableRow>
                            <TableCell
                              sx={{ fontSize: 14 }}
                              component="th"
                              scope="row"
                            ></TableCell>
                            <TableCell sx={{ fontSize: 14 }}>
                              {detail?.customerName}
                            </TableCell>
                            <TableCell sx={{ fontSize: 14 }} align="left">
                              {detail?.menuId}
                            </TableCell>
                            <TableCell sx={{ fontSize: 14 }} align="left">
                              {detail?.roomNumber}
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
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
                          <TableCell sx={{ width: 100 }} />
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
