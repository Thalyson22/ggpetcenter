import { Camera, Sparkles } from "lucide-react";
import { GALLERY } from "@/lib/petcenter-content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function GallerySection() {
  return (
    <section id="galeria" className="rounded-t-[3rem] bg-background px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galeria do GG"
          title="Momentos capturados na nossa rotina"
          description="Veja a alegria dos nossos clientes peludos após um dia de cuidados e carinho."
          icon={Camera}
        />
        {/* Reference layout: tall rounded photos with a thick light border,
            every second card pushed down to create a staggered rhythm. */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 pb-10 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {GALLERY.map((item, i) => (
            <figure
              key={item.src}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border-4 border-card bg-card shadow-xl shadow-primary/10 sm:border-8",
                i % 2 === 1 && "translate-y-8 sm:translate-y-12",
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={768}
                height={960}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
              {/* Same as the original page: dark gradient overlay (no pill),
                  outline sparkle icon + label. Always visible on touch screens,
                  revealed on hover from md upwards. */}
              <figcaption className="absolute inset-0 flex items-end rounded-[1.5rem] bg-gradient-to-t from-secondary-foreground/80 via-secondary-foreground/20 to-transparent p-4 transition-opacity duration-300 sm:p-6 md:opacity-0 md:group-hover:opacity-100">
                <span className="flex items-center gap-2 font-display text-sm font-bold text-card sm:text-lg">
                  <Sparkles
                    aria-hidden="true"
                    fill="none"
                    strokeWidth={2}
                    className="h-5 w-5 shrink-0 text-secondary drop-shadow-[0_0_6px_var(--color-secondary)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                  />
                  <span>{item.caption}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
