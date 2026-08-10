import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Chip({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
