import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-black/50", className)}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
      </div>
      {children}
    </div>
  );
}
