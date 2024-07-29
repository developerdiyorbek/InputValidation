"use client";

import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import FieldForm from "./FieldForm";
import { ErrorMessage, Field } from "formik";
import Image from "next/image";
import { codeImages } from "@/constants";
import { IValues } from "@/interfaces";

function FormStep3() {
  const [phoneCode, setPhoneCode] = useState("");
  const { values } = useFormikContext<IValues>();

  useEffect(() => {
    const prefix = values.phoneNumber.slice(0, 2);
    const carrierName = codeImages[prefix] || "";
    setPhoneCode(carrierName);
  }, [values.phoneNumber]);

  return (
    <>
      <div className="mb-4">
        <div className="relative">
          <span className="absolute top-2 left-2 block">+998</span>
          <Field
            name="phoneNumber"
            type="tel"
            as={Input}
            maxLength={9}
            className="pl-12 block text-[16px]"
          />
          {phoneCode && (
            <div className="absolute top-[3px] right-2">
              <Image src={phoneCode} height={35} width={35} alt="image" />
            </div>
          )}
        </div>
        <ErrorMessage
          name="phoneNumber"
          component="span"
          className="text-red-500 ml-1 mt-1 block  max-md:text-[12px]"
        />
      </div>
      <FieldForm name="description" placeholder="description" textArea />
    </>
  );
}

export default FormStep3;
