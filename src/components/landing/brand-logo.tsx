import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  readonly className?: string;
  readonly textClassName?: string;
}

export function BrandLogo({ className, textClassName }: BrandLogoProps) {
  return (
    <a
      href="#"
      className={cn("flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
      aria-label="G&G Pet Center — voltar ao início"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
        <PawPrint className="size-5" aria-hidden="true" />
      </span>
      <span className={cn("font-display text-xl font-extrabold leading-none", textClassName)}>
        GG Pet Center
      </span>
    </a>
  );
}
