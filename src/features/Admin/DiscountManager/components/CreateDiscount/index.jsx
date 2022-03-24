import { useSnackbar } from 'notistack';
import React from 'react';
import useCreateDiscount from '../../hooks/use-create-discount';
import CreateDiscountForm from '../CreateDiscountForm';

CreateDiscount.propTypes = {

};

function CreateDiscount({ closeDialog }) {
    const { enqueueSnackbar } = useSnackbar();
    const { mutate: createDiscount } = useCreateDiscount();
    const handleSubmit = async (values) => {
        console.log(values, 'valueee');
        await createDiscount(values, {
            onSuccess: () => {
                enqueueSnackbar('Create successfully', { variant: 'success' });
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
            <h1>Create a new discount</h1>
            <CreateDiscountForm onSubmit={handleSubmit} />
        </>
    );
}

export default CreateDiscount;