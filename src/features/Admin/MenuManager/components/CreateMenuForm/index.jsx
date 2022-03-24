import { yupResolver } from "@hookform/resolvers/yup";
import { LinearProgress, MenuItem } from "@material-ui/core";
import { FormHelperText, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MyDatePicker from "../../../../../components/form-control/DatePicker";
import InputField from "../../../../../components/form-control/InputField";
import SelectField from "../../../../../components/form-control/SelectField";
import TextAreaField from "../../../../../components/form-control/TextAreaField";
import { storage } from "../../../../../firebase/firebase";
import useCustomerCategories from "../../../../User/Product/pages/ProductPage/use-categories";

CreateMenuForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateMenuForm({ onSubmit }) {
  const today = new Date().toISOString().slice(0, 10);
  const defaultDate = new Date((1000 * 60 * 60 * 24) * 10 + new Date().getTime()).toISOString().slice(0, 10);
  const schema = yup.object().shape({
    menuName: yup
      .string()
      .trim("Không đúng format tên")
      .required("Please enter product name!"),
    endDate: yup.date(),
    startDate: yup.date().min(today, 'Không được chọn ngày trong quá khứ'),
    description: yup.string().required("Please enter the description!"),
    status: yup.string().required("Please enter the status!"),
  });

  const form = useForm({
    defaultValues: {
      menuName: "",
      endDate: defaultDate,
      startDate: today,
      description: "",
      status: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {

    onSubmit({
      ...values,
      partnerTypeId: 1
    });

  };

  const { register, formState, clearErrors } = form;
  const { isSubmitting } = formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="menuName" label="Menu name" form={form} />
        <MyDatePicker name="startDate" label="Start Date" form={form} />
        <MyDatePicker name="endDate" label="End Date" form={form} />
        <TextAreaField name="description" label="Description" form={form} />
        <InputField name="status" label="Status" form={form} />
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-edit"></i> Create New Menu
        </button>
      </form>
    </div>
  );
}

export default CreateMenuForm;
