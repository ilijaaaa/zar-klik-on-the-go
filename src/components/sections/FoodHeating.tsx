import { Reveal } from "@/components/Reveal";
import foodSolid from "@/assets/food-solid.png.asset.json";
import foodLiquid from "@/assets/food-liquid.png.asset.json";

const types = [
  {
    src: foodSolid.url,
    alt: "Čvrst obrok od mesa, luka i krompira u posudi",
    title: "Čvrsta hrana",
    text: "Zagreva se pretežno kondukcijom i zahteva više vremena.",
    tags: ["Kondukcija", "Sporije"],
  },
  {
    src: foodLiquid.url,
    alt: "Tečni obrok — gulaš sa mesom i povrćem u posudi",
    title: "Tečna hrana",
    text: "Zagreva se kondukcijom i konvekcijom, pa se toplota brže raspoređuje.",
    tags: ["Kondukcija + konvekcija", "Brže"],
  },
];

export function FoodHeating() {
  return (
    <section id="hrana" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Od čvrstog obroka do supe</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Različite vrste hrane se ne zagrevaju isto. Zato je korisno znati šta možeš da očekuješ
            od svog obroka.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {types.map((type, i) => (
            <Reveal key={type.title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <div className="surface-warm p-4">
                  <img
                    src={type.src}
                    alt={type.alt}
                    loading="lazy"
                    className="mx-auto h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl uppercase tracking-wide">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{type.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {type.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-6 text-sm text-muted-foreground">
            Tačno vreme zagrevanja zavisi od vrste i količine hrane. Konkretne vrednosti biće
            potvrđene nakon završetka validacije i testiranja proizvoda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
