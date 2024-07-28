"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep3() {
  return (
    <div className="my-2">
      <Field name="age" type="number" as={Input} placeholder="Enter your age" />
      <ErrorMessage
        name="age"
        component="span"
        className="text-[red] text-[15px]"
      />
    </div>
  );
}

export default FormStep3;
