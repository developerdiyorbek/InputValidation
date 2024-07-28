import { FormikConfig, FormikValues } from "formik";

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

export function FormikStep({ children, validationSchema }: FormikStepProps) {
  return <>{children}</>;
}
