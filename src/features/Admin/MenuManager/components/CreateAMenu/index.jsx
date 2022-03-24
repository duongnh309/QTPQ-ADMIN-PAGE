import { Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useCreateMenu from "../../hooks/use-create-menu";

import CreateMenuForm from "../CreateMenuForm";
import SelectProductTable from "../SelectProductTable";

CreateAMenu.propTypes = {};

function CreateAMenu(props) {
  const { mutate: createProduct } = useCreateMenu();
  const [selectedList, setSelectedList] = useState([]);
  const history = useHistory();
  const [error, setError] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    if (selectedList.length === 0) {
      setError("Please choose a product");
    }
    else {
      try {
        await createProduct({ values, selectedList });
        history.goBack();
        enqueueSnackbar("Create successfully", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }

  };


  //sang
  return (
    <>
      <CreateMenuForm onSubmit={handleSubmit} />
      <Typography className="text-red-600" variant="h6">{error}</Typography>
      <SelectProductTable selected={selectedList} setSelected={setSelectedList} />

    </>
  );
}

export default CreateAMenu;
