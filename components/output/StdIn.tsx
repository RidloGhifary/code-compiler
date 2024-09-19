"use client";

import OutputTitle from "@/components/OutputTitle";
import { useCompileResultStore } from "@/hooks/useCompileResult";
import { Textarea } from "@/components/ui/textarea";
import { useStdIn } from "@/hooks/useStdIn";

export default function StdIn() {
  const { result, is_loading } = useCompileResultStore();
  const { setStdIn } = useStdIn();

  return (
    <div>
      <OutputTitle title="Standard Input" />
      {Boolean(result && result?.stdout) && !is_loading ? (
        <p className="ml-3 text-sm text-gray-400">{result?.stdout}</p>
      ) : is_loading ? (
        <p className="ml-3 text-sm text-gray-400">Compiling...</p>
      ) : (
        <Textarea
          placeholder="(Optional) Input for the program."
          className="border-none shadow-none"
          onChange={(e) => setStdIn(e.target.value)}
        />
      )}
    </div>
  );
}
