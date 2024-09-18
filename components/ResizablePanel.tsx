"use client";

import Editor from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import { LanguageStore, useLanguageStore } from "@/hooks/useLanguage";
import StdIn from "@/components/output/StdIn";
import Output from "@/components/output/Output";
import { RunCode } from "@/components/RunCode";
import { FontSizeStore, useFontSizeStore } from "@/hooks/useFontSize";

export default function ResizablePanelComponent() {
  const { selectedLanguage } = useLanguageStore() as LanguageStore;
  const { fontSize } = useFontSizeStore() as FontSizeStore;
  const [userCode, setUserCode] = useState(``);
  const [userTheme, setUserTheme] = useState("light");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");

  const options = {
    fontSize: fontSize,
  };

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="border-t-2 border-gray-300"
      >
        <ResizablePanel defaultSize={50}>
          <div className="relative">
            <Editor
              options={options}
              height="calc(100vh)"
              width="100%"
              theme={userTheme}
              language={selectedLanguage.language}
              defaultLanguage="python"
              defaultValue="# Start coding here"
              onChange={(value) => {
                setUserCode(value as string);
              }}
            />
            <RunCode className="absolute right-6 top-4 bg-green-600 text-white" />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="border border-gray-300" />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={15} className="p-2">
              <StdIn />
            </ResizablePanel>
            <ResizableHandle withHandle className="border border-gray-300" />
            <ResizablePanel defaultSize={85} className="p-2">
              <Output />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
