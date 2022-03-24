import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import { numberWithCommas } from '../../../../../components/helper';

DefaultProduct.propTypes = {
  defaultPorduct: PropTypes.array,
  addToCart: PropTypes.func.isRequired,
};

DefaultProduct.defaultProps = {
  defaultPorduct: [],
  addToCart: null,
};

function DefaultProduct({ defaultProduct, addToCart, viewDetail, isLoading }) {
  // const HandleAddToCart = (product) => {
  //   if (addToCart) {
  //     addToCart(product);
  //   }
  // }


  return (
    <>
      {isLoading ? (
        <div class="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="row product-categorie-box">
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane fade show active"
              id="grid-view"
            >
              <ul className="row">
                {defaultProduct?.map((product) => (
                  <li
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-4  h-full"
                    key={product.id}
                  >
                    {/* <div className="products-single h-96"> */}
                    <div className=" h-96 ">
                      <div className="h-64 ">
                        <div className="h-full bg-gray-400 relative">
                          {product.discount && <div className="absolute z-40 left-full -translate-x-full bg-red-600 w-14 text-white text-center">{product.discount?.discount}%</div>}
                          <NavLink to={`/products/detail?id=${product.id}`}>
                            {" "}
                            <img
                              src={product.thumbnail}
                              className="w-full h-72 object-cover"
                              alt="This a pic"
                            />
                          </NavLink>
                        </div>

                        {/* <div className="mask-icon">
                      <ul>
                        <li> <NavLink to={`/products/detail?id=${product.id}`} ><i className="fas fa-eye" /></NavLink></li>
                      </ul>
                      <button className="cart" onClick={() => { HandleAddToCart(product) }}>Thêm vào giỏ hàng</button>
                    </div> */}
                      </div>
                      <div className="p-8 pb-2 flex flex-col mt-3 items-center">
                        <h4>{product.name}</h4>
                        <h3> {numberWithCommas(product.price) + "đ"} </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DefaultProduct;
