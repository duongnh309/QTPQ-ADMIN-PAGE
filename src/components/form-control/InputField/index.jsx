import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { FormHelperText } from '@mui/material';
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled, placeholder } = props;
    const { formState } = form;
    const hasError = formState.errors[name];
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <div className="mt-10">
                    <TextField
                        {...field}
                        placeholder={placeholder}
                        label={label}
                        fullWidth
                        disabled={disabled}
                        error={hasError}
                        variant="outlined"
                        margin='normal'
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                    {hasError && <FormHelperText sx={{ fontSize: 12, paddingTop: 0 }} error>{formState.errors[name]?.message}</FormHelperText>}
                </div>}
        />
    );
}
export default InputField;