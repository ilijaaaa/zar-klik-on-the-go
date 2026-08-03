import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import step1 from "@/assets/step1.png.asset.json";
import step2 from "@/assets/step2.png.asset.json";
import step3 from "@/assets/step3.png.asset.json";

const steps = [
  {
    id: 1,
    title: "Aktiviranje grejanja",
    label: "Hemijska reakcija",
    text: "Voda pokreće kontrolisanu reakciju sa kalcijum-oksidom (CaO) u zatvorenom, jednokratnom dodatku. Sistem grejanja je fizički odvojen od hrane.",
    image: step1.url,
    alt: "Prikaz kalcijum-oksida i vode koji pokreću reakciju zagrevanja",
  },
  {
    id: 2,
    title: "Prenos toplote",
    label: "Aluminijumska posuda",
    text: "Oslobođena toplota se prenosi na aluminijumsku posudu u kojoj se nalazi tvoj obrok.",
    image: step2.url,
    alt: "Aluminijumska posuda sa poklopcem koja se zagreva sa donje strane",
  },
  {
    id: 3,
    title: "Ravnomerno zagrevanje",
    label: "Obrok je spreman",
    text: "Obrok se postepeno i ravnomerno zagreva, pa ga jedeš direktno iz posude.",
    image: step3.url,
    alt: "Zagrejan obrok u aluminijumskoj posudi sa parom",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(1);
  const current = steps.find((s) => s.id === active) ?? steps[0];

  return (
    <section id="kako-funkcionise" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
            Topao obrok u tri jednostavna koraka
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Sistem grejanja i deo za hranu su odvojeni. Ti ne mešaš ništa sa hranom — samo pokreneš
            grejanje i sačekaš.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <ol className="flex flex-col gap-3">
            {steps.map((step, i) => {
              const isActive = step.id === active;
              return (
                <Reveal as="li" key={step.id} delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setActive(step.id)}
                    aria-expanded={isActive}
                    className={cn(
                      "group w-full cursor-pointer rounded-3xl border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-6",
                      isActive
                        ? "border-primary/50 bg-card shadow-lift"
                        : "border-border bg-card/60 shadow-soft hover:-translate-y-0.5 hover:border-primary/35",
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-extrabold transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-primary",
                        )}
                      >
                        {step.id}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                          {step.label}
                        </p>
                        <h3 className="mt-1 flex items-center gap-2 text-lg">
                          {step.title}
                          <ChevronRight
                            aria-hidden="true"
                            className={cn(
                              "h-4 w-4 shrink-0 transition-transform duration-300",
                              isActive ? "translate-x-1" : "group-hover:translate-x-1",
                            )}
                          />
                        </h3>
                        <p
                          className={cn(
                            "grid overflow-hidden text-sm leading-relaxed text-foreground/75 transition-all duration-500",
                            isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">{step.text}</span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={150}>
            <div className="relative flex h-full min-h-[19rem] items-center justify-center overflow-hidden rounded-[2rem] border border-border surface-warm p-6 shadow-soft sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-ember/15 blur-2xl"
              />
              {steps.map((step) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className={cn(
                    "absolute max-h-[70%] w-auto max-w-[80%] object-contain transition-all duration-700",
                    step.id === active
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0",
                  )}
                />
              ))}
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
                Korak {current.id} — {current.label}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
