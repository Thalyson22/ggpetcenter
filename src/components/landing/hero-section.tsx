import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { HERO_IMAGE } from "@/lib/petcenter-content";
import { WhatsAppButton } from "./whatsapp-button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-accent px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      {/* Decorative blurred blobs */}
      <div aria-hidden="true" className="absolute -left-24 top-10 -z-10 size-96 rounded-full bg-secondary/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 right-0 -z-10 size-[28rem] rounded-full bg-sky/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
            <Sparkles className="size-3.5 text-sun-strong" aria-hidden="true" />
            Estética &amp; cuidado animal em Teresina
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            O cuidado mais{" "}
            <span className="rounded-2xl bg-secondary px-3">especial</span> que seu melhor amigo
            pode receber aqui
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Oferecemos estética animal completa, banhos relaxantes e atendimento veterinário
            humanizado em um espaço pensado para o bem-estar do seu pet.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg">Agendar Horário no WhatsApp</WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-input bg-card px-8 py-4 font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Conhecer Serviços
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground">
            <Heart className="size-4 text-primary" fill="currentColor" aria-hidden="true" />
            Ambiente climatizado, seguro e sem estresse para seu cão ou gato
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-700">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-secondary/80" />
          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-card shadow-2xl shadow-primary/20">
            <img
              src={HERO_IMAGE}
              alt="Cachorro beagle feliz, cliente do G&G Pet Center"
              width={800}
              height={800}
              fetchPriority="high"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
