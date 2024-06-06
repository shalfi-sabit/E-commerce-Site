import { useForm } from "react-hook-form";
import FormInput from "../../UI/Input/FormInput";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../UI/Button/FillButton";
import checkoutSchema from "../../../form-schema/checkoutSchema";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data: {}) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="First Name"
          required
          name="firstname"
          register={register}
          errors={errors}
        />
        <Button type="submit" text="Place Order" />
      </Form>
    </div>
  );
};

export default CheckoutForm;
