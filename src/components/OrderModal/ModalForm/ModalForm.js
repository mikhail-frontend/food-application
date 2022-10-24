import React from 'react';
import useForm from '../../../hooks/use-form';
import { signupForm } from '../../../helpers/formConfig';
import styles from './SignupForm.module.scss';

const ModalForm = () => {
  const { renderFormInputs, isFormValid } = useForm(signupForm);
  return (
    <form className={styles.signupForm}>
      {renderFormInputs()}
      <button className={styles.button} type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};

export default React.memo(ModalForm);
