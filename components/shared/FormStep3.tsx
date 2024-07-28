"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep3() {
  return (
    <div>
      <Field name="age" type="number" as={Input} placeholder="Enter your age" />
      <ErrorMessage
        name="age"
        component="span"
        className="text-red-500 ml-1 mt-1 block"
      />
    </div>
  );
}

export default FormStep3;
