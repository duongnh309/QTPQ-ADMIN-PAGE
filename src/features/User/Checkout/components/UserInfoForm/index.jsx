import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, LinearProgress, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../../components/form-control/InputField';



UserInfoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function UserInfoForm({ onSubmit, closeDialog, userInfo }) {
    const schema = yup.object().shape({
        customerName: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập tên của bạn')
            .min(2, 'Tên quá ngắn'),
        address: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập đia chỉ của bạn')
            .min(10, 'Địa chỉ quá ngắn'),
        phoneNumber: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập số điện thoại').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại phải đủ 10 số')
    });

    const form = useForm({
        defaultValues: {
            customerName: userInfo ? userInfo.name : '',
            phoneNumber: userInfo ? userInfo.phone : '0948189638',
            address: userInfo ? userInfo.address : ''
        },
        resolver: yupResolver(schema),
    });



    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
            closeDialog();
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div>
            {isSubmitting && <LinearProgress />}
            <div>
                <Avatar>
                    <LockOutlined>
                    </LockOutlined>
                </Avatar>
                <Typography>Vui lòng nhập thông tin của bạn</Typography>
            </div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='customerName' label='Tên của bạn' form={form} />
                <InputField name='phoneNumber' label='Số điện thoại' form={form} />
                <InputField name='address' label='Địa chỉ nhận hàng' form={form} />
                <button className="btn btn-primary" type='submit' >
                    <i className="fa fa-confirm"></i> Xác nhận
                </button>
            </form>
        </div>
    );
}


export default UserInfoForm;