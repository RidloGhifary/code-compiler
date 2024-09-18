"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageMap } from "@/constants";
import { LanguageStore, useLanguageStore } from "@/hooks/useLanguage";

export default function SelectLanguages() {
  const { setSelectedLanguage, selectedLanguage } =
    useLanguageStore() as LanguageStore;

  return (
    <Select
      defaultValue={selectedLanguage.language}
      onValueChange={(value) => {
        const selectedLangObj = languageMap.find(
          (lang) => lang.language === value,
        );
        if (selectedLangObj) {
          setSelectedLanguage(selectedLangObj);
        }
      }}
    >
      <SelectTrigger className="px-4">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {languageMap.map((language) => (
          <SelectItem
            value={language.language}
            key={language.language}
            className="capitalize"
          >
            {language.language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
