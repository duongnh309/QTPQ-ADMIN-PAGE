import { yupResolver } from "@hookform/resolvers/yup";
import { LinearProgress, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../../components/form-control/InputField";
import PasswordField from "../../../../../components/form-control/PasswordField";
import SelectField from "../../../../../components/form-control/SelectField";
import useGetMenus from "../../hooks/useGetAllMenus";

CreateAccountForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateAccountForm({ onSubmit }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim("Không đúng format tên")
      .required("Please enter your name!"),
    menuId: yup.number().min(1),
    mail: yup.string().required("Please enter your mail!"),
    username: yup.string().required("Please enter the username!"),
    password: yup.string().required("Please type password"),
    phone: yup.string().required("Please enter the phone No"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      menuId: 1,
      mail: "",
      username: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });
  console.log(form.formState.errors, "Valid form");

  const { data: menus, isLoading } = useGetMenus();
  console.log(menus, "menu day ne");
  const handleSubmit = (values) => {
    onSubmit({
      ...values,
    });
  };

  const { formState } = form;
  const { isSubmitting } = formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="name" label="Name" form={form} />
        <InputField name="username" label="Username" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <InputField name="phone" label="Phone" form={form} />
        <InputField name="mail" label="Email" form={form} />
        <SelectField
          name="menuId"
          label="Menu"
          form={form}
          rows={menus?.map((x) => {
            if (!x.deleted)
              return <MenuItem value={x.id}>{x.menuName}</MenuItem>;
          })}
        />

        {/* <img src={image} style={{ width: '180px', height: '100px' }} /> */}
        <br />
        <br />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-edit"></i> Create New Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
