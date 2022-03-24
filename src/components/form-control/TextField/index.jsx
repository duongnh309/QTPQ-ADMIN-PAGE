import {
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
MyTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function MyTextField(props) {
  const { name, label, placeholder, value, isMultiple } = props;
  return (
    <>
      <Typography>
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontSize: "12px", marginTop: "8px" }}
        >
          {label}
        </InputLabel>
      </Typography>
      {isMultiple ? (
        <TextareaAutosize
          placeholder={placeholder}
          disabled
          margin="normal"
          variant="outlined"
          value={value}
          minRows={3}
          className="border-[1px] border-gray-300 rounded-md hover:border-black p-6 mt-0 w-full text-gray-400 text-2xl "
        />
      ) : (
        <TextField
          name={name}
          disabled
          value={value}
          placeholder={placeholder}
          fullWidth
          variant="outlined"
          InputProps={{ style: { fontSize: 14, cursor: "not-allowed" } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
        />
      )}
    </>
  );
}
export default MyTextField;
