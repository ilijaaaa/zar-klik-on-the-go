import { useState } from "react";
import { Send, PackageCheck, Repeat2, ShieldQuestion } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cartridge from "@/assets/cartridge.png.asset.json";
import productHero from "@/assets/product-hero.png.asset.json";

const plans = [
  {
    name: "Žar Klik posuda",
    price: "1.300",
    unit: "RSD",
    note: "Jednokratna kupovina, višekratna upotreba",
    image: productHero.url,
    alt: "Žar Klik posuda za zagrevanje obroka",
    icon: PackageCheck,
    items: [
      "Poklopac i aluminijumska posuda",
      "Pregrada za prenos toplote",
      "Baza sa grejnim sistemom",
    ],
    featured: true,
  },
  {
    name: "Grejni dodatak",
    price: "70",
    unit: "RSD",
    note: "Jednokratni dodatak po zagrevanju",
    image: cartridge.url,
    alt: "Pakovanje jednokratnog grejnog dodatka",
    icon: Repeat2,
    items: [
      "Sadrži kalcijum-oksid i vodu",
      "Zatvoreno pakovanje, odvojeno od hrane",
      "Menja se posle svakog obroka",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Prijava je poslata", {
        description: "Kontaktiraćemo te kada Žar Klik postane dostupan.",
      });
    }, 700);
  };

  return (
    <section id="prijava" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
            Cena i prijava interesovanja
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Posudu kupuješ jednom, a grejni dodatak menjaš po obroku. Prijava interesovanja nije
            kupovina.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-[2rem] border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  plan.featured ? "border-primary/45 bg-card" : "border-border bg-card/80"
                }`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 surface-warm p-6">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      <plan.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {plan.featured ? "Osnovni komplet" : "Dopuna"}
                    </span>
                    <h3 className="mt-3 truncate text-xl">{plan.name}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{plan.note}</p>
                  </div>
                  <img
                    src={plan.image}
                    alt={plan.alt}
                    loading="lazy"
                    className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                    {plan.price}
                    <span className="ml-2 align-middle text-base font-bold text-foreground/60">
                      {plan.unit}
                    </span>
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-8 rounded-[2.5rem] border border-primary/25 surface-warm p-6 shadow-soft sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <ShieldQuestion className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl">Prijavi interesovanje</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Ostavi kontakt i budi među prvima koji dobijaju informaciju kada Žar Klik postane
                dostupan. Bez obaveze kupovine.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Podatke koristimo isključivo za kontakt u vezi sa dostupnošću proizvoda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="ime">Ime i prezime</Label>
                <Input id="ime" name="ime" required autoComplete="name" placeholder="Marko Marković" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="marko@primer.rs"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefon">Telefon (opciono)</Label>
                <Input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+381 60 000 0000"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="profil">Kako bi koristio Žar Klik?</Label>
                <Select name="profil">
                  <SelectTrigger id="profil">
                    <SelectValue placeholder="Izaberi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vozac">Profesionalni vozač</SelectItem>
                    <SelectItem value="teren">Terenski rad</SelectItem>
                    <SelectItem value="putovanja">Putovanja i kampovanje</SelectItem>
                    <SelectItem value="posao">Radno mesto bez kuhinje</SelectItem>
                    <SelectItem value="drugo">Drugo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="poruka">Poruka (opciono)</Label>
                <Textarea
                  id="poruka"
                  name="poruka"
                  rows={3}
                  placeholder="Reci nam nešto o svojoj svakodnevici na putu."
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" disabled={submitting}>
                  {submitting ? "Šaljemo..." : "Pošalji prijavu"}
                  <Send />
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
