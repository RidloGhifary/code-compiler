import { useCompileResultStore } from "@/hooks/useCompileResult";
import OutputTitle from "../OutputTitle";

export default function Output() {
  const { result, is_loading } = useCompileResultStore();
  console.log("🚀 ~ Output ~ result:", result);

  return (
    <div>
      <OutputTitle title="Output" />
      {Boolean(result && result?.output) && !is_loading ? (
        <p className="ml-3 text-sm text-gray-400">{result?.output}</p>
      ) : (
        <p className="ml-3 text-sm text-gray-400">
          Click run to see the output of your code
        </p>
      )}
    </div>
  );
}
