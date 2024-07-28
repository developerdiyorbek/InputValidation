"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";
import useTranslate from "@/hooks/useTranslation";

function FormStep2() {
  const t = useTranslate();
  return (
    <div>
      <div className="mb-3">
        <Field name="login" type="text" as={Input} placeholder={t("login")} />
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
          placeholder={t("password")}
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
          placeholder={t("confirmPassword")}
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
