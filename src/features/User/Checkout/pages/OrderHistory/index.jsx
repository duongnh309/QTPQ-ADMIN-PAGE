import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Hero from "../../../../../components/headers/Hero";
import PhoneForm from "../../components/PhoneForm";
import useOrderDetail from "../../hooks/use-order-detail";
import useOrders from "../../hooks/use-orders";
import { numberWithCommas } from '../../../../../components/helper'

OrderHistory.propTypes = {};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "white",
        textDecoration: "none",
    },

    closeButton: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));
function OrderHistory(props) {
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = useSelector((state) => state.user.current);
    console.log(user, 'userrrrrrrrrr neee');
    const classes = useStyles();
    let id = '';
    if (user?.userId) id = user.userId;
    const [order, setOrder] = useState({ id: 3 });
    const [usePhoneNumber, setUsePhoneNumber] = useState('');
    const { data: orders, isLoading: isLoadingOrders } = useOrders(id, usePhoneNumber);
    const { data: orderDetail, isLoading: isLoadingOrderDetail } = useOrderDetail(order.id);
    const [isDetail, setIsDetail] = useState(false);


    const handleSubmit = async (values) => {
        setUsePhoneNumber(values.phoneNumber);

    }

    const handleClose = () => {
        setIsDetail(false);
    };
    const handleOpen = (order) => {
        setOrder(order);
        setIsDetail(true);
    };
    return (
        <div>
            <Hero
                title={
                    "Lịch sử mua hàng"
                }
            />
            {isLoadingOrders && user &&
                <div className="flex justify-center"><CircularProgress /></div>}
            {!user && <div className="w-1/2 flex justify-center my-0 mx-auto"><PhoneForm onSubmit={handleSubmit} /></div>}
            {!isLoadingOrders && (orders && orders.length !== 0) && (
                <div className="cart-box-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-main table-responsive">
                                    {!isDetail ? <table className="table" key={nanoid()}>
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>
                                                    Tên khách hàng
                                                </th>
                                                <th>
                                                    Địa chỉ nhận
                                                </th>
                                                <th>
                                                    Số điện thoại
                                                </th>
                                                <th>
                                                    Ngày tạo
                                                </th>
                                                <th>
                                                    Tổng tiền
                                                </th>
                                                <th>
                                                    Chi tiết
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td className="name-pr">{order.id}</td>
                                                        <td className="name-pr">
                                                            {order.customerName}
                                                        </td>
                                                        {/* <NumberInputFeild /> */}
                                                        <td className="name-pr">
                                                            <p>{order.address}</p>
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{order.phoneNumber}</p>
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{order.createdDate}</p>
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{numberWithCommas(order.totalBill)}</p>
                                                        </td>
                                                        <td
                                                            className="name-pr border-none"
                                                        >
                                                            <p>
                                                                <Button
                                                                    className="btn hvr-hover"
                                                                    onClick={() => handleOpen(order)}
                                                                    style={{ color: "white", width: "100%" }}
                                                                >
                                                                    {" "}
                                                                    Xem
                                                                </Button>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table> :
                                        <table className="table" key={nanoid()}>
                                            {isLoadingOrderDetail ? <CircularProgress /> : <TableContainer component={Paper}>
                                                <div className="flex justify-between">
                                                    <div className=""><h2>Chi tiết đơn hàng</h2></div>
                                                    <div className=""><Button className="btn hvr-hover" onClick={handleClose}>Trở lại</Button></div>
                                                </div>
                                                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell rowSpan={1} />
                                                            <TableCell colSpan={2}>Tên khách hàng</TableCell>
                                                            <TableCell align="right">{order.customerName}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell rowSpan={1} />
                                                            <TableCell colSpan={2}>Số điện thoại</TableCell>
                                                            <TableCell align="right">{order.phoneNumber}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell rowSpan={1} />
                                                            <TableCell colSpan={2}>Địa chỉ</TableCell>
                                                            <TableCell align="right">{order.address}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell rowSpan={1} />
                                                            <TableCell colSpan={2}>Ngày tạo đơn</TableCell>
                                                            <TableCell align="right">{order.createdDate}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell rowSpan={1} />
                                                            <TableCell colSpan={2}>Tổng tiền</TableCell>
                                                            <TableCell align="right">{numberWithCommas(order.totalBill)}</TableCell>
                                                        </TableRow>
                                                    </TableBody>

                                                </Table>
                                                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                                    <TableHead>

                                                        <TableRow>
                                                            <TableCell>ID</TableCell>
                                                            <TableCell sx={{ width: 200 }} align="center">Hình ảnh</TableCell>
                                                            <TableCell align="center">Size</TableCell>
                                                            <TableCell align="center">Số lượng</TableCell>
                                                            <TableCell align="center">Tổng</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {orderDetail.map((row) => (
                                                            <TableRow key={row.productId}>
                                                                <TableCell>{row.productId}</TableCell>
                                                                <TableCell align="right"><img src={row.productImage} alt='product' height='300px' width='200px'></img></TableCell>
                                                                <TableCell align="center">{row.size}</TableCell>
                                                                <TableCell align="center">{row.quantity}</TableCell>
                                                                <TableCell align="center">{numberWithCommas(row.quantity * row.price)}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>


                                            </TableContainer>}
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default OrderHistory;
