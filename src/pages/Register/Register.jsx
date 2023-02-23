import React from 'react';
import PropTypes from 'prop-types';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';
import AuthHeader from '../../components/AuthHeader';

function Register({ register }) {
  return (
    <>
      <AuthHeader
        url="/auth"
        title="Register Now"
        linkText="Already have a account!"
      />
      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Submit"
      />
    </>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
