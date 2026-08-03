import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#kako-funkcionise", label: "Kako funkcioniše" },
  { href: "#proizvod", label: "Proizvod" },
  { href: "#prednosti", label: "Prednosti" },
  { href: "#pitanja", label: "Pitanja" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border surface-ember">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="h-11 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Žar Klik zagreva obrok koji si poneo od kuće — bez struje i otvorenog plamena.
            </p>
          </div>

          <nav aria-label="Navigacija u podnožju">
            <h2 className="text-sm uppercase tracking-widest text-primary-foreground">Stranica</h2>
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
            <h2 className="text-sm uppercase tracking-widest text-primary-foreground">Kontakt</h2>
            <a
              href="mailto:kontakt@zarklik.rs"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              kontakt@zarklik.rs
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Proizvod je u fazi validacije. Prijava interesovanja nije kupovina.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Žar Klik. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
