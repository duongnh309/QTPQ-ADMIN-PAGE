import { useSnackbar } from 'notistack';
import React from 'react';
import useUpdateDiscount from '../../hooks/use-update-discount';
import UpdateDiscountForm from '../UpdateDiscountForm';

UpdateDiscount.propTypes = {

};

function UpdateDiscount({ discount, closeDialog }) {
    const { enqueueSnackbar } = useSnackbar();
    const { mutate: updateDiscount } = useUpdateDiscount(discount.id);
    const handleSubmit = async (values) => {
        await updateDiscount({ ...values, id: discount.id }, {
            onSuccess: () => {
                enqueueSnackbar('Update successfully', { variant: 'success' });
                closeDialog();
            },
            onError: (error) => {
                enqueueSnackbar(error.message, { variant: 'error' });
            }
        });
    }

    //sang
    return (
        <>
            <h1>Update a new size</h1>
            <UpdateDiscountForm onSubmit={handleSubmit} updateDiscount={discount} />
        </>
    );
}

export default UpdateDiscount;