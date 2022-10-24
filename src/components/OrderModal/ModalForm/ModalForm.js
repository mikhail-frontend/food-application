import React, { forwardRef, useImperativeHandle, useContext, useEffect } from 'react';

import useForm from '../../../hooks/use-form';
import { signupForm } from '../../../helpers/formConfig';
import styles from './SignupForm.module.scss';
import FoodApplicationContext from '../../../store/food-application';

// eslint-disable-next-line react/display-name
const ModalForm = forwardRef((props, ref) => {
  const { renderFormInputs, isFormValid, getFormValues } = useForm(signupForm);
  const  { setIsFormFilled } = useContext(FoodApplicationContext);

  useEffect(() => {
    setIsFormFilled(isFormValid())
  }, [isFormValid()])

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) return;
    return getFormValues();
  };

  useImperativeHandle(ref, () => ({
    onSubmit: submitHandler
  }));

  return (
    <form className={styles.signupForm} onSubmit={submitHandler}>
      <h1>Please, write your data for order</h1>
      {renderFormInputs()}
    </form>
  );
});

export default React.memo(ModalForm);
