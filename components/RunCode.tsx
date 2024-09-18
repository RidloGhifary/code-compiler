import { compile } from "@/actions/compileCode";
import { Button } from "@/components/ui/button";
import { useCompileResultStore } from "@/hooks/useCompileResult";
import { useGetUserCode } from "@/hooks/useGetUserCode";
import { useLanguageStore } from "@/hooks/useLanguage";

interface RunCodeProps {
  is_circle?: boolean;
  className?: string;
}

export function RunCode({ is_circle, className }: RunCodeProps) {
  const { userCode } = useGetUserCode();
  const { selectedLanguage } = useLanguageStore();
  const { setCompile, set_loading, is_loading } = useCompileResultStore();

  const onClick = async () => {
    set_loading(true);

    try {
      const result = await compile({
        userCode: userCode,
        userLang: selectedLanguage.language,
        userInput: "",
      });

      if (result) {
        setCompile(result.run);
      }
    } catch (error) {
      console.error("Error compiling code:");
    } finally {
      set_loading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      className={`flex items-center gap-2 ${is_circle && "rounded-full"} ${className}`}
    >
      {is_loading ? (
        "Wait"
      ) : (
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          Run
        </>
      )}
    </Button>
  );
}
