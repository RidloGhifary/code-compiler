import { create } from "zustand";

export interface Language {
  language: string;
  version: string;
  icon: string;
}

export interface LanguageStore {
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  selectedLanguage: {
    language: "python",
    version: "3.10.0",
    icon: "/python.png",
  },
  setSelectedLanguage: (language: Language) =>
    set({ selectedLanguage: language }),
}));
