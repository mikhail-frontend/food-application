import React from 'react';
import ModalFormInput from '../components/OrderModal/ModalForm/ModalFormInput';

import { requiredRule, minLengthRule, maxLengthRule } from './validations';

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(label, name, type, defaultValue = '') {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <ModalFormInput
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false
  };
}


export const signupForm = {
  name: {
    ...createFormFieldConfig('Full Name', 'name', 'text'),
    validationRules: [requiredRule('name'), minLengthRule('name', 3), maxLengthRule('name', 25)]
  },
  email: {
    ...createFormFieldConfig('Email', 'email', 'email'),
    validationRules: [requiredRule('email'), minLengthRule('email', 10), maxLengthRule('email', 25)]
  },
  message: {
    ...createFormFieldConfig('Your extra-wishes', 'message', 'text'),
    validationRules: []
  }
};
