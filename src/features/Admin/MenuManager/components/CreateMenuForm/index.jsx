import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, LinearProgress, MenuItem } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { FormHelperText, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../../components/form-control/InputField";
import SelectField from "../../../../../components/form-control/SelectField";
import TextAreaField from "../../../../../components/form-control/TextAreaField";
import { storage } from "../../../../../firebase/firebase";
import useCustomerCategories from "../../../../User/Product/pages/ProductPage/use-categories";

CreateMenuForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateMenuForm({ onSubmit }) {
  const schema = yup.object().shape({
    menuName: yup
      .string()
      .trim("Không đúng format tên")
      .required("Please enter product name!"),
    endDate: yup.number().min(0),
    startDate: yup.number().min(0),
    description: yup.string().required("Please enter the description!"),
    categoryName: yup.string(),
    img: yup.string().required("Vui lòng chọn hình ảnh"),
  });

  const form = useForm({
    defaultValues: {
      productName: "",
      unitPrice: 0,
      quanlity: 0,
      description: "",
      categoryName: "",
      img: "",
    },
    resolver: yupResolver(schema),
  });
  console.log(form.formState.errors, "Valid form");
  const [images, setImages] = useState(null);
  const handleChange = (e) => {
    clearErrors(["images"]);
    const newImage = e.target.files[0];
    newImage["id"] = Math.random();
    setImages(newImage);
  };

  const { data: categories, isLoading } = useCustomerCategories();
  const handleSubmit = (values) => {
    if (images.length === 0) {
      throw new Error("Cannot do this");
    }

    console.log(
      values,
      "This is valueeeeeeeeeeeeeeeeeeee ---------------------"
    );
    const uploadTask = storage.ref(`images/${images.name}`).put(images);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
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

  const { register, formState, clearErrors } = form;
  const { isSubmitting } = formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="productName" label="Name" form={form} />
        <InputField name="unitPrice" label="Price" form={form} />
        <InputField name="quanlity" label="Quanlity" form={form} />
        <TextAreaField name="description" label="Description" form={form} />
        <SelectField
          name="categoryName"
          label="Category"
          form={form}
          rows={categories?.data.map((x, i) => {
            if (!x.deleted)
              return (
                <MenuItem value={x.categoryName}>{x.categoryName}</MenuItem>
              );
          })}
        />
        <Typography variant="h5" mt={4}>
          Select Images (Thumbnail ) :{" "}
        </Typography>

        {formState.errors["img"]?.message && (
          <FormHelperText sx={{ fontSize: 12, paddingTop: 0 }} error>
            {formState.errors["img"]?.message}{" "}
          </FormHelperText>
        )}

        <input
          name="img"
          {...register("img")}
          type="file"
          multiple
          id="my-img"
          onChange={handleChange}
        />
        {/* <img src={image} style={{ width: '180px', height: '100px' }} /> */}
        <br />
        <br />
        <br />
        <br />

        <>
          <p>Thumbnail(*)</p>
          {images && (
            <img
              className="m-5"
              style={{ width: "500px" }}
              src={
                URL.createObjectURL(images) || "http://via.placeholder.com/300"
              }
              alt="firebase"
            />
          )}
        </>
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-edit"></i> Create New Product
        </button>
      </form>
    </div>
  );
}

export default CreateMenuForm;
