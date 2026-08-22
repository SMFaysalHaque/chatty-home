import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px] animate-aurora" />
      <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-[120px] animate-aurora [animation-delay:-12s]" />
    </div>
  );
}
