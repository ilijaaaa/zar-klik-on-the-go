import { Truck, HardHat, Tent, Building2, Route } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import driver from "@/assets/driver.png.asset.json";

const useCases = [
  { icon: Truck, label: "Profesionalni vozači" },
  { icon: HardHat, label: "Terenski radnici" },
  { icon: Tent, label: "Kampovanje i putovanja" },
  { icon: Building2, label: "Radna mesta bez kuhinje" },
  { icon: Route, label: "Duže vožnje" },
];

export function OnTheRoad() {
  return (
    <section id="na-putu" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-primary/20 bg-card shadow-lift">
          <div className="grid gap-0 lg:grid-cols-2">
            <Reveal className="order-2 p-6 sm:p-10 lg:order-1 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Život u pokretu
              </p>
              <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
                Napravljeno za pauze koje ne mogu da čekaju.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Žar Klik omogućava profesionalnim vozačima i ljudima u pokretu da tokom kratke pauze
                zagreju obrok koji su poneli od kuće.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {useCases.map((useCase, i) => (
                  <Reveal as="li" key={useCase.label} delay={i * 70}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      <useCase.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {useCase.label}
                    </span>
                  </Reveal>
                ))}
              </ul>

            </Reveal>

            <div className="relative order-1 min-h-72 lg:order-2">
              <img
                src={driver.url}
                alt="Profesionalni vozač kamiona u kabini tokom pauze"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
