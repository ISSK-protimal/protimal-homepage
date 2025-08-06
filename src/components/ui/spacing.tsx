import { cn } from "@/lib/utils";

function Spacing({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("block", className)}
      style={
        {
          "--spacing-height": `${size}px`,
          height: "var(--spacing-height)",
        } as React.CSSProperties
      }
    />
  );
}

export { Spacing };
