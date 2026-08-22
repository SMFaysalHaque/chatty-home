import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/40 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
