import { useState } from "react";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Wrapper from "../../UI/Wrapper";
import CheckoutForm from "./CheckoutForm";
import checkoutSchema from "../../../form-schema/checkoutSchema";
import FillButton from "../../UI/Button/FillButton";
import CheckoutSummary from "./CheckoutSummary";
import BreadCrumb from "../../shared/BreadCrumb";

export interface CheckoutFormData {
  firstname: string;
  companyname?: string;
  streetaddress: string;
  apartment?: string;
  city: string;
  phonenumber: string;
  email: string;
}

const Checkout: React.FC = () => {
  const [saveInformation, setSaveInformation] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(saveInformation, data);
    if (saveInformation && Object.keys(errors).length === 0) {
      localStorage.setItem("billingDetails", JSON.stringify(data));
    }
  };

  return (
    <>
      <BreadCrumb />
      <Wrapper className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <h1 className="mb-5 text-[20px] md:text-[25px] lg:text-3xl font-medium">
          Billing Details
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between flex-col sm:flex-row gap-10 sm:gap-0"
        >
          <CheckoutForm
            register={register}
            errors={errors}
            setSaveInformation={setSaveInformation}
            className="sm:w-[42%] lg:w-[40%]"
          />
          <div className="sm:w-[53%] lg:-w[50%">
            <CheckoutSummary />
            <FillButton type="submit" text="Place Order" />
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default Checkout;
