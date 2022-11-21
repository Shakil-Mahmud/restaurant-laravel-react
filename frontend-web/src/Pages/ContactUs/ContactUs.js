import React from 'react'
import { InputField, InputTextArea, SubmitButton } from '../../Components/components';
import { PageContainer } from '../../Layouts/Layouts'

function ContactUs() {
  return (
    <>
      <PageContainer>
        <section class="bg-white dark:bg-gray-900 justify-center">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
            </p>
            <form action="#" class="space-y-8">
              <InputField
                label={"Your email"}
                type={"email"}
                id={"email"}
                name={"email"}
                placeholder={"example@gmail.com"}
                required={true}
                // value=""
              />
              <InputField
                label={"Subject"}
                type={"text"}
                id={"subject"}
                name={"subject"}
                placeholder={"Let us know how we can help you"}
                required={true}
              />
              <InputTextArea
                label={"Your message"}
                rows={4}
                id={"comment"}
                name={"comment"}
                placeholder={"Leave a comment..."}
                required={true}
              />
              <SubmitButton text={"Send message"} />
            </form>
          </div>
        </section>
      </PageContainer>
    </>
  );
}

export default ContactUs
