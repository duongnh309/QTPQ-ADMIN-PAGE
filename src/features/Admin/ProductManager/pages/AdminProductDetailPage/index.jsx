import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import queryString from "query-string";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../../../../api/productApi";
import MyTextField from "../../../../../components/form-control/TextField";
import UpdateProductForm from "../../components/UpdateProductForm";
import useProductByID from "../../hooks/use-get-product-byID";
import useUpdateProduct from "../../hooks/use-update-product";
AdminProductDetailPage.propTypes = {};

AdminProductDetailPage.defaultProps = {
  products: [],
};

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

function AdminProductDetailPage() {
  const [filter, setFilter] = useState({
    size: 9,
    page: 0,
    value: "",
    category: "",
    price: "",
  });
  const location = useLocation();
  const param = queryString.parse(location.search);

  const { data: product, isLoading: isLoadingProduct } = useProductByID(
    param.id
  );
  const { mutate: updateProduct } = useUpdateProduct();

  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(true);
  };

  const onNotEdit = () => {
    setIsEdit(false);
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleUpdateSubmit = async (values) => {
    console.log(values, "submit valueee");
    await updateProduct(values, {
      onSuccess: () => {
        enqueueSnackbar("Update successfully", { variant: "success" });
        onNotEdit();
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    });

    // closeDialog();
  };

  //From Update
  const classes = useStyles();

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Product Manager</h2>
              <h5>Welcome , Love to see you back. </h5>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default ">
                <div className="panel-heading">Product Detail</div>
                <div className="panel-body">
                  <div className="">
                    {isLoadingProduct ? (
                      <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <div className="min-w-650">
                        {!isEdit ? (
                          <div className="mb-40">
                            <div className="row my-5">
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="id"
                                  label="ID"
                                  value={product.id}
                                />
                              </div>
                            </div>
                            <div className="row my-5">
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="name"
                                  label="Name"
                                  value={product.productName}
                                />
                              </div>
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="categoryName"
                                  label="Category"
                                  value={product.categories.categoryName}
                                />
                              </div>
                            </div>

                            <div className="row my-5">
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="price"
                                  label="Price"
                                  value={product.unitPrice}
                                />
                              </div>
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="quanlity"
                                  label="Quanlity"
                                  value={product.quanlity}
                                />
                              </div>
                            </div>

                            <div className="row my-5">
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <MyTextField
                                  name="description"
                                  label="Description"
                                  value={product.description}
                                  isMultiple
                                />
                              </div>
                              <div className="col-lg-5 col-sm-6 mx-4 mt-12">
                                <button
                                  className="btn btn-primary mt-10"
                                  onClick={onEdit}
                                >
                                  <i className="fa fa-edit"></i>Update Product
                                </button>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-5 col-sm-6 mx-4">
                                <div className="flex">
                                  {product && product.imgLink && (
                                    <div className="flex flex-wrap m-5">
                                      <p>Image</p>
                                      <img
                                        className=""
                                        key={1}
                                        style={{ width: "300px" }}
                                        src={
                                          product.imgLink ||
                                          "http://via.placeholder.com/300"
                                        }
                                        alt="firebase"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <UpdateProductForm
                            key="updateForm"
                            onSubmit={handleUpdateSubmit}
                            updateProduct={product}
                            onNotEdit={onNotEdit}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductDetailPage;
