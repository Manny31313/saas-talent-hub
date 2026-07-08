import { cn } from "@/lib/utils";

interface FloatingBackgroundProps {
  className?: string;
  topClassName?: string;
  bottomClassName?: string;
}

export const FloatingBackground = ({
  className,
  topClassName,
  bottomClassName,
}: FloatingBackgroundProps) => {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float-slow",
          topClassName
        )}
      />
      <div
        className={cn(
          "absolute -bottom-6 -left-2 w-24 h-24 rounded-full bg-accent/20 blur-2xl animate-float-slower",
          bottomClassName
        )}
      />
    </div>
  );
};
