import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import productHero from "@/assets/product-hero.png.asset.json";

export function Hero() {
  return (
    <section id="pocetak" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-salmon/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-ember/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
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
              Žar Klik zagreva obrok koji si poneo od kuće, bez struje i otvorenog plamena.
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
                <a href="#kako-funkcionise">
                  <PlayCircle /> Pogledaj kako radi
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 max-w-md">
              <div aria-hidden="true" className="road-dashes h-[3px] w-full rounded-full" />
              <p className="mt-4 text-sm font-medium text-foreground/70">
                Prilagođeno putu. Jednostavno za upotrebu. Ne zavisi od lokacije.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-lg">
            <img
              src={productHero.url}
              width={1520}
              height={1170}
              alt="Žar Klik posuda za zagrevanje hrane sa poklopcem i logotipom"
              className="relative float-slow w-full drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
