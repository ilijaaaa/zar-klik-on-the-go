import logoMark from "@/assets/logo-mark.png.asset.json";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const t = useT();

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={logoMark.url}
        alt={t.logo.alt}
        className={cn("w-auto shrink-0 transition-all duration-300", compact ? "h-8" : "h-10")}
        loading="eager"
      />
      <span
        className={cn(
          "font-display font-extrabold tracking-tight text-primary transition-all duration-300",
          compact ? "text-lg" : "text-xl sm:text-2xl",
        )}
      >
        ŽAR KLIK
      </span>
    </span>
  );
}
