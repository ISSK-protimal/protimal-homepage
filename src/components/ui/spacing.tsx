import { cn } from "@/lib/utils";

function Spacing({ className }: { className?: string }) {
  return <div className={cn("block h-4", className)} />;
}

export { Spacing };
