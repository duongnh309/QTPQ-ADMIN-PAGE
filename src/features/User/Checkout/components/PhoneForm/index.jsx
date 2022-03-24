import { yupResolver } from '@hookform/resolvers/yup';
import { LinearProgress, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { useHistory } from "react-router-dom"



PhoneForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhoneForm({ onSubmit }) {
    const schema = yup.object().shape({
        phoneNumber: yup.string().trim('Không nhập khoảng trống')
        // .required('Vui lòng nhập số điện thoại').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại phải đủ 10 số')
    });

    const history = useHistory();

    const form = useForm({
        defaultValues: {
            phoneNumber: '0948189638',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div className="my-20">
            {isSubmitting && <LinearProgress />}
            <div>
                <Typography>Hãy đăng kí tài khoản để có thể xem được đơn hàng </Typography>
                <Typography>(chú ý đăng kí theo số điện thoại đã đặt hàng) </Typography>
            </div>
            <button className="btn  bg-black text-white" type='submit' onClick={() => history.push("/products")}>
                Xác nhận
            </button>
        </div>
        // <div className="my-20">
        //     {isSubmitting && <LinearProgress />}
        //     <div>
        //         <Typography>Tìm danh sách đơn hàng dựa trên số điện thoại </Typography>
        //     </div>
        //     <form onSubmit={form.handleSubmit(handleSubmit)}>
        //         <InputField name='phoneNumber' label='Số điện thoại' form={form} />
        //         <button className="btn bg-black text-white" type='submit' >
        //             Xác nhận
        //         </button>
        //     </form>
        // </div>
    );
}


export default PhoneForm;