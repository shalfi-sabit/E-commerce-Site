import FormInput from "../../UI/Input/FormInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "./index";

interface CheckoutFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  setSaveInformation: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  register,
  errors,
  setSaveInformation,
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
    <div className="w-full">
      <h1 className="mb-5 text-[20px] md:text-[25px] lg:text-3xl font-medium">
        Billing Details
      </h1>
      <FormInput
        label="First Name"
        required
        name="firstname"
        register={register}
        errors={errors}
        defaultValue={savedData?.firstname || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Company Name"
        name="companyname"
        register={register}
        errors={errors}
        defaultValue={savedData?.companyname || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Street Address"
        required
        name="streetaddress"
        register={register}
        errors={errors}
        defaultValue={savedData?.streetaddress || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Apartment, floor, etc. (optional)"
        name="apartment"
        register={register}
        errors={errors}
        defaultValue={savedData?.apartment || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Town/City"
        required
        name="city"
        register={register}
        errors={errors}
        defaultValue={savedData?.city || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Phone Number"
        required
        name="phonenumber"
        register={register}
        errors={errors}
        defaultValue={savedData?.phonenumber || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <FormInput
        label="Email Address"
        required
        name="email"
        register={register}
        errors={errors}
        defaultValue={savedData?.email || ""}
        inputStyle="mb-2 sm:mb-2 md:mb-6 lg:mb-8"
      />
      <div className="flex">
        <input
          className="text-red-400 mr-3"
          type="checkbox"
          id="save-information-checkbox"
          name="save-information-checkbox"
          onClick={handleSaveInfoClick}
        />
        <label
          className="text-[10px] md:text-[12px] lg:text-sm font-medium"
          htmlFor="save-information-checkbox"
        >
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
};

export default CheckoutForm;
