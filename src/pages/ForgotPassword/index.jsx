/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import CustomForm from '../../components/CustomForm';
import {
  forgotPasswordFields,
  forgotPasswordInitialValues,
} from './forgotPasswordFields';

import AuthHeader from '../../components/AuthHeader';

function ForgotPassword({ onSubmit }) {
  return (
    <>
      <AuthHeader
        url="/auth"
        title="Verify your account"
        linkText="Remember your password!"
      />
      <CustomForm
        initialValues={forgotPasswordInitialValues}
        onSubmit={onSubmit}
        fields={forgotPasswordFields}
        btnText="Submit"
      />
    </>
  );
}

export default ForgotPassword;
