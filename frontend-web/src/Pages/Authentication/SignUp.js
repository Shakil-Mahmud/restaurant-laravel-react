import axios from 'axios';
import React from 'react'
import { Form, Link } from 'react-router-dom';
import { FormHeading, InputField, SubmitButton } from '../../Components/components'
import AuthenticationForm from '../../Layouts/AuthenticationForm/AuthenticationForm'
import { SIGN_UP } from '../../Routes/apiUrls';
import { validateEmail } from '../../Utils/ValidationRules';

function SignUp() {

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    if(validateEmail(result.email) && result.name!=="" && result.password!== "" && result.confirm_password!==""  &&
      result.password!== result.confirm_password){
        console.log(SIGN_UP);
        try {
          const response = await axios.post(SIGN_UP, result, {
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
            label={"Name"}
            type={"text"}
            id={"name"}
            name={"name"}
            placeholder={"You name"}
            required={true}
          />
          <InputField
            label={"Email Address"}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"example@gmail.com"}
            required={true}
          />
          <InputField
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"••••••••"}
            required={true}
          />
          <InputField
            label={"Confirm Password"}
            type={"password"}
            id={"password_confirmation"}
            name={"password_confirmation"}
            placeholder={"••••••••"}
            required={true}
          />
          <SubmitButton text={"SignUp"} />
        </form>
        <div className="flex w-full mt-5 items-center">
          <span className="text-sm"> already have an account?</span>
          <Link to="/signin" className="text-blue-300 ml-2">
            {" "}
            SignIn
          </Link>
        </div>
      </AuthenticationForm>
    </>
  );
}

export default SignUp
