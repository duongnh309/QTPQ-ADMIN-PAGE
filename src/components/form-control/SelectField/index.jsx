import { InputLabel, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function SelectField(props) {
    const { form, name, label, disabled, placeholder, rows } = props;
    // const { formState } = form;
    // const hasError = formState.errors[name] && formState.touchedFields[name];
    // const rows = data?.map((x, i) => <>{i === 0 ? <MenuItem selected value={category.id}>{category.name}</MenuItem> : <MenuItem value={category.id}>{category.name}</MenuItem>}</>
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <>
                    <InputLabel id="demo-simple-select-label" style={{ fontSize: '12px', marginTop: '28px' }}>{label}</InputLabel>
                    <Select
                        disabled={disabled}
                        {...field}
                        fullWidth
                        labelId="demo-simple-select-label"
                        variant="outlined"
                        InputProps={{ style: { fontSize: 14 } }}
                    >
                        {rows}
                    </Select>
                </>}
        />
    );
}
export default SelectField;