import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import CreateFormCategory from "../../components/CreateFormCategory";
import useCreateCategory from "../../hooks/use-create-category";

CreateCategory.DefaultProp = {
  handleClose: PropTypes.func.isRequired,
};

function CreateCategory({ handleClose }) {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate: createCategory } = useCreateCategory();

  const handleSubmit = async (values) => {
    try {
      await createCategory(values.name);
      handleClose();
      enqueueSnackbar("Create successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };
  return (
    <div>
      <h3>Create a new category</h3>
      <CreateFormCategory onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateCategory;
