import FieldForm from "./FieldForm";

function FormStep1() {
  return (
    <>
      <FieldForm name="firstName" placeholder="firstName" />
      <FieldForm name="lastName" placeholder="lastName" />
      <FieldForm name="age" placeholder="age" type="number" />
    </>
  );
}

export default FormStep1;
