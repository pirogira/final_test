import { ArrowRight, PlayCircle } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { HeroModule } from "@/types/home";

type HeroSectionProps = {
  data?: HeroModule;
};

export default function HeroSection({ data }: HeroSectionProps) {
  const badge = data?.badge || "Next.js + Tailwind + TypeScript";
  const title = data?.title || "Современная адаптивная верстка под любой экран";
  const description =
    data?.description ||
    "Лэндинг построен по секциям, с резиновым масштабированием между mobile и desktop и удобной архитектурой для дальнейшего развития.";
  const primaryButtonLabel = data?.primaryButtonLabel || "Начать проект";
  const secondaryButtonLabel = data?.secondaryButtonLabel || "Смотреть демо";
  const primaryButtonHref = data?.primaryButtonHref || "#";
  const secondaryButtonHref = data?.secondaryButtonHref || "#";

  return (
    <section className="section-space overflow-hidden">
      <Container>
        <div className="grid items-center fluid-section-gap lg:grid-cols-2">
          <Reveal className="min-w-0 space-y-5 md:space-y-6">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              {badge}
            </span>
            <h1 className="fluid-title font-heading font-extrabold text-ink-900">
              {title}
            </h1>
            <p className="fluid-subtitle max-w-xl text-ink-500">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                {primaryButtonLabel}
                <ArrowRight size={18} />
              </a>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-100 bg-white px-5 py-3 text-sm font-semibold text-ink-700 transition hover:-translate-y-0.5 hover:border-brand-100 hover:text-brand-700"
              >
                <PlayCircle size={18} />
                {secondaryButtonLabel}
              </a>
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="min-w-0 rounded-card border border-ink-100 bg-white p-5 shadow-soft sm:p-7 md:p-8"
          >
            <div className="space-y-5">
              <div className="h-4 w-28 rounded bg-ink-100" />
              <div className="h-5 w-5/6 rounded bg-ink-100" />
              <div className="h-5 w-4/6 rounded bg-ink-100" />
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-50 p-4">
                  <p className="text-sm font-semibold text-brand-700">Desktop</p>
                  <p className="text-xs text-ink-500">1440px</p>
                </div>
                <div className="rounded-xl bg-accent-mint/15 p-4">
                  <p className="text-sm font-semibold text-ink-700">Mobile</p>
                  <p className="text-xs text-ink-500">375px</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
