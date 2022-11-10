import React from 'react'
import { LOGO } from "../../Assets";
import { FormHeading, InputField, SubmitButton } from '../../Components/components';
function ResetPassword() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 text-black h-auto">
        <div className="flex flex-col items-center justify-center  mx-auto">
          <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 max-w-md  sm:p-8">
            <FormHeading text={"Reset Password"} />

            <form className="space-y-5 mt-5" action="#">
              <InputField
                label={"Current Password"}
                type={"password"}
                id={"currentPassword"}
                name={"currentPassword"}
                placeholder={"••••••••"}
                required={true}
                // value=""
              />
              <InputField
                label={"New Password"}
                type={"password"}
                id={"newPassword"}
                name={"newPassword"}
                placeholder={"••••••••"}
                required={true}
                // value=""
              />
              <InputField
                label={"Confirm New Password"}
                type={"password"}
                id={"confirmNewPassword"}
                name={"confirmNewPassword"}
                placeholder={"••••••••"}
                required={true}
                // value=""
              />
              <SubmitButton />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword
