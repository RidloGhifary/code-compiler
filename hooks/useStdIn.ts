import { create } from "zustand";

export const useStdIn = create<{
  stdIn: string;
  setStdIn: (stdIn: string) => void;
}>((set) => ({
  stdIn: "",
  setStdIn: (stdIn: string) => set({ stdIn }),
}));
