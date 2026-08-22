import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[260px] rounded-[2.2rem] border border-white/15 bg-surface p-2 shadow-2xl shadow-black/50", className)}>
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60" />
      <div className="overflow-hidden rounded-[1.7rem]">{children}</div>
    </div>
  );
}
