"use client";

import FormValidation from "@/components/shared/FormValidation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useTranslate from "@/hooks/useTranslation";

function Home() {
  const t = useTranslate();
  return (
    <div className="pt-20">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-0">
          <h2 className="text-center py-3 text-xl">{t("fill")}</h2>
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
