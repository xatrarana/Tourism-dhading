import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string().min(2).required("password is required"),
});

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(2, "password must be at least 8 characters")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("confirm password is required"),
});
