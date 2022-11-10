
import React from 'react'
import { Link } from "react-router-dom";
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
import AuthenticationForm from '../../Layouts/AuthenticationForm/AuthenticationForm'
import { SIGN_IN } from '../../Routes/apiUrls';
import { validateEmail } from "../../Utils/ValidationRules";
function SignIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const result = Object.fromEntries(data.entries());
        console.log(result.email);
        console.log(validateEmail(result.email));

        if(validateEmail(result.email)){
            console.log(SIGN_IN);
        // send post request

        }
    }
  return (
    <>
      <AuthenticationForm>
        <FormHeading text={"SignIn"} />
        <form className="space-y-5 mt-5"  onSubmit={handleSubmit}>
          <InputField
            label={"Email Address"}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"example@gmail.com"}
            required={true}
            // value=""
          />
          <InputField
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"••••••••"}
            required={true}
            // value=""
          />
          <SubmitButton />
        </form>
        <div className="flex w-full mt-5 items-center">
          <span className="text-sm"> already have an account?</span>
          <Link to="/signUp" className="text-blue-300 ml-2">
            {" "}
            SignUp
          </Link>
        </div>
      </AuthenticationForm>
    </>
  );
}

export default SignIn
