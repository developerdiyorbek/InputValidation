"use client";

import { ErrorMessage, Field } from "formik";
import useTranslate from "@/hooks/useTranslation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  textArea?: boolean;
}

function FieldForm({
  name,
  placeholder,
  type = "text",
  textArea = false,
}: Props) {
  const t = useTranslate();

  return (
    <div className="mb-2">
      <Field
        name={name}
        type={type}
        as={textArea ? Textarea : Input}
        placeholder={t(placeholder)}
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-500 ml-1 mt-1 block"
      />
    </div>
  );
}

export default FieldForm;
