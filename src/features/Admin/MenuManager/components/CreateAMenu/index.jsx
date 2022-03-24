import { useSnackbar } from "notistack";
import React from "react";
import useCreateProduct from "../../hooks/use-create-product";
import CreateMenuForm from "../CreateMenuForm";

CreateAMenu.propTypes = {};

function CreateAMenu(props) {
  const { mutate: createProduct } = useCreateProduct();
  const { closeDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      console.log(values, "submit valueee");
      await createProduct(values);
      enqueueSnackbar("Create successfully", { variant: "success" });
      closeDialog();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  //sang
  return (
    <>
      <h1>Create a new menu</h1>
      <CreateMenuForm onSubmit={handleSubmit} />
    </>
  );
}

export default CreateAMenu;