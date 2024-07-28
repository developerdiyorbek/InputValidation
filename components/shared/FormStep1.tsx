"use client";

import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep1() {
  return (
    <div className="my-2">
      <Field
        name="firstName"
        type="text"
        as={Input}
        placeholder="Enter your first name"
      />
      <ErrorMessage
        name="firstName"
        component="span"
        className="text-[red] text-[15px]"
      />
    </div>
  );
}

export default FormStep1;
