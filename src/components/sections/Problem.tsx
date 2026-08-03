import { Clock, Truck, UtensilsCrossed, MapPinOff } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const causes = [
  { icon: Clock, title: "Malo vremena", text: "Pauze su kratke i retko ostavljaju prostor za pripremu obroka." },
  { icon: Truck, title: "Ograničen prostor", text: "Kabina i radni prostor nisu predviđeni za kuhinjsku opremu." },
  { icon: UtensilsCrossed, title: "Nepraktičnost", text: "Postojeća rešenja zahtevaju struju, plamen ili dodatnu opremu." },
  { icon: MapPinOff, title: "Nedostupnost na ruti", text: "Topao obrok često nije dostupan tamo gde se pauza zaista pravi." },
];

export function Problem() {
  return (
    <section id="problem" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Reveal>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
                Hladan obrok nije izuzetak, već rutina.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 rounded-3xl border border-primary/20 bg-card p-6 shadow-soft sm:p-8">
                <p className="font-display text-6xl font-extrabold leading-none text-primary sm:text-7xl">
                  83%
                </p>
                <p className="mt-3 text-base font-medium text-foreground/80">
                  ispitanika često ili stalno jede hladan obrok.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  Rezultat validacije Žar Klik tima
                </p>
              </div>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {causes.map((cause, i) => (
              <Reveal as="li" key={cause.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                    <cause.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg">{cause.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{cause.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
