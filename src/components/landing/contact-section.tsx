import type { ReactNode } from "react";
import { Clock, Instagram, HeartHandshake, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_URL,
  PHONE_LABEL,
  PHONE_TEL,
} from "@/lib/petcenter-content";
import { SectionHeading } from "./section-heading";
import { WhatsAppButton } from "./whatsapp-button";

interface InfoCardProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly tone: "sky" | "sun";
  readonly children: ReactNode;
}

function InfoCard({ icon: Icon, title, tone, children }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-lg shadow-primary/5">
      <span
        className={cn(
          "grid size-14 place-items-center rounded-2xl",
          tone === "sky" ? "bg-accent text-primary" : "bg-sun-soft text-sun-strong",
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold text-foreground">{title}</h3>
      <div className="mt-3 space-y-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

const linkClass = "inline-flex items-center gap-2 transition-colors hover:text-primary";

export function ContactSection() {
  return (
    <section id="contato" className="bg-accent px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Fale conosco"
          title="Visite-nos ou agende seu atendimento em Teresina"
          description="Estamos prontos para receber você e seu companheiro com conforto e atenção."
          icon={HeartHandshake}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <InfoCard icon={MapPin} title="Nosso Endereço" tone="sky">
            <address className="not-italic">{ADDRESS}</address>
          </InfoCard>
          <InfoCard icon={Clock} title="Horário de Funcionamento" tone="sun">
            <p>Segunda a sexta, 9h às 19h</p>
            <p>Sábado, 9h às 14h</p>
          </InfoCard>
          <InfoCard icon={Phone} title="Canais Diretos" tone="sky">
            <a href={PHONE_TEL} className={linkClass}>
              <Phone className="size-4" aria-hidden="true" /> {PHONE_LABEL}
            </a>
            <br />
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              <Mail className="size-4" aria-hidden="true" /> {EMAIL}
            </a>
            <br />
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Instagram className="size-4" aria-hidden="true" /> @ggpetcenter
            </a>
          </InfoCard>
        </div>

        <div className="mt-12 rounded-[2.5rem] bg-cta px-6 py-12 text-center shadow-xl shadow-primary/20">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold leading-tight text-cta-foreground md:text-4xl">
            Pronto para dar o melhor dia de SPA ao seu companheiro?
          </h2>
          <WhatsAppButton
            size="lg"
            className="mt-8 bg-card text-primary shadow-none"
          >
            Falar com a Equipe no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
