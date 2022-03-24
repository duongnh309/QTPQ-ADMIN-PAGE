import { yupResolver } from "@hookform/resolvers/yup";
import { LinearProgress, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MyDatePicker from "../../../../../components/form-control/DatePicker";
import InputField from "../../../../../components/form-control/InputField";
import TextAreaField from "../../../../../components/form-control/TextAreaField";
import { useHistory } from "react-router-dom";
import SelectField from "../../../../../components/form-control/SelectField";

CreateMenuForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateMenuForm({ onSubmit }) {
  const history = useHistory();
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
  const selectedList = [];
  selectedList.push(<MenuItem key='close' value='CLOSE'>CLOSE</MenuItem>);
  selectedList.push(<MenuItem key='create' value='CREATE'>CREATE</MenuItem>);

  const form = useForm({
    defaultValues: {
      menuName: "",
      endDate: defaultDate,
      startDate: today,
      description: "",
      status: "CREATE",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {

    onSubmit({
      ...values,
      partnerTypeId: 1
    });

  };

  const { formState } = form;
  const { isSubmitting } = formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="row my-5">
          <div className="col-lg-5 col-sm-6 mx-4">
            <InputField name="menuName" label="Menu name" form={form} />
          </div>

          <div className="col-lg-5 col-sm-6 mx-4">
            <SelectField rows={
              selectedList
            } name="status" label="Status" form={form} />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5 col-sm-6 mx-4">
            <MyDatePicker name="startDate" label="Start Date" form={form} />
          </div>
          <div className="col-lg-5 col-sm-6 mx-4">
            <MyDatePicker name="endDate" label="End Date" form={form} />
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-5 col-sm-6 mx-4">
            <TextAreaField name='description' label='Description' form={form} />
          </div>
          <div className="col-lg-5 col-sm-6 mx-4 mt-20">
            <button className="btn btn-success mt-10 mr-20" type='submit'>
              Confirm
            </button>
            <button className="btn btn-danger mt-10" onClick={() => history.goBack()}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateMenuForm;
