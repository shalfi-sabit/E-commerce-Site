import React from "react";
import { MdErrorOutline } from "react-icons/md";

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
        className={`text-[12px] sm:text-sm lg:text-[16px] border-b-2 pb-2 border-gray-100 focus:outline-none focus:border-black ${
          errors[name]?.message ? "" : "mb-8"
        }`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      {errors[name]?.message ? (
        <p
          className={`text-red-900 text-[10px] tracking-tighter sm:text-[14px] lg:text-[14px] mt-1 flex items-center gap-1 ${
            errors[name]?.message ? "mb-5" : ""
          }`}
        >
          <MdErrorOutline /> {errors[name]?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthInput;
