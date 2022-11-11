import axios from 'axios';
import React from 'react'
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
import { AuthenticationForm } from '../../Layouts/Layouts';
import { SEND_OTP } from '../../Routes/apiUrls';
import { validateEmail } from '../../Utils/ValidationRules';

function ForgetPasswordEmail() {
 const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    if(validateEmail(result.email) ){
        console.log(SEND_OTP);
        try {
          const response = await axios.post(SEND_OTP, result, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });

          console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    else
      console.log("err");
  };

  return (
    <>
      <AuthenticationForm>
        <FormHeading text={"SignUp"} />
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          <InputField
            label={"Email Address"}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"example@gmail.com"}
            required={true}
          />
          <SubmitButton text={"Send Otp"} />
        </form>
      </AuthenticationForm>
    </>
  )
}

export default ForgetPasswordEmail
