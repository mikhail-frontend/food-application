import React from 'react';
import './ModalFormInput.scss';

const ModalFormInput = ({
  label = '',
  type = 'text',
  name = 'name',
  handleChange = () => {},
  errorMessage = '',
  isValid = true,
  value = '',
  ...htmlProps
}) => {
  return (
    <div className="inputContainer">
      {label && <label>{label}</label>}
      <input type={type} name={name} value={value} onChange={handleChange} {...htmlProps}/>
      {errorMessage && !isValid && <span className="error">{errorMessage}</span>}
    </div>
  );
};

export default React.memo(ModalFormInput);
