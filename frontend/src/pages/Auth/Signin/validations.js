import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Enter valid email"),
  password: yup.string().min(8, "Password must be 8 characters long").required(),
});

export default validations;
