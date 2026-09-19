import { Mail } from "lucide-react";
//import logoMark from "@/assets/logo-mark.png.asset.json";
import logoMark from "@/assets/logo-mark.png";
import { useT } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL } from "@/lib/contact-email";

export function Footer() {
  const t = useT();

  const links = [
    { href: "#cena", label: t.footer.links.cena },
    { href: "#proizvod", label: t.footer.links.proizvod },
    { href: "#pitanja", label: t.footer.links.pitanja },
  ];

  return (
    <footer className="mt-8 border-t border-border surface-ember">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2.5">
              <img
                src={logoMark/*.url*/}
                alt={t.logo.alt}
                className="h-11 w-auto shrink-0"
                loading="lazy"
              />
              <span className="font-display text-xl font-extrabold tracking-tight text-primary-foreground">
                ŽAR KLIK
              </span>
            </span>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label={t.footer.navAria}>
            <h2 className="text-sm uppercase tracking-widest text-primary-foreground">
              {t.footer.pageHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary-foreground">
              {t.footer.contactHeading}
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70">{t.footer.disclaimer}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Žar Klik. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
