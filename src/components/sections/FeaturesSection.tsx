import { Gauge, LayoutGrid, Sparkles } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { FeatureCard, FeaturesModule } from "@/types/home";

const defaultItems: FeatureCard[] = [
  {
    _key: "feature-1",
    title: "App Router архитектура",
    description:
      "Чистая структура проекта на Next.js с разделением UI по независимым секциям.",
    iconName: "LayoutGrid"
  },
  {
    _key: "feature-2",
    title: "Плавная адаптивность",
    description:
      "Компоненты масштабируются через clamp, fluid spacing и брейкпоинты без резких скачков.",
    iconName: "Gauge"
  },
  {
    _key: "feature-3",
    title: "Готовность к развитию",
    description:
      "Токены цвета и типографика вынесены в Tailwind конфиг для легких изменений.",
    iconName: "Sparkles"
  }
];

const iconMap = {
  LayoutGrid,
  Gauge,
  Sparkles
};

type FeaturesSectionProps = {
  data?: FeaturesModule;
};

export default function FeaturesSection({ data }: FeaturesSectionProps) {
  const sectionTitle = data?.title || "Ключевые преимущества";
  const sectionDescription =
    data?.description ||
    "Скелет проекта уже готов для интеграции контента из макета и последующего масштабирования.";
  const items = data?.cards?.length ? data.cards : defaultItems;

  return (
    <section className="pb-16 md:pb-20 lg:pb-24">
      <Container>
        <Reveal className="mb-8 min-w-0 space-y-3 md:mb-12">
          <h2 className="font-heading text-3xl font-bold text-ink-900 md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="max-w-2xl text-ink-500">{sectionDescription}</p>
        </Reveal>
        <div className="grid fluid-section-gap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Sparkles;

            return (
              <Reveal
                key={item._key || `${item.title}-${index}`}
                delay={0.08 * index}
                className="min-w-0"
              >
                <article className="h-full rounded-card border border-ink-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 md:p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-2 text-brand-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-500">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
