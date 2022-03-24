import { yupResolver } from '@hookform/resolvers/yup';
import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import MyDatePicker from '../../../../../components/form-control/DatePicker';
import InputField from '../../../../../components/form-control/InputField';



CreateDiscountForm.propTypes = {
    onSubmit: PropTypes.func,
};

function CreateDiscountForm({ onSubmit }) {
    const today = new Date().toISOString().slice(0, 10);
    const defaultDate = new Date((1000 * 60 * 60 * 24) * 10 + new Date().getTime()).toISOString().slice(0, 10);
    const schema = yup.object().shape({
        saleOff: yup.number().min(1, 'Giảm giá chỉ có thể từ 1 tới 100 phần trăm').max(100, 'Giảm giá chỉ có thể từ 1 tới 100 phần trăm'),
        startDate: yup.date().min(today, 'Không được chọn ngày trong quá khứ'),
        endDate: yup.date()
    });

    const form = useForm({
        defaultValues: {
            saleOff: 50,
            startDate: today,
            endDate: defaultDate
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        await onSubmit(values);
    }

    const { isSubmitting } = form.formState;


    return (
        <div>
            {isSubmitting && <LinearProgress />}

            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col ">
                <InputField name='saleOff' label='Percent' form={form} />
                <br />
                <MyDatePicker name='startDate' label='Start date' form={form} />
                <br />
                <MyDatePicker name='endDate' label='End date' form={form} />
                <br />
                <br />
                <button className="btn btn-primary" type='submit' >
                    <i className="fa fa-edit"></i> Create new discount
                </button>
            </form>
        </div>
    );
}


export default CreateDiscountForm;