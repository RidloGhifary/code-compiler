"use client";

import ThemeToggle from "./ThemeToggle";
import SelectLanguages from "./Selects/Languages";
import { RunCode } from "./RunCode";
import { FontSize } from "./Selects/FontSize";
import { LanguageStore, useLanguageStore } from "@/hooks/useLanguage";
import Image from "next/image";

export default function Navbar() {
  const { selectedLanguage } = useLanguageStore() as LanguageStore;
  return (
    <div className="p-4 px-10">
      <div className="flex items-center justify-between gap-6">
        <Image
          src={selectedLanguage.icon}
          alt={selectedLanguage.language}
          width={25}
          height={25}
        />
        <SelectLanguages />
        <FontSize />
        <div className="flex items-center gap-6">
          <RunCode className="bg-green-600 text-white" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
