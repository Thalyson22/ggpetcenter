import { Sparkles } from "lucide-react";
import { STEPS } from "@/lib/petcenter-content";
import { SectionHeading } from "./section-heading";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-card px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Passo a passo"
          title="Como funciona o atendimento no G&G Pet Center"
          description="Rotina organizada para tornar cada visita tranquila e segura."
          icon={Sparkles}
        />

        <div className="relative mt-20">
          {/* Dashed wave connecting the steps (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-8 hidden h-20 w-full text-input md:block"
          >
            <path
              d="M0 40 C 200 0, 400 0, 600 40 S 1000 80, 1200 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="18 14"
            />
          </svg>

          <ol className="relative grid grid-cols-1 gap-14 md:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="grid size-20 place-items-center rounded-full bg-secondary font-display text-2xl font-extrabold text-secondary-foreground shadow-lg shadow-sun-strong/25">
                      {step.number}
                    </span>
                    <span className="absolute -bottom-1 -right-1 grid size-8 place-items-center rounded-full border border-border bg-card text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
