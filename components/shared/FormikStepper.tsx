"use client";

import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { ReactElement, useState } from "react";
import { Button } from "../ui/button";

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const ChildrenArray = React.Children.toArray(children) as ReactElement[];

  const [step, setStep] = useState(0);

  const currentChild = ChildrenArray[step];

  function goBack() {
    setStep((step) => step - 1);
  }

  function isLastStep() {
    return step === ChildrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((step) => step + 1);
          helpers.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}
          <div className="flex items-center gap-2 justify-end">
            {step > 0 && (
              <Button className="self-end" type="button" onClick={goBack}>
                Previous
              </Button>
            )}
            <Button className="self-end" type="submit" disabled={isSubmitting}>
              {isLastStep() ? "Submit" : "Next"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
