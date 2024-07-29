import FieldForm from "./FieldForm";

function FormStep2() {
  return (
    <>
      <FieldForm name="login" placeholder="login" />
      <FieldForm name="password" placeholder="password" />
      <FieldForm name="confirmPassword" placeholder="confirmPassword" />
    </>
  );
}

export default FormStep2;
