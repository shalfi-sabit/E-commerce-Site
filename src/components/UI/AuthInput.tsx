import React from "react";

interface InputProps {
  placeholder: string;
  type?: string;
  name: "password" | "username" | "phone" | "address" | "email" | "name";
  register: any;
  errors?: any;
}

const AuthInput: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <>
      <input
        className={`text-[12px] sm:text-sm lg:text-[16px] border-b-2 pb-2 border-gray-400 focus:outline-none focus:border-black ${
          errors[name]?.message ? "" : "mb-8"
        }`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      {errors[name]?.message ? (
        <p
          className={`text-red-900 mt-1 ${errors[name]?.message ? "mb-5" : ""}`}
        >
          {errors[name]?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthInput;
