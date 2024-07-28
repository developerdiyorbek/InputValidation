"use client";

import FormValidation from "@/components/shared/FormValidation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSteps } from "@/hooks/useSteps";
import useTranslate from "@/hooks/useTranslation";

function Home() {
  const t = useTranslate();
  const { step, values } = useSteps();
  console.log(values);

  return (
    <div className="pt-20">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-3">
            <h2 className="text-center text-xl">{t("fill")}</h2>
            <p>Step - {step}</p>
          </div>
          <Separator className="mb-3" />
          <div className="p-3">
            <FormValidation />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
