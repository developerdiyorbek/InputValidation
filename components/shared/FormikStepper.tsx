"use client";

import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { Button } from "../ui/button";
import { useSteps } from "@/hooks/useSteps";
import { Children } from "react";
import { IChildren } from "@/interfaces";
import useTranslate from "@/hooks/useTranslation";
import { toast } from "sonner";

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const ChildrenArray = Children.toArray(children as IChildren) as IChildren[];

  const t = useTranslate();
  const { setStep, step } = useSteps();

  const currentChild = ChildrenArray[step - 1];

  function goBack() {
    setStep(step - 1);
  }

  function isLastStep() {
    return step === ChildrenArray.length;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          toast.success("Successfully saved");
        } else {
          setStep(step + 1);
          helpers.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}
          <div className="flex items-center gap-2 mt-4 justify-end">
            {step > 1 && (
              <Button className="self-end" type="button" onClick={goBack}>
                {t("previous")}
              </Button>
            )}
            <Button className="self-end" type="submit" disabled={isSubmitting}>
              {isLastStep() ? t("submit") : t("next")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
