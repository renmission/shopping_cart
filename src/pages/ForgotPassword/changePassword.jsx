/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import CustomForm from '../../components/CustomForm';

import {
  changePasswordInitialValues,
  changePasswordFields,
} from './changePasswordFields';

function ChangePassword({ changePassword }) {
  return (
    <CustomForm
      initialValues={changePasswordInitialValues}
      onSubmit={changePassword}
      fields={changePasswordFields}
      btnText="Submit"
    />
  );
}

export default ChangePassword;
