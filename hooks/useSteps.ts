import { IValues } from "@/interfaces";
import { create } from "zustand";

interface IUseSteps {
  step: number;
  setStep: (step: number) => void;
  values: IValues;
  setValues: (values: IValues) => void;
}

export const useSteps = create<IUseSteps>((set) => ({
  step: 1,
  values: {
    firstName: "",
    lastName: "",
    age: 0,
    login: "",
    password: "",
  },
  setStep: (step: number) => set({ step }),
  setValues: (values: IValues) => set({ values }),
}));
