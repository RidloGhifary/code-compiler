"use server";

import { languageMap } from "@/constants";

interface Props {
  userCode: string;
  userLang: string;
  userInput?: string;
}

export async function compile({ userCode, userLang, userInput }: Props) {
  if (!userCode) return;

  const HEADER_SECRET = process.env.REQUEST_HEADER_SECRET;

  if (!HEADER_SECRET) return;

  const findLanguage = languageMap.find((lang) => lang.language === userLang);
  if (!findLanguage) return;

  const data = {
    language: findLanguage.language,
    version: findLanguage.version,
    files: [
      {
        name: "main",
        content: userCode,
      },
    ],
    stdin: userInput,
  };

  try {
    const response = await fetch(process.env.REQUEST_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error compiling code:", error);
    return;
  }
}
