import { Camera } from "lucide-react";
import { GALLERY } from "@/lib/petcenter-content";
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
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {GALLERY.map((item, i) => (
            <figure
              key={item.src}
              className={
                "group relative overflow-hidden rounded-3xl border-4 border-card shadow-xl shadow-primary/10 " +
                (i % 2 === 1 ? "sm:mt-10" : "")
              }
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                width={600}
                height={600}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-card/90 px-4 py-2 text-sm font-bold text-foreground backdrop-blur">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
