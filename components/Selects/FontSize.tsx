"use client";

import { Input } from "@/components/ui/input";
import { FontSizeStore, useFontSizeStore } from "@/hooks/useFontSize";

export function FontSize() {
  const { setFontSize, fontSize } = useFontSizeStore() as FontSizeStore;

  return (
    <div className="flex w-full items-center gap-2">
      <p>Font size:</p>
      <Input
        value={fontSize}
        type="number"
        className="w-fit"
        onChange={(e) => setFontSize(parseInt(e.target.value))}
      />
    </div>
  );
}
