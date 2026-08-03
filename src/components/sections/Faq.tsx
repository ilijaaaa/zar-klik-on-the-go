import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kako Žar Klik zagreva hranu?",
    a: "Zagrevanje pokreće kontrolisana hemijska reakcija između kalcijum-oksida (CaO) i vode. Oslobođena toplota se prenosi na aluminijumsku posudu u kojoj se nalazi obrok, pa se hrana zagreva ravnomerno.",
  },
  {
    q: "Da li mu je potrebna struja?",
    a: "Ne. Žar Klik radi bez struje, utičnice i električne instalacije.",
  },
  {
    q: "Da li se koristi otvoreni plamen?",
    a: "Ne. Sistem ne koristi otvoreni plamen niti gorivo.",
  },
  {
    q: "Da li se posuda koristi više puta?",
    a: "Da. Posuda je namenjena višekratnoj upotrebi, dok se grejni dodatak menja.",
  },
  {
    q: "Koji deo se menja nakon korišćenja?",
    a: "Menja se jednokratni grejni dodatak koji sadrži CaO i vodu. Posuda, poklopac i aluminijumska posuda ostaju i koriste se dalje.",
  },
  {
    q: "Koju vrstu hrane mogu da zagrejem?",
    a: "Namenjen je obrocima koje sam pripremiš i poneseš — od čvrste hrane do jela sa više tečnosti. Tečna jela se zagrevaju brže jer se toplota raspoređuje i konvekcijom.",
  },
  {
    q: "Koliko traje zagrevanje i koju temperaturu dostiže obrok?",
    a: "Detalji će biti potvrđeni nakon završetka validacije i testiranja proizvoda.",
  },
  {
    q: "Da li je proizvod već dostupan za kupovinu?",
    a: "Žar Klik je trenutno u fazi validacije. Prijava interesovanja nije kupovina, već način da budeš među prvima kada proizvod postane dostupan.",
  },
  {
    q: "Kako mogu da se prijavim kao jedan od prvih korisnika?",
    a: "Popuni formu za prijavu interesovanja na ovoj stranici. Kontaktiraćemo te sa informacijama o dostupnosti i prvim serijama.",
  },
];

export function Faq() {
  return (
    <section id="pitanja" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">Česta pitanja</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Odgovori na pitanja koja najčešće dobijamo. Ono što još nije potvrđeno, ne obećavamo.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors last:border-b hover:border-primary/40"
                >
                  <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground/80">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
