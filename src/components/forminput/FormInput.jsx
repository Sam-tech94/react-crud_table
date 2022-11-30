import React from "react";

const FormInput = (props) => {
  const { label, handleChange,validate, value, ...inputProp } = props;

  return (
    <>
      <label>
        <span className="form_span">{label}</span>
        <input
          className="form_input"
          onChange={handleChange}
          value={value}
          {...inputProp}
        />
      </label>
    </>
  )
}

export default FormInput;