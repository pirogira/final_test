import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { ContentModule } from "@/types/home";

type ContentSectionProps = {
  data?: ContentModule;
};

export default function ContentSection({ data }: ContentSectionProps) {
  const title = data?.title || "Блок контента";
  const description =
    data?.description ||
    "Здесь можно разместить описание продукта, кейсы или любой другой контент из Figma. Разметка сделана модульно: секцию легко заменить или расширить без затрагивания остальных частей страницы.";
  const sideLabel = data?.sideLabel || "Design token preview";
  const sideDescription = data?.sideDescription || "Цвета из текущей темы проекта";

  return (
    <section className="pb-16 md:pb-20 lg:pb-24">
      <Container>
        <div className="grid fluid-section-gap lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="min-w-0">
            <article className="rounded-card border border-ink-100 bg-white p-5 shadow-soft md:p-8">
              <h2 className="font-heading text-2xl font-bold text-ink-900 md:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-ink-500">{description}</p>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0">
            <aside className="rounded-card bg-ink-900 p-5 text-white md:p-8">
              <p className="text-sm uppercase tracking-wider text-brand-100">
                {sideLabel}
              </p>
              <p className="mt-3 text-sm text-brand-100/90">{sideDescription}</p>
              <div className="mt-6 space-y-3">
                <div className="h-8 rounded bg-brand-500" />
                <div className="h-8 rounded bg-accent-mint" />
                <div className="h-8 rounded bg-accent-peach" />
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
