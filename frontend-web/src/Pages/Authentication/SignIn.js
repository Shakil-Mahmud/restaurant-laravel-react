
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
import AuthenticationForm from '../../Layouts/AuthenticationForm/AuthenticationForm'
import { login, selectCurrentUser } from '../../Redux/Features/userSlice';
import { SIGN_IN } from '../../Routes/apiUrls';
import { validateEmail } from "../../Utils/ValidationRules";
function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(useSelector(selectCurrentUser));
    // console.log();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const result = Object.fromEntries(data.entries());
        console.log(result);
        console.log(validateEmail(result.email));
        if(validateEmail(result.email) && result.password!=="" ){
            console.log(SIGN_IN);
            const response = await axios.post(SIGN_IN,
                JSON.stringify(result),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                // console.log(response?.data?.success);
                // console.log(response?.data?.user);
                // console.log(response?.data?.token);
                if (response?.data?.success) {
                  dispatch(login({user:response?.data?.user, token: response?.data?.token}));
                  navigate('/');
                }

          // send post request
        }
    }
  return (
    <>
      <AuthenticationForm>
        <FormHeading text={"SignIn"} />
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
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
          <SubmitButton text={"SignIn"} />
        </form>
        <div className="flex w-full mt-5 items-center">
          <span className="text-sm"> Don't have an account?</span>
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
