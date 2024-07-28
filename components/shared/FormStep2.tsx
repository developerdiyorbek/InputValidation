"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep2() {
  return (
    <div className="my-2">
      <Field
        name="lastName"
        type="text"
        as={Input}
        placeholder="Enter your last name"
      />
      <ErrorMessage
        name="lastName"
        component="span"
        className="text-[red] text-[15px]"
      />
    </div>
  );
}

export default FormStep2;
