"use client";

import React from "react";
import { ErrorMessage, Field } from "formik";
import { Textarea } from "../ui/textarea";
import useTranslate from "@/hooks/useTranslation";

function FormStep3() {
  const t = useTranslate();
  return (
    <div>
      <Field name="description" as={Textarea} placeholder={t("description")} />
      <ErrorMessage
        name="description"
        component="span"
        className="text-red-500 ml-1 mt-1 block"
      />
    </div>
  );
}

export default FormStep3;
