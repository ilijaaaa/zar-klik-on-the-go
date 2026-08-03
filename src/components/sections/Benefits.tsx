import { Home, PlugZap, Truck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    icon: Home,
    title: "Domaći obrok",
    text: "Jedeš hranu koju si sam izabrao i poneo od kuće.",
  },
  {
    icon: PlugZap,
    title: "Bez struje i plamena",
    text: "Nije potrebna utičnica, električna instalacija ili otvoreni plamen.",
  },
  {
    icon: Truck,
    title: "Prilagođeno putu",
    text: "Kompaktan sistem osmišljen za kabinu, pauzu i život u pokretu.",
  },
  {
    icon: ShieldCheck,
    title: "Više kontrole",
    text: "Sam biraš obrok, vreme i mesto zagrevanja.",
  },
];

export function Benefits() {
  return (
    <section id="prednosti" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Zašto Žar Klik?</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Topao domaći obrok, čak i na kratkoj pauzi.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal as="li" key={benefit.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/20 bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg uppercase tracking-wide">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
