"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep2() {
  return (
    <div>
      <div className="mb-3">
        <Field
          name="login"
          type="text"
          as={Input}
          placeholder="Enter your login"
        />
        <ErrorMessage
          name="login"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
      <div className="mb-3">
        <Field
          name="password"
          type="text"
          as={Input}
          placeholder="Enter your password"
        />
        <ErrorMessage
          name="password"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
      <div>
        <Field
          name="confirmPassword"
          type="text"
          as={Input}
          placeholder="Confirm your password"
        />
        <ErrorMessage
          name="confirmPassword"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
    </div>
  );
}

export default FormStep2;
