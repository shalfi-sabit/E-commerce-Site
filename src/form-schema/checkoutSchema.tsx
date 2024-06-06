import * as yup from "yup";

const checkoutSchema = yup.object().shape({
  firstname: yup.string().required("First name is a required field"),
});

export default checkoutSchema;
