import * as yup from "yup";

const contactUsSchema = yup.object().shape({
  name: yup.string().required("First name is a required field"),
  phonenumber: yup
    .string()
    .matches(
      /^(013|014|015|016|017|018|019)[0-9]{8}$/,
      "Please Enter a valid Phone number"
    )
    .min(11, "Phone number must be at least 11 digits long")
    .max(11, "Phone number cannot be more than 11 digits long")
    .required("Phone number is requied"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

export default contactUsSchema;
