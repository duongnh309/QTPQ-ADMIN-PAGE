import { yupResolver } from "@hookform/resolvers/yup";
import { MenuItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../../components/form-control/InputField";
import SelectField from "../../../../../components/form-control/SelectField";
import MyTextField from "../../../../../components/form-control/TextField";
import { storage } from "../../../../../firebase/firebase";
import useCustomerCategories from "../../../../User/Product/pages/ProductPage/use-categories";
import TextAreaField from "../../../../../components/form-control/TextAreaField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#d33b33",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function UpdateProductForm({ onSubmit, updateProduct, onNotEdit }) {
  const schema = yup.object().shape({
    productName: yup
      .string()
      .trim("Không đúng format tên")
      .required("Please enter product name!"),
    unitPrice: yup.number().min(0),
    quanlity: yup.number().min(0),
    description: yup.string().required("Please enter the description!"),
    categoryName: yup.string().required("Please select category"),
  });

  const form = useForm({
    defaultValues: {
      productName: updateProduct.productName || "",
      unitPrice: updateProduct.unitPrice || 1000,
      quanlity: updateProduct.quanlity || 1000,
      description: updateProduct.description || "",
      categoryName: updateProduct.categoryName || "",
    },
    resolver: yupResolver(schema),
  });
  console.log(form.formState.values, "Valid form");
  // const [error, setError] = useState(false);
  const { register, formState } = form;

  const [images, setImages] = useState("");
  const [progress, setProgress] = useState(0);
  const { data: categories, isLoading } = useCustomerCategories();
  // const { data: discounts, isLoading: isLoadingDiscounts } = useGetAllDiscount();

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    newImage["id"] = Math.random();
    setImages(newImage);
  };

  const handleSubmit = (values) => {
    // if (updateProduct.imgURL.length === 0 && image.length > 0) {
    //     delete Values.image;
    values = {
      ...values,
      id: updateProduct.id,
    };
    const uploadTask = storage.ref(`images/${images.name}`).put(images);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await storage
          .ref("images")
          .child(images.name)
          .getDownloadURL()
          .then((url) => {
            onSubmit({
              ...values,
              categories: { categoryName: values.categoryName },
              img: url,
            });
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <div className="row my-5">
            <div className="col-lg-5 col-sm-6 mx-4">
              <MyTextField name="id" label="ID" value={updateProduct.id} />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-5 col-sm-6 mx-4">
              <InputField name="productName" label="Name" form={form} />
            </div>
            <div className="col-lg-5 col-sm-6 mx-4">
              <SelectField
                name="categoryName"
                label="Category"
                form={form}
                rows={categories?.data.map((x, i) => {
                  if (!x.deleted)
                    return (
                      <MenuItem value={x.categoryName}>
                        {x.categoryName}
                      </MenuItem>
                    );
                })}
              />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-5 col-sm-6 mx-4">
              <InputField name="unitPrice" label="Price" form={form} />
            </div>
            <div className="col-lg-5 col-sm-6 mx-4">
              <InputField name="quanlity" label="Quanlity" form={form} />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-5 col-sm-6 mx-4">
              <TextAreaField
                name="description"
                label="Description"
                form={form}
              />
            </div>
            <div className="col-lg-5 col-sm-6 mx-4 mt-20">
              <button className="btn btn-success mt-10 mr-20" type="submit">
                Confirm
              </button>
              <button
                className="btn btn-danger mt-10"
                onClick={() => onNotEdit()}
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-sm-6 mx-4">
              <Typography>Select Images (Image ) : </Typography>

              {/* {error && <p style={{ color: 'red' }}> Please choose img for product</p>} */}

              <input
                name="images"
                {...register("image")}
                type="file"
                multiple
                id="my-img"
                onChange={handleChange}
              />
              <div className="flex">
                {images && (
                  <img
                    className=""
                    style={{ width: "300px" }}
                    src={
                      URL.createObjectURL(images) ||
                      "http://via.placeholder.com/300"
                    }
                    alt="firebase"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProductForm;
