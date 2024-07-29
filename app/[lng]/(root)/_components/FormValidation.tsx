"use client";

import { useSteps } from "@/hooks/useSteps";
import { FormikStep } from "./FormStep";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { FormikStepper } from "./FormikStepper";
import { IValues } from "@/interfaces";
import { step1Schema, step2Schema, step3Schema } from "@/lib/validation";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  username: "",
  password: "",
  confirmPassword: "",
  description: "",
  phoneNumber: "",
};

function FormValidation() {
  const { setValues } = useSteps();

  return (
    <FormikStepper
      initialValues={initialValues}
      onSubmit={(values) => {
        setValues(values as IValues);
      }}
    >
      <FormikStep validationSchema={step1Schema}>
        <FormStep1 />
      </FormikStep>

      <FormikStep validationSchema={step2Schema}>
        <FormStep2 />
      </FormikStep>

      <FormikStep validationSchema={step3Schema}>
        <FormStep3 />
      </FormikStep>
    </FormikStepper>
  );
}

export default FormValidation;
