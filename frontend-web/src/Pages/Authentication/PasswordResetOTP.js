import axios from 'axios';
import React from 'react'
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
import { AuthenticationForm } from '../../Layouts/Layouts';
import { CHECK_OTP } from '../../Routes/apiUrls';

function PasswordResetOTP() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    if (result.otp!=='') {
      console.log(CHECK_OTP);
      try {
        const response = await axios.post(CHECK_OTP, result, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else console.log("err");
  };

  return (
    <>
      <AuthenticationForm>
        <FormHeading text={"OTP"} />
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          <InputField
            label={"OTP from email"}
            type={"number"}
            id={"otp"}
            name={"otp"}
            placeholder={"example: 1234"}
            required={true}
          />
          <SubmitButton text={"Send Otp"} />
        </form>
      </AuthenticationForm>
    </>
  );
}

export default PasswordResetOTP
