import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ADDRESS,
  FOOTER_INSTAGRAMS,
  FOOTER_WHATSAPPS,
  NAV_ITEMS,
} from "@/lib/petcenter-content";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink px-4 pb-10 pt-16 text-ink-foreground md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo textClassName="text-ink-foreground" />

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap gap-3">
            {FOOTER_INSTAGRAMS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface px-4 py-2 text-sm font-bold transition-colors hover:bg-ink-border"
              >
                <Camera className="size-4" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {FOOTER_WHATSAPPS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5",
                  link.tone === "sun"
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-border pt-8 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>{ADDRESS}</p>
          <p>© {year} GG Pet Center. Todos os direitos reservados.</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none mt-6 select-none whitespace-nowrap text-center font-display text-[14vw] font-extrabold leading-none text-ink-surface"
      >
        G&amp;G PET CENTER
      </p>
    </footer>
  );
}
