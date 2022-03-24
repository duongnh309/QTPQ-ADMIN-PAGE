import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import UpdateCategoryForm from "../../components/UpdateCategoryForm";
import useUpdateCategory from "../../hooks/use-update-category";

UpdateCategory.DefaultProp = {
    handleClose: PropTypes.func.isRequired,
};

function UpdateCategory({ handleClose, oldCategory }) {
    const { enqueueSnackbar } = useSnackbar();
    const { mutate: updateCategory } = useUpdateCategory();

    const handleSubmit = async (values) => {

        try {
            console.log(values.name);
            await updateCategory({ id: oldCategory.id, name: values.name });
            handleClose();
            enqueueSnackbar("Create successfully", { variant: "success" });
        } catch (error) {
            enqueueSnackbar(error, { variant: "error" });
        }
    };
    return (
        <div>
            <h3>Update category</h3>
            <UpdateCategoryForm onSubmit={handleSubmit} oldCategory={oldCategory} />
        </div>
    );
}

export default UpdateCategory;
