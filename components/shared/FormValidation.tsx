"use client";

import { FormikStep } from "./FormStep";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { FormikStepper } from "./FormikStepper";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
};

function FormValidation() {
  return (
    <FormikStepper
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormikStep
        validationSchema={Yup.object({
          firstName: Yup.string().min(2).required("First name is required"),
        })}
      >
        <FormStep1 />
      </FormikStep>
      <FormikStep
        validationSchema={Yup.object({
          lastName: Yup.string().min(2).required("Last name is required"),
        })}
      >
        <FormStep2 />
      </FormikStep>
      <FormikStep
        validationSchema={Yup.object({
          age: Yup.number().min(1).required("Age is required"),
        })}
      >
        <FormStep3 />
      </FormikStep>
    </FormikStepper>
  );
}

export default FormValidation;
