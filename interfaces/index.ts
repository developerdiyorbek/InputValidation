import { ReactElement, ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface LngParams {
  params: { lng: string };
}

export interface IValues {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  description: string;
}

export interface IChildren extends ReactElement {
  props: { validationSchema: any };
}
