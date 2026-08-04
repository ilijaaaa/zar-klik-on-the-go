import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import productBox from "@/assets/product-box.png";

export function Hero() {
  return (
    <section id="pocetak" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-salmon/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-ember/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Zagrejan obrok bilo kad i bilo gde
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Topao domaći obrok, gde god da si.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
              Žar Klik je prenosiva posuda koja sama zagreva obrok koji si poneo od kuće — bez
              struje, plamena i dodatne opreme. Zagrevanje pokreće jednokratni grejni dodatak,
              a posudu koristiš više puta.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg">
                <a href="#prijava">
                  Želim Žar Klik <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#cena">Vidi cenu</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 max-w-md">
              <div aria-hidden="true" className="road-dashes h-[3px] w-full rounded-full" />
              <p className="mt-4 text-sm font-medium text-foreground/70">
                Prilagođeno putu. Jednostavno za upotrebu. Ne zavisi od lokacije.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-lg px-2">
            <img
              src={productBox}
              width={707}
              height={506}
              alt="Žar Klik prenosiva posuda za zagrevanje hrane sa poklopcem"
              className="relative float-slow w-full drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
