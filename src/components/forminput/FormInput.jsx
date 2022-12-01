import React from "react";

const FormInput = (props) => {
  const { label, handleChange,validate, value, ...inputProp } = props;

  return (
    <>
      <label>
        <span className="form__label">{label}</span>
        <input
          className="form__input"
          onChange={handleChange}
          value={value}
          {...inputProp}
        />
        <span className="form__validation">{validate}</span>
      </label>
    </>
  )
}

export default FormInput;