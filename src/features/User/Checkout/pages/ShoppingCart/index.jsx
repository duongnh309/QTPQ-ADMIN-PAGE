import {
  Dialog,
  DialogContent,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import orderApi from "../../../../../api/orderApi";
import Hero from "../../../../../components/headers/Hero";
import CartInPage from "../../components/CartInPage";
import UserInfoForm from "../../components/UserInfoForm";
import { update } from "../../counterSlice";
import { numberWithCommas } from "../../../../../components/helper"
import ConfirmForm from "../../components/confirm-form";

ShoppingCart.propTypes = {};

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

function ShoppingCart(props) {
  if (JSON.parse(localStorage.getItem("cart")) !== null) {
    var cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
  } else {
    cartFromLocalStorage = [];
  }

  const dispatch = useDispatch();

  const [myCart, setMyCart] = useState(cartFromLocalStorage);
  const [nonSufficentList, setNonSufficentList] = useState([]);
  const classes = useStyles();
  const user = useSelector((state) => state.user.current);
  const changeValueinCart = (id, value) => {
    const index = myCart.findIndex((product) => product.id === id);
    const newQuantity = Number(value);
    const newProduct = { ...myCart[index], quantity: newQuantity };
    const tmpCart = [...myCart];
    tmpCart[index] = newProduct;

    const totalProducts = tmpCart.reduce(
      (total, { quantity }) => total + quantity,
      0
    );
    localStorage.setItem("cart", JSON.stringify(tmpCart));
    setMyCart(tmpCart);
    dispatch(update(totalProducts));
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeFromCart = (id) => {
    const index = myCart.findIndex((product) => product.id === id);
    const tmpCart = [...myCart];

    tmpCart.splice(index, 1);
    const totalProducts = tmpCart.reduce(
      (total, { quantity }) => total + quantity,
      0
    );

    setMyCart(tmpCart);
    localStorage.setItem("cart", JSON.stringify(tmpCart));
    dispatch(update(totalProducts));
  };

  const totalPrice = myCart.reduce(
    (total, { quantity, price }) => total + price * quantity,
    0
  );
  const totalDiscount = myCart.reduce(
    (total, { quantity, price, saleOff }) =>
      total + (price * saleOff) / 100 * quantity,
    0
  );

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleCheckoutClick = () => {
    setOpen(true);
  };

  const handleSumbit = async (values) => {
    const orders = [];
    myCart.forEach((c) => {
      orders.push({ id: c.id, quantity: c.quantity, size: c.size, name: c.name });
    });
    try {
      const orderInfo = { ...values, cart: orders };
      await orderApi.checkout(user ? user.userId : '', orderInfo);
      history.replace("/products");
      localStorage.removeItem("cart");
      dispatch(update(0));
      enqueueSnackbar("H??? th???ng ???? nh???n ???????c ????n h??ng", { variant: "success" });
    } catch (error) {
      const sizeList = error.map(size => {
        const tmpString = `S???n ph???m ${size.split(";")[0]} ???? h???t size ${size.split(";")[1]}`;
        return tmpString;
      })
      handleOpenConfirm();
      setNonSufficentList(sizeList);
    }
  };

  return (
    <>
      <Hero
        title={
          myCart.length !== 0
            ? "Shopping cart"
            : "Kh??ng c?? h??ng trong gi??? c???a b???n"
        }
      />

      {myCart.length !== 0 && (
        <div className="cart-box-main">
          <div className="container">
            <CartInPage
              cart={myCart}
              change={changeValueinCart}
              remove={removeFromCart}
            />
            <div className="row my-5">
              <div className="col-lg-5 col-sm-6 mx-4">
                {/* <div className="coupon-box">
                  <div className="input-group input-group-sm">
                    <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                    <div className="input-group-append">
                      <button className="btn btn-theme" type="button">Nh???p m?? gi???m gi??</button>
                    </div>
                  </div>
                </div> */}
                <PayPalButton
                  amount={totalPrice - 10 + 2}
                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                  onSuccess={async (details, data) => {
                    // alert(
                    //   `Ch??c m???ng ${details.payer.name.given_name} ???? th???c hi???n giao d???ch th??nh c??ng v???i Paypal, li??n h??? v???i t?? v???n vi??n b??n h??ng ????? bi???t th??m chi ti???t`
                    // );
                    // OPTIONAL: Call your server to save the transaction
                    try {
                      const orders = [];
                      myCart.forEach((c) => {
                        orders.push({ id: c.id, quantity: c.quantity, size: c.size });
                      });
                      const orderInfo = { customerName: `${details.payer.name.given_name} ${details.payer.name.surname}`, address: details.payer.address.address_line_1, phoneNumber: details.payer.phone.phone_number.national_number, cart: orders };
                      console.log(orderInfo, 'details data');
                      await orderApi.checkout(user ? user.userId : '', orderInfo);
                      localStorage.removeItem("cart");
                      dispatch(update(0));
                      enqueueSnackbar("H??? th???ng ???? nh???n ???????c ????n h??ng", {
                        variant: "success",
                      });
                      history.replace("/products");
                    } catch (error) { }
                  }}
                />
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="order-box">
                  <h3>T???ng k???t ????n h??ng</h3>
                  <div className="d-flex">
                    <h4>Gi?? tr??? ban ?????u</h4>
                    <div className="ml-auto font-weight-bold">
                      {" "}
                      {numberWithCommas(totalPrice)}{" vn??"}
                    </div>
                  </div>
                  <div className="d-flex">
                    <h4>Gi???m gi??</h4>
                    <div className="ml-auto font-weight-bold">
                      {" "}
                      {numberWithCommas(totalDiscount)}{" vn??"}
                    </div>
                  </div>
                  <hr className="my-1" />
                  {/* <div className="d-flex">
                    <h4>Gi???m theo m??</h4>
                    <div className="ml-auto font-weight-bold"> $ 10 </div>
                  </div> */}
                  {/* <div className="d-flex">
                    <h4>Thu??? VAT</h4>
                    <div className="ml-auto font-weight-bold"> $ 2 </div>
                  </div> */}
                  <div className="d-flex">
                    <h4>Ti???n ship</h4>
                    <div className="ml-auto font-weight-bold"> Free </div>
                  </div>
                  <hr />
                  <div className="d-flex gr-total">
                    <h5>Gi?? tr??? ????n h??ng</h5>
                    <div className="ml-auto h5">
                      {" "}
                      {numberWithCommas(totalPrice - totalDiscount)}{" vn??"}
                    </div>
                  </div>
                  <hr />{" "}
                </div>
              </div>
              <div className="col-9 d-flex shopping-box text-white">
                <a
                  onClick={handleCheckoutClick}
                  className="ml-auto btn hvr-hover"
                >
                  X??c nh???n
                </a>{" "}
              </div>
            </div>
          </div>

          <ConfirmForm open={openConfirm} handleClose={handleCloseConfirm} sizeList={nonSufficentList} formSize={4} />
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <Close />
            </IconButton>

            <DialogContent>
              <>
                <UserInfoForm
                  closeDialog={handleClose}
                  onSubmit={handleSumbit}
                  userInfo={user}
                />
              </>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
