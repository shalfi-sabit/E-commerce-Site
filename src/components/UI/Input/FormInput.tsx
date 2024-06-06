import { useOnFocus } from "../../../hooks/useOnFocus";
import Wrapper from "../Wrapper";

interface FormInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  required,
}) => {
  const { isFocused, handleFocus, handleBlur } = useOnFocus();

  return (
    <div className="flex flex-col gap-1 pb-3 md:pb-4 xl:pb-5 w-2/4">
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
        className="bg-gray-100 rounded focus:outline-none placeholder-gray-800 focus:text-black-900 text-[10px] md:text-[12px] lg:text-sm p-2 md:p-3"
        required={required}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormInput;
