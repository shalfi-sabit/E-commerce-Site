/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FillButton from "../../UI/Button/FillButton";
import AuthInput from "../../UI/Input/AuthInput";
import AuthImage from "../../../assets/images/sideImage.png";
import Wrapper from "../../UI/Wrapper";
import SignInProps from "../../../models/signinProps";
import SignInSchema from "../../../form-schema/signin";
import { backdropSpinnerActions } from "../../../redux-store/slices/backdropSpinnerSlice";

import {
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import AlreadyLoggedInMessage from "../../UI/AlreadyLoggedInMessage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

type loaderDataType = {
  showAlreadyLoggedInMessage?: boolean;
};

const SignIn = () => {
  const location = useLocation();
  const submit = useSubmit();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === "submitting";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver<SignInProps>(SignInSchema),
  });

  const loaderData = (useLoaderData() as loaderDataType) || {};

  const onSubmit = async (data: { username: string; password: string }) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const redirectTo = location.state?.from?.pathname || "/";
    submit(formData, {
      method: "post",
      action: `/signin?redirectTo=${encodeURIComponent(redirectTo)}`,
    });
  };

  if (loaderData.showAlreadyLoggedInMessage) {
    return <AlreadyLoggedInMessage />;
  }

  useEffect(() => {
    if (isSubmitting) {
      dispatch(backdropSpinnerActions.handlebBackdropSpinnerOpen());
    }
  }, [isSubmitting, dispatch]);

  return (
    <Wrapper className=" flex justify-around w-3/4  my-10">
      <img
        src={AuthImage}
        alt="hello"
        className="w-1/2 hidden lg:block rounded-md object-cover"
      />
      <div className="w-96 my-auto">
        <div className="w-full flex flex-col items-start gap-4 mb-12 ">
          <h1 className="text-[22px] sm:text-[32px] lg:text-4xl leading-[10px] sm:leading-[30px] lg:leading-[40px] font-bold">
            Log in to Exclusive
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
          <div className="flex mt-6 flex-col sm:flex-row">
            <FillButton
              text={isSubmitting ? "Loggin in..." : "Log in"}
              className="w-full mb-2"
              isSubmitting={isSubmitting}
            />
            <Link
              to="/signin"
              className=" bg-white-900 ml-2 text-gray-300 mb-2 font-semibold text-[12px] 
            sm:text-sm lg:text-[16px] sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 text-nowrap "
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="mx-auto text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] mt-8">
          Don't have an account?{" "}
          <NavLink to="/signup" className="underline">
            <span className="font-semibold">Sign up</span>
          </NavLink>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignIn;
