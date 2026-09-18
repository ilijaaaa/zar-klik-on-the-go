import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n/LanguageProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const t = useT();

  return (
    <section id="pitanja" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">{t.faq.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">{t.faq.lead}</p>
          </Reveal>

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((faq, i) => (
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
