import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";
import FillButton from "../../UI/Button/FillButton";
import AuthInput from "../../UI/Input/AuthInput";
import AuthImage from "../../../assets/images/sideImage.png";
import Wrapper from "../../UI/Wrapper";

import signupSchema from "../../../form-schema/signup";
import SignUpProps from "../../../models/signupProps";

import { NavLink } from "react-router-dom";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: yupResolver<SignUpProps>(signupSchema),
  });

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <Wrapper className=" flex justify-around w-3/4  my-10">
      <img
        src={AuthImage}
        alt="hello"
        className="w-1/2 hidden lg:block rounded-md object-cover"
      />
      <div className=" w-96 ">
        <div className="w-full flex flex-col items-start gap-4 mb-12">
          <h1 className="text-[22px] sm:text-[32px] lg:text-4xl leading-[10px] sm:leading-[30px] lg:leading-[40px] font-bold">
            Create an account
          </h1>
          <p className="text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] font-bold">
            Enter your details below
          </p>
        </div>
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            placeholder="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />

          <AuthInput
            placeholder="Username"
            type="text"
            name="username"
            register={register}
            errors={errors}
          />

          <AuthInput
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
          />

          <AuthInput
            placeholder="Name"
            type="text"
            name="name"
            register={register}
            errors={errors}
          />

          <AuthInput
            placeholder="Address"
            type="text"
            name="address"
            register={register}
            errors={errors}
          />

          <AuthInput
            placeholder="Phone"
            type="text"
            name="phone"
            register={register}
            errors={errors}
          />

          <FillButton text="Create Account" className="w-full mb-2" />
        </form>
        <div className="flex flex-col gap-8 text-[12px] sm:text-sm lg:text-[16px]">
          <button
            className="flex items-center justify-center gap-2 w-full border-2 
          rounded-md hover:bg-gray-100 font-semibold text-[12px] sm:text-sm lg:text-[16px] 
          px-5 sm:px-6 lg:px-7 py-1 hover:shadow-md duration-200"
          >
            <span className="text-[18px] sm:text-[20px] lg:text-[25px]">
              <FcGoogle />
            </span>
            Sign up with Google
          </button>
          <p className="mx-auto text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px]">
            Already have account?{" "}
            <NavLink to="/signin" className="underline">
              <strong>Log in</strong>
            </NavLink>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
