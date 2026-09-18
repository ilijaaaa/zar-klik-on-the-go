import { useLanguage } from "@/i18n/LanguageProvider";
import { languageLabels, languages } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={cn(
        "flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-card p-0.5",
        className,
      )}
    >
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "cursor-pointer rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            language === lang
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-primary",
          )}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  );
}
