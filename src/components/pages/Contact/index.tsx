import React from "react";
import Wrapper from "../../UI/Wrapper";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import BreadCrumb from "../../shared/BreadCrumb";
import { Form } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactUsSchema from "../../../form-schema/contactUsSchema";
import FillButton from "../../UI/Button/FillButton";

export interface contactUsFormData {
  name: string;
  email: string;
  phonenumber: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactUsFormData>({
    resolver: yupResolver(contactUsSchema),
  });

  const contactFormHandler: SubmitHandler<contactUsFormData> = (data) => {
    console.log(data);
  };
  return (
    <>
      <BreadCrumb />
      <Wrapper className="my-[4%] flex flex-col-reverse lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <ContactInfo />

        <Form
          onSubmit={handleSubmit(contactFormHandler)}
          className="shadow-md w-full lg:w-[70%] p-[3%] flex flex-col justify-between gap-2 xs:gap-4 sm:gap-6 md:gap-8"
        >
          <ContactForm register={register} errors={errors} />
          <div className="flex justify-end items-center">
            <FillButton text="Send Message" />
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default Contact;
