"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSteps } from "@/hooks/useSteps";
import useTranslate from "@/hooks/useTranslation";
import FormValidation from "../_components/FormValidation";
import UserInformation from "../_components/UserInformation";

function Home() {
  const t = useTranslate();
  const { step, values } = useSteps();

  return (
    <div className="pt-20">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-0">
          <div className="flex items-center max-md:flex-col justify-between p-3">
            <h2 className="text-center text-xl">{t("fill")}</h2>
            <p>
              {t("step")} - {step}
            </p>
          </div>
          <Separator className="mb-3" />
          <div className="p-3">
            <FormValidation />
          </div>
        </CardContent>
      </Card>

      {values.firstName && (
        <Card className="max-w-3xl mx-auto mt-10">
          <CardContent className="p-0">
            <h2 className="text-center text-xl p-3">Your information</h2>
            <Separator className="mb-3" />
            <div className="p-3">
              <UserInformation />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Home;
