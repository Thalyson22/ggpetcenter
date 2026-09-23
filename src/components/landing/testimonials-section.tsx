import { MessageSquareQuote, Quote, Star } from "lucide-react";
import { RATING, TESTIMONIALS } from "@/lib/petcenter-content";
import { SectionHeading } from "./section-heading";

function Stars({ className }: { readonly className?: string }) {
  return (
    <div className={className} role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={`star-${i}`} className="size-4 text-star" fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-secondary px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Depoimentos reais"
          title="O que dizem os tutores de Teresina sobre nosso trabalho"
          description="Confiança e clareza refletidas na experiência de quem traz seu pet até nós."
          icon={MessageSquareQuote}
        />

        <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-card/60 bg-card p-8 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span className="font-display text-6xl font-extrabold leading-none text-foreground">
              {RATING.score}
            </span>
            <div>
              <Stars className="flex gap-1 [&_svg]:size-6" />
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                Avaliação média no Google
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted px-6 py-4 text-right">
            <p className="font-display text-lg font-bold text-foreground">{RATING.summary}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Clientes satisfeitos
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl border border-card/60 bg-card p-8 shadow-lg">
              <span className="grid size-12 place-items-center rounded-full bg-sun-soft text-sun-strong">
                <Quote className="size-5 rotate-180" fill="currentColor" aria-hidden="true" />
              </span>
              <blockquote className="mt-6 flex-1 leading-relaxed text-foreground">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="font-display text-lg font-bold text-foreground">{t.name}</span>
                <Stars className="flex gap-0.5" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
