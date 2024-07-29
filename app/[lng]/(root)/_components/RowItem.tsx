"use client";

import useTranslate from "@/hooks/useTranslation";

interface Props {
  name: string;
  value: string;
}

function RowItem({ name, value }: Props) {
  const t = useTranslate();
  return (
    <div className="flex items-center justify-between mb-2">
      <h2>{t(name)}</h2>
      <p>{value}</p>
    </div>
  );
}

export default RowItem;
