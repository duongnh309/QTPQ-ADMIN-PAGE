import { useSnackbar } from "notistack";
import React from "react";
import CreateProductForm from "../../components/CreateProductForm";
import useCreateProduct from "../../hooks/use-create-product";

CreateAProduct.propTypes = {};

function CreateAProduct(props) {
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
      <h1>Create a new product</h1>
      <CreateProductForm onSubmit={handleSubmit} />
    </>
  );
}

export default CreateAProduct;
