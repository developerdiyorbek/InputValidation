"use client";

import { useSteps } from "@/hooks/useSteps";
import RowItem from "./RowItem";

function UserInformation() {
  const { values } = useSteps();
  return (
    <div>
      <RowItem
        name="nameValue"
        value={`${values.firstName} ${values.lastName}`}
      />
      <RowItem name="usernameValue" value={`${values.username}`} />
      <RowItem name="ageValue" value={`${values.age}`} />
      <RowItem name="phoneValue" value={`+998 ${values.phoneNumber}`} />
      <RowItem name="descValue" value={`${values.description}`} />
    </div>
  );
}

export default UserInformation;
