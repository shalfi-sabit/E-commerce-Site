import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormInput from "../../UI/Input/FormInput";
import { contactUsFormData } from ".";

interface ContactFormProps {
  register: UseFormRegister<contactUsFormData>;
  errors: FieldErrors<contactUsFormData>;
}

const ContactForm: React.FC<ContactFormProps> = ({ register, errors }) => {
  return (
    <>
      <div className="flex justify-between">
        <FormInput
          placeholder="Name"
          name="name"
          register={register}
          errors={errors}
          className="w-[32%]"
        />
        <FormInput
          placeholder="Email"
          name="email"
          register={register}
          errors={errors}
          className="w-[32%]"
        />
        <FormInput
          placeholder="Phone"
          name="phonenumber"
          register={register}
          errors={errors}
          className="w-[32%]"
        />
      </div>
      <textarea
        placeholder="Your Message"
        className="bg-gray-100 rounded focus:outline-none placeholder-gray-800 focus:text-black-900 text-[10px] md:text-[12px] lg:text-sm p-2 md:p-3 w-full h-[150px] md:h-[200px] lg:h-[50%]"
      ></textarea>
    </>
  );
};

export default ContactForm;
