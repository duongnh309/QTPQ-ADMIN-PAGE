import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FormHelperText from '@mui/material/FormHelperText';
import React from "react";

UserInfoForm.propTypes = {};

function UserInfoForm({ form, onSubmit, isEdit, setIsEdit }) {

    const { register, handleSubmit, formState } = form;
    const handleSubmitData = (values) => {
        onSubmit(values);
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitData)}>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group flex">
                        <MailIcon sx={{ fontSize: 40, marginRight: 2 }} /><input placeholder="Email"  {...register("email")} className="form-control" disabled={!isEdit} />
                        {formState.errors["email"] && <FormHelperText error>{formState.errors["email"]?.message}</FormHelperText>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group flex">
                        <PhoneIcon sx={{ fontSize: 40, marginRight: 2 }} /><input className="form-control"   {...register("phone")} placeholder="Số điện thoại" disabled={!isEdit} />
                        {formState.errors["phone"] && <FormHelperText error>{formState.errors["phone"]?.message}</FormHelperText>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group flex">
                        <HomeIcon sx={{ fontSize: 40, marginRight: 2 }} /><textarea className="form-control"  {...register("address")} placeholder="Địa chỉ" rows={3} disabled={!isEdit} np />
                        {formState.errors["address"] && <FormHelperText error>{formState.errors["address"]?.message}</FormHelperText>}
                    </div>
                    {isEdit && <div className="flex justify-center">
                        <div className="submit-button text-center">
                            <button className="btn hvr-hover w-28 mr-8" type="submit">Xác nhận</button>
                        </div>

                        <div className="submit-button text-center ">
                            <button className="btn hvr-hover w-28" onClick={() => { setIsEdit(false) }}>Hủy</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </form>
    );
}

export default UserInfoForm;
