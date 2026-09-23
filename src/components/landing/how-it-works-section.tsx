import { useCallback, useRef } from "react";
import { Sparkles } from "lucide-react";
import { STEPS } from "@/lib/petcenter-content";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { SectionHeading } from "./section-heading";

const WAVE_PATH = "M0 40 C 200 0, 400 0, 600 40 S 1000 80, 1200 40";

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<SVGPathElement>(null);

  // pathLength="1" normalises the path, so dashoffset 1 = empty, 0 = full.
  const handleProgress = useCallback((progress: number) => {
    fillRef.current?.style.setProperty("stroke-dashoffset", String(1 - progress));
  }, []);

  useScrollProgress(sectionRef, handleProgress);

  return (
    <section ref={sectionRef} id="como-funciona" className="bg-card px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Passo a passo"
          title="Como funciona o atendimento no G&G Pet Center"
          description="Rotina organizada para tornar cada visita tranquila e segura."
          icon={Sparkles}
        />

        <div className="relative mt-20">
          {/* Dashed wave connecting the steps, filled as the user scrolls (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-8 hidden h-20 w-full md:block"
          >
            <path
              d={WAVE_PATH}
              fill="none"
              className="stroke-input"
              strokeWidth="8"
              strokeDasharray="18 14"
            />
            <path
              ref={fillRef}
              d={WAVE_PATH}
              fill="none"
              pathLength={1}
              strokeDasharray="1 1"
              strokeDashoffset="1"
              strokeLinecap="round"
              strokeWidth="8"
              className="stroke-primary transition-[stroke-dashoffset] duration-200 ease-out motion-reduce:transition-none"
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
