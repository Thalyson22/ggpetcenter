import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, WHATSAPP_URL, type Service } from "@/lib/petcenter-content";
import { SectionHeading } from "./section-heading";

function ServiceCard({ service }: { readonly service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-lg shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15">
      <span
        className={cn(
          "grid size-16 place-items-center rounded-2xl",
          service.tone === "sky" ? "bg-accent text-primary" : "bg-sun-soft text-sun-strong",
        )}
      >
        <Icon className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-8 font-display text-xl font-bold text-foreground">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
        <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-extrabold text-secondary-foreground">
          {service.price}
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Agendar ${service.title} no WhatsApp`}
          className="grid size-9 place-items-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nossos cuidados"
          title="Serviços preparados com cuidado e atenção"
          description="Oferecemos estética e cuidados de saúde com equipe dedicada ao bem-estar animal."
          icon={Sparkles}
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
