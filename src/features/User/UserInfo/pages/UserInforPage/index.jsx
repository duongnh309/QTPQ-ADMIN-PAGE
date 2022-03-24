import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useState } from 'react';
import Hero from "../../../../../components/headers/Hero";
import UserInfoForm from "../../components/UserInfoForm";
import { storage } from "../../../../../firebase/firebase";
import { Typography } from '@mui/material';
import { updateInfo } from "../../../../../features/Auth/userSlice"
import { unwrapResult } from '@reduxjs/toolkit';
UserInforPage.propTypes = {};

function UserInforPage(props) {
    const user = useSelector((state) => state.user.current);
    const schema = yup.object().shape({
        username: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập tên đăng nhập').matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Tên đăng nhập không hợp lệ')
            .min(6, 'Tên đăng nhập cần tối thiểu 6 kí tự').max(16, 'Tên đăng nhập chỉ tối đa 16 kí tự'),
        address: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập tên đăng nhập').matches(/[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ /.]/, 'Địa chỉ không hợp lệ')
            .min(6, 'Địa chỉ cần tối thiểu 6 kí tự').max(200, 'Địa chỉ không thể quá 200 kí tự'),
        email: yup.string()
            .required('Vui lòng nhập email')
            .email('Email không hợp lệ'),
        phone: yup.string().trim('Không nhập khoảng trống')
            .required('Vui lòng nhập số điện thoại').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại phải đủ 10 số')
    });
    const form = useForm({
        defaultValues: {
            username: user.username,
            email: user.email,
            phone: user.phone || "",
            address: user.address || "",
        },
        resolver: yupResolver(schema),
    });

    const { register } = form;

    const [image, setImage] = useState("");
    const [error, setError] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();



    const handlerSubmit = async (data) => {
        console.log(user.jwt, 'jwt');
        const values = { ...data, username: user.username, id: user.userId, jwt: user.jwt };
        console.log(values, 'valueee');
        try {
            //----
            const action = updateInfo(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            setIsEdit(false);
            //close dialog

        } catch (error) {
            if (error.message.includes("400")) setError('Sai thông tin đăng nhập')
        }
    }

    const handleChange = (e) => {
        setError("");
        const newImage = e.target.files[0];
        newImage["id"] = Math.random();
        setImage(newImage);
    };

    const onSubmit = (values) => {
        if (image !== "") {
            const promises = [];
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {

                            handlerSubmit({
                                ...values,
                                avatar: url
                            });
                        });
                }
            );
            Promise.all(promises).catch((err) => console.log(err));
        }
        else {
            handlerSubmit({
                ...values,
                avatar: user.avatar
            });
        }


    }

    return (
        <div className="h-screen">
            <Hero title="Thông tin tài khoản" />
            <div className="contact-box-main  ">
                <div className="container h-screen">
                    <div className="row ">
                        <div className="col-lg-4 col-sm-12">
                            {image === "" && <img src={user.avatar} height="300px" width="250px" alt="avatar" />}
                            {image !== "" && <img src={URL.createObjectURL(image)} height="300px" width="250px" alt="avatar" />}
                            {error && (
                                <p style={{ color: "red" }}> Vui lòng chọn hình ảnh</p>
                            )}

                            {isEdit &&
                                <input
                                    name="images"
                                    {...register("image")}
                                    type="file"
                                    multiple
                                    id="my-img"
                                    onChange={handleChange}
                                />}

                            <div className="w-2/3 mt-4">
                                <Typography component="h1" variant="h5" align='center'>
                                    {user.username}
                                </Typography></div>

                        </div>


                        <div className="col-lg-8 col-sm-12">
                            <div className="contact-form-right">
                                <h2>Thông tin tài khoản</h2>
                                <UserInfoForm form={form} onSubmit={onSubmit} isEdit={isEdit} setIsEdit={setIsEdit} />

                                {!isEdit &&

                                    <div className="submit-button text-center">
                                        <button className="btn hvr-hover w-28" onClick={() => { setIsEdit(true) }}>Cập nhật</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInforPage;
