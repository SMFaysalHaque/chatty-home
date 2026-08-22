import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-glass shadow-xl shadow-black/10 backdrop-blur-md dark:shadow-black/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
