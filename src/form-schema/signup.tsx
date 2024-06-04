import * as yup from "yup";

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username cannot be more than 20 characters long"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be more than 50 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password cannot be more than 20 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters long")
    .max(100, "Address cannot be more than 100 characters long"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(11, "Phone number must be at least 11 digits long")
    .max(11, "Phone number cannot be more than 11 digits long"),
});
export default signupSchema;
