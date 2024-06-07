import { MdErrorOutline } from "react-icons/md";

import { useOnFocus } from "../../../hooks/useOnFocus";

interface FormInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
  register: any;
  errors?: any;
  defaultValue?: string | number;
}

const FormInput: React.FC<FormInputProps> = ({
  className,
  label,
  placeholder,
  type,
  required,
  name,
  register,
  errors,
  defaultValue,
}) => {
  const { isFocused, handleFocus, handleBlur } = useOnFocus();

  return (
    <div className={`flex flex-col gap-1 pb-3 md:pb-4 xl:pb-5 ${className}`}>
      {label && (
        <label
          className={`${
            isFocused ? "text-black-900" : "text-gray-500"
          } text-[10px] md:text-[12px] lg:text-sm font-medium`}
        >
          {label} {required ? <span className="text-red-900">*</span> : ""}
        </label>
      )}
      <input
        className={`bg-gray-100 rounded focus:outline-none placeholder-gray-800 focus:text-black-900 text-[10px] md:text-[12px] lg:text-sm p-2 md:p-3 ${
          errors[name]?.message ? "" : "mb-8"
        }`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={defaultValue}
      />
      {errors[name]?.message ? (
        <p
          className={`text-red-900 tracking-tighter text-[10px] md:text-[12px] lg:text-sm mt-1 flex items-center gap-1 ${
            errors[name]?.message ? "mb-5" : ""
          }`}
        >
          <MdErrorOutline /> {errors[name]?.message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInput;
