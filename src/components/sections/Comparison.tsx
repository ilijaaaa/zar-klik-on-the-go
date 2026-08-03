import { Check, X, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Value = "yes" | "no";

const columns = [
  "Žar Klik",
  "Električna grejna posuda",
  "Samozagrejavajući gotov obrok",
  "Kupovina toplog obroka",
  "Plinski rešo",
];

const rows: { criterion: string; values: Value[] }[] = [
  {
    criterion: "Zagreva obrok koji je korisnik poneo",
    values: ["yes", "yes", "no", "no", "yes"],
  },
  { criterion: "Radi bez struje", values: ["yes", "no", "yes", "no", "yes"] },
  { criterion: "Ne zavisi od lokacije", values: ["yes", "yes", "yes", "no", "yes"] },
  { criterion: "Praktično za upotrebu u kabini", values: ["yes", "no", "yes", "yes", "no"] },
  { criterion: "Nije potrebno kupovati dopune", values: ["no", "yes", "no", "yes", "no"] },
];

function Mark({ value }: { value: Value }) {
  const isYes = value === "yes";
  return (
    <span
      className={cn(
        "grid h-7 w-7 place-items-center rounded-full",
        isYes ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
      )}
    >
      {isYes ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <X className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="sr-only">{isYes ? "Da" : "Ne"}</span>
    </span>
  );
}

export function Comparison() {
  return (
    <section id="uporedjivanje" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Kako se Žar Klik uklapa</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Poređenje po praktičnim kriterijumima. Svako rešenje ima svoju namenu — Žar Klik je
            osmišljen za obrok od kuće u pokretu.
          </p>
        </Reveal>

        {/* Desktop table */}
        <Reveal delay={100} className="mt-10 hidden lg:block">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Poređenje Žar Klik sistema sa drugim načinima zagrevanja obroka
              </caption>
              <thead>
                <tr className="surface-warm">
                  <th scope="col" className="p-5 text-sm font-semibold text-primary">
                    Kriterijum
                  </th>
                  {columns.map((column, i) => (
                    <th
                      key={column}
                      scope="col"
                      className={cn(
                        "p-5 text-center text-sm font-semibold",
                        i === 0 ? "text-primary" : "text-foreground/70",
                      )}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.criterion} className="border-t border-border">
                    <th scope="row" className="p-5 text-sm font-medium text-foreground">
                      {row.criterion}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.criterion}-${i}`}
                        className={cn("p-5 text-center", i === 0 && "bg-secondary/50")}
                      >
                        <span className="inline-flex justify-center">
                          <Mark value={value} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {columns.map((column, colIndex) => (
            <Reveal key={column} delay={colIndex * 70}>
              <div
                className={cn(
                  "h-full rounded-3xl border p-5 shadow-soft",
                  colIndex === 0 ? "border-primary/45 bg-card" : "border-border bg-card/70",
                )}
              >
                <h3 className="text-base">{column}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {rows.map((row) => (
                    <li key={row.criterion} className="flex items-start gap-3">
                      <Mark value={row.values[colIndex]!} />
                      <span className="min-w-0 text-sm leading-snug text-foreground/80">
                        {row.criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Minus className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Poređenje je zasnovano na praktičnim kriterijumima iz Žar Klik analize i ne predstavlja
            ocenu kvaliteta drugih proizvoda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
