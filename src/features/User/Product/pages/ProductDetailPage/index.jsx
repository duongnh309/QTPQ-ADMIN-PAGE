import classNames from "classnames";
import { nanoid } from "nanoid";
import { useSnackbar } from "notistack";
import queryString from "query-string";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Hero from "../../../../../components/headers/Hero";
import { increaseMany } from "../../../Checkout/counterSlice";
import CommentsList from "../../components/CommentsList";
import DetailSlider from "../../components/DetailSlider";
import useComment from "./use-comments";
import useProduct from "./use-product";
import { numberWithCommas } from '../../../../../components/helper'
import ConfirmForm from "../../components/confirm-form";

ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  let cart = [];
  if (JSON.parse(localStorage.getItem("cart")) !== null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const { enqueueSnackbar } = useSnackbar();
  const hookForm = useForm({
    defaultValues: {
      quantity: 1,
    },
  });
  const location = useLocation();
  const [page, setPage] = useState(1);
  const param = queryString.parse(location.search);
  const { data, isLoading } = useProduct(param.id);
  const { data: commentRes, isLoading: isLoadingCommentsRes } = useComment(
    param.id
  );

  const { register } = hookForm;
  const dispatch = useDispatch();
  const [submitSize, setubmitSize] = useState("");

  const handleFormSubmit = (value) => {
    if (submitSize === "") {
      handleOpen();
    } else {
      const quantity = Number(value.quantity);

      const index = cart.findIndex(
        (b) => b.id === data.id && b.size === submitSize
      );
      const newCart = [...cart];
      if (index === -1)
        newCart.push({ ...data, quantity: quantity, size: submitSize });
      else {
        const newQuantity = newCart[index].quantity + quantity;
        newCart[index] = { ...data, quantity: newQuantity };
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch(increaseMany(quantity));
      enqueueSnackbar("Đã thêm sản phẩm vào giỏ hàng", { variant: "success" });
    }
  };
  const chooseSize = (size) => {
    setubmitSize(size);
  };

  return (
    <div>
      <Hero title="Details" />
      {!isLoading && (
        <div className="shop-detail-box-main">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <DetailSlider
                  slides={[
                    { image: data?.thumbnail },
                    { image: data?.image1 },
                    { image: data?.image2 },
                  ]}
                />
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="single-product-details">
                  <h2>{data.name}</h2>
                  <h5>
                    {" "}
                    {data.saleOff !== 0 && <del>{numberWithCommas(data.price) + "đ"}</del>} {numberWithCommas(data.price - data.saleOff * data.price / 100) + "đ"}
                  </h5>
                  {/* <p className="available-stock">
                    <span>
                      {" "}
                      Số lương có sẵn: 40 / <a href="#">8 sold </a>
                    </span>
                  </p>
                  <p></p> */}
                  <h4>Mô tả sản phẩm:</h4>
                  <p>{data.description}</p>
                  <form onSubmit={hookForm.handleSubmit(handleFormSubmit)}>
                    <ul className="flex flex-wrap">
                      <li className="md:mr-1 lg:mr-0">
                        <div class="form-group">
                          <label class="">Size</label>
                          <div className="flex flex-row ">
                            {data.sizes.map((x) => {
                              if (x.soldOut) {
                                return <div
                                  key={nanoid()}
                                  // className="cursor-pointer border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                  className={classNames({
                                    "bg-black text-white": x.size === submitSize,
                                    "cursor-not-allowed border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs": true,
                                  })}
                                >
                                  {x.size}
                                </div>
                              }
                              else {
                                return <div
                                  onClick={() => chooseSize(x.size)}
                                  key={nanoid()}
                                  // className="cursor-pointer border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                  className={classNames({
                                    "bg-black text-white": x.size === submitSize,
                                    "cursor-pointer border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs": true,
                                  })}
                                >
                                  {x.size}
                                </div>
                              }
                            }
                            )}
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="form-group quantity-box">
                          <label className="control-label">Số lượng</label>

                          <input
                            name="quantity"
                            {...register("quantity")}
                            className="w-6"
                            defaultValue={1}
                            min={1}
                            type="number"

                          />
                        </div>
                      </li>
                    </ul>
                    <div className="flex flex-wrap justify-center">
                      <button className="btn hvr-hover w-48 m-8" type="submit">
                        Thêm vào giỏ hàng
                      </button>
                      <NavLink
                        className="btn hvr-hover w-48 m-8 hover:text-white"
                        to="/products"
                      >
                        Trở về trang sản phẩm
                      </NavLink>
                    </div>
                    <ConfirmForm open={open} handleClose={handleClose} text={"Vui lòng chọn size của sản phẩm"} />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-full md:max-w-3xl mx-auto pt-20">
            {/*Tags */}
            {/*Divider*/}
            <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
            {!isLoadingCommentsRes && (
              <CommentsList commentRes={commentRes} size={4} setPage={setPage} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
