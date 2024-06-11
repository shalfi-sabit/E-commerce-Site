import FormInput from "../../UI/Input/FormInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "./index";
import SaveInfoIcon from "../../../assets/icons/SaveInfoIcon";

interface CheckoutFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  saveInformation: boolean;
  setSaveInformation: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  register,
  errors,
  saveInformation,
  setSaveInformation,
  className,
}) => {
  const handleSaveInfoClick = () => {
    setSaveInformation((prevState: boolean) => !prevState);
  };

  let hasSavedData = localStorage.getItem("billingDetails");
  let savedData = null;
  if (hasSavedData) {
    savedData = JSON.parse(hasSavedData);
  }

  return (
    <div className={`w-full flex flex-col gap-0 ${className}`}>
      <FormInput
        label="First Name"
        required
        name="firstname"
        register={register}
        errors={errors}
        defaultValue={savedData?.firstname || ""}
      />
      <FormInput
        label="Company Name"
        name="companyname"
        register={register}
        errors={errors}
        defaultValue={savedData?.companyname || ""}
      />
      <FormInput
        label="Street Address"
        required
        name="streetaddress"
        register={register}
        errors={errors}
        defaultValue={savedData?.streetaddress || ""}
      />
      <FormInput
        label="Apartment, floor, etc. (optional)"
        name="apartment"
        register={register}
        errors={errors}
        defaultValue={savedData?.apartment || ""}
      />
      <FormInput
        label="Town/City"
        required
        name="city"
        register={register}
        errors={errors}
        defaultValue={savedData?.city || ""}
      />
      <FormInput
        label="Phone Number"
        required
        name="phonenumber"
        register={register}
        errors={errors}
        defaultValue={savedData?.phonenumber || ""}
      />
      <FormInput
        label="Email Address"
        required
        name="email"
        register={register}
        errors={errors}
        defaultValue={savedData?.email || ""}
      />
      <div className="flex items-center">
        {saveInformation && (
          <div className="mr-1 md:mr-2 lg:mr-3" onClick={handleSaveInfoClick}>
            <SaveInfoIcon />
          </div>
        )}

        {!saveInformation && (
          <div
            className="border-2 rounded border-red-400 fill-none w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2 lg:mr-3"
            onClick={handleSaveInfoClick}
          ></div>
        )}

        <label className="text-[10px] md:text-[12px] lg:text-sm font-medium">
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
};

export default CheckoutForm;
