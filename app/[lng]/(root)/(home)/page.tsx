import ModeToggle from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { translation } from "@/i18n/server";
import { LngParams } from "@/interfaces";

async function Home({ params: { lng } }: LngParams) {
  const { t } = await translation(lng);
  return (
    <div>
      <Button variant={"outline"}>{t("salom")}</Button>
    </div>
  );
}

export default Home;
