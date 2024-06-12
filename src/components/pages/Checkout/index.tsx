import { useState } from "react";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Wrapper from "../../UI/Wrapper";
import CheckoutForm from "./CheckoutForm";
import checkoutSchema from "../../../form-schema/checkoutSchema";
import FillButton from "../../UI/Button/FillButton";

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
    <Wrapper className="flex justify-between my-16">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutForm
          register={register}
          errors={errors}
          setSaveInformation={setSaveInformation}
        />
        <div className="mt-5">
          <FillButton type="submit" text="Place Order" />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Checkout;
