import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../../components/form-control/InputField";

CreateFormCategory.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateFormCategory(props) {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    name: yup.string().required("Plss enter you Name"),
  });

  const regisform = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),
  });
  const solveSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
      regisform.reset();
    }
  };
  const { isSubmitting } = regisform.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form noValidate onSubmit={regisform.handleSubmit(solveSubmit)}>
        <InputField name="name" label="Name" form={regisform} id="name" />
        <button className="btn btn-primary" type='submit' >
          <i className="fa fa-edit"></i> Create
        </button>
      </form>
    </div>
  );
}

export default CreateFormCategory;
