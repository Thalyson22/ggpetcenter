import { Camera } from "lucide-react";
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
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-card/90 px-3 py-2 text-center text-xs font-bold text-foreground backdrop-blur transition-all duration-300 sm:text-sm md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
