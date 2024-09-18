import { create } from "zustand";

export interface FontSizeStore {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

export const useFontSizeStore = create(
  (set): FontSizeStore => ({
    fontSize: 15,
    setFontSize: (fontSize: number) => set({ fontSize }),
  }),
);
