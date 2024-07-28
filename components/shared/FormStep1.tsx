"use client";

import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

function FormStep1() {
  return (
    <div>
      <div className="mb-3">
        <Field
          name="firstName"
          type="text"
          as={Input}
          placeholder="Enter your first name"
        />
        <ErrorMessage
          name="firstName"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
      <div className="mb-3">
        <Field
          name="lastName"
          type="text"
          as={Input}
          placeholder="Enter your last name"
        />
        <ErrorMessage
          name="lastName"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
      <div>
        <Field
          name="age"
          type="number"
          as={Input}
          placeholder="Enter your age"
        />
        <ErrorMessage
          name="age"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
    </div>
  );
}

export default FormStep1;
