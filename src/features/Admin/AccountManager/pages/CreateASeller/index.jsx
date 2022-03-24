import { useSnackbar } from "notistack";
import React from "react";
import CreateAccountForm from "../../components/CreateAccountForm";
import useCreateAccount from "../../hooks/use-create-account";

CreateASeller.propTypes = {};

function CreateASeller(props) {
  const { mutate: createAccount } = useCreateAccount();
  const { closeDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      console.log(values, "submit valueee");
      values = {
        ...values,
        partnerId: 2,
        qrCode: "qr_code",
      };
      await createAccount(values);
      enqueueSnackbar("Create successfully", { variant: "success" });
      closeDialog();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  //sang
  return (
    <>
      <h1>Create new account</h1>
      <CreateAccountForm onSubmit={handleSubmit} />
    </>
  );
}

export default CreateASeller;
