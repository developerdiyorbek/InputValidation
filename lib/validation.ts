import * as Yup from "yup";

export const step1Schema = Yup.object({
  firstName: Yup.string().min(2).required("First name is required"),
  lastName: Yup.string().min(2).required("Last name is required"),
  age: Yup.number().min(1).required("Age is required"),
});

export const step2Schema = Yup.object({
  username: Yup.string().min(5).required("Login is required"),
  password: Yup.string()
    .min(6)
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const step3Schema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[97]\d{8}$/, "Invalid phone number")
    .required("Phone number is required")
    .min(9, "Invalid phone number"),
  description: Yup.string().min(10).required(),
});
