import React from 'react'
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
import AuthenticationForm from '../../Layouts/AuthenticationForm/AuthenticationForm';

function UpdatePassword() {

  const handleSubmit = async (e)=>{

  }

  return (
    <>
      <AuthenticationForm>
        <FormHeading text={"Update Password"} />
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          <InputField
            label={"Current Password"}
            type={"password"}
            id={"currentPassword"}
            name={"currentPassword"}
            placeholder={"••••••••"}
            required={true}
          />
          <InputField
            label={"New Password"}
            type={"password"}
            id={"newPassword"}
            name={"newPassword"}
            placeholder={"••••••••"}
            required={true}
          />
          <InputField
            label={"Confirm Password"}
            type={"password"}
            id={"newPassword_confirmation"}
            name={"newPassword_confirmation"}
            placeholder={"••••••••"}
            required={true}
          />
          <SubmitButton text={'Update Password'} />
        </form>
      </AuthenticationForm>
    </>
  );
}

export default UpdatePassword
