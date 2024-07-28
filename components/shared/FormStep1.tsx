"use client";

import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";
import useTranslate from "@/hooks/useTranslation";

function FormStep1() {
  const t = useTranslate();
  return (
    <div>
      <div className="mb-3">
        <Field
          name="firstName"
          type="text"
          as={Input}
          placeholder={t("firstName")}
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
          placeholder={t("lastName")}
        />
        <ErrorMessage
          name="lastName"
          component="span"
          className="text-red-500 ml-1 mt-1 block"
        />
      </div>
      <div>
        <Field name="age" type="number" as={Input} placeholder={t("age")} />
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
