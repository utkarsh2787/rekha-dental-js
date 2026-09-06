import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BarChart3,
  CheckCircle,
  Circle,
  Database,
  Diamond,
  KeyRound,
  Layers,
  Link2,
  Lock,
  PenLine,
  Settings,
  Shield,
  Smile,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { privacyPolicyCards, termsOfServiceCards, type LegalCard } from "@/content/legal-pages";

const icons: Record<string, LucideIcon> = {
  activity: Activity,
  award: Award,
  chart: BarChart3,
  check: CheckCircle,
  circle: Circle,
  database: Database,
  diamond: Diamond,
  key: KeyRound,
  layers: Layers,
  link: Link2,
  lock: Lock,
  pen: PenLine,
  settings: Settings,
  shield: Shield,
  smile: Smile,
  star: Star,
  trend: TrendingUp,
  users: Users,
};

type LegalPageProps = {
  variant: "privacy" | "terms";
};

function LegalHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
      <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
    </div>
    <h1 className="legal-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
    <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{description}</p>
  </div>;
}

function LegalCardView({ card, index }: { card: LegalCard; index: number }) {
  const Icon = icons[card.icon] ?? Shield;
  return <article className="group relative overflow-hidden rounded-lg border border-[#E8DED0] bg-[#FCFAF6] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
    <div className="legal-font-header absolute right-6 top-5 text-4xl leading-none text-[#ECE4D8] transition duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">{String(index + 1).padStart(2, "0")}</div>
    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-2xl text-[#163828] transition-all duration-500 lg:h-12 lg:w-12"><Icon aria-hidden="true" className="h-[1em] w-[1em]" strokeWidth={2}/></div>
    <div className="relative z-10 mt-8">
      <h2 className="legal-font-header text-xl leading-tight text-[#2C2A27] lg:text-3xl">{card.title}</h2>
      <p className="mt-5 max-w-4xl text-sm leading-6 text-[#66625C] md:text-base lg:leading-8">{card.body}</p>
    </div>
    <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#EFE5D7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"/>
  </article>;
}

export function LegalPage({ variant }: LegalPageProps) {
  const privacy = variant === "privacy";
  const cards = privacy ? privacyPolicyCards : termsOfServiceCards;
  return <div className="legal-page flow-root bg-[#EAE4DB]">
    <section className="relative my-10 overflow-hidden">
      <LegalHeader
        eyebrow={privacy ? "Privacy Policy" : "Terms Of Service"}
        title={privacy ? "Your privacy matters to us." : "Designed with clarity, trust, and transparency."}
        description={privacy
          ? "We are committed to protecting your personal information and maintaining the trust you place in our clinic. This policy outlines how we collect, use, and safeguard your information."
          : "These terms outline the guidelines, responsibilities, and conditions associated with using our website and dental care services."}
      />
      {!privacy ? <div className="mx-auto mt-6 flex max-w-6xl justify-end px-6 lg:px-10">
        <a href="/images/terms-of-service-qr.png" download="rekha-dental-terms-qr.png" className="cursor-pointer bg-[#16412d] px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 active:scale-95 lg:px-5 lg:py-3 lg:text-sm">Download QR</a>
      </div> : null}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="my-10 grid gap-8 lg:my-14">
          {cards.map((card, index) => <LegalCardView key={card.title} card={card} index={index}/>)}
        </div>
      </div>
    </section>
  </div>;
}
