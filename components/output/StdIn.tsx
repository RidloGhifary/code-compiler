import OutputTitle from "@/components/OutputTitle";
import { Input } from "@/components/ui/input";
import { useCompileResultStore } from "@/hooks/useCompileResult";

export default function StdIn() {
  const { result, is_loading } = useCompileResultStore();

  return (
    <div>
      <OutputTitle title="Standard Input" />
      {Boolean(result && result?.stdout) && !is_loading ? (
        <p className="ml-3 text-sm text-gray-400">{result?.stdout}</p>
      ) : (
        <Input
          placeholder="(Optional) Input for the program."
          className="border-none shadow-none"
        />
      )}
    </div>
  );
}
