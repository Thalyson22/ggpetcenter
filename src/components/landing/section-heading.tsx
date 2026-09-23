import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
  readonly className?: string;
}

/** Centered eyebrow pill + display title + subtitle used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
        <Icon className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </div>
  );
}
