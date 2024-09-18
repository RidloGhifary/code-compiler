import { create } from "zustand";

interface UserCodeStore {
  userCode: string;
  setUserCode: (userCode: string) => void;
}

export const useGetUserCode = create<UserCodeStore>((set) => ({
  userCode: ``,
  setUserCode: (userCode) => set({ userCode }),
}));
