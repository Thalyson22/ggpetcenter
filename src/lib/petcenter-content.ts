/**
 * Static content for the G&G Pet Center landing page.
 * Ported verbatim from github.com/Thalyson22/gg-petcenter (index.html).
 * Centralised here so text/links can be edited in one place.
 */
import type { LucideIcon } from "lucide-react";
import galeriaGato from "@/assets/galeria-gato.jpg";
import galeriaAtendimentoFelino from "@/assets/galeria-atendimento-felino.jpg";
import galeriaEsteticaCanina from "@/assets/galeria-estetica-canina.jpg";
import {
  Bath,
  CalendarCheck,
  HeartHandshake,
  Scissors,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=558622220175";
export const PHONE_TEL = "tel:+558622220175";
export const PHONE_LABEL = "(86) 3232-5000";
export const EMAIL = "contato@ggpetcenter.com.br";
export const INSTAGRAM_URL = "https://instagram.com/ggpetcenter";
export const ADDRESS = "Av. Pres. Kennedy, 1870 - São Cristóvão, Teresina";

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80";

export interface NavItem {
  readonly href: `#${string}`;
  readonly label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export type Tone = "sky" | "sun";

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: string;
  readonly icon: LucideIcon;
  readonly tone: Tone;
}

export const SERVICES: readonly Service[] = [
  {
    id: "banho-tosa",
    title: "Banho & Tosa Higiênica",
    description:
      "Higienização completa com produtos que protegem a pele e secagem confortável.",
    price: "R$ 60",
    icon: Bath,
    tone: "sky",
  },
  {
    id: "tosa-raca",
    title: "Tosa de Raça & Tesoura",
    description: "Corte que respeita o padrão da raça e realça a aparência do pet.",
    price: "R$ 90",
    icon: Scissors,
    tone: "sun",
  },
  {
    id: "spa",
    title: "Spa & Hidratação de Pelos",
    description:
      "Tratamento nutritivo para pelagem macia e brilhante com banho relaxante.",
    price: "R$ 140",
    icon: Sparkles,
    tone: "sky",
  },
  {
    id: "vet",
    title: "Consulta Veterinária",
    description: "Avaliação clínica com foco em prevenção e bem-estar do seu animal.",
    price: "R$ 220",
    icon: Stethoscope,
    tone: "sun",
  },
];

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Agendamento Prático",
    description: "Escolha o melhor dia e horário pelo nosso WhatsApp de forma rápida.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Recepção Carinhosa",
    description:
      "Recebemos seu pet com atenção e avaliamos comportamento antes do atendimento.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Experiência SPA",
    description: "Seu amigo recebe cuidados estéticos completos e volta limpo e renovado.",
    icon: Sparkles,
  },
];

export interface GalleryItem {
  readonly src: string;
  /** Short label shown over the photo on hover (always visible on touch). */
  readonly caption: string;
  /** Accessible description of the photo content. */
  readonly alt: string;
}

export const GALLERY: readonly GalleryItem[] = [
  {
    src: galeriaGato,
    caption: "Carinho Felino",
    alt: "Gato preto e branco de olhos verdes apoiado em uma mesa de madeira, fundo verde",
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=768&h=960&q=80",
    caption: "Estilo & Conforto",
    alt: "Buldogue francês vestindo camiseta amarela sobre fundo azul",
  },
  {
    src: galeriaAtendimentoFelino,
    caption: "Atendimento Felino",
    alt: "Gato cinza e branco sendo examinado com estetoscópio por uma veterinária",
  },
  {
    src: galeriaEsteticaCanina,
    caption: "Estética Canina",
    alt: "Cachorro branco com laço amarelo sendo escovado após a tosa",
  },
];

export interface Testimonial {
  readonly name: string;
  readonly quote: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  { name: "Marina Alves", quote: "O atendimento é excelente e meu cão sempre sai limpo e tranquilo." },
  {
    name: "Rafael Nunes",
    quote: "Profissionais atenciosos que cuidam da minha gatinha com muito respeito.",
  },
  {
    name: "Bianca Toledo",
    quote: "Superou expectativas no banho e tosa, com cuidado em cada detalhe.",
  },
];

export const RATING = { score: "4,9", summary: "4.5 (525 avaliações)" } as const;

export interface FooterLink {
  readonly href: string;
  readonly label: string;
}

export const FOOTER_INSTAGRAMS: readonly FooterLink[] = [
  { href: INSTAGRAM_URL, label: "@ggpetcenter" },
  { href: "https://www.instagram.com/petvitalle", label: "@petvitalle" },
];

export const FOOTER_WHATSAPPS: readonly (FooterLink & { tone: Tone })[] = [
  {
    href: "https://api.whatsapp.com/send/?phone=558622220176&type=phone_number&app_absent=0",
    label: "Pet Vitalle — Filial (WhatsApp)",
    tone: "sun",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=5586994777676&type=phone_number&app_absent=0",
    label: "Pet Vitalle — Matriz (WhatsApp)",
    tone: "sky",
  },
];
