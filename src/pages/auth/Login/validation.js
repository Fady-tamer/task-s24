import * as yup from "yup";

const uppercaseRegex = /[A-Z]/;
const specialCharRegex = /[@$!%*?&]/;

export const loginValidation = () =>
  yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 6 characters")
      .matches(
        uppercaseRegex,
        "Password must contain at least one uppercase letter",
      )
      .matches(
        specialCharRegex,
        "Password must contain at least one special character",
      )
      .required("Password is required"),
  });
