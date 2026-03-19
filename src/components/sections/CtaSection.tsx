import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { CtaModule } from "@/types/home";

type CtaSectionProps = {
  data?: CtaModule;
};

export default function CtaSection({ data }: CtaSectionProps) {
  const title = data?.title || "Готово к интеграции с реальным макетом";
  const description =
    data?.description ||
    "Подключите точные значения из Figma Dev Mode и используйте текущую структуру как основу production-проекта.";
  const buttonLabel = data?.buttonLabel || "Обсудить реализацию";
  const buttonHref = data?.buttonHref || "#";

  return (
    <section className="pb-16 md:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="rounded-card bg-brand-600 p-6 text-white md:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl lg:max-w-3xl">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-brand-100">{description}</p>
            </div>
            <a
              href={buttonHref}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50 lg:mt-0"
            >
              {buttonLabel}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
