/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react';
import CustomForm from '../../components/CustomForm';
import AuthHeader from '../../components/AuthHeader';
import { profileFields, profileInitialValues } from './profileFields';
import Input from '../../components/Input';

function Profile({ loadUsers, users, user }) {

    // const loadData = useCallback(async () => {
    //     await Promise.all([loadProducts(), loadCart()]);
    //   }, [loadProducts, loadCart]);
    
    //   useEffect(() => {
    //     loadUsers();
    //   }, [loadUsers]);

  return (
    <>
      <AuthHeader
        url="/"
        title="Your Profile"
        linkText=""
      />
      <div>
        <Input />
      </div>
      {/* <CustomForm
        initialValues={profileInitialValues}
        onSubmit={loadUsers}
        fields={profileFields}
        btnText="Submit"
      /> */}
    </>
  );
}

// Register.propTypes = {
//   register: PropTypes.func.isRequired,
// };

export default Profile;
