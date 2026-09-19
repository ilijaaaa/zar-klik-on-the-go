import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/LanguageProvider";
//import exploded from "@/assets/exploded.png.asset.json";
import productBox from "@/assets/product-box.png";
//import cartridge from "@/assets/cartridge.png.asset.json";
import exploded from "@/assets/exploded.png";
import cartridge from "@/assets/cartridge.png";

export function ProductShowcase() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const galleryImages = [productBox, exploded/*.url*/, cartridge/*url*/];
  const gallery = t.showcase.gallery.map((item, itemIndex) => ({
    ...item,
    src: galleryImages[itemIndex] ?? productBox,
  }));
  const item = gallery[index] ?? gallery[0];

  const go = (dir: number) => setIndex((i) => (i + dir + gallery.length) % gallery.length);

  return (
    <section id="proizvod" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">{t.showcase.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">{t.showcase.lead}</p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border surface-warm p-6 shadow-soft sm:p-8">
              <img
                src={exploded/*.url*/}
                width={1400}
                height={1800}
                alt={t.showcase.explodedAlt}
                className="mx-auto max-h-[26rem] w-auto object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <ul className="flex flex-col gap-3">
              {t.showcase.parts.map((part, i) => (
                <Reveal as="li" key={part.title} delay={i * 70}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary/40">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary font-display text-xs font-extrabold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base">{part.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/75">{part.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-12 rounded-[2rem] border border-border bg-card p-4 shadow-soft sm:p-6">
            <div className="relative grid h-64 place-items-center overflow-hidden rounded-3xl surface-warm sm:h-80">
              {gallery.map((g, i) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={cn(
                    "absolute max-h-[85%] w-auto max-w-[85%] object-contain transition-all duration-500",
                    i === index ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
                  )}
                />
              ))}
            </div>

            <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
              <Button variant="outline" size="icon" aria-label={t.showcase.prev} onClick={() => go(-1)}>
                <ChevronLeft />
              </Button>
              <p className="min-w-0 truncate text-center text-sm font-medium text-foreground/75">
                {item?.caption}
              </p>
              <Button variant="outline" size="icon" aria-label={t.showcase.next} onClick={() => go(1)}>
                <ChevronRight />
              </Button>
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  aria-label={`${t.showcase.showImage} ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 cursor-pointer rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    i === index ? "w-7 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/60",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
