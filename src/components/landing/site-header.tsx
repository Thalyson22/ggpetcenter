import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/petcenter-content";
import { BrandLogo } from "./brand-logo";
import { WhatsAppButton } from "./whatsapp-button";

/** Floating pill navbar with a collapsible menu on mobile. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
      <nav
        aria-label="Principal"
        className="mx-auto max-w-7xl rounded-[2rem] border border-border/60 bg-card/90 px-4 py-3 shadow-lg shadow-primary/10 backdrop-blur md:px-6"
      >
        <div className="flex items-center justify-between gap-4">
          <BrandLogo />
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="hidden lg:inline-flex">Falar no WhatsApp</WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-full bg-muted text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="mt-4 flex flex-col gap-1 border-t border-border pt-4 lg:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-semibold text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="mt-2">Falar no WhatsApp</WhatsAppButton>
          </div>
        )}
      </nav>
    </header>
  );
}
