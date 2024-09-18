import OutputTitle from "@/components/OutputTitle";
import { Input } from "@/components/ui/input";

export default function StdIn() {
  return (
    <div>
      <OutputTitle title="Standard Input" />
      <Input
        placeholder="(Optional) Input for the program."
        className="border-none shadow-none"
      />
    </div>
  );
}
