import type { ComponentProps } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/petcenter-content";

export interface WhatsAppButtonProps extends Omit<ComponentProps<"a">, "href"> {
  readonly size?: "sm" | "lg";
  readonly href?: string;
}

/** Yellow pill link that opens the G&G WhatsApp chat in a new tab. */
export function WhatsAppButton({
  size = "sm",
  href = WHATSAPP_URL,
  className,
  children,
  ...props
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-secondary font-bold text-secondary-foreground shadow-lg shadow-sun-strong/25 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        size === "sm" ? "px-5 py-2.5 text-sm" : "px-8 py-4 text-base",
        className,
      )}
      {...props}
    >
      <MessageCircle className={size === "sm" ? "size-4" : "size-5"} fill="currentColor" aria-hidden="true" />
      {children}
    </a>
  );
}
