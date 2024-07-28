import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "firstname must be at least 2 characters")
    .required("firstname is required"),
  lastName: Yup.string()
    .min(2, "lastname must be at least 2 characters")
    .required("lastname is required"),
  age: Yup.number().min(0, "min value 0").required("age is required"),
});
